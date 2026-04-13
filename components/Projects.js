'use client'

const PHONE = '01008900076'

const projects = [
  {
    name: 'VILLAGE DU LA CAPITALE',
    location: '📍 العاصمة الجديدة',
    img: 'https://palmhillsdev.com/wp-content/uploads/2026/02/capital-1.jpg',
    units: [
      { label: 'غرفة واحدة', price: '5,800,000 جنيه' },
      { label: 'غرفتين', price: '9,000,000 جنيه' },
      { label: '3 غرف', price: '12,500,000 جنيه' },
      { label: 'تاون هاوس', price: '20,500,000 جنيه' },
      { label: 'فيلا A', price: '37,400,000 جنيه' },
    ],
    down: '1.5%',
    years: '12',
    delivery: '2030',
    wa: `https://wa.me/2${PHONE}?text=مهتم بـ Village Du La Capitale`,
  },
  {
    name: '97 Hills',
    location: '📍 القاهرة الجديدة',
    img: 'https://palmhillsdev.com/wp-content/uploads/2026/01/2e6c0591-e94b-4152-90e9-2eadf5a198d7-1.jpeg',
    units: [
      { label: 'تاون هاوس', price: '25,200,000 جنيه' },
      { label: 'توين هاوس', price: '32,200,000 جنيه' },
      { label: 'فيلا C', price: '36,900,000 جنيه' },
      { label: 'فيلا B', price: '46,800,000 جنيه' },
      { label: 'فيلا A', price: '58,000,000 جنيه' },
    ],
    down: '2.8%',
    years: '10',
    delivery: '2030',
    wa: `https://wa.me/2${PHONE}?text=مهتم بـ 97 Hills`,
  },
  {
    name: 'Palm Hills New Cairo',
    location: '📍 القاهرة الجديدة',
    img: 'https://palmhillsdev.com/wp-content/uploads/2025/11/palm-hills-new-cairo.jpg',
    units: [
      { label: 'غرفة واحدة', price: '9,300,000 جنيه' },
      { label: 'غرفتين', price: '14,000,000 جنيه' },
      { label: '3 غرف', price: '21,300,000 جنيه' },
      { label: 'تاون هاوس كورنر', price: '29,500,000 جنيه' },
      { label: 'توين هاوس', price: '40,500,000 جنيه' },
      { label: 'فيلا نموذج C', price: '80,250,000 جنيه' },
    ],
    down: '3%',
    years: '10',
    delivery: 'يونيو 2023',
    wa: `https://wa.me/2${PHONE}?text=مهتم بـ Palm Hills New Cairo`,
  },
]

export default function Projects() {
  return (
    <section className="py-16 px-4 bg-[#0D0D0D]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase font-semibold mb-2">المشاريع المتاحة</p>
          <h2 className="text-white text-3xl font-black">
            Prices &amp; <span className="gold-text">Available Projects</span>
          </h2>
          <div className="w-12 h-0.5 gold-bg mx-auto mt-3 rounded-full" />
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              {/* Project image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  onError={e => { e.target.src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4">
                  <h3 className="text-white font-black text-xl drop-shadow">{p.name}</h3>
                  <p className="text-[#C9A84C] text-sm font-semibold">{p.location}</p>
                </div>
              </div>

              {/* Price table */}
              <div className="p-5">
                <p className="text-white/50 text-xs mb-3 font-semibold tracking-wide">الأسعار تبدأ من:</p>
                <div className="space-y-2 mb-5">
                  {p.units.map((u, j) => (
                    <div key={j} className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="text-white/70 text-sm">{u.label}</span>
                      <span className="text-[#C9A84C] font-bold text-sm">{u.price}</span>
                    </div>
                  ))}
                </div>

                {/* Payment tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#C9A84C] text-xs px-3 py-1 rounded-full font-semibold">
                    💰 مقدم {p.down}
                  </span>
                  <span className="bg-white/5 border border-white/10 text-white/70 text-xs px-3 py-1 rounded-full">
                    📅 تقسيط حتى {p.years} سنة
                  </span>
                  <span className="bg-white/5 border border-white/10 text-white/70 text-xs px-3 py-1 rounded-full">
                    🏗 الاستلام {p.delivery}
                  </span>
                </div>

                {/* CTA buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <a href={`tel:${PHONE}`} className="btn-phone py-3 text-sm font-bold">
                    📞 تفاصيل أكثر
                  </a>
                  <a href={p.wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp py-3 text-sm font-bold">
                    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.135.561 4.14 1.535 5.877L0 24l6.342-1.517A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.796 9.796 0 01-5.028-1.384l-.361-.214-3.767.902.945-3.658-.235-.374A9.754 9.754 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
                    </svg>
                    واتساب
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
