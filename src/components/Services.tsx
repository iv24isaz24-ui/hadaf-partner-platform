import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  GraduationCap, 
  Shield, 
  Building2, 
  Scale, 
  Cloud 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "التوظيف والتعيين",
      description: "خدمات توظيف شاملة لاختيار أفضل المواهب لشركتك",
      features: ["فحص وتقييم المرشحين", "التوظيف التخصصي", "خدمات الصيد (Headhunting)"]
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "التدريب والتطوير المهني",
      description: "برامج تدريبية متخصصة لرفع كفاءة الموظفين",
      features: ["دورات تطوير المهارات", "برامج القيادة", "التدريب التقني"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "الحوكمة المؤسسية",
      description: "إعداد أنظمة الحوكمة وإدارة المخاطر",
      features: ["سياسات الحوكمة", "إدارة المخاطر", "الامتثال القانوني"]
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "تأسيس الإدارات والهياكل التنظيمية",
      description: "تصميم وبناء هياكل تنظيمية فعالة",
      features: ["تصميم الهيكل التنظيمي", "توصيف الوظائف", "تطوير الإجراءات"]
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "الاستشارات العمالية والقانونية",
      description: "استشارات قانونية متخصصة في قوانين العمل",
      features: ["الاستشارات القانونية", "تسوية المنازعات", "الامتثال التنظيمي"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "الحلول الإلكترونية السحابية",
      description: "أنظمة رقمية متطورة لإدارة الموارد البشرية",
      features: ["أنظمة إدارة الموظفين", "تطبيقات الهاتف المحمول", "التقارير التحليلية"]
    }
  ];

  return (
    <section id="services" className="py-16">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">🧩 خدماتنا</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات المتخصصة في الموارد البشرية لتلبية احتياجات شركتك
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
              <div className="space-y-4">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-primary hover:text-primary-foreground"
                >
                  تعرف على التفاصيل
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6"
          >
            احصل على استشارة مجانية حول خدماتنا
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;