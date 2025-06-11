
import type { Project, BlogPost, Skill } from '@/types';
import { Code2, Shapes, Braces, Server, PenTool, Database, Smartphone, Layers, BarChart3, Settings, Globe } from 'lucide-react';

const commonSkills: Record<string, Skill> = {
  nextjs: { name: 'Next.js', icon: Code2 },
  react: { name: 'React', icon: Shapes },
  js: { name: 'JavaScript', icon: Braces },
  ts: { name: 'TypeScript', icon: Braces },
  nodejs: { name: 'Node.js', icon: Server },
  figma: { name: 'Figma', icon: PenTool },
  tailwind: { name: 'Tailwind CSS', icon: Layers },
  mongodb: { name: 'MongoDB', icon: Database },
  postgresql: { name: 'PostgreSQL', icon: Database },
  docker: { name: 'Docker', icon: Settings },
  responsive: { name: 'Responsive Design', icon: Smartphone },
  uxui: { name: 'UI/UX Design', icon: PenTool },
  api: { name: 'API Development', icon: Globe },
  analytics: { name: 'Data Analytics', icon: BarChart3 },
};


export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Learno-MTU',
    description: 'A communication platform designed for educational institutions, enabling seamless interaction between students and teachers, similar to Discord but tailored for a school environment with features like class channels, assignment discussions, and secure file sharing.',
    imageUrl: '/images/image1.png',
    imageHint: 'school communication app', // Updated imageHint to better match the new description
    techStack: [commonSkills.nextjs, commonSkills.ts, commonSkills.nodejs, commonSkills.mongodb, commonSkills.tailwind],
    liveLink: 'http://learno-mtu.vercel.app',
    repoLink: 'https://github.com/mrewi/learno',
  },
  {
    id: 'project-2',
    title: 'MTU Sports Arena',
    description: 'A web application for sports updates.',
    imageUrl: '/images/image4.png', 
    imageHint: 'charts graphs',
    techStack: [commonSkills.react, commonSkills.ts, commonSkills.nodejs, commonSkills.nextjs, commonSkills.analytics, commonSkills.tailwind, commonSkills.mongodb],
    liveLink: 'https://www.mtusportsarena.com/',
    repoLink: 'https://github.com/mrewi/mtusportarena',
  },
  // {
  //   id: 'project-3',
  //   title: 'Mobile-First Social App',
  //   description: 'A social networking application designed with a mobile-first approach, focusing on user engagement and intuitive UI/UX.',
  //   imageUrl: '/images/project-social-app.png', 
  //   imageHint: 'mobile app',
  //   techStack: [commonSkills.react, commonSkills.js, commonSkills.figma, commonSkills.responsive, commonSkills.api],
  //   liveLink: '#',
  //   repoLink: '#',
  // },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'mastering-nextjs-14',
    title: 'Mastering Next.js 14: A Deep Dive into App Router',
    date: '2024-07-15',
    author: 'Your Name',
    excerpt: 'Explore the power of the Next.js App Router and how it revolutionizes web development with Server Components and more.',
    imageUrl: '/images/blog-nextjs14.png', 
    imageHint: 'code editor',
    category: 'Next.js',
    content: `
<p>The Next.js App Router, introduced in version 13 and refined in 14, represents a significant paradigm shift in how we build web applications with React. This post will guide you through its core concepts, benefits, and practical implementation details.</p>
<h2 class="text-2xl font-headline mt-6 mb-3">Key Features</h2>
<ul class="list-disc pl-6 space-y-2">
  <li><strong>Server Components:</strong> Reduce client-side JavaScript and improve performance by rendering components on the server.</li>
  <li><strong>Nested Layouts:</strong> Easily create complex UI structures with shared layouts across routes.</li>
  <li><strong>Route Groups:</strong> Organize your project structure without affecting URL paths.</li>
  <li><strong>Streaming & Suspense:</strong> Enhance user experience with incremental page rendering.</li>
</ul>
<h2 class="text-2xl font-headline mt-6 mb-3">Getting Started</h2>
<p>To use the App Router, ensure your Next.js project is version 13 or higher. The <code>app</code> directory is where all your new routes, layouts, and pages will reside.</p>
<pre><code class="font-code block whitespace-pre-wrap bg-muted p-4 rounded-md my-4">
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

// app/page.tsx
export default function HomePage() {
  return <h1>Welcome to the App Router!</h1>;
}
</code></pre>
<p>This is just the tip of the iceberg. The App Router offers powerful tools for data fetching, error handling, and internationalization, making Next.js an even more compelling choice for modern web development.</p>
    `,
    tags: ['Next.js', 'React', 'Web Development', 'JavaScript'],
  },
  {
    slug: 'ux-design-principles',
    title: 'Core Principles of Effective UI/UX Design',
    date: '2024-06-28',
    author: 'Your Name',
    excerpt: 'A comprehensive guide to the fundamental principles that drive successful user interface and user experience design.',
    imageUrl: '/images/blog-ux-design.png', 
    imageHint: 'design tools',
    category: 'UI/UX Design',
    content: `
<p>Effective UI/UX design is not just about aesthetics; it's about creating intuitive, efficient, and enjoyable experiences for users. This article explores some core principles that every designer should keep in mind.</p>
<h2 class="text-2xl font-headline mt-6 mb-3">1. User-Centered Design</h2>
<p>Always put the user first. Understand their needs, goals, and pain points. Conduct user research, create personas, and test your designs with real users.</p>
<h2 class="text-2xl font-headline mt-6 mb-3">2. Consistency</h2>
<p>Maintain consistency in design elements, navigation, and terminology throughout your product. This helps users learn and predict how things work.</p>
<h2 class="text-2xl font-headline mt-6 mb-3">3. Simplicity and Clarity</h2>
<p>Strive for simplicity. Avoid clutter and unnecessary complexity. Ensure that information is presented clearly and concisely.</p>
<h2 class="text-2xl font-headline mt-6 mb-3">4. Feedback</h2>
<p>Provide timely and clear feedback to users for their actions. This can be visual, auditory, or haptic, confirming that the system has received their input.</p>
<h2 class="text-2xl font-headline mt-6 mb-3">5. Accessibility</h2>
<p>Design for everyone. Ensure your product is usable by people with diverse abilities, following WCAG guidelines.</p>
<p>By adhering to these principles, you can create digital products that are not only visually appealing but also highly usable and valuable to your audience.</p>
    `,
    tags: ['UI/UX', 'Design Principles', 'Figma', 'User Experience'],
  },
];

export const SKILLS_LIST: Skill[] = [
  commonSkills.nextjs,
  commonSkills.react,
  commonSkills.js,
  commonSkills.ts,
  commonSkills.nodejs,
  commonSkills.figma,
  commonSkills.tailwind,
  commonSkills.mongodb,
  commonSkills.postgresql,
  commonSkills.docker,
  commonSkills.responsive,
  commonSkills.uxui,
  commonSkills.api,
];

export const ABOUT_ME_TEXT = `
<p class="text-lg mb-4">Hello! I'm a passionate Full-Stack Web Developer and UI/UX Designer dedicated to crafting exceptional digital experiences. With a strong foundation in modern web technologies and a keen eye for design, I transform complex problems into elegant, user-friendly solutions.</p>
<p class="text-lg mb-4">My journey in tech began with a fascination for how websites and applications could seamlessly blend functionality with aesthetics. This curiosity led me to master both front-end and back-end development, allowing me to build comprehensive and robust systems from the ground up.</p>
<p class="text-lg mb-4">I thrive in collaborative environments and am always eager to learn and adapt to new challenges. Whether it's architecting a scalable backend, designing an intuitive user interface, or optimizing for performance, I bring dedication and precision to every project.</p>
<p class="text-lg">Let's build something amazing together!</p>
`;

