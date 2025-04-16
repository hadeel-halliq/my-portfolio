import { LoadingScreen } from "./assets/components/LoadingScreen"
import { useState } from "react";
import { NavBar } from "./assets/components/NanBar";
import { MobileMenu } from "./assets/components/MobileMenu";
import { Home } from "./assets/components/sections/Home";
import { About } from "./assets/components/sections/About";
import { Projects } from "./assets/components/sections/Project";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
       {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
       <NavBar menuOpen={menuOpen} setMenuOPen={setMenuOpen}/>
       <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Home/>
       <About/>
       <Projects/>
    </>
  )
}

export default App
