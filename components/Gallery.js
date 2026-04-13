'use client'
import { useState } from 'react'

const images = [
  'https://palmhillsdev.com/wp-content/uploads/2026/01/1fb51df3-8fdb-4cb1-8122-2c375d2a8322-1.jpeg',
  'https://palmhillsdev.com/wp-content/uploads/2026/01/2e6c0591-e94b-4152-90e9-2eadf5a198d7-1.jpeg',
  'https://palmhillsdev.com/wp-content/uploads/2025/11/palm-hills-new-cairo.jpg',
  'https://palmhillsdev.com/wp-content/uploads/2025/11/life-Badya-10.jpeg',
  'https://palmhillsdev.com/wp-content/uploads/2026/03/1.jpg',
  'https://palmhillsdev.com/wp-content/uploads/2026/03/6.jpg',
  'https://palmhillsdev.com/wp-content/uploads/2026/03/7.jpg',
  'https://palmhillsdev.com/wp-content/uploads/2026/03/8.jpg',
]

const fallback = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'

export default function Gallery() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-16 px-4 bg-[#0D0D0D]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase font-semibold mb-2">الصور</p>
          <h2 className="text-white text-3xl font-black">معرض <span className="gold-text">المشاريع</span></h2>
          <div className="w-12 h-0.5 gold-bg mx-auto mt-3 rounded-full" />
        </div>

        {/* Main image */}
        <div className="relative rounded-2xl overflow-hidden h-64 md:h-96 mb-4 border border-[#C9A84C]/15">
          <img
            src={images[active]}
            alt={`Project ${active + 1}`}
            className="w-full h-full object-cover transition-all duration-500"
            onError={e => { e.target.src = fallback }}
          />
          {/* nav arrows */}
          <button
            onClick={() => setActive((active - 1 + images.length) % images.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#C9A84C]/80 transition-colors"
          >›</button>
          <button
            onClick={() => setActive((active + 1) % images.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#C9A84C]/80 transition-colors"
          >‹</button>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-xl overflow-hidden aspect-square border-2 transition-all ${
                active === i ? 'border-[#C9A84C] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" onError={e => { e.target.src = fallback }} />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
