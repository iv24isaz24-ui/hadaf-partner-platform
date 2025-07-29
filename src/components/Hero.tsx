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
    <section id="home" className="relative pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                مرحباً بك في{" "}
                <span className="text-primary">شركة هدف</span>{" "}
                للموارد البشرية
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                شريكك الاستراتيجي لنجاحك التنظيمي
              </p>
              <p className="text-lg text-muted-foreground">
                حلول متكاملة، بفكر استشاري، وتقنية مرنة
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
              >
                احصل على استشارة مجانية
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6"
              >
                تعرف على خدماتنا
              </Button>
            </div>

            {/* Quote Highlight */}
            <Card className="p-8 bg-gradient-primary/5 border border-primary/20 shadow-strong relative overflow-hidden">
              <div className="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-4">
                <blockquote className="text-3xl font-bold text-primary">
                  "نجاحك هو هدفنا."
                </blockquote>
                <p className="text-muted-foreground text-lg">
                  شعار نؤمن به ونعمل من أجله في كل خدمة نقدمها
                </p>
              </div>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-primary" />
              لماذا تختار هدف؟
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="p-5 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-r-4 border-r-primary/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      {feature.icon}
                    </div>
                    <p className="text-sm leading-relaxed font-medium">{feature.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;