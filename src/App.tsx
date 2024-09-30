import { Route, Routes } from "react-router-dom"
import NavigationBar from "./components/NavigationBar"
import Home from "./routes/Home"
import About from "./routes/About"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <header>
        <NavigationBar />  
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="h-0">
        <Footer />
      </footer>
    </>
  )
}

export default App
