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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/15 rounded-full blur-lg animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-accent/8 rounded-full blur-2xl animate-pulse delay-2000" />
        <div className="absolute bottom-20 right-16 w-28 h-28 bg-primary/12 rounded-full blur-xl animate-pulse delay-500" />
      </div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent animate-[slide-in-right_8s_ease-in-out_infinite_alternate]" />
      </div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 mix-blend-soft-light"
        style={{ backgroundImage: 'url(/lovable-uploads/5330ac50-e60d-4d21-81c7-83f8af239b7c.png)' }}
      />
      
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