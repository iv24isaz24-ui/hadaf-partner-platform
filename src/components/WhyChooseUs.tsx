import { Card } from "@/components/ui/card";
import { CheckCircle, Users, Target, Award, TrendingUp, Building } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      text: "خبرة ممتدة في تقديم حلول الموارد البشرية عبر مختلف القطاعات"
    },
    {
      icon: <Target className="h-6 w-6" />,
      text: "خدمات مخصصة لكل مرحلة من مراحل نمو شركتك"
    },
    {
      icon: <Award className="h-6 w-6" />,
      text: "التزام بالابتكار عبر تقنيات سحابية متقدمة"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      text: "استشارات تنظيمية وقانونية موثوقة"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      text: "نتائج قابلة للقياس تحقق أهداف شركتك"
    },
    {
      icon: <Building className="h-6 w-6" />,
      text: "حلول متكاملة تواكب رؤية المملكة 2030"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
            <CheckCircle className="h-8 w-8 text-primary" />
            لماذا تختار هدف؟
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            نحن لا نقدم مجرد خدمات، بل نبني شراكات استراتيجية تهدف إلى تحقيق النجاح المستدام لشركتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-r-4 border-r-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  {feature.icon}
                </div>
                <p className="text-sm leading-relaxed font-medium">{feature.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;