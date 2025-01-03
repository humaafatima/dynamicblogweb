"use client"
import Link from "next/link"
import Navbar from "@/app/Components/Navbar"
import Image from "next/image"
import comp2 from "@/app/assets/comp2.jpg"

export default function Comprehenion() {
    return  ( 
     <div className="w-screen min-h-screen bg-black overflow-x-hidden">
               <Navbar/>
     <h1 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Comprehension Skills: Unlocking the Meaning</h1>
     <div>
     <Image src={comp2} alt="comprehension1" width={450} height={350} className="width-250px height-250px p-2 ml-8"></Image>
     </div>
     <br/>
        <p className="text-1xl text-left text-white p-8">

Comprehension is the foundation of effective communication. 
<br/>
It allows you to grasp the meaning behind words, sentences, and entire texts. 
<br/>
Developing strong comprehension skills is crucial for academic success and everyday interactions.
<br/>
</p>
<h1 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">
    Importance of Comprehension
</h1>
<p className="text-1xl text-left text-white p-8">Comprehension builds your critical and analytical thinking and enhances your language and cultutal understanding in following ways:</p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Academic Success:</h2>
<p className="text-1xl text-left text-white p-8">
Comprehension allows students to understand texts, instructions, and concepts 
<br/>
across subjects, including math, science, and social studies.
<br/>
Strong reading comprehension skills are linked to better performance 
<br/>
in standardized tests and overall academic achievement.
</p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Critical Thinking:</h2>
<p className="text-1xl text-left text-white p-8">It helps students analyze, interpret, and evaluate information, 
    <br/>
    fostering critical thinking skills necessary for 
    <br/>
    problem solving and decision-making.
    </p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Language Development:</h2>
<p className="text-1xl text-left text-white p-8">Enhances vocabulary, grammar, and language structure 
<br/>
by exposing students to diverse texts.</p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Communication Skills:</h2>
<p className="text-bold text-1xl text-left text-white p-8">
Good comprehension enables students to express their 
<br/>
thoughts clearly in both written and spoken forms.
</p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Empathy and Cultural Awareness:</h2>
<p className="text-bold text-1xl text-left text-white p-8">
Reading and understanding diverse texts can help students 
<br/>
appreciate different perspectives and develop empathy.
</p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Foundation for Lifelong Learning:</h2>
<p className="text-1xl text-left text-white p-8">
Comprehension skills support independent learning and the 
<br/>
ability to acquire new knowledge effectively, 
<br/>
preparing students for higher education and careers.
</p>
<p className="font-bold text-1xl text-poppins text-white p-8">
For teaching comprehension, students must be distinguished according to class level:
<br/> 
<Link href='/Comprehension/Teachingmethods' className="px-3 py-2 text-sm font-medium text-white" aria-current="page">1. Primary Students</Link>
<br/>
<Link href='/Comprehension/Teachingmethods' className="px-3 py-2 text-sm font-medium text-white" aria-current="page">1. Secondary Students</Link>

</p>
<div>
</div>
<div className="flex flex-row p-4 gap-6">
    <button>
   <Link href='/Comprehension/Teachingmethods' className="rounded-md w-[155px] h-[50px] bg-[rgba(255,42,170,1)] px-3 py-2 text-sm font-medium text-white" aria-current="page">How Comprehension Should Be Taught</Link>
   </button>
<div className="flex flex-row">
    <button>
<Link href='/' className="rounded-md w-[155px] h-[50px] bg-[rgba(255,42,170,1)] px-3 py-2 text-sm font-medium text-white" aria-current="page">Back to Home Page</Link>
</button>
</div>
        </div>
        </div>
    )
}