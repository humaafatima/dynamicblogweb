"use client"
import Link from "next/link"
import Navbar from "@/app/Components/Navbar"

export default function Comprehenion() {
    return  ( 
        
        <div className="w-screen min-h-screen bg-black overflow-x-hidden">
            <Navbar/>
     <h1 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Creative Writing: Express Yourself</h1>
<p className="text-poppins text-1xl text-white p-8">


Creative writing allows you to explore your imagination and articulate your thoughts in unique and engaging ways. 
<br/>
From storytelling to poetry, its a skill that can be cultivated with practice and passion.
<br/>
</p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Elements of Creative Writing</h2>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Plot Development:</h2>

<p className="text-poppins text-1xl text-white p-8">Structuring a compelling beginning, middle, and end.

Creating suspense and resolving conflicts effectively.

<br/>
</p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Characterization:</h2>

<p className="text-poppins text-1xl text-white p-8">Building relatable and dynamic characters.
<br/>
Using dialogue to reveal personality.
<br/>
</p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Imagery and Style:</h2>

<p className="text-poppins text-1xl text-white p-8">Employing metaphors, similes, and descriptive language.
<br/>
Developing a unique voice and tone.
</p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">How to Practice</h2>

<p className="text-poppins text-1xl text-white p-8">Writing Prompts: Start with prompts like Describe a day when everything went wrong or Imagine a world without gravity.
<br/>
Peer Feedback: Share your work with friends or join a writing group.
<br/>
</p>
<div className="flex flex-row p-8 ml-6 mt-4 mb-4">
    <button>
<Link href='/' className="rounded-sm w-[145px] h-[55px] bg-[rgba(255,42,170,1)] px-2 py-2 text-sm font-medium text-white" aria-current="page">Back to Home Page</Link>
</button>
</div>
</div>
    )
}