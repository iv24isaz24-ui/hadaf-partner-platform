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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                مرحباً بك في{" "}
                <span className="text-primary">شركة هدف</span>{" "}
                للموارد البشرية
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                شريكك الاستراتيجي لنجاحك التنظيمي
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                شركة سعودية متخصصة في تقديم حلول شاملة واحترافية في مجالات الموارد البشرية، 
                مدعومة بخبرة عميقة وتقنيات حديثة لضمان نجاح شركتك وتحقيق أهدافها الاستراتيجية
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
                className="text-lg px-8 py-6 text-white border-white/30 hover:bg-white/10 hover:text-white"
              >
                تعرف على المزيد
              </Button>
            </div>

            {/* Company Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h3 className="text-white font-bold text-lg mb-2">رؤيتنا</h3>
                <p className="text-white/80 text-sm">أن نكون الشريك الأول لحلول الموارد البشرية المبتكرة في المملكة</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h3 className="text-white font-bold text-lg mb-2">رسالتنا</h3>
                <p className="text-white/80 text-sm">تقديم حلول تنموية تساعد على تعزيز الأداء المؤسسي وتحسين بيئة العمل</p>
              </div>
            </div>
          </div>

          {/* Quote Highlight */}
          <div className="flex justify-center">
            <Card className="p-8 bg-white/95 backdrop-blur-sm border border-white/20 shadow-strong relative overflow-hidden max-w-md">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;