import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const faqSections = [
    {
      id: "recruitment",
      title: "◽️ التوظيف",
      questions: [
        {
          question: "ما الخدمات التي تقدمونها في مجال التوظيف؟",
          answer: "نقدم خدمات شاملة تشمل التوظيف التخصصي، فحص وتقييم المرشحين، خدمات الصيد (Headhunting)، والتوظيف الجماعي للمشاريع الكبيرة."
        },
        {
          question: "هل يمكن طلب توظيف لمرة واحدة؟",
          answer: "نعم، نوفر خدمات التوظيف للمرة الواحدة بالإضافة إلى الشراكات طويلة المدى حسب احتياجات عملائنا."
        },
        {
          question: "هل تعملون مع القطاع الحكومي؟",
          answer: "نعم، لدينا خبرة واسعة في التعامل مع القطاع الحكومي والخاص والمؤسسات غير الربحية."
        }
      ]
    },
    {
      id: "training",
      title: "◽️ التدريب",
      questions: [
        {
          question: "هل تقدمون تدريبًا أونلاين؟",
          answer: "نعم، نوفر برامج تدريبية متنوعة عبر الإنترنت بالإضافة إلى التدريب الحضوري والمختلط حسب الحاجة."
        },
        {
          question: "هل هناك برامج للموظفين الجدد؟",
          answer: "بالطبع، نقدم برامج تأهيل وتوجيه متخصصة للموظفين الجدد لضمان اندماجهم السريع والفعال."
        }
      ]
    },
    {
      id: "governance",
      title: "◽️ الحوكمة والاستشارات",
      questions: [
        {
          question: "هل تقدمون استشارات تأسيس الإدارات؟",
          answer: "نعم، نساعد في تصميم الهياكل التنظيمية وتأسيس الإدارات وتطوير الإجراءات والسياسات."
        },
        {
          question: "هل تقدمون استشارات قانونية؟",
          answer: "نقدم استشارات قانونية متخصصة في قوانين العمل والموارد البشرية والامتثال التنظيمي."
        },
        {
          question: "ما الحلول الإلكترونية المتاحة؟",
          answer: "نوفر أنظمة إدارة الموارد البشرية السحابية، تطبيقات الهاتف المحمول، وحلول التقارير التحليلية المتقدمة."
        }
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">👥 الأسئلة الشائعة</h2>
            <p className="text-lg text-muted-foreground">
              إجابات على أكثر الأسئلة شيوعاً حول خدماتنا
            </p>
          </div>

          <div className="space-y-6">
            {faqSections.map((section) => (
              <Card key={section.id} className="shadow-medium">
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-xl font-bold">{section.title}</h3>
                  {openSections[section.id] ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>

                {/* Questions */}
                {openSections[section.id] && (
                  <div className="px-6 pb-6 space-y-4">
                    {section.questions.map((qa, index) => (
                      <div key={index} className="border-r-4 border-r-primary pr-4 space-y-2">
                        <h4 className="font-semibold text-primary">{qa.question}</h4>
                        <p className="text-muted-foreground leading-relaxed">{qa.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="space-y-4">
              <p className="text-muted-foreground">لم تجد إجابة لسؤالك؟</p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6"
              >
                احصل على استشارة مجانية
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;