import Link from "next/link"
import Image from "next/image"

export default function Home({params}: {params:{product:string}}) {
  return (
    <>
    <h1>About</h1>
    <Link href={"/"}>Home</Link>
    <Image src="/vercel.svg" alt= "verxel image" height={100} width={100}/>
    <div>Product type is {params.product}</div>
    </>
  )
}
