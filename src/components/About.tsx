import { Card } from "@/components/ui/card";
import { Eye, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">من نحن؟</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              شركة هدف للموارد البشرية هي شركة سعودية متخصصة في تقديم حلول شاملة واحترافية 
              في مجالات التوظيف، التدريب، الاستشارات العمالية والقانونية، الحوكمة، وتأسيس الإدارات، 
              مدعومة بحلول تقنية مرنة وسحابية.
            </p>
          </div>

          {/* Vision, Mission, Values */}
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Vision */}
              <Card className="p-8 text-center shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">رؤيتنا</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    أن نكون الشريك الأول لحلول الموارد البشرية المبتكرة في المملكة
                  </p>
                </div>
              </Card>

              {/* Mission */}
              <Card className="p-8 text-center shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">رسالتنا</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    تقديم حلول تنموية تساعد على تعزيز الأداء المؤسسي، وتحسين بيئة العمل، ورفع الكفاءة
                  </p>
                </div>
              </Card>

              {/* Values */}
              <Card className="p-8 text-center shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">قيمنا</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>الاحترافية</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>الشفافية</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>الابتكار</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>الالتزام</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;