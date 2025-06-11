import { BLOG_POSTS } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, UserCircle, Tag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: `${post.title} - FullStackFolio Blog`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">Sorry, the blog post you are looking for does not exist.</p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto py-12 md:py-16">
      <div className="mb-8">
        <Button variant="outline" size="sm" asChild className="mb-6">
          <Link href="/blog">
             <ArrowLeft className="mr-2 h-4 w-4" />
             Back to Blog
          </Link>
        </Button>
        <Badge variant="secondary" className="mb-2 text-accent border-accent">{post.category}</Badge>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline mb-4">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6">
          <div className="flex items-center">
            <CalendarDays className="mr-1.5 h-4 w-4" />
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <div className="flex items-center">
            <UserCircle className="mr-1.5 h-4 w-4" />
            By {post.author}
          </div>
        </div>
      </div>

      <div className="aspect-video relative w-full rounded-lg overflow-hidden mb-8 shadow-lg">
        <Image
          src={post.imageUrl}
          alt={post.title}
          data-ai-hint={post.imageHint}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div
        className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-code:font-code prose-code:bg-muted prose-code:p-0.5 prose-code:rounded"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {post.tags && post.tags.length > 0 && (
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <Tag className="mr-2 h-5 w-5 text-primary" />
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
