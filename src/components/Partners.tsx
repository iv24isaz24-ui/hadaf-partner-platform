import { Card } from "@/components/ui/card";

const Partners = () => {
  const partners = [
    { name: "مجموعة السلطان" },
    { name: "كيمس" },
    { name: "مشتان" },
    { name: "بهارات" },
    { name: "أرض الأصالة" },
    { name: "أحباب" },
    { name: "شركة مليص التجارية" },
    { name: "صوص وبطاطس" },
    { name: "مجموعة السلطان" },
    { name: "كيمس" },
    { name: "مشتان" },
    { name: "بهارات" }
  ];

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">شركاؤنا</h2>
          <p className="text-lg text-muted-foreground">
            نفخر بشراكتنا مع أبرز الشركات والمؤسسات في المملكة
          </p>
        </div>

        {/* Partners Slider */}
        <div className="relative">
          <div className="flex animate-scroll">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 mx-4"
              >
                <Card className="p-6 h-24 flex items-center justify-center bg-white/50 backdrop-blur-sm border border-white/20 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 hover:bg-white/70">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground/80 whitespace-nowrap">
                      {partner.name}
                    </h3>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            وأكثر من 100 شريك آخر يثقون في خدماتنا
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;