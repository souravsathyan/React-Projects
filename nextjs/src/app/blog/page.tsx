export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 2000);
  });
  return <h1>Blog</h1>;
}
