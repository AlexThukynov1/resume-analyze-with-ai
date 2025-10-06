import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "constats";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResAI" },
    { name: "description", content: "Reseme analyze with AI" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Ypur Applications and Resume Ratings</h1>
        <h2>Review your submissions and check AI-powered feedback.</h2>
      </div>
    </section>

    {resumes.map((resume) => {
      <ResumeCard 
        key={resume.id} 
        resume={resume}/>
    })}

  </main>;
}
