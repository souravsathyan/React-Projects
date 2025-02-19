export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const prodId = await (await params).productId;
  return (
    <div>
      <h1>Product Details</h1>
      <h2>{prodId}</h2>
    </div>
  );
}
