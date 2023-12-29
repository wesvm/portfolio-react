import { Background } from "@/components/ui/background"
import { Meteors } from "@/components/ui/meteors"

import { Bio } from "./components/bio"
import { Projects } from "./components/projects"
import { Skills } from "./components/skills"
import { Contact } from "./components/contact"

function App() {

  return (
    <>
      <Background />
      <Meteors />

      <main className="max-w-3xl mx-auto px-4 md:px-0 my-8 flex flex-col gap-14">
        <Bio />
        <hr className="border-gray-600" />
        <Projects />
        <Skills />
        <footer className="mb-4">
          <Contact />
        </footer>
      </main>
    </>
  )
}

export default App
