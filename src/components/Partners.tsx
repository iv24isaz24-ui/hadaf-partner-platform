import { Card } from "@/components/ui/card";

const Partners = () => {
  const partners = [
    { name: "مجموعة السلطان", logo: "🏢" },
    { name: "كيمس", logo: "🏭" },
    { name: "مشتان", logo: "🏪" },
    { name: "بهارات", logo: "🌶️" },
    { name: "أرض الأصالة", logo: "🌾" },
    { name: "أحباب", logo: "❤️" },
    { name: "شركة مليص التجارية", logo: "🏬" },
    { name: "صوص وبطاطس", logo: "🍟" }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">🤝 شركاؤنا</h2>
          <p className="text-lg text-muted-foreground">
            نفخر بشراكتنا مع أبرز الشركات والمؤسسات في المملكة
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-3">
                <div className="text-4xl">{partner.logo}</div>
                <p className="text-sm font-medium text-muted-foreground">
                  {partner.name}
                </p>
              </div>
            </Card>
          ))}
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