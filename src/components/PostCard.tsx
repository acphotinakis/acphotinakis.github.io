import { Link } from 'react-router-dom';
import type { BlogPost } from '@/data/blogPosts';

interface PostCardProps {
  post: BlogPost;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="block border border-border p-6 group transition-opacity duration-200 hover:opacity-100 opacity-90"
    >
      <span className="font-mono text-xs uppercase tracking-widest text-primary">
        {post.category}
      </span>

      <h2 className="font-mono font-bold text-lg mt-2 mb-3 text-foreground group-hover:text-primary transition-colors duration-200 leading-tight">
        {post.title}
      </h2>

      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
        {post.excerpt}
      </p>

      <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
        <time>{post.publishedDate}</time>
        <span className="text-border">|</span>
        <span>{post.readTime}</span>
      </div>
    </Link>
  );
};

export default PostCard;
