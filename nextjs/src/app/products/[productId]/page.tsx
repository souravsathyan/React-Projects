import {Metadata} from 'next'

type Props ={
  params : Promise<{ productId: string }>
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> =>{
  const id = (await params).productId;
  const desc = await new Promise<string>((resolve)=>{
    setTimeout(()=>{
      resolve(`Details of product ${id}`)
    },1000)
  })
  return {
    title: `Product ${id}`,
    description:desc
  };
}

export default async function ProductDetails({
  params,
}: Props) {
  const prodId = await (await params).productId;
  return (
    <div>
      <h1>Product Details</h1>
      <h2>{prodId}</h2>
    </div>
  );
}
