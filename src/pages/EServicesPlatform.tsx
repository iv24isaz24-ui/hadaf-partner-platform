import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, FileText, Users, Shield, BarChart, Settings } from "lucide-react";

const EServicesPlatform = () => {
  const services = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "إدارة الوثائق الإلكترونية",
      description: "نظام متكامل لإدارة وأرشفة جميع الوثائق والملفات الخاصة بالموظفين"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "خدمات الموظفين الذاتية",
      description: "منصة تمكن الموظفين من الوصول لخدماتهم وطلباتهم إلكترونياً"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "تقارير وتحليلات",
      description: "لوحات تحكم تفاعلية وتقارير مفصلة عن أداء الموارد البشرية"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "الأمان والحماية",
      description: "أعلى معايير الأمان والحماية للبيانات الحساسة"
    }
  ];

  const features = [
    "إدارة الحضور والانصراف",
    "نظام الإجازات والطلبات",
    "إدارة الرواتب والمكافآت",
    "تقييم الأداء الإلكتروني",
    "نظام التوظيف والتعيين",
    "إدارة التدريب والتطوير"
  ];

  return (
    <div className="min-h-screen bg-background font-cairo" dir="rtl">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
              <Cloud className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              منصة الخدمات الإلكترونية
            </h1>
            <p className="text-xl text-muted-foreground">
              حلول رقمية متكاملة لإدارة جميع عمليات الموارد البشرية بكفاءة عالية
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              اطلب عرض توضيحي
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">خدماتنا الإلكترونية</h2>
            <p className="text-lg text-muted-foreground">
              مجموعة شاملة من الخدمات الرقمية لتسهيل عمليات الموارد البشرية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center shadow-medium hover:shadow-strong transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">المميزات الأساسية</h2>
              <p className="text-lg text-muted-foreground">
                منصة متكاملة تشمل جميع احتياجات إدارة الموارد البشرية
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                تعرف على المزيد
              </Button>
            </div>
            
            <Card className="p-8 shadow-strong">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">حلول مخصصة</h3>
                <p className="text-muted-foreground">
                  نقوم بتخصيص المنصة لتناسب احتياجات شركتك الخاصة مع إمكانية التكامل مع الأنظمة الموجودة
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• تكامل مع الأنظمة الموجودة</li>
                  <li>• واجهة مستخدم مخصصة</li>
                  <li>• دعم فني متواصل</li>
                  <li>• تدريب شامل للفريق</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EServicesPlatform;