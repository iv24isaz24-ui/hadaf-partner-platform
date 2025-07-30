import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Leadership from "@/components/Leadership";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-cairo" dir="rtl">
      <Header />
      <main>
        <Hero />
        <About />
        <Partners />
        <Leadership />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
