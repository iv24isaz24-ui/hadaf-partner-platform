import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, TrendingUp, Shield, Clock, Zap } from "lucide-react";

const BoudPlatform = () => {
  const capabilities = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "إدارة شاملة للموظفين",
      description: "نظام متكامل لإدارة بيانات الموظفين والهياكل التنظيمية"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "تحليلات متقدمة",
      description: "رؤى عميقة حول أداء الموارد البشرية واتخاذ القرارات المدروسة"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "أتمتة العمليات",
      description: "أتمتة المهام الروتينية وتوفير الوقت والجهد"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "الامتثال والأمان",
      description: "ضمان الامتثال للأنظمة وحماية البيانات الحساسة"
    }
  ];

  const modules = [
    {
      title: "إدارة الموظفين",
      features: ["قاعدة بيانات شاملة", "الهيكل التنظيمي", "تتبع المناصب"]
    },
    {
      title: "الحضور والانصراف",
      features: ["تتبع الحضور", "إدارة الإجازات", "تقارير الحضور"]
    },
    {
      title: "الرواتب والمكافآت",
      features: ["حساب الرواتب", "إدارة المكافآت", "التقارير المالية"]
    },
    {
      title: "تقييم الأداء",
      features: ["نماذج التقييم", "تتبع الأهداف", "خطط التطوير"]
    },
    {
      title: "التوظيف والتعيين",
      features: ["إدارة الطلبات", "تتبع المرشحين", "عملية التوظيف"]
    },
    {
      title: "التدريب والتطوير",
      features: ["خطط التدريب", "تتبع التقدم", "الشهادات"]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-cairo" dir="rtl">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
              <Building2 className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              منصة بُعد HR
            </h1>
            <p className="text-xl text-muted-foreground">
              نظام إدارة الموارد البشرية الأكثر تقدماً في المملكة العربية السعودية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                احجز عرض توضيحي
              </Button>
              <Button size="lg" variant="outline">
                جرب النسخة التجريبية
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">إمكانيات منصة بُعد HR</h2>
            <p className="text-lg text-muted-foreground">
              حلول ذكية ومتطورة لإدارة الموارد البشرية بكفاءة عالية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="p-6 text-center shadow-medium hover:shadow-strong transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">
                    {capability.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{capability.title}</h3>
                <p className="text-muted-foreground text-sm">{capability.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">وحدات النظام</h2>
            <p className="text-lg text-muted-foreground">
              وحدات متكاملة تغطي جميع جوانب إدارة الموارد البشرية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="p-6 shadow-medium hover:shadow-strong transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <h3 className="text-lg font-bold">{module.title}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {module.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <Card className="p-8 bg-gradient-card text-center shadow-strong">
            <div className="space-y-6 max-w-2xl mx-auto">
              <Zap className="h-12 w-12 text-primary mx-auto" />
              <h2 className="text-3xl font-bold">ابدأ مع منصة بُعد HR اليوم</h2>
              <p className="text-lg text-muted-foreground">
                انضم لأكثر من 1000 شركة تثق في منصة بُعد HR لإدارة مواردها البشرية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  ابدأ الآن
                </Button>
                <Button size="lg" variant="outline">
                  تحدث مع فريق المبيعات
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BoudPlatform;