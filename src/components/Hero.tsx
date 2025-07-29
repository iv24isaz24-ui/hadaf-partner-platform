import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, Target, Award, TrendingUp } from "lucide-react";

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
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
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
            <Card className="p-6 bg-gradient-card border-l-4 border-l-primary shadow-medium">
              <blockquote className="text-2xl font-semibold text-primary italic">
                "نجاحك هو هدفنا."
              </blockquote>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">✅ لماذا تختار هدف؟</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <Card key={index} className="p-4 shadow-soft hover:shadow-medium transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="text-primary mt-1">
                      {feature.icon}
                    </div>
                    <p className="text-sm leading-relaxed">{feature.text}</p>
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