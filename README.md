# Portfolio

Bu proje, geliştiricinin öne çıkan projelerini sergilemek için hazırlanmış modern ve duyarlı bir portföy sitesidir.

## Özellikler
- Proje filtreleme (kategoriye göre)
- Projeleri üçerli gösterme ve "Load More" ile daha fazlasını görüntüleme
- Her proje için detay kartı (teknolojiler, açıklama, görsel, GitHub ve canlı linkler)
- Mobil uyumlu ve modern tasarım

## Kullanılan Teknolojiler
- React
- TypeScript
- Tailwind CSS
- Vite

## Kurulum

1. **Depoyu klonlayın:**
   ```bash
   git clone <repo-url>
   cd portfolio
   ```
2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```
3. **Projeyi başlatın:**
   ```bash
   npm run dev
   ```

## Klasör Yapısı
```
src/
  components/
    About/
    Projects/
      ProjectCard.tsx
      ProjectsData.tsx
      ProjectsSection.tsx
      ProjectFilter.tsx
```

## Özelleştirme
- `src/components/Projects/ProjectsData.tsx` dosyasından projelerinizi ve kategorileri düzenleyebilirsiniz.
- Görseller için uygun URL'ler kullanabilirsiniz.

## Katkı
Katkıda bulunmak isterseniz, lütfen bir pull request açın veya issue oluşturun.

## Lisans
Bu proje MIT lisansı ile lisanslanmıştır. 