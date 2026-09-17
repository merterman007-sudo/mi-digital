export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  process: string[];
  deliverables: string[];
  faq: ServiceFaq[];
  keywords: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "performans-pazarlama",
    title: "Performans Pazarlama",
    shortDescription:
      "Google, Meta ve TikTok reklamlarında ölçülebilir büyüme ve sürdürülebilir ROAS yönetimi.",
    longDescription:
      "Kanal bazlı kampanya yönetiminden kreatif test planına kadar tüm performans sürecini veri odaklı ilerletiriz. Hedefimiz yalnızca trafik değil, satışa dönüşen doğru kullanıcıyı en verimli maliyetle getirmektir.",
    process: [
      "Hedef kitle ve teklif analizi",
      "Kanal stratejisi ve bütçe planı",
      "Kreatif test matrisi",
      "Haftalık optimizasyon ve raporlama",
    ],
    deliverables: [
      "Reklam hesabı yapılandırması",
      "UTM ve dönüşüm takip planı",
      "Haftalık performans raporu",
      "Aylık büyüme önerileri",
    ],
    faq: [
      {
        question: "İlk sonuçları ne zaman görürüz?",
        answer:
          "Genellikle ilk 2-4 haftada maliyet ve dönüşüm trendlerini net şekilde görmeye başlarız.",
      },
      {
        question: "Minimum reklam bütçesi gerekiyor mu?",
        answer:
          "Sektör ve hedefe göre değişir. İlk görüşmede en verimli başlangıç bütçesini birlikte belirliyoruz.",
      },
    ],
    keywords: [
      "performans pazarlama ajansı",
      "google ads yönetimi",
      "meta reklam yönetimi",
    ],
  },
  {
    slug: "seo-icerik-stratejisi",
    title: "SEO ve İçerik Stratejisi",
    shortDescription:
      "Arama niyeti odaklı teknik SEO, içerik planı ve düzenli optimizasyonla kalıcı organik büyüme.",
    longDescription:
      "Teknik SEO denetimi, anahtar kelime kümeleri ve içerik üretim planını tek sistemde yönetiriz. Böylece siteniz hem arama motorlarına hem kullanıcı deneyimine uyumlu bir şekilde büyür.",
    process: [
      "Teknik SEO denetimi",
      "Keyword cluster ve içerik haritası",
      "On-page optimizasyon",
      "Aylık içerik ve performans takibi",
    ],
    deliverables: [
      "Teknik SEO raporu",
      "3 aylık içerik takvimi",
      "Sayfa bazlı title/meta önerileri",
      "Search Console büyüme raporu",
    ],
    faq: [
      {
        question: "SEO ne kadar sürede sonuç verir?",
        answer:
          "Sektöre göre değişmekle birlikte ilk görünür kazanımlar genellikle 6-10 hafta içinde başlar.",
      },
      {
        question: "Eski içerikleri de optimize ediyor musunuz?",
        answer:
          "Evet. Yeni içerik üretiminin yanında mevcut sayfaları da güncelleyerek daha hızlı kazanım elde ediyoruz.",
      },
    ],
    keywords: [
      "seo ajansı",
      "içerik stratejisi",
      "organik trafik artırma",
    ],
  },
  {
    slug: "web-tasarim-gelistirme",
    title: "Web Tasarım ve Geliştirme",
    shortDescription:
      "Hızlı, mobil odaklı ve dönüşüm optimizasyonlu kurumsal web sitesi ve landing page geliştirme.",
    longDescription:
      "Marka dilinize uygun modern arayüzler tasarlayıp performans odaklı bir teknik altyapı ile geliştiriyoruz. SEO, ölçümleme ve dönüşüm hedeflerini daha proje başında mimariye dahil ediyoruz.",
    process: [
      "UX hedefleri ve bilgi mimarisi",
      "UI tasarım sistemi",
      "Next.js geliştirme süreci",
      "Yayın, hız testi ve bakım planı",
    ],
    deliverables: [
      "Responsive arayüz",
      "Teknik SEO uyumlu kod yapısı",
      "Form ve CTA dönüşüm altyapısı",
      "Bakım ve geliştirme yol haritası",
    ],
    faq: [
      {
        question: "Siteyi kaç haftada yayına alırsınız?",
        answer:
          "Kapsama göre değişmekle birlikte standart kurumsal siteler 3-6 hafta arasında teslim edilir.",
      },
      {
        question: "Sonradan içerik eklemek kolay mı?",
        answer:
          "Evet. Genişletilebilir bir yapı kuruyoruz, yeni sayfa ve içerikler hızlıca eklenebiliyor.",
      },
    ],
    keywords: [
      "web tasarım ajansı",
      "nextjs ajans sitesi",
      "landing page geliştirme",
    ],
  },
  {
    slug: "crm-otomasyon",
    title: "CRM ve Otomasyon",
    shortDescription:
      "Lead yakalama, müşteri segmentasyonu ve otomatik takip akışları ile satış süreçlerinin hızlandırılması.",
    longDescription:
      "Satış ekibinin operasyon yükünü azaltmak ve kaçan fırsatları azaltmak için CRM ve otomasyon akışlarını kuruyoruz. Form, WhatsApp, e-posta ve kampanya kanallarını tek potada birleştiriyoruz.",
    process: [
      "Mevcut satış sürecini haritalama",
      "Lead scoring ve segment planı",
      "Otomasyon akışlarının kurulumu",
      "Raporlama ve performans iyileştirme",
    ],
    deliverables: [
      "Pipeline tasarımı",
      "Otomatik e-posta/mesaj akışları",
      "Lead kalite raporu",
      "Dönüşüm iyileştirme önerileri",
    ],
    faq: [
      {
        question: "Hangi CRM araçlarıyla çalışıyorsunuz?",
        answer:
          "İhtiyaca göre HubSpot, Pipedrive veya özel entegrasyonlarla çalışıyoruz.",
      },
      {
        question: "Küçük ekipler için de uygun mu?",
        answer:
          "Evet. Küçük ekiplerde otomasyon etkisi çok daha hızlı hissedilir.",
      },
    ],
    keywords: [
      "crm otomasyon",
      "lead yönetimi",
      "satış otomasyonu",
    ],
  },
  {
    slug: "google-ads-danismanligi",
    title: "Google Ads Danışmanlığı",
    shortDescription:
      "Arama, Performance Max ve yeniden pazarlama kampanyalarında doğru ölçümleme ve verimli bütçe yönetimi.",
    longDescription:
      "Google Ads hesaplarını arama niyetine göre yapılandırıyor; dönüşüm takibi, negatif anahtar kelime yönetimi, reklam metinleri ve teklif stratejisini birlikte optimize ediyoruz. Amaç yalnızca tıklama değil, satışa veya nitelikli forma dönüşen trafik üretmektir.",
    process: [
      "Hesap, pazar ve rakip analizi",
      "Dönüşüm takibi ve kampanya mimarisi",
      "Arama terimi ve negatif kelime optimizasyonu",
      "Haftalık bütçe, teklif ve dönüşüm iyileştirmesi",
    ],
    deliverables: [
      "Google Ads hesap denetimi",
      "Kampanya ve reklam grubu yapısı",
      "Dönüşüm ve UTM ölçümleme planı",
      "Aylık performans ve aksiyon raporu",
    ],
    faq: [
      {
        question: "Google Ads yönetim ücretine reklam bütçesi dahil mi?",
        answer: "Hayır. Medya bütçesi doğrudan Google'a ödenir; ajans hizmeti hesap kurulumu, yönetim, optimizasyon ve raporlamayı kapsar.",
      },
      {
        question: "Mevcut Google Ads hesabımızı devralabilir misiniz?",
        answer: "Evet. Önce mevcut hesabı ve dönüşüm kurulumunu denetler, veri kaybı oluşturmadan iyileştirme planını uygularız.",
      },
    ],
    keywords: ["google ads ajansı", "google reklam danışmanlığı", "google ads yönetimi"],
  },
  {
    slug: "meta-ads-yonetimi",
    title: "Meta Ads Yönetimi",
    shortDescription:
      "Instagram ve Facebook reklamlarında kreatif test, hedef kitle ve satış hunisi odaklı performans yönetimi.",
    longDescription:
      "Meta Ads kampanyalarını marka mesajı, kreatif varyasyon, Pixel ve Conversions API sinyalleriyle birlikte ele alıyoruz. Yeni müşteri kazanımı, yeniden pazarlama ve katalog satışlarını ayrı hedeflerle yöneterek sürdürülebilir öğrenme sistemi kuruyoruz.",
    process: [
      "Pixel, katalog ve olay ölçümleme kontrolü",
      "Hedef kitle ve teklif stratejisi",
      "Kreatif test matrisi ve kampanya kurulumu",
      "Haftalık ölçekleme ve maliyet optimizasyonu",
    ],
    deliverables: [
      "Meta reklam hesabı denetimi",
      "Kampanya ve hedef kitle mimarisi",
      "Kreatif test ve içerik önerileri",
      "Satış, lead ve ROAS raporlaması",
    ],
    faq: [
      {
        question: "Instagram reklamlarında kaç kreatif test edilmeli?",
        answer: "Bütçe ve ürün sayısına göre değişir. İlk aşamada farklı mesaj ve formatları temsil eden kontrollü bir kreatif matrisiyle başlarız.",
      },
      {
        question: "Meta Pixel kurulumu hizmete dahil mi?",
        answer: "Evet. Mevcut kurulum denetlenir; gerekli web olayları ve dönüşüm öncelikleri kampanya hedefleriyle uyumlu hale getirilir.",
      },
    ],
    keywords: ["meta ads ajansı", "instagram reklam yönetimi", "facebook reklam ajansı"],
  },
];

services.push(
  {
    slug: "tiktok-ads-yonetimi", title: "TikTok Ads Yönetimi",
    shortDescription: "TikTok reklamlarında kreatif test, hedef kitle ve dönüşüm ölçümlemesi.",
    longDescription: "TikTok Ads kampanyalarını kısa video diline uygun kreatiflerle planlıyoruz. Spark Ads, dönüşüm kampanyaları ve yeniden pazarlama kurgularında izlenmeyi değil nitelikli ziyaret, talep ve satışı esas alıyoruz. Pixel ve olay verilerini kontrol ederek kreatifleri düzenli test ediyoruz.",
    process: ["Hedef kitle ve teklif analizi", "Pixel ve dönüşüm olaylarının kontrolü", "Video kreatif ve kampanya kurgusu", "Kreatif, frekans ve maliyet optimizasyonu"],
    deliverables: ["TikTok reklam hesabı denetimi", "Kampanya ve kreatif test planı", "Dönüşüm ölçümleme kontrol listesi", "Düzenli performans raporu"],
    faq: [{ question: "TikTok reklamı yalnızca genç kitleler için mi?", answer: "Hayır. Uygunluk ürün, hedef kitle ve kreatif dile bağlıdır; başlamadan önce erişim ve dönüşüm potansiyelini değerlendiririz." }, { question: "Video üretimi zorunlu mu?", answer: "Platforma uygun dikey video gerekir. Mevcut içeriklerinizi değerlendirebilir veya yeni kreatif üretim planı hazırlayabiliriz." }],
    keywords: ["tiktok ads ajansı", "tiktok reklam yönetimi", "tiktok reklam danışmanlığı"],
  },
  {
    slug: "yandex-direct-reklamlari", title: "Yandex Direct Reklamları",
    shortDescription: "Yandex arama ve reklam ağında pazara, dile ve arama niyetine uygun kampanyalar.",
    longDescription: "Yandex Direct çalışmalarında hedef pazardaki arama alışkanlıklarını ve dil farklılıklarını analiz ediyoruz. Anahtar kelime, reklam metni, negatif kelime ve açılış sayfasını aynı stratejiye bağlayıp dönüşüm verisine göre bütçeyi yönetiyoruz.",
    process: ["Hedef ülke ve dil araştırması", "Anahtar kelime ve reklam grubu yapısı", "Ölçümleme ve açılış sayfası kontrolü", "Arama terimi ve teklif optimizasyonu"],
    deliverables: ["Yandex Direct kampanya planı", "Anahtar ve negatif kelime listesi", "Reklam metni varyasyonları", "Dönüşüm ve maliyet raporu"],
    faq: [{ question: "Yandex reklamları hangi markalar için uygundur?", answer: "Yandex'in güçlü olduğu pazarlarda talep yakalamak isteyen markalar için değerlendiririz; hedef ülke ve ürün uyumu belirleyicidir." }, { question: "Rusça içerik gerekir mi?", answer: "Hedef pazara göre yerel dilde reklam ve açılış sayfası öneririz. Çeviri yerine arama niyetine uygun yerelleştirme önemlidir." }],
    keywords: ["yandex direct ajansı", "yandex reklam yönetimi", "yandex reklam danışmanlığı"],
  },
  {
    slug: "yango-ads-reklamlari", title: "Yango Ads Reklamları",
    shortDescription: "Yango envanterinde hedef pazara uygun görünürlük ve performans planlaması.",
    longDescription: "Yango Ads envanterini markanın hedef coğrafyası, erişim ihtiyacı ve ölçülebilir hedefleriyle birlikte değerlendiriyoruz. Format ve envanter uygunluğunu doğruladıktan sonra hedefleme, kreatif ve raporlama planı oluşturuyoruz; uygun olmayan pazarlarda kanalı önermiyoruz.",
    process: ["Pazar ve envanter uygunluğu", "Hedef kitle ve format seçimi", "Kreatif ve takip bağlantıları", "Erişim ve dönüşüm değerlendirmesi"],
    deliverables: ["Kanal uygunluk analizi", "Medya planı", "Kreatif gereksinim listesi", "Kampanya sonuç raporu"],
    faq: [{ question: "Yango Ads her ülkede kullanılabilir mi?", answer: "Hayır. Envanter ve reklam formatları pazara göre değişir; teklif öncesi güncel erişilebilirliği doğrularız." }, { question: "Performans nasıl ölçülür?", answer: "Kampanya hedefine göre gösterim, trafik, nitelikli ziyaret ve dönüşüm sinyallerini birlikte izleriz." }],
    keywords: ["yango ads ajansı", "yango reklam yönetimi", "yango reklam danışmanlığı"],
  },
  {
    slug: "criteo-reklam-yonetimi", title: "Criteo Reklam Yönetimi",
    shortDescription: "Ürün kataloğu, yeniden hedefleme ve ticaret medyasında veri odaklı kampanyalar.",
    longDescription: "Criteo çalışmalarını ürün akışı, etiketleme ve kullanıcı yolculuğu üzerine kuruyoruz. Yeniden hedefleme ve müşteri kazanımı hedeflerini ayrı değerlendirerek ürün bazlı görünürlüğü ve satış katkısını ölçüyoruz.",
    process: ["Katalog ve etiket denetimi", "Hedef ve kitle segmentasyonu", "Dinamik reklam kurulumu", "Ürün ve kitle bazlı optimizasyon"],
    deliverables: ["Katalog sağlık kontrolü", "Kampanya ve segment planı", "Ölçümleme matrisi", "Satış katkısı raporu"],
    faq: [{ question: "Criteo için ürün kataloğu gerekir mi?", answer: "Dinamik ürün reklamları için güncel bir ürün akışı gerekir. Önce katalog kalitesini ve eşleşmesini kontrol ederiz." }, { question: "Yalnız yeniden pazarlama mı yapılır?", answer: "Hedefe ve mevcut envantere göre yeniden hedefleme ile yeni müşteri kazanımını ayrı planlayabiliriz." }],
    keywords: ["criteo ajansı", "criteo reklam yönetimi", "criteo remarketing"],
  },
  {
    slug: "programatik-reklamcilik", title: "Programatik Reklamcılık",
    shortDescription: "Display, video ve diğer dijital envanterlerde kitle ve veri odaklı medya satın alma.",
    longDescription: "Programatik medya planını erişim, frekans, görünürlük ve iş sonucunu birlikte düşünerek kuruyoruz. Envanter kalitesi, marka güvenliği, hedef kitle ve dönüşüm ölçümlemesini kampanya başlamadan tanımlıyor; sonuçlara göre optimizasyon yapıyoruz.",
    process: ["Hedef ve KPI tanımı", "Envanter ve marka güvenliği planı", "Kitle, format ve frekans kurgusu", "Görünürlük ve dönüşüm optimizasyonu"],
    deliverables: ["Programatik medya planı", "Envanter ve hariç tutma çerçevesi", "Kreatif format listesi", "Şeffaf performans raporu"],
    faq: [{ question: "Programatik reklam Google Ads ile aynı şey mi?", answer: "Hayır. Programatik satın alma daha geniş envanter, veri ve format seçeneklerini kapsayabilir; doğru çözüm hedef ve bütçeye göre seçilir." }, { question: "Marka güvenliği nasıl yönetilir?", answer: "Uygun envanter seçimi, hariç tutmalar ve görünürlük kontrolleri kampanya planının parçasıdır." }],
    keywords: ["programatik reklam ajansı", "programatik medya satın alma", "programatik reklamcılık"],
  },
  {
    slug: "linkedin-ads-yonetimi", title: "LinkedIn Ads Yönetimi",
    shortDescription: "B2B talep yaratma ve karar verici kitlelere yönelik LinkedIn kampanyaları.",
    longDescription: "LinkedIn Ads stratejisini sektör, rol ve şirket profiline göre tasarlıyoruz. Form, web sitesi dönüşümü ve içerik kampanyalarını satış ekibinin nitelikli talep tanımıyla eşleştirip yalnızca lead sayısını değil kalitesini de izliyoruz.",
    process: ["İdeal müşteri profili", "Teklif ve içerik kurgusu", "Kampanya ve dönüşüm takibi", "Lead kalitesi değerlendirmesi"],
    deliverables: ["B2B hedef kitle planı", "Reklam ve form varyasyonları", "CRM takip önerileri", "Lead kalite raporu"],
    faq: [{ question: "LinkedIn reklamları kimler için uygun?", answer: "Özellikle B2B ürün ve hizmetlerde karar verici kitlelere erişmek için uygundur; teklif ve satış döngüsü önemli değişkenlerdir." }, { question: "Lead sayısı mı kalitesi mi önemli?", answer: "İkisini birlikte izleriz. Satışa dönüşmeyen düşük maliyetli formlar tek başına başarı sayılmaz." }],
    keywords: ["linkedin ads ajansı", "linkedin reklam yönetimi", "b2b reklam ajansı"],
  },
  {
    slug: "youtube-ads-reklamlari", title: "YouTube Ads Reklamları",
    shortDescription: "Video kampanyalarında erişim, izlenme ve dönüşümü birlikte planlama.",
    longDescription: "YouTube reklamlarını marka bilinirliği ile performans hedefleri arasında doğru konumlandırıyoruz. Video açılışı, mesaj, hedef kitle ve frekans testleriyle bütçenin izlenme kalitesine ve iş sonucuna katkısını takip ediyoruz.",
    process: ["Video ve hedef analizi", "Kitle ve format seçimi", "Kreatif varyasyon testi", "Frekans ve dönüşüm optimizasyonu"],
    deliverables: ["YouTube kampanya planı", "Video kreatif önerileri", "Ölçümleme kurulumu", "Erişim ve dönüşüm raporu"],
    faq: [{ question: "YouTube reklamı için uzun video gerekir mi?", answer: "Hayır. Mesaja ve formata göre kısa veya uzun kurgu kullanılabilir; ilk saniyelerin etkisi özellikle önemlidir." }, { question: "Satışa katkısı ölçülebilir mi?", answer: "Uygun dönüşüm takibiyle doğrudan ve destekleyici etkiyi birlikte değerlendirebiliriz." }],
    keywords: ["youtube ads ajansı", "youtube reklam yönetimi", "video reklam ajansı"],
  },
);

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
