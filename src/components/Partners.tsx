import { Card } from "@/components/ui/card";

const Partners = () => {
  const partners = [
    { name: "مجموعة السلطان", image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop&crop=center" },
    { name: "كيمس", image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=200&h=100&fit=crop&crop=center" },
    { name: "مشتان", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop&crop=center" },
    { name: "بهارات", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=100&fit=crop&crop=center" },
    { name: "أرض الأصالة", image: "https://images.unsplash.com/photo-1554774853-719586f82d77?w=200&h=100&fit=crop&crop=center" },
    { name: "أحباب", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&h=100&fit=crop&crop=center" },
    { name: "شركة مليص التجارية", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center" },
    { name: "صوص وبطاطس", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=100&fit=crop&crop=center" },
    { name: "مجموعة السلطان", image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop&crop=center" },
    { name: "كيمس", image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=200&h=100&fit=crop&crop=center" },
    { name: "مشتان", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop&crop=center" },
    { name: "بهارات", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=100&fit=crop&crop=center" }
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
          <div className="flex animate-[scroll_20s_linear_infinite] w-[300%]">
            {/* First set */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-56 mx-4"
              >
                <Card className="relative h-24 overflow-hidden border border-primary/20 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105 group">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${partner.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  </div>
                  <div className="relative z-10 h-full flex items-center justify-center p-4">
                    <h3 className="text-white font-bold text-center text-sm leading-tight drop-shadow-lg group-hover:text-primary-foreground transition-colors">
                      {partner.name}
                    </h3>
                  </div>
                </Card>
              </div>
            ))}
            {/* Second set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-56 mx-4"
              >
                <Card className="relative h-24 overflow-hidden border border-primary/20 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105 group">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${partner.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  </div>
                  <div className="relative z-10 h-full flex items-center justify-center p-4">
                    <h3 className="text-white font-bold text-center text-sm leading-tight drop-shadow-lg group-hover:text-primary-foreground transition-colors">
                      {partner.name}
                    </h3>
                  </div>
                </Card>
              </div>
            ))}
            {/* Third set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`third-${index}`}
                className="flex-shrink-0 w-56 mx-4"
              >
                <Card className="relative h-24 overflow-hidden border border-primary/20 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105 group">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${partner.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  </div>
                  <div className="relative z-10 h-full flex items-center justify-center p-4">
                    <h3 className="text-white font-bold text-center text-sm leading-tight drop-shadow-lg group-hover:text-primary-foreground transition-colors">
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