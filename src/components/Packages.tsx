import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      name: "باقة النجاح الشامل",
      description: "الحل الأمثل للشركات الساعية للتميز في جميع جوانب الموارد البشرية",
      features: [
        "التوظيف الاستراتيجي",
        "التدريب المتقدم",
        "إدارة الأداء المتكاملة",
        "الحوكمة المؤسسية",
        "حماية الأجور",
        "التوسع الدولي"
      ],
      benefits: [
        "استراتيجية شاملة للموارد البشرية",
        "دعم متواصل على مدار السنة",
        "تقارير تحليلية شهرية",
        "استشارات قانونية غير محدودة"
      ],
      highlighted: true
    },
    {
      name: "باقة الابتكار المؤسسي",
      description: "مصممة للمؤسسات التي تسعى لتطبيق أحدث معايير الحوكمة والإدارة",
      features: [
        "الحوكمة المؤسسية الحديثة",
        "تقييم الأداء وتحليل الفجوات",
        "الاستشارات القانونية",
        "حلول رقمية لتوظيف ذكي"
      ],
      benefits: [
        "تطوير أنظمة الحوكمة",
        "تحليل البيانات المتقدم",
        "استشارات متخصصة",
        "حلول تقنية مبتكرة"
      ],
      highlighted: false
    },
    {
      name: "باقة التأسيس الشامل",
      description: "الخيار المثالي للشركات الناشئة والمؤسسات الجديدة",
      features: [
        "تأسيس الشركات",
        "إعداد الهيكل التنظيمي",
        "تجهيز الأنظمة الإدارية",
        "دعم التوظيف الأولي"
      ],
      benefits: [
        "تأسيس احترافي متكامل",
        "هيكل تنظيمي مدروس",
        "أنظمة إدارية فعالة",
        "فريق عمل مؤهل"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="packages" className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">🎯 الباقات</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اختر الباقة التي تناسب احتياجات شركتك وأهدافها المستقبلية
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative p-6 shadow-medium hover:shadow-strong transition-all duration-300 ${
              pkg.highlighted ? 'ring-2 ring-primary shadow-strong' : ''
            }`}>
              {pkg.highlighted && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  الأكثر شيوعاً
                </Badge>
              )}
              
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">المحتوى التفصيلي:</h4>
                  <div className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">المزايا:</h4>
                  <div className="space-y-2">
                    {pkg.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  className={`w-full py-6 text-lg ${
                    pkg.highlighted 
                      ? 'bg-accent hover:bg-accent/90 text-accent-foreground' 
                      : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  }`}
                >
                  احصل على استشارة مجانية
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            جميع الباقات قابلة للتخصيص حسب احتياجات شركتك
          </p>
        </div>
      </div>
    </section>
  );
};

export default Packages;