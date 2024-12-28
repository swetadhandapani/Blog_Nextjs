//server component//
export const metadata = {
  title:"About Us Page",
  description:"You can Learn About this Page"
}
export default function About() {

  return (
    <main className="container mx-auto px-4 py-6">
      <h2 className="text-4xl font-bold mb-4">About Us</h2>
      <p>
      Next.js is a powerful React framework designed for building optimized, server-rendered web applications. It supports static site generation, dynamic routing, API routes, and automatic code splitting. With built-in performance optimizations and scalability, it's widely used for modern, production-ready web development.
      </p>
    </main>
  );
}
