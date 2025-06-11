export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t py-8 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {currentYear} FullStackFolio. All rights reserved.</p>
        <p className="text-sm mt-1">Designed with passion and coded with Next.js.</p>
      </div>
    </footer>
  );
}
