import "./App.scss";

import { useState } from "react";

import Topbar from "./components/topbar/Topbar";
import Menu from './components/menu/Menu';
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";

const App = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [skillSelected, setSkillSelected] = useState("frontend");
  return (
    <div className="app">
      <Topbar mobileMenuActive={mobileMenuActive} setMobileMenuActive={setMobileMenuActive} />
      <Menu mobileMenuActive={mobileMenuActive} setMobileMenuActive={setMobileMenuActive} />

      <main className={mobileMenuActive ? "section menuActive" : "section"}>
        <Intro />
        <About skillSelected={skillSelected} setSkillSelected={setSkillSelected} />
        <Works />
        <Contact />
      </main>
    </div>
  )
}

export default App;
