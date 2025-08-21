import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, Sparkles } from "lucide-react";

const BoudPlatform = () => {
  return (
    <div className="min-h-screen bg-background font-cairo" dir="rtl">
      <Header />
      
      {/* Coming Soon Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Logo */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-8 dark:opacity-15"
          style={{
            backgroundImage: `url('/lovable-uploads/7b282a97-cfcd-4580-aa29-67580420b60e.png')`,
            backgroundSize: '80%',
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/85 dark:bg-background/90" />
        
        {/* Content */}
        <div className="relative z-10 container text-center space-y-12 py-20">
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex justify-center animate-fade-in">
              <img 
                src="/lovable-uploads/7b282a97-cfcd-4580-aa29-67580420b60e.png" 
                alt="BOUD HR Logo" 
                className="h-48 md:h-64 lg:h-80 w-auto object-contain hover-scale"
              />
            </div>
            
            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                منصة بُعد HR
              </h1>
              <div className="flex items-center justify-center gap-3 text-lg md:text-xl text-muted-foreground">
                <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                <span>نظام إدارة الموارد البشرية المتطور</span>
                <Sparkles className="h-6 w-6 text-primary animate-pulse" />
              </div>
            </div>
            
            {/* Coming Soon Message */}
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-bold text-foreground">
                <Clock className="h-8 w-8 text-primary animate-spin" />
                <span>سيتم إطلاق النظام قريباً</span>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                نحن نعمل بجد لتطوير منصة متقدمة لإدارة الموارد البشرية ستوفر حلولاً شاملة ومبتكرة لشركتك
              </p>
            </div>
            
            {/* Features Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              {[
                "إدارة شاملة للموظفين",
                "تحليلات ذكية متقدمة", 
                "أتمتة العمليات الإدارية"
              ].map((feature, index) => (
                <div key={index} className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
                  <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-3 animate-pulse" />
                  <p className="text-sm font-medium text-center">{feature}</p>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="pt-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center gap-3">
                  اطلب عرض توضيحي للنظام
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BoudPlatform;