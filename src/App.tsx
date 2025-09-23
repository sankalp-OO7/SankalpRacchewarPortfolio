import { FC, lazy, Suspense } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Lazy load the heavy components
const Projects = lazy(() => import("./components/Projects"));
const Certificates = lazy(() => import("./components/Certificates"));
const Experience = lazy(() => import("./components/Experience"));

const App: FC = () => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768); // You can adjust this breakpoint
  //   };

  //   handleResize(); // Set initial state
  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          {/* Use Suspense for lazy loaded components */}
          <Suspense fallback={<div>Loading...</div>}>
            <Certificates />
            <Experience />
            <Projects />
          </Suspense>
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
