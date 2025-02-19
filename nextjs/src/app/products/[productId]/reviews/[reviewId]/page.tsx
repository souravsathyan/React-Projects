import { notFound } from "next/navigation";

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  if(parseInt(reviewId)>1000){
    notFound()
  }

  return (
    <>
      <div>review Id : {reviewId}</div>
      <div>product Id : {productId}</div>
    </>
  );
}
