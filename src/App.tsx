import { Navbar } from "@/components/navbar"
import { Home } from "@/components/page"
import { Background } from "@/components/background"
import { Meteors } from "@/components/meteors"

function App() {

  return (
    <>
      <Background />
      <Meteors />

      <header className="mx-auto max-w-3xl sticky top-0 z-10">
        <Navbar />
      </header>

      <main className="max-w-3xl mx-auto px-4 my-4">
        <Home />
      </main>
    </>
  )
}

export default App
