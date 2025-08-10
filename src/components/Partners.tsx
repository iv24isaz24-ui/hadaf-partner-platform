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

        {/* Partners Continuous Animation */}
        <div className="relative overflow-hidden">
          <div className="flex animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
            {/* First set */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-48 mx-3"
              >
                <Card className="p-4 h-20 flex items-center justify-center bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm border border-primary/10 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 hover:border-primary/30 group">
                  <div className="text-center">
                    <h3 className="text-base font-semibold text-foreground/80 whitespace-nowrap group-hover:text-primary transition-colors">
                      {partner.name}
                    </h3>
                  </div>
                </Card>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 mx-3"
              >
                <Card className="p-4 h-20 flex items-center justify-center bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm border border-primary/10 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 hover:border-primary/30 group">
                  <div className="text-center">
                    <h3 className="text-base font-semibold text-foreground/80 whitespace-nowrap group-hover:text-primary transition-colors">
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