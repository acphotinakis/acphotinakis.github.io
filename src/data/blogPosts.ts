export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  publishedDate: string;
  readTime: string;
  heroImage: string;
  excerpt: string;
  content: string;
}

export const categories = ["All", "AI/ML", "Quant Finance", "Distributed Systems", "Engineering"];

export const blogPosts: BlogPost[] = [
  {
    id: "01",
    title: "Optimizing Low-Latency Order Books",
    slug: "low-latency-order-books",
    category: "Quant Finance",
    publishedDate: "2025-10-24",
    readTime: "8 min",
    heroImage: "order-book",
    excerpt: "An exploration into memory-mapped files and lock-free data structures for building ultra-fast matching engines in C++.",
    content: `# Optimizing Low-Latency Order Books

In the world of high-frequency trading, every nanosecond counts. The order book is the central data structure that powers modern exchanges, and its performance characteristics directly impact trading outcomes.

## The Problem Space

Traditional order book implementations rely on standard library containers like \`std::map\` or \`std::unordered_map\`. While these provide acceptable performance for most applications, they fall short in HFT environments where we need sub-microsecond operations.

\`\`\`cpp
// A naive order book implementation
class OrderBook {
    std::map<Price, Level> bids;
    std::map<Price, Level> asks;
    
    void addOrder(const Order& order) {
        auto& side = order.side == Side::BUY ? bids : asks;
        side[order.price].addOrder(order);
    }
};
\`\`\`

## Lock-Free Approaches

The key insight is that we can use lock-free data structures to eliminate contention between threads. By leveraging atomic operations and careful memory ordering, we achieve significant throughput improvements.

\`\`\`cpp
// Lock-free level update using CAS
template<typename T>
class LockFreeLevel {
    std::atomic<T> quantity{0};
    
    void update(T delta) {
        T expected = quantity.load(std::memory_order_relaxed);
        while (!quantity.compare_exchange_weak(
            expected, expected + delta,
            std::memory_order_release,
            std::memory_order_relaxed
        ));
    }
};
\`\`\`

## Memory-Mapped Files

For persistence without sacrificing speed, memory-mapped files provide a zero-copy path between disk and memory. The operating system handles page management transparently.

> "The fastest I/O is the I/O you don't do." — Every systems programmer ever

## Benchmark Results

Our optimized implementation achieves:

- **Insert**: 120ns median latency (99th percentile: 450ns)
- **Cancel**: 85ns median latency (99th percentile: 320ns)  
- **Match**: 200ns median latency (99th percentile: 780ns)

These numbers represent a 10x improvement over the naive implementation.`
  },
  {
    id: "02",
    title: "Building a Distributed Training Pipeline",
    slug: "distributed-training-pipeline",
    category: "AI/ML",
    publishedDate: "2025-09-15",
    readTime: "12 min",
    heroImage: "neural-net",
    excerpt: "How we scaled model training from a single GPU to a 64-node cluster using PyTorch DDP and custom gradient compression.",
    content: `# Building a Distributed Training Pipeline

Scaling deep learning training across multiple nodes is one of the most impactful engineering challenges in modern ML infrastructure.

## Data Parallelism with PyTorch DDP

PyTorch's DistributedDataParallel (DDP) provides a straightforward API for multi-GPU training. The key is understanding the all-reduce communication pattern.

\`\`\`python
import torch.distributed as dist
from torch.nn.parallel import DistributedDataParallel as DDP

def setup(rank, world_size):
    dist.init_process_group("nccl", rank=rank, world_size=world_size)
    
model = DDP(model.to(rank), device_ids=[rank])
\`\`\`

## Gradient Compression

Network bandwidth becomes the bottleneck at scale. We implemented a custom gradient compression scheme that reduces communication overhead by 90%.

\`\`\`python
class TopKCompressor:
    def __init__(self, ratio=0.01):
        self.ratio = ratio
    
    def compress(self, tensor):
        k = max(1, int(tensor.numel() * self.ratio))
        values, indices = tensor.abs().topk(k)
        return tensor[indices], indices
\`\`\`

## Results

Training a 7B parameter model:

- **Single GPU**: 14 days
- **8 GPUs (1 node)**: 42 hours
- **64 GPUs (8 nodes)**: 6.5 hours

Linear scaling efficiency of 87% at 64 GPUs.`
  },
  {
    id: "03",
    title: "Raft Consensus in Production",
    slug: "raft-consensus-production",
    category: "Distributed Systems",
    publishedDate: "2025-08-02",
    readTime: "10 min",
    heroImage: "consensus",
    excerpt: "Lessons learned from implementing and deploying the Raft consensus algorithm in a financial-grade distributed database.",
    content: `# Raft Consensus in Production

After two years running Raft in production for a financial-grade distributed database, here are the hard-won lessons.

## Leader Election Tuning

The default election timeout in most Raft implementations is too aggressive for production. Network jitter can cause unnecessary leader elections.

\`\`\`go
config := &raft.Config{
    HeartbeatTimeout:   150 * time.Millisecond,
    ElectionTimeout:    1000 * time.Millisecond,
    LeaderLeaseTimeout: 500 * time.Millisecond,
    CommitTimeout:      50 * time.Millisecond,
}
\`\`\`

## Log Compaction

Without proper log compaction, your Raft log will grow unbounded. We implement periodic snapshots with a custom serialization format.

\`\`\`go
func (fsm *FSM) Snapshot() (raft.FSMSnapshot, error) {
    state := fsm.state.Clone()
    return &snapshot{state: state}, nil
}
\`\`\`

## The Split-Brain Problem

Despite Raft's guarantees, we encountered a split-brain scenario caused by asymmetric network partitions. The solution involved implementing a witness node pattern.

> A distributed system is one where the failure of a computer you didn't even know existed can render your own computer unusable. — Leslie Lamport`
  },
  {
    id: "04",
    title: "Real-Time Feature Stores at Scale",
    slug: "realtime-feature-stores",
    category: "AI/ML",
    publishedDate: "2025-07-18",
    readTime: "7 min",
    heroImage: "feature-store",
    excerpt: "Designing a feature store that serves 2M+ feature vectors per second with P99 latency under 5ms.",
    content: `# Real-Time Feature Stores at Scale

Feature stores bridge the gap between offline model training and online inference. Getting this right is critical for ML systems that need real-time predictions.

## Architecture

Our feature store uses a two-tier architecture:

1. **Online Store**: Redis Cluster for sub-millisecond reads
2. **Offline Store**: Apache Parquet on S3 for training

\`\`\`python
class FeatureStore:
    def __init__(self):
        self.online = RedisCluster(startup_nodes=REDIS_NODES)
        self.offline = ParquetStore(bucket="features")
    
    async def get_features(self, entity_id: str, features: list[str]):
        key = f"features:{entity_id}"
        return await self.online.hmget(key, *features)
\`\`\`

## Consistency Guarantees

We use a change-data-capture pipeline to keep the online store synchronized with the source of truth. The maximum staleness is bounded at 30 seconds.

## Performance

- **Throughput**: 2.1M feature vectors/second
- **P50 Latency**: 0.8ms
- **P99 Latency**: 4.2ms
- **Availability**: 99.99%`
  },
  {
    id: "05",
    title: "Zero-Copy Networking with io_uring",
    slug: "zero-copy-io-uring",
    category: "Engineering",
    publishedDate: "2025-06-05",
    readTime: "9 min",
    heroImage: "io-uring",
    excerpt: "Pushing Linux networking to its limits with io_uring's zero-copy send and registered buffers for maximum throughput.",
    content: `# Zero-Copy Networking with io_uring

Linux's io_uring interface represents a paradigm shift in how we think about I/O. By batching system calls and enabling zero-copy operations, we can achieve near-wire-speed networking.

## The Submission Queue

\`\`\`c
struct io_uring ring;
io_uring_queue_init(256, &ring, 0);

struct io_uring_sqe *sqe = io_uring_get_sqe(&ring);
io_uring_prep_send_zc(sqe, sockfd, buf, len, 0, 0);
io_uring_sqe_set_data(sqe, user_data);
io_uring_submit(&ring);
\`\`\`

## Registered Buffers

Pre-registering buffers eliminates the kernel's need to map/unmap memory on each I/O operation.

\`\`\`c
struct iovec iovecs[NUM_BUFFERS];
for (int i = 0; i < NUM_BUFFERS; i++) {
    iovecs[i].iov_base = aligned_alloc(4096, BUF_SIZE);
    iovecs[i].iov_len = BUF_SIZE;
}
io_uring_register_buffers(&ring, iovecs, NUM_BUFFERS);
\`\`\`

## Benchmarks

Compared to traditional epoll + send():

- **Throughput**: 92 Gbps vs 68 Gbps (35% improvement)
- **CPU Usage**: 40% lower
- **Syscalls**: 95% fewer`
  },
  {
    id: "06",
    title: "Monte Carlo Methods for Options Pricing",
    slug: "monte-carlo-options-pricing",
    category: "Quant Finance",
    publishedDate: "2025-05-12",
    readTime: "11 min",
    heroImage: "monte-carlo",
    excerpt: "Implementing GPU-accelerated Monte Carlo simulations for exotic options pricing using CUDA and variance reduction techniques.",
    content: `# Monte Carlo Methods for Options Pricing

For exotic derivatives where closed-form solutions don't exist, Monte Carlo simulation remains the gold standard pricing method.

## The Basic Framework

\`\`\`python
import numpy as np

def monte_carlo_european(S0, K, T, r, sigma, n_sims=1_000_000):
    Z = np.random.standard_normal(n_sims)
    ST = S0 * np.exp((r - 0.5 * sigma**2) * T + sigma * np.sqrt(T) * Z)
    payoffs = np.maximum(ST - K, 0)
    return np.exp(-r * T) * np.mean(payoffs)
\`\`\`

## Variance Reduction

Antithetic variates cut our variance in half with minimal computational overhead.

\`\`\`python
def antithetic_mc(S0, K, T, r, sigma, n_sims=500_000):
    Z = np.random.standard_normal(n_sims)
    ST_pos = S0 * np.exp((r - 0.5*sigma**2)*T + sigma*np.sqrt(T)*Z)
    ST_neg = S0 * np.exp((r - 0.5*sigma**2)*T - sigma*np.sqrt(T)*Z)
    payoffs = 0.5 * (np.maximum(ST_pos-K,0) + np.maximum(ST_neg-K,0))
    return np.exp(-r * T) * np.mean(payoffs)
\`\`\`

## GPU Acceleration

Moving to CUDA provides a 50x speedup, enabling real-time pricing of complex multi-asset derivatives.

> In quantitative finance, the difference between theory and practice is larger in practice than in theory.`
  }
];
