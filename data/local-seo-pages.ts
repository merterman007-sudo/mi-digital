export type LocalSeoPage = {
  slug: string;
  city: string;
  serviceTitle: string;
  seoTitle: string;
  description: string;
  intro: string;
  bullets: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  relatedServiceSlug: string;
};

export const localSeoPages: LocalSeoPage[] = [
  {
    slug: "istanbul-dijital-pazarlama-ajansi",
    city: "İstanbul",
    serviceTitle: "Dijital Pazarlama Ajansı",
    seoTitle: "İstanbul Dijital Pazarlama Ajansı",
    description:
      "İstanbul'da performans reklam, SEO ve dönüşüm odaklı büyüme stratejisi sunan MI DIGITAL ile markanızı ölçekleyin.",
    intro:
      "İstanbul merkezli markalar için dijital pazarlama süreci yalnızca reklam yayına almak değildir. Doğru kanal seçimi, bütçe dağılımı ve ölçümleme altyapısı birlikte kurgulanmalıdır.",
    bullets: [
      "Google Ads ve Meta Ads performans yönetimi",
      "SEO ve içerik stratejisi ile organik büyüme",
      "Landing page ve teklif formu dönüşüm optimizasyonu",
      "Haftalık raporlama ve net aksiyon planı",
    ],
    faq: [
      {
        question: "İstanbul'da dijital ajans seçiminde nelere dikkat edilmeli?",
        answer:
          "Ajansın sadece reklam yönetmesi değil, ölçümleme, içerik ve dönüşüm tarafında da entegre çalışması gerekir.",
      },
      {
        question: "Küçük bütçeyle başlamak mümkün mü?",
        answer:
          "Evet. Doğru kampanya yapısıyla bütçeyi kontrollü kullanarak ölçülebilir sonuçlar elde edebilirsiniz.",
      },
    ],
    relatedServiceSlug: "performans-pazarlama",
  },
  {
    slug: "istanbul-seo-ajansi",
    city: "İstanbul",
    serviceTitle: "SEO Ajansı",
    seoTitle: "İstanbul SEO Ajansı",
    description:
      "İstanbul SEO ajansı arayan markalar için teknik SEO, içerik cluster ve dönüşüm odaklı organik büyüme hizmeti.",
    intro:
      "SEO süreci sadece blog yazmak değil; teknik altyapı, anahtar kelime cluster mimarisi ve düzenli optimizasyon disiplinidir.",
    bullets: [
      "Teknik SEO denetimi ve düzeltme planı",
      "Arama niyeti odaklı içerik cluster yapısı",
      "On-page iyileştirme ve dahili link stratejisi",
      "Search Console tabanlı aylık büyüme raporu",
    ],
    faq: [
      {
        question: "SEO çalışması ne kadar sürede sonuç verir?",
        answer:
          "Sektöre göre değişmekle birlikte ilk görünür etkiler genellikle 6-10 hafta içinde başlar.",
      },
      {
        question: "Sadece yeni içerik mi üretilecek?",
        answer:
          "Hayır. Mevcut sayfalar da optimize edilerek daha hızlı performans kazanımı hedeflenir.",
      },
    ],
    relatedServiceSlug: "seo-icerik-stratejisi",
  },
  {
    slug: "istanbul-google-ads-yonetimi",
    city: "İstanbul",
    serviceTitle: "Google Ads Yönetimi",
    seoTitle: "İstanbul Google Ads Yönetimi",
    description:
      "İstanbul'da Google Ads yönetimi ile daha düşük maliyetle daha fazla dönüşüm almak isteyen markalar için performans odaklı hizmet.",
    intro:
      "Google Ads'te performans artışı daha fazla bütçe harcamakla değil, doğru hesap yapısı ve sürekli optimizasyonla mümkündür.",
    bullets: [
      "Hesap kurulumu ve dönüşüm takibi",
      "Anahtar kelime, negatif kelime ve teklif yönetimi",
      "Kreatif test planı ve reklam metni optimizasyonu",
      "ROAS ve CPA odaklı haftalık optimizasyon",
    ],
    faq: [
      {
        question: "Google Ads yönetiminde en kritik adım nedir?",
        answer:
          "Sağlıklı dönüşüm ölçümlemesi. Ölçümleme doğru değilse kampanya optimizasyonu da doğru ilerlemez.",
      },
      {
        question: "Hangi raporları düzenli takip etmeliyim?",
        answer:
          "Maliyet, dönüşüm, dönüşüm maliyeti ve gelir metrikleri haftalık düzende takip edilmelidir.",
      },
    ],
    relatedServiceSlug: "performans-pazarlama",
  },
];

export function getLocalSeoPageBySlug(slug: string) {
  return localSeoPages.find((item) => item.slug === slug);
}
