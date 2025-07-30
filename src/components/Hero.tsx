import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, Target, Award, TrendingUp, Quote } from "lucide-react";

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
    <section id="home" className="relative pt-20 pb-16 overflow-hidden min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/lovable-uploads/5330ac50-e60d-4d21-81c7-83f8af239b7c.png)' }}
      ></div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      
      <div className="container relative">
        <div className="text-center space-y-12">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                مرحباً بك في{" "}
                <span className="text-primary">شركة هدف</span>{" "}
                للموارد البشرية
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                شريكك الاستراتيجي لنجاحك التنظيمي
              </p>
              <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
                شركة سعودية متخصصة في تقديم حلول شاملة واحترافية في مجالات الموارد البشرية، 
                مدعومة بخبرة عميقة وتقنيات حديثة لضمان نجاح شركتك وتحقيق أهدافها الاستراتيجية
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
              >
                احصل على استشارة مجانية
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 text-white border-white/30 hover:bg-white/10 hover:text-white"
              >
                تعرف على المزيد
              </Button>
            </div>
          </div>

          {/* Quote Section */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Quote className="h-10 w-10 text-white" />
              </div>
              <blockquote className="text-3xl md:text-4xl font-bold text-white mb-4">
                "نجاحك هو هدفنا"
              </blockquote>
              <p className="text-white/80 text-lg">
                شعار نؤمن به ونعمل من أجله في كل خدمة نقدمها
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;