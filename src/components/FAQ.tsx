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
      title: "التوظيف",
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
        },
        {
          question: "كم تستغرق عملية التوظيف؟",
          answer: "تعتمد على نوع المنصب والمتطلبات، لكن عادة ما تتراوح بين 2-6 أسابيع للتوظيف التقليدي و6-12 أسبوع للمناصب التنفيذية."
        },
        {
          question: "هل تقدمون ضمان على الموظفين المعينين؟",
          answer: "نعم، نقدم ضمان استبدال مجاني لمدة تصل إلى 3 أشهر في حال عدم ملاءمة الموظف المعين."
        }
      ]
    },
    {
      id: "training",
      title: "التدريب والتطوير",
      questions: [
        {
          question: "هل تقدمون تدريبًا أونلاين؟",
          answer: "نعم، نوفر برامج تدريبية متنوعة عبر الإنترنت بالإضافة إلى التدريب الحضوري والمختلط حسب الحاجة."
        },
        {
          question: "هل هناك برامج للموظفين الجدد؟",
          answer: "بالطبع، نقدم برامج تأهيل وتوجيه متخصصة للموظفين الجدد لضمان اندماجهم السريع والفعال."
        },
        {
          question: "هل يمكن تخصيص برامج التدريب حسب احتياجات الشركة؟",
          answer: "نعم، نقوم بتصميم برامج تدريبية مخصصة تماماً حسب احتياجات كل شركة وأهدافها التدريبية."
        },
        {
          question: "هل تقدمون شهادات معتمدة؟",
          answer: "نعم، نقدم شهادات حضور معتمدة من هدف للاستشارات ونعمل مع جهات دولية لشهادات متخصصة."
        },
        {
          question: "ما هي لغات التدريب المتاحة؟",
          answer: "نقدم التدريب باللغة العربية والإنجليزية، مع إمكانية ترجمة فورية حسب الحاجة."
        }
      ]
    },
    {
      id: "governance",
      title: "الحوكمة والاستشارات",
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
        },
        {
          question: "هل تساعدون في إعداد دليل الموظف؟",
          answer: "نعم، نقوم بإعداد أدلة الموظفين الشاملة تتضمن السياسات، الإجراءات، والثقافة المؤسسية."
        },
        {
          question: "هل تقدمون خدمات مراجعة نظم الرواتب؟",
          answer: "نعم، نقوم بمراجعة وتحسين نظم الرواتب والحوافز لضمان العدالة والشفافية والامتثال."
        }
      ]
    },
    {
      id: "consulting",
      title: "الخدمات الاستشارية",
      questions: [
        {
          question: "ما هي مدة المشاريع الاستشارية؟",
          answer: "تتراوح مدة المشاريع من أسابيع قليلة للاستشارات المحددة إلى عدة أشهر للمشاريع التحويلية الشاملة."
        },
        {
          question: "هل تقدمون خدمات استشارية عن بُعد؟",
          answer: "نعم، نقدم خدمات استشارية مرنة عن بُعد وحضورياً أو مزج بينهما حسب طبيعة المشروع."
        },
        {
          question: "كيف تضمنون جودة الخدمات المقدمة؟",
          answer: "لدينا فريق من الخبراء المعتمدين ونظام مراجعة شامل مع متابعة دورية لضمان تحقيق النتائج المطلوبة."
        }
      ]
    },
    {
      id: "pricing",
      title: "الأسعار والخطط",
      questions: [
        {
          question: "كيف يتم تحديد أسعار الخدمات؟",
          answer: "نحدد الأسعار بناءً على نطاق المشروع، تعقيده، المدة الزمنية، وحجم الفريق المطلوب. نقدم عروض أسعار مفصلة لكل مشروع."
        },
        {
          question: "هل تقدمون خصومات للشركات الصغيرة؟",
          answer: "نعم، لدينا خطط خاصة مصممة للشركات الناشئة والصغيرة بأسعار تنافسية وخدمات مرنة."
        },
        {
          question: "هل تقدمون استشارة مجانية؟",
          answer: "نعم، نقدم استشارة أولية مجانية لمدة 30 دقيقة لفهم احتياجاتكم وتقديم التوجيه المناسب."
        }
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">الأسئلة الشائعة</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              إجابات شاملة على أهم التساؤلات حول خدماتنا المتنوعة في التوظيف، التدريب، الحوكمة والاستشارات
            </p>
          </div>

          <div className="space-y-4">
            {faqSections.map((section) => (
              <Card key={section.id} className="overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 text-right flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                  {openSections[section.id] ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                {openSections[section.id] && (
                  <div className="px-6 pb-6 space-y-4 border-t">
                    {section.questions.map((qa, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="font-medium">{qa.question}</h4>
                        <p className="text-muted-foreground text-sm">{qa.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg">لم تجد إجابة لسؤالك؟</p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                تواصل معنا
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;