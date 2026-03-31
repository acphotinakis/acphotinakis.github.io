import { cn } from "@/lib/utils";
import { categories } from "@/data/blogPosts";

interface FilterBarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterBar = ({ activeCategory, onCategoryChange }: FilterBarProps) => {
  return (
    <nav className="border-b border-border py-4 mb-8">
      <ul className="flex flex-wrap gap-6 font-mono text-sm">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => onCategoryChange(cat)}
              className={cn(
                "pb-1 transition-colors duration-200 tracking-wide uppercase text-xs",
                activeCategory === cat
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FilterBar;
