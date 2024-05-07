import Main from "./components/Home/main/Main";
import NavBar from "./components/Home/navBar/NavBar";
import About from "./components/Home/about/About";
import Projetos from "./components/Home/projetos/Projetos";

export default function App() {
  return (
    <>
      <NavBar />
      <Main />
      <About />
      <Projetos />
    </>
  )
}