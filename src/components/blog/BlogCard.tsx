import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, UserCircle, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <Link href={`/blog/${post.slug}`} className="block aspect-video relative w-full">
          <Image
            src={post.imageUrl}
            alt={post.title}
            data-ai-hint={post.imageHint}
            fill
            className="object-cover"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <Badge variant="outline" className="mb-2 text-primary border-primary">{post.category}</Badge>
        <CardTitle className="text-xl lg:text-2xl font-headline mb-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </CardTitle>
        <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
          <div className="flex items-center">
            <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <div className="flex items-center">
            <UserCircle className="mr-1.5 h-3.5 w-3.5" />
            {post.author}
          </div>
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 border-t">
        <Button variant="link" asChild className="px-0 text-primary hover:text-primary/80">
          <Link href={`/blog/${post.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
