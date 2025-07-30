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
            {/* Vision */}
            <div className="bg-gradient-primary/5 rounded-xl p-8 border border-primary/20">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="h-10 w-10 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-primary">رؤيتنا</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    أن نكون الشريك الأول لحلول الموارد البشرية المبتكرة في المملكة
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-gradient-primary/5 rounded-xl p-8 border border-primary/20">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-primary">رسالتنا</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    تقديم حلول تنموية تساعد على تعزيز الأداء المؤسسي، وتحسين بيئة العمل، ورفع الكفاءة
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="bg-gradient-primary/5 rounded-xl p-8 border border-primary/20">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-primary">قيمنا</h3>
                  <div className="grid grid-cols-2 gap-3 text-lg text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>الاحترافية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>الشفافية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>الابتكار</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>الالتزام</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CEO Quote */}
          <Card className="p-8 bg-gradient-card shadow-medium">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">💬 كلمة رئيس مجلس الإدارة</h3>
              <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
                "نفخر في هدف بدورنا الريادي في تطوير بيئة العمل بالمملكة. نؤمن بأن الاستثمار في الإنسان 
                هو استثمار في المستقبل، ونعمل على تمكين الشركات من النمو من خلال حلولنا المتقدمة والمخصصة."
              </blockquote>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;