import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next 15</h1>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/article/news-dynamic-route-params-123?lang=en"}>Read in Article in Engilsh</Link>
    </div>
  );
}
