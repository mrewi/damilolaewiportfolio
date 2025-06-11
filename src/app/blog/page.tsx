import { BLOG_POSTS } from '@/lib/constants';
import BlogCard from '@/components/blog/BlogCard';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // For filtering/sorting

export const metadata = {
  title: 'Blog - FullStackFolio',
  description: 'Read articles on web development, UI/UX design, and technology.',
};

export default function BlogPage() {
  // TODO: Implement filtering and sorting functionality
  // const [filterCategory, setFilterCategory] = useState('all');
  // const [sortOrder, setSortOrder] = useState('newest');

  // const filteredAndSortedPosts = BLOG_POSTS
  //   .filter(post => filterCategory === 'all' || post.category === filterCategory)
  //   .sort((a, b) => {
  //     if (sortOrder === 'newest') return new Date(b.date).getTime() - new Date(a.date).getTime();
  //     if (sortOrder === 'oldest') return new Date(a.date).getTime() - new Date(b.date).getTime();
  //     return 0;
  //   });
  
  const posts = BLOG_POSTS; // Using all posts for now

  return (
    <div className="py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold font-headline text-center mb-4">
        My <span className="text-primary">Blog</span>
      </h1>
      <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Insights, tutorials, and thoughts on web development, UI/UX design, and the tech world.
      </p>

      {/* Placeholder for Filters and Sorting - Future Enhancement 
      <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Select onValueChange={setFilterCategory} defaultValue="all">
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Next.js">Next.js</SelectItem>
            <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
            // Add other categories dynamically
          </SelectContent>
        </Select>
        <Select onValueChange={setSortOrder} defaultValue="newest">
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
          </SelectContent>
        </Select>
      </div>
      */}

      {posts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg">No blog posts yet. Stay tuned!</p>
      )}
    </div>
  );
}
