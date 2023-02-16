import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
    <h1>About</h1>
    <Link href={"/"}>Home</Link>
    <Image src="/vercel.svg" alt= "verxel image" height={100} width={100}/>
    </>
  )
}
