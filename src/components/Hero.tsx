import { Users, Target, Award } from "lucide-react";

const Hero = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      text: "خبرة ممتدة في تقديم حلول الموارد البشرية"
    },
    {
      icon: <Target className="h-6 w-6" />,
      text: "خدمات مخصصة لكل مرحلة من مراحل نمو شركتك"
    },
    {
      icon: <Award className="h-6 w-6" />,
      text: "التزام بالابتكار عبر تقنيات سحابية متقدمة"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Main Title */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              <span className="block mb-2">مرحباً بك في</span>
              <span className="text-primary block mb-2">شركة هدف</span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground block">
                للموارد البشرية
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              شريكك الاستراتيجي لنجاحك التنظيمي
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              شركة سعودية متخصصة في تقديم حلول شاملة واحترافية في مجالات الموارد البشرية، 
              مدعومة بخبرة عميقة وتقنيات حديثة لضمان نجاح شركتك وتحقيق أهدافها الاستراتيجية
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                
                <p className="text-foreground leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="bg-card border border-border rounded-xl p-8 mt-16">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              "نجاحك هو هدفنا"
            </h3>
            <p className="text-muted-foreground text-lg">
              شعار نؤمن به ونعمل من أجله
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;