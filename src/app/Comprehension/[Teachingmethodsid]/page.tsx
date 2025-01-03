"use client"
import Link from "next/link"
import Navbar from "@/app/Components/Navbar"


export default function Comp(){
    
    return  ( 
     <div className="w-screen min-h-screen bg-black overflow-x-hidden">
               <Navbar/>
               <h1 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8"> How Comprehension Should Be Taught  </h1>


<p className="text-1xl text-left text-white p-8">Effective teaching strategies for comprehension involve engaging 
<br/>
students of different levels with texts and fostering their understanding through diverse methods. 
<br/>
Distinguish students according to class level:
<br/>
1. Primary Students
<br/>
2. Secondary Students
</p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Early Foundations (Primary Students):</h2>

<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Phonics and Word Recognition:</h2>
 <p className="text-1xl text-left text-white p-8">
    Teach students how to decode words, as this is the foundation of comprehension.
</p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Interactive Read-Alouds: </h2>
<p className="text-1xl text-left text-white p-8">
Read stories aloud and discuss characters, settings, and plots to build understanding.
</p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Visualization:</h2> 
<p className="text-1xl text-left text-white p-8">Encourage students to imagine scenes, characters, or events while reading.
    </p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Questioning: </h2>
<p className="text-1xl text-left text-white p-8">
Ask open ended questions like “What do you think will happen next?” 
<br/>
to promote engagement and prediction skills.
</p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Sequencing Activities:</h2>

<p className="text-1xl text-left text-white p-8">Use storyboards or charts to help students identify the 
    <br/>
    beginning, middle, and end of a story.
    </p>
    <h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Building Analytical Skills (Secondary Students):</h2>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Annotation:</h2> 
<p className="text-1xl text-left text-white p-8">Teach students to underline key points, highlight unfamiliar words, and
    <br/> 
    write marginal notes while reading.
    </p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Summarization:</h2> 
<p className="text-1xl text-left text-white p-8">Practice summarizing paragraphs or chapters to identify main ideas 
<br/>
and supporting details.
</p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Critical Analysis:</h2> 
<p className="text-1xl text-left text-white p-8">Discuss themes, author intentions, and literary techniques used in texts.
</p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Inference:</h2> 
<p className="text-1xl text-left text-white p-8">Encourage students to read between the lines and deduce meanings 
    <br/>
    not explicitly stated.
    </p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Discussion and Debate:</h2> 
<p className="text-1xl text-left text-white p-8">Facilitate group discussions to explore different 
<br/>
interpretations of texts.
</p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Use of Diverse Texts:</h2>
<p className="text-1xl text-left text-white p-8">Expose students to a variety of genres (fiction, non fiction, poetry, informational texts) 
    <br/>
    to broaden their understanding and interests.
    </p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Scaffold Learning:</h2>
<p className="text-1xl text-left text-white p-8">Provide support through guided reading sessions and gradually 
    <br/>encourage independent comprehension tasks.
    </p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Incorporating Technology:</h2>
<p className="text-1xl text-left text-white p-8">Use educational apps and digital tools to provide interactive comprehension 
    <br/>
    exercises and gamified learning experiences.
    </p>
<h2 className="font-bold text-4xl text-poppins text-[rgba(255,42,170,1)] p-8">Relating to Real-Life Contexts:</h2>
<p className="text-1xl text-left text-white p-8">Connect texts to students experiences, current events, or relatable 
    <br/>
    scenarios to make comprehension more meaningful.
    </p>
    <div className="flex flex-row p-4 ml-4 mb-4 gap-6">
        <button>
<Link href='/Comprehension' className="rounded-md w-[145px] h-[55px] bg-[rgba(255,42,170,1)] gap-6 px-2 py-2 text-sm font-medium text-white" aria-current="page">Back to Comprehension Page</Link>
</button>
<div className="flex flex-row p-4 ml-4 mb-4">
    <button>
<Link href='/' className="rounded-md w-[145px] h-[55px] bg-[rgba(255,42,170,1)] px-2 py-2 text-sm font-medium text-white" aria-current="page">Back to Home Page</Link>
</button>
</div>
</div>
</div>
    )
}