"use client"
import Navbar from "@/app/Components/Navbar"
import Link from "next/link"


export default function Grammar() {
     return  (
        <div className="w-screen min-h-screen bg-black overflow-x-hidden">
            <Navbar/>
     <h1 className="font-bold text-4xl text-[rgba(255,42,170,1)] p-5">Grammar: The Backbone of English</h1>
<p className="text-1xl text-left text-white p-5">


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
  <h2 className="font-bold text-4xl text-[rgba(255,42,170,1)] p-5">The Parts of Speech</h2>
<p className="text-1xl text-left text-white p-5">The eight primary parts of speech are the building blocks of grammar. 
    <br/>
    
    Each part of speech serves a specific purpose in a sentence:
    </p>

<h2 className="font-bold text-4xl text-[rgba(255,42,170,1)] p-5">Nouns:</h2>
<p className="text-1xl text-left text-white p-5">Nouns are words that name people, places, things, 
    <br/>
    or ideas.
    <br/>
Examples: dog, city, happiness, teacher.
<br/>
Sentence: The teacher explained the lesson clearly.
</p>

<h2 className="font-bold text-4xl text-[rgba(255,42,170,1)] p-5">Pronouns:</h2>
<p className="text-1xl text-left text-white p-5">Pronouns replace nouns to avoid repetition.
<br/>
Examples: he, she, it, they, we.
<br/>
Sentence: She went to the market instead of Emily.
</p>

<h2 className="font-bold text-4xl text-[rgba(255,42,170,1)] p-5">Verbs:</h2>
<p className="text-1xl text-left text-white p-5">Verbs indicate actions, states, or occurrences.
<br/>
Examples: run, is, believe, jump.
<br/>
Sentence: The cat slept peacefully on the couch.
</p>

<h2 className="font-bold text-4xl text-[rgba(255,42,170,1)] p-5">Adjectives:</h2>
<p className="text-1xl text-left text-white p-5">Adjectives describe or modify nouns and pronouns.
<br/>
Examples: red, beautiful, large, intelligent.
<br/>
Sentence: The beautiful garden was full of flowers.
</p>

<h2 className="font-bold text-4xl text-[rgba(255,42,170,1)] p-5">Adverbs:</h2>
<p className="text-1xl text-left text-white p-5">Adverbs modify verbs, adjectives, or other adverbs, often indicating how, 
<br/>
    when, where, or to what extent.
    <br/>
Examples: quickly, very, yesterday, outside.
<br/>
Sentence: He ran quickly to catch the bus.
</p>

<h2 className="font-bold text-4xl text-[rgba(255,42,170,1)] p-5">Prepositions:</h2>
<p className="text-1xl text-left text-white p-5">Prepositions show relationships between nouns (or pronouns) and 
<br/>
    other words in a sentence, often indicating direction, location, or time.
    <br/>
Examples: in, on, under, between.
<br/>
Sentence: The book is on the table.
</p>

<h2 className="font-bold text-4xl text-[rgba(255,42,170,1)] p-5">Conjunctions:</h2>
<p className="text-1xl text-left text-white p-5">Conjunctions connect words, phrases, or clauses.
<br/>
Examples: and, but, because, although.
<br/>
Sentence: She wanted to go to the park but it started raining.
</p>

<h2 className="font-bold text-4xl text-[rgba(255,42,170,1)] p-5">Interjections:</h2>
<p className="text-1xl text-left text-white p-5">Interjections express strong emotions or sudden exclamations.
<br/>
Examples: wow, oh, ouch, hurray.
<br/>
Sentence: Wow! Thats an amazing achievement.
</p>
<div className="flex flex-row p-4 ml-8 mb-4">
    <button>
<Link href='/' className="rounded-md w-[145px] h-[55px]  bg-[rgba(255,42,170,1)] px-3 py-2 text-sm font-medium text-white" aria-current="page">Back to Home Page</Link>
</button>
</div>
</div>
    )
}