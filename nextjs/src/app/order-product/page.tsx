"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct(){
    const router = useRouter();
    return (
        <div>
            <h1>Order Product page</h1>
            <button onClick={()=>{
                router.push("/")
            }}>Place Order</button>
        </div>
    )
}