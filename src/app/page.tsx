"use client";
import { useState, useRef } from "react";
import Navbar from "@/app/Components/Navbar";
import Link from "next/link";
import Image from "next/image";
import comp2 from "@/app/assets/comp2.jpg";
import creative from "@/app/assets/creative.jpg";
import grammar1 from "@/app/assets/grammar1.jpeg";

export default function Home() {
  const [comments, setComments] = useState<string[]>([]);
  const takevalue = useRef<HTMLInputElement>(null);

  const handleAddComment = () => {
    if (takevalue.current) {
      const inputValue = takevalue.current.value.trim();
      if (inputValue) {
        setComments([inputValue, ...comments]);
        takevalue.current.value = ""; 
      }
    }
  };

  return (
    <div className="w-screen min-h-screen bg-black overflow-x-hidden">
      <Navbar />

      <div>
        <h1 className="font-bold text-poppins text-4xl text-[rgba(255,42,170,1)] text-center p-5">
          Mastering English: Comprehension, Grammar, and Creative Writing
        </h1>
        <p className="text-poppins text-center text-white p-5">
          Welcome to our blog dedicated to improving your English skills!
          <br />
          Whether you are a student, an aspiring writer, or simply someone looking to refine your language proficiency,
          <br />
          you will find valuable insights and practical tips here.
          <br />
          We have divided this blog into three essential sections: Comprehension,
          <br />
          Grammar, and Creative Writing, each with its own dedicated page to provide a deep dive into the topic.
        </p>
      </div>

      <div className="flex flex-row justify-center gap-5 p-5 mt-6">
        <div>
          <h1 className="font-bold text-poppins text-4xl text-[rgba(255,42,170,1)] text-center p-5">
            Comprehension
          </h1>
          <Link href="/Comprehension" aria-current="page">
            <Image
              src={comp2}
              alt="Comprehension section image"
              width={310}
              height={280}
              className="w-[310px] h-[280px]"
            />
          </Link>
        </div>
        <div>
          <h1 className="font-bold text-poppins text-4xl text-[rgba(255,42,170,1)] text-center p-5">
            Grammar
          </h1>
          <Link href="/Grammar" aria-current="page">
            <Image
              src={grammar1}
              alt="Grammar section image"
              width={270}
              height={236}
              className="w-full h-auto"
            />
          </Link>
        </div>
        <div>
          <h1 className="font-bold text-poppins text-4xl text-[rgba(255,42,170,1)] text-center p-5">
            Creative Writing
          </h1>
          <Link href="/Creativewriting" aria-current="page">
            <Image
              src={creative}
              alt="Creative Writing section image"
              width={270}
              height={236}
              className="w-full h-auto"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center p-5">
        <input
          ref={takevalue}
          id="add-comment"
          placeholder="Add a comment"
          className="border-2 border-gray-500 rounded px-4 py-2"
        />
        <div className="justify-center my-4">
          <button
            onClick={handleAddComment}
            className="bg-[rgba(255,42,170,1)] text-white px-4 py-2 rounded-md"
          >
            Submit Comment
          </button>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded p-2 bg-gray-50 shadow"
            >
              {comment}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
