import { Card } from "@/components/ui/card";
import { Eye, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">👤 من نحن؟</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              شركة هدف للموارد البشرية هي شركة سعودية متخصصة في تقديم حلول شاملة واحترافية 
              في مجالات التوظيف، التدريب، الاستشارات العمالية والقانونية، الحوكمة، وتأسيس الإدارات، 
              مدعومة بحلول تقنية مرنة وسحابية.
            </p>
          </div>

          {/* Vision, Mission, Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <Card className="p-6 text-center shadow-medium hover:shadow-strong transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">رؤيتنا</h3>
              <p className="text-muted-foreground">
                أن نكون الشريك الأول لحلول الموارد البشرية المبتكرة في المملكة
              </p>
            </Card>

            {/* Mission */}
            <Card className="p-6 text-center shadow-medium hover:shadow-strong transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">رسالتنا</h3>
              <p className="text-muted-foreground">
                تقديم حلول تنموية تساعد على تعزيز الأداء المؤسسي، وتحسين بيئة العمل، ورفع الكفاءة
              </p>
            </Card>

            {/* Values */}
            <Card className="p-6 text-center shadow-medium hover:shadow-strong transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">قيمنا</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>الاحترافية</p>
                <p>الشفافية</p>
                <p>الابتكار</p>
                <p>الالتزام</p>
              </div>
            </Card>
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