import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react'
import faqs from "../data/faq.json";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const Landing = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
       <section className="text-center ">
       <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          An AI-Powered Chatbot Revolutionizing Student Learning</h1>
      </section>
      <img src='/banner.webp' className='w-full'/>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">About Creator & Its Creativity</CardTitle>
          </CardHeader>
          <CardContent>
          EduBot, crafted by Kunal , is an AI-powered chatbot designed to empower students with instant academic support. Drawing from a rich database of textbooks, past exam papers, and scholarly resources, EduBot delivers precise, reliable answers to your questions. From unraveling complex concepts and solving challenging problems to summarizing key points from images like notes or diagrams, EduBot makes learning seamless and interactive.

With its innovative features, including a Google Lens-inspired tool for extracting educational insights, EduBot transforms how students access knowledge. Fast, accessible, and tailored to your needs, EduBot is here to revolutionize education and help you excel!
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Learners</CardTitle>
          </CardHeader>
          <CardContent>
          The Learner Section of EduBot is a powerful, user-friendly platform designed to help students tackle academic challenges with ease. Simply type a question into the search bar or upload an image of notes, diagrams, or textbook pages, and EduBot delivers instant, AI-powered answers drawn from a vast database of educational resources. Whether you’re seeking clear explanations, solving problems, or summarizing key concepts from images, EduBot provides precise, reliable responses in seconds. With no chat history or tracking, it’s a streamlined, privacy-focused tool that makes learning fast, accessible, and effective for every student.          </CardContent>
        </Card>
      </section>

      <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  )
}

export default Landing;