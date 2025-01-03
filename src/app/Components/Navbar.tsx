"use client"
import Link from "next/link"
export default function Navbar() {
 
  return (
  <div>

    <nav className="w-full h-[55px] flex flex-row items-center justify-center gap-6 px-4 bg-[rgba(255,42,170,1)]">
        <ul className="flex text-poppins p-2 gap-6 items-center justify-between list-none">
      <li><Link href='/' className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Home</Link></li>
      <li><Link href='/Comprehension' className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Comprehenion</Link></li>
      <li><Link href='/Grammar' className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Grammar</Link></li>
      <li><Link href='/Creativewriting' className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Creative Writing</Link></li>
      </ul>
      </nav>
</div>
    )
  
}