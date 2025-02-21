import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next 15</h1>
      <Link href={"/blog"}>Blog</Link>
    </div>
  );
}
