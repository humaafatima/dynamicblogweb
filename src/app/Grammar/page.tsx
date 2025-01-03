"use client"
import Navbar from "@/app/Components/Navbar"
import Link from "next/link"

export default function Grammar() {
    return  (
        <div className="w-screen min-h-screen bg-black overflow-x-hidden">
            <Navbar/>
     <h1 className="font-bold text-center text-4xl text-[rgba(255,42,170,1)] p-8">Grammar: The Backbone of English</h1>
<p className="text-1xl text-center text-white p-8">


Grammar is the backbone of any language. It provides the rules and structure that 
<br/>
enable us to communicate ideas effectively and understand one another.
<br/>
 Learning grammar is essential for developing strong writing, reading, and speaking skills.
 <br/>
  At the heart of grammar lies the concept of parts of speech, which categorize 
  <br/>
  words based on their roles and functions in sentences.
  <br/>
  </p>
  <h2 className="font-bold text-center text-4xl text-[rgba(255,42,170,1)] p-8">The Parts of Speech</h2>
<p className="text-1xl text-center text-white p-5">The eight primary parts of speech are the building blocks of grammar. 
    <br/>
    
    Each part of speech serves a specific purpose in a sentence.
    </p>

<div className="flex flex-row justify-center items-center p-4 ml-8 mb-4">
    <button>
<Link href='/Grammar/Partsofspeech' className="rounded-md w-[145px] h-[55px] bg-[rgba(255,42,170,1)] px-3 py-2 text-sm font-medium text-white" aria-current="page">Parts of speech</Link>
</button>
</div>
</div>
    )
}