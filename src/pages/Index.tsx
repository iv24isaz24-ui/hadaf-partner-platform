import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Partners from "@/components/Partners";
import Leadership from "@/components/Leadership";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-cairo relative overflow-x-hidden" dir="rtl">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        
        {/* Floating Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-32 right-0 w-80 h-80 bg-secondary/8 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent/6 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute bottom-32 right-1/3 w-64 h-64 bg-primary/7 rounded-full blur-2xl animate-pulse delay-500" />
        
        {/* Moving Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/2 to-transparent animate-[slide-in-right_12s_ease-in-out_infinite_alternate]" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
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
