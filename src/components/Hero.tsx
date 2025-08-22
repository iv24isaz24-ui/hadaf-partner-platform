import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, Target, Award, TrendingUp, Quote, ArrowDown } from "lucide-react";

const Hero = () => {
  const features = [
    {
      icon: <Users className="h-5 w-5" />,
      text: "خبرة ممتدة في تقديم حلول الموارد البشرية عبر مختلف القطاعات"
    },
    {
      icon: <Target className="h-5 w-5" />,
      text: "خدمات مخصصة لكل مرحلة من مراحل نمو شركتك"
    },
    {
      icon: <Award className="h-5 w-5" />,
      text: "التزام بالابتكار عبر تقنيات سحابية متقدمة"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "استشارات تنظيمية وقانونية موثوقة"
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      text: "نتائج قابلة للقياس تحقق أهداف شركتك"
    }
  ];

  return (
    <section id="home" className="relative pt-20 pb-16 overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/lovable-uploads/5330ac50-e60d-4d21-81c7-83f8af239b7c.png)' }}
      ></div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40"></div>
      
      <div className="container relative z-10">
        <div className="text-center space-y-16 animate-fade-in">
          {/* Main Content */}
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  مرحباً بك في{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    شركة هدف
                  </span>{" "}
                  للموارد البشرية
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full"></div>
              </div>
              
              <p className="text-2xl md:text-3xl text-white/95 font-semibold">
                شريكك الاستراتيجي لنجاحك التنظيمي
              </p>
              
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
                شركة سعودية متخصصة في تقديم حلول شاملة واحترافية في مجالات الموارد البشرية، 
                مدعومة بخبرة عميقة وتقنيات حديثة لضمان نجاح شركتك وتحقيق أهدافها الاستراتيجية
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:from-primary/40 group-hover:to-primary/30 transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed font-medium">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-strong">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Quote className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                "نجاحك هو هدفنا"
              </h3>
              <p className="text-white/80 text-lg font-medium">
                شعار نؤمن به ونعمل من أجله
              </p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;