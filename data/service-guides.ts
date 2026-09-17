export type ServiceGuide = {
  sections: Array<{ heading: string; paragraphs: string[]; points?: string[] }>;
  relatedSlugs: string[];
};

// Editorial explanations complement the concise service summaries. Keep claims
// process-based until the agency has approved, attributable case-study results.
export const serviceGuides: Record<string, ServiceGuide> = {
  "google-ads-danismanligi": {
    sections: [
      {
        heading: "Arama niyetinden satışa uzanan hesap yapısı",
        paragraphs: [
          "Google Ads hesabını yalnızca ürün isimlerine göre değil, kullanıcının arama anındaki ihtiyacına göre düzenleriz. Marka aramaları, çözüm aramaları ve araştırma aşamasındaki sorgular aynı beklentiyle yönetilmez. Reklam grubu, metin ve açılış sayfası arasında tutarlı bir vaat kurar; ilgisiz sorguları negatif kelimelerle ayıklarız.",
          "Performance Max gibi otomasyon ağırlıklı kampanyaları, dönüşüm verisinin kalitesi ve ürün akışı hazır olmadan sihirli çözüm olarak konumlandırmayız. Arama kampanyası, katalog ve yeniden pazarlamanın görevlerini ayrı tanımlar; bütçe dağılımını hedeflenen müşteri türü ve kârlılığa göre gözden geçiririz.",
        ],
        points: ["Arama terimi ve negatif kelime incelemesi", "Reklam vaadiyle uyumlu açılış sayfası", "Kampanya türüne göre ayrı başarı ölçütü"],
      },
      {
        heading: "Dönüşüm verisini güvenilir hale getiririz",
        paragraphs: [
          "Form, telefon, WhatsApp veya satış olaylarından hangisinin işletme için gerçek değer taşıdığını belirleriz. Aynı talebin birden fazla dönüşüm olarak sayılması, test formlarının sonuçlara karışması ya da yalnızca sayfa görüntülemenin başarı sayılması teklif stratejisini yanıltabilir. Ölçüm kurulumunu önce bu riskler için denetleriz.",
          "Haftalık kararlarda gösterim payı ve tıklama maliyetinin yanında arama terimi kalitesi, nitelikli talep, satışa dönüşüm ve mümkünse katkı marjı izlenir. Sonuçlar sektöre, teklif gücüne ve veri hacmine göre değiştiğinden belirli bir ROAS veya ilk hafta satış garantisi vermeyiz.",
        ],
      },
    ],
    relatedSlugs: ["meta-ads-yonetimi", "web-tasarim-gelistirme"],
  },
  "meta-ads-yonetimi": {
    sections: [
      {
        heading: "Kreatif, teklif ve ölçümleme birlikte çalışmalı",
        paragraphs: [
          "Instagram ve Facebook kampanyalarında hedef kitle ayarları tek başına zayıf bir teklifi düzeltemez. Kullanıcının neden durup reklamı izleyeceğini, ürünü neden şimdi değerlendireceğini ve tıkladığında hangi sayfayla karşılaşacağını birlikte planlarız. Farklı mesaj, görsel ve video açılışları için test hipotezleri oluştururuz.",
          "Yeni müşteri edinme, yeniden pazarlama ve mevcut müşteri iletişimini ayrı değerlendiririz. Katalog kullanan e-ticaret markalarında ürün verisi ile site fiyat ve stok bilgisinin uyumuna bakarız. Lead kampanyalarında ise form sayısının yanında talebin niteliği ve satış ekibinin geri bildirimi önemlidir.",
        ],
        points: ["Mesaj ve kreatif varyasyonları", "Pixel, olay ve katalog sağlığı", "Yeni müşteri ile yeniden pazarlama sonuçlarını ayırma"],
      },
      {
        heading: "Platform raporunu iş sonucuyla karşılaştırırız",
        paragraphs: [
          "Pixel ve uygun olduğunda Conversions API sinyallerini kontrol eder; olayların mükerrer sayılıp sayılmadığını inceleriz. Meta'nın raporladığı dönüşümler analitik veya CRM verisiyle farklı atıf pencerelerine sahip olabilir. Bu farkı açıklamadan tüm kanal sonuçlarını tek bir toplam gelir gibi sunmayız.",
          "Kreatif yorgunluğu, frekans, tıklama sonrası davranış ve dönüşüm maliyeti aynı tabloda yorumlanır. Kampanya öğrenmesini sık değişikliklerle bölmeden, yeterli veri oluştuğunda bütçe ve kreatif kararları alırız. Doğru test süresi, bütçe ve satış döngüsüne bağlıdır.",
        ],
      },
    ],
    relatedSlugs: ["google-ads-danismanligi", "tiktok-ads-yonetimi"],
  },
  "tiktok-ads-yonetimi": {
    sections: [
      {
        heading: "TikTok'ta kampanya, videodan önce hedefle başlar",
        paragraphs: [
          "TikTok'ta dikkat çekmek ve satış üretmek aynı hedef değildir. Önce ürünün kime, hangi problem için ve hangi teklifle sunulduğunu netleştiririz. Ardından erişim, site ziyareti veya dönüşüm hedefi için ayrı kampanya ve ölçüm planı kurarız. Başarılı görünen bir izlenme rakamını tek başına ticari sonuç saymayız.",
          "Mevcut videoları platform diline uygunluk açısından inceleriz: ilk saniyelerdeki mesaj, ürünün kullanım bağlamı, altyazı, dikey kadraj ve kapanış çağrısı. Yeni kreatif gerekiyorsa farklı açılışlar ve teklif anlatımları için test listesi hazırlarız. Kullanıcı üretimi hissi veren bir video ile yüksek prodüksiyonlu bir videonun hangisinin işe yarayacağını varsaymak yerine kontrollü karşılaştırırız.",
        ],
        points: ["Kreatif hipotezi ve her varyasyonun hedefi", "Pixel olayları ve açılış sayfası uyumu", "Harcanan bütçe, nitelikli ziyaret ve dönüşümün birlikte okunması"],
      },
      {
        heading: "Ölçüm ve optimizasyon nasıl ilerler?",
        paragraphs: [
          "TikTok Pixel ve mevcutsa sunucu tarafı olaylarının doğru tetiklendiğini, dönüşümlerin mükerrer sayılmadığını ve UTM parametrelerinin analitik araçlara aktığını kontrol ederiz. İlk veriler geldikten sonra kreatif yorgunluğu, video tutma oranı, tıklama sonrası davranış ve dönüşüm maliyetini birlikte değerlendiririz.",
          "Bütçeyi bir anda çok sayıda kitle ve kreatife bölmek öğrenmeyi zorlaştırabilir. Testleri önceliklendirir, yeterli sinyal oluştuğunda başarılı mesajları genişletiriz. TikTok'un sizin ürününüz için doğru kanal olup olmadığını da hedef kitle ve üretilebilir kreatif kapasitesine göre dürüstçe değerlendiririz.",
        ],
      },
    ],
    relatedSlugs: ["meta-ads-yonetimi", "performans-pazarlama"],
  },
  "yandex-direct-reklamlari": {
    sections: [
      {
        heading: "Hangi pazarda, hangi arama niyeti?",
        paragraphs: [
          "Yandex Direct planı Türkiye'deki Google Ads kampanyasını başka bir arayüze taşımak değildir. Hedef ülkede Yandex kullanımını, arama talebini, dil varyasyonlarını ve satış operasyonunun o pazara hizmet verip veremeyeceğini önceden inceleriz. Pazarda talep veya yerelleştirilmiş teklif yoksa kampanya açmayı önermeyiz.",
          "Ürün ve hizmetleri arama niyetine göre gruplandırır; marka, kategori ve çözüm aramalarını ayrı ele alırız. Reklam metninin dili kadar açılış sayfasındaki para birimi, teslimat bilgisi, iletişim seçeneği ve güven unsurları da hedef pazara uygun olmalıdır. Kelimesi kelimesine çeviri çoğu zaman yeterli değildir.",
        ],
        points: ["Pazar ve dil uygunluk kontrolü", "Arama terimleri ve negatif kelime kümeleri", "Yerelleştirilmiş reklam–açılış sayfası eşleşmesi"],
      },
      {
        heading: "Bütçeyi hangi veriye göre değiştiririz?",
        paragraphs: [
          "Kampanya başında dönüşüm hedefini ve izleme bağlantılarını tanımlarız. Ardından arama terimleri, cihaz, coğrafya ve saat dilimi performansını yalnızca tıklama hacmine göre değil; nitelikli talep, sipariş veya satışa katkı üzerinden okuruz. Düşük kaliteli sorguları dışlar, işe yarayan gruplara kontrollü bütçe aktarırız.",
          "Yandex'in reklam formatları ve kullanılabilir envanteri ülkeye göre değişebileceğinden, kapsamı teklif aşamasında güncel hesap koşullarıyla doğrularız. Bu sayfa her ülkede her formatın kullanılabileceği vaadi değildir.",
        ],
      },
    ],
    relatedSlugs: ["google-ads-danismanligi", "programatik-reklamcilik"],
  },
  "yango-ads-reklamlari": {
    sections: [
      {
        heading: "Önce envanter uygunluğunu doğrularız",
        paragraphs: [
          "Yango Ads her marka ve pazarda aynı reklam alanlarını sunmaz. Bu nedenle ilk çalışma, hedef coğrafyada erişilebilir formatları, kitle kapsamını, minimum satın alma koşullarını ve ölçüm seçeneklerini doğrulamaktır. Uygun envanter yoksa sırf yeni bir mecra kullanmış olmak için bütçe ayırmayız.",
          "Uygunluk sağlandığında kampanyanın görevi açıkça tanımlanır: yerel bilinirlik mi, uygulama etkileşimi mi, site trafiği mi? Kreatif ölçüleri ve mesajı seçilen yerleşime göre hazırlanır; reklamın vaat ettiği şeyin açılış sayfasında karşılık bulması kontrol edilir.",
        ],
        points: ["Pazar, format ve satın alma koşulları", "Yerleşimle uyumlu mesaj ve kreatif", "Takip bağlantıları ve karşılaştırılabilir KPI'lar"],
      },
      {
        heading: "Erişimi iş sonucundan ayırırız",
        paragraphs: [
          "Gösterim ve tıklama, kullanıcının siteye geldikten sonraki davranışıyla birlikte değerlendirilmelidir. UTM etiketleri, analitik olayları ve mümkünse dönüşüm verileriyle kanalın katkısını takip ederiz. Farklı mecraların raporlarındaki atıf farklarını tek bir kesin satış rakamı gibi sunmayız.",
          "Yango'yu arama veya sosyal reklamların otomatik alternatifi olarak değil, hedef ve envanter uygunsa medya karmasının bir parçası olarak planlarız. Test bütçesi ve devam kararı kampanya başlamadan belirlenen başarı ölçütüne dayanır.",
        ],
      },
    ],
    relatedSlugs: ["yandex-direct-reklamlari", "programatik-reklamcilik"],
  },
  "criteo-reklam-yonetimi": {
    sections: [
      {
        heading: "Katalog ve veri kalitesi kampanyanın temelidir",
        paragraphs: [
          "Criteo ile dinamik ürün reklamı planlarken ilk kontrol reklam görseli değil ürün akışıdır. Ürün kimlikleri, stok, fiyat, görsel ve hedef URL'lerin sitedeki gerçek bilgilerle eşleşmesi gerekir. Eksik veya eski katalog verisi, doğru kişiye yanlış ürünün gösterilmesine ve bütçe kaybına yol açabilir.",
          "Etiket olaylarını ve ürün eşleşmesini inceleyerek ziyaret, ürün görüntüleme, sepete ekleme ve satın alma adımlarının doğru aktarıldığını doğrularız. Yeniden hedefleme ile yeni müşteri kazanımını farklı beklentiler ve raporlarla ele alırız; mevcut müşteriye yapılan satışı otomatik olarak yeni müşteri başarısı saymayız.",
        ],
        points: ["Ürün akışı ve hedef URL sağlığı", "Olay–ürün kimliği eşleşmesi", "Yeni müşteri ve yeniden hedefleme için ayrı değerlendirme"],
      },
      {
        heading: "Ürün bazında neyi optimize ederiz?",
        paragraphs: [
          "Tüm kataloğa aynı bütçeyi ayırmak yerine stok durumu, ürün marjı, sezonluk talep ve satış katkısını birlikte değerlendiririz. İade ve indirim etkisi yüksek kategorilerde yalnızca reklam geliri üzerinden ROAS okumak yanıltıcı olabilir; mümkün olduğunda işin kârlılık verisini de karara dahil ederiz.",
          "Katalog hacmi, trafik ve ölçüm altyapısı sınırlıysa dinamik reklamın beklenen katkısını başlangıçta açıkça konuşuruz. Criteo'nun doğru araç olmadığı durumda daha uygun kanal veya önce veri altyapısı iyileştirmesi öneririz.",
        ],
      },
    ],
    relatedSlugs: ["programatik-reklamcilik", "meta-ads-yonetimi"],
  },
  "programatik-reklamcilik": {
    sections: [
      {
        heading: "Programatik planın başlangıcı envanter listesi değil iş hedefidir",
        paragraphs: [
          "Programatik satın alma; display, video ve uygun diğer dijital envanterlerde hedef kitle, format ve bütçeyi bir arada yönetme olanağı sağlar. Fakat daha fazla gösterim tek başına başarı değildir. Önce kime ulaşılacağını, kampanyanın bilinirlik mi değerlendirme mi dönüşüm mü hedeflediğini ve hangi göstergelerin karar vereceğini belirleriz.",
          "Medya planında coğrafya, cihaz, frekans, envanter niteliği ve marka güvenliği koşullarını açıkça yazarız. Hariç tutulacak içerik veya yerleşimler, görünürlük beklentisi ve kreatif boyutları kampanya başlamadan netleşir. En ucuz gösterimi değil, hedefe uygun ve doğrulanabilir gösterimi ararız.",
        ],
        points: ["Hedef–KPI ve envanter eşleşmesi", "Marka güvenliği, görünürlük ve frekans sınırları", "Kreatif, açılış sayfası ve ölçüm planı"],
      },
      {
        heading: "Raporun gösterimden sonraki kısmı",
        paragraphs: [
          "Raporlamada erişim, frekans ve görünürlük kadar nitelikli ziyaret, dönüşüm ve kampanyanın diğer kanallarla ilişkisini de gösteririz. Platformların atıf modelleri farklı olabileceğinden toplam sonuçları mükerrer saymamak için kaynakları karşılaştırırız. Gerekli olduğunda yerleşim ve kitle bazında bütçeyi azaltır veya kampanyayı durdururuz.",
          "Programatik her bütçe için doğru başlangıç kanalı olmayabilir. Kreatif üretimi, ölçümleme ve erişilebilir envanter maliyeti hedefle uyumlu değilse önce arama veya sosyal kampanyalardan öğrenme kazanmak daha uygun olabilir.",
        ],
      },
    ],
    relatedSlugs: ["criteo-reklam-yonetimi", "performans-pazarlama"],
  },
  "linkedin-ads-yonetimi": {
    sections: [
      {
        heading: "B2B kampanyayı form sayısından ibaret görmeyiz",
        paragraphs: [
          "LinkedIn'de şirket büyüklüğü, sektör, rol ve kıdem gibi hedefleme seçenekleri ancak net bir ideal müşteri profiliyle anlam kazanır. Satış ekibiyle hangi şirketlerin ve karar vericilerin uygun olduğunu, teklifin hangi problemi çözdüğünü ve satış döngüsünün nasıl ilerlediğini belirleriz.",
          "Kampanya teklifi bir demo, danışmanlık görüşmesi veya yararlı içerik olabilir. Her teklif için reklam mesajı, form soruları ve takip süreci birbiriyle uyumlu olmalıdır. Çok kısa form daha fazla başvuru sağlayabilir ama satışa uygun olmayan talepleri de artırabilir; bu dengeyi veriyle değerlendiririz.",
        ],
        points: ["İdeal müşteri profili ve karar verici haritası", "Teklif, reklam ve formun aynı vaadi taşıması", "CRM'de lead kalitesi ve satış aşaması takibi"],
      },
      {
        heading: "Lead kalitesini nasıl ölçeriz?",
        paragraphs: [
          "Tıklama ve form maliyetinin yanında başvurunun uygun şirketten gelip gelmediğini, görüşmeye dönüşüp dönüşmediğini ve satış ekibinin geri bildirimini takip ederiz. Kampanya verisi ile CRM aşamaları arasında bağlantı kurulabiliyorsa optimizasyonu yalnızca platform içi forma göre yapmayız.",
          "B2B satış süresi uzunsa kısa vadeli ROAS her zaman anlamlı değildir. Kampanya hedefini ve değerlendirme süresini satış döngüsüne göre kurar, yeniden pazarlama veya içerik temaslarını uygun olduğunda plana ekleriz.",
        ],
      },
    ],
    relatedSlugs: ["crm-otomasyon", "performans-pazarlama"],
  },
  "youtube-ads-reklamlari": {
    sections: [
      {
        heading: "Video mesajını kampanya amacına göre kurarız",
        paragraphs: [
          "YouTube'da bir marka tanıtımı ile doğrudan talep toplama kampanyasının başarı ölçütleri aynı değildir. Önce erişmek istediğiniz kitleyi, videonun tek ana mesajını ve izleyicinin sonraki adımını belirleriz. İlk saniyelerde marka, problem ve teklifin nasıl anlatıldığı kreatif testin önemli parçasıdır.",
          "Mevcut videoları süre, kadraj, altyazı ve çağrı açısından inceleriz. Tek videonun her yerleşimde aynı sonucu vermesini beklemeyiz; kısa ve uzun anlatımları, farklı açılışları ve uygun formatları kontrollü biçimde test ederiz. Videonun yönlendirdiği sayfanın mesajı devam ettirmesi gerekir.",
        ],
        points: ["Bilinirlik ve dönüşüm hedeflerini ayırma", "İlk saniyeler, mesaj ve format varyasyonları", "Frekans ve açılış sayfası deneyimi"],
      },
      {
        heading: "İzlenmeden sonra hangi sinyale bakılır?",
        paragraphs: [
          "İzlenme, erişim ve frekans videonun dağıtımını gösterir; tıklama sonrası davranış ve dönüşüm ise iş hedefine yaklaşımı anlatır. Görüntülemeli dönüşümler farklı atıf pencerelerinde değişebilir. Bu nedenle farklı raporlardaki sayıları toplamak yerine aynı tanımlarla karşılaştırırız.",
          "Kampanya sonucuna göre hedef kitle, kreatif açılışı, yerleşim ve frekansı değiştiririz. Video üretim kapasitesi veya uygun bütçe yoksa önce daha küçük bir testin neyi öğrenebileceğini konuşuruz; garanti satış vaadi vermeyiz.",
        ],
      },
    ],
    relatedSlugs: ["google-ads-danismanligi", "tiktok-ads-yonetimi"],
  },
};
