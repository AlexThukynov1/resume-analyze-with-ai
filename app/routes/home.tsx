import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
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
    const {auth} = usePuterStore();
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.isAuthenticated) navigate('/auth?/next=/');
    }, [auth.isAuthenticated])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
    {/* {window.puter.ai.chat()} */}
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Ypur Applications and Resume Ratings</h1>
        <h2>Review your submissions and check AI-powered feedback.</h2>
      </div>
        {resumes.length > 0 && (
          <div className="resumes-section">
            {
              resumes.map((resume) => (
              <ResumeCard 
                  key={resume.id} 
                  resume={resume}/>
              ))}
          </div>
        )}
    </section>
  </main>;
}
