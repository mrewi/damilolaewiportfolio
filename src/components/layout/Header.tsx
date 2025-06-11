import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Briefcase, Home, Rss, UserCircle, Send } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/#projects', label: 'Projects', icon: Briefcase },
  { href: '/#about', label: 'About', icon: UserCircle },
  { href: '/blog', label: 'Blog', icon: Rss },
  { href: '/#contact', label: 'Contact', icon: Send },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold font-headline text-primary hover:text-primary/80 transition-colors">
          FullStackFolio
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild>
              <Link href={item.href} className="text-foreground hover:text-primary transition-colors">
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Button key={item.label} variant="ghost" className="justify-start" asChild>
                    <Link href={item.href} className="flex items-center space-x-2 text-lg">
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
