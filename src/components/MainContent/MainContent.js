import Hero from "./Hero/Hero";
import Testimonials from "./Testimonials/Testimonials";
import Services from "./Services/Services";

function MainContent() {
  return (
    <main className="flex flex-col flex-1 bg-color-light">
      <Hero />
      <Testimonials />
      <Services />
    </main>
  );
}

export default MainContent;
