import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResAI" },
    { name: "description", content: "Reseme analyze with AI" },
  ];
}

export default function Home() {
  return <main>
    
  </main>;
}
