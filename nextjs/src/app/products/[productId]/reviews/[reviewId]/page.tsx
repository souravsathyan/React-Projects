import { redirect } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading  review");
  }

  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    redirect("/products");
  }

  return (
    <>
      <div>review Id : {reviewId}</div>
      <div>product Id : {productId}</div>
    </>
  );
}
