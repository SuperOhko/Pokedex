import Link from 'next/link';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>À propos</p>

      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/about/credits">Credits</Link>
      </div>
    </main>
  );
}
