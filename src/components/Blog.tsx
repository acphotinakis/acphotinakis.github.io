import { useState } from 'react';
import { blogPosts } from '@/data/blogPosts';
import FilterBar from '@/components/FilterBar';
import PostCard from '@/components/PostCard';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            HOME
          </Link>
          <h1 className="font-mono font-bold text-3xl md:text-4xl text-foreground tracking-tight">
            Archives
          </h1>
          <p className="font-mono text-sm text-muted-foreground mt-2">
            {blogPosts.length} posts on engineering, finance, and systems
          </p>
        </div>

        <FilterBar
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {filtered.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 font-mono text-muted-foreground text-sm">
            No posts in this category yet.
          </div>
        )}
      </div>
    </div>
  );
}
