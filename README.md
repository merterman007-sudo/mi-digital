# MI DIGITAL - Statik Site

Bu proje tamamen statik yapıda çalışır.
- Next.js (statik export)
- Tailwind CSS
- TypeScript
- Framer Motion
- Form endpoint ile e-posta (FormSubmit / Formspree)

## Neden bu yapı?
- VPS zorunluluğu yok
- Netlify / Vercel free plan ile yayınlanabilir
- Bakımı kolay

## Kurulum

1. Bağımlılıkları kurun:
```bash
npm install
```

2. `.env` dosyasına form endpoint girin:
```env
NEXT_PUBLIC_FORM_ENDPOINT="https://formsubmit.co/ajax/your@email.com"
```

3. Geliştirme sunucusu:
```bash
npm run dev
```

4. Statik build:
```bash
npm run build
```

Build sonrası statik çıktı `out/` klasörüne alınır.

## FormSubmit ile kullanım (ücretsiz)

1. Endpoint'i şu formatta yazın:
`https://formsubmit.co/ajax/your@email.com`
2. İlk test gönderiminde gelen doğrulama e-postasını onaylayın.
3. Sonraki form gönderimleri otomatik olarak e-postanıza düşer.

## Rotalar

- `/` Ana sayfa

Not: Bu sürümde admin paneli ve veritabanı kaldırılmıştır.
