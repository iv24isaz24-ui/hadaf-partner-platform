import { Card } from "@/components/ui/card";
import { CheckCircle, Users, Target, Award, TrendingUp, Quote, Sparkles, Star } from "lucide-react";

const Hero = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      text: "خبرة ممتدة في تقديم حلول الموارد البشرية",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: <Target className="h-6 w-6" />,
      text: "خدمات مخصصة لكل مرحلة من مراحل نمو شركتك",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      icon: <Award className="h-6 w-6" />,
      text: "التزام بالابتكار عبر تقنيات سحابية متقدمة",
      color: "from-purple-500/20 to-purple-600/20"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: 'url(/lovable-uploads/5330ac50-e60d-4d21-81c7-83f8af239b7c.png)' }}
      />
      
      {/* Multi-layered Overlays for Better Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container relative z-10 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center space-y-12 animate-fade-in">
            
            {/* Main Title Section */}
            <div className="space-y-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Sparkles className="h-8 w-8 text-primary animate-pulse" />
                <Star className="h-6 w-6 text-white/70 animate-pulse delay-300" />
                <Sparkles className="h-5 w-5 text-primary/70 animate-pulse delay-700" />
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-white block mb-4">مرحباً بك في</span>
                <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent block mb-4">
                  شركة هدف
                </span>
                <span className="text-white/90 text-3xl md:text-4xl lg:text-5xl font-bold block">
                  للموارد البشرية
                </span>
              </h1>
              
              {/* Decorative Line */}
              <div className="flex items-center justify-center gap-4 my-8">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <div className="w-24 h-px bg-gradient-to-r from-primary to-transparent" />
                <div className="w-3 h-3 bg-primary/70 rounded-full animate-pulse delay-500" />
                <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />
              </div>
              
              <p className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-6">
                شريكك الاستراتيجي لنجاحك التنظيمي
              </p>
              
              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-4xl mx-auto font-medium">
                شركة سعودية متخصصة في تقديم حلول شاملة واحترافية في مجالات الموارد البشرية، 
                مدعومة بخبرة عميقة وتقنيات حديثة لضمان نجاح شركتك وتحقيق أهدافها الاستراتيجية
              </p>
            </div>

            {/* Features Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:bg-white/15"
                >
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    
                    <p className="text-white/90 text-lg leading-relaxed font-medium text-center">
                      {feature.text}
                    </p>
                  </div>
                  
                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300" />
                </div>
              ))}
            </div>

            {/* Quote Section */}
            <div className="max-w-3xl mx-auto mt-20">
              <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl">
                {/* Quote Icon */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="text-center pt-6">
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
                    "نجاحك هو هدفنا"
                  </h3>
                  <p className="text-white/80 text-xl font-semibold">
                    شعار نؤمن به ونعمل من أجله
                  </p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full blur-xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary/5 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/60 animate-bounce">
          <span className="text-sm font-medium">اكتشف المزيد</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center py-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;