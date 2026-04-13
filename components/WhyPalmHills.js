const reasons = [
  {
    icon: '🏅',
    title: 'مطوّر موثوق',
    desc: 'سجل قوي من الكمبوندات السكنية الناجحة اللي بيديك ثقة في الخدمة والصيانة وجودة المشروع بعد السكن.',
  },
  {
    icon: '📅',
    title: 'خطط سداد مرنة',
    desc: 'أنظمة سداد مرنة، مقدم يبدأ من 1.5% فقط، قسط يصل إلى 12 سنة.',
  },
  {
    icon: '🏠',
    title: 'موقع متميز',
    desc: 'موقع متميز على محاور وطرق رئيسية مما يجعل التنقل منها وإليها بسهولة كاملة.',
  },
]

export default function WhyPalmHills() {
  return (
    <section className="py-16 px-4 bg-[#111111]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase font-semibold mb-2">لماذا بالم هيلز؟</p>
          <h2 className="text-white text-3xl font-black">
            ليه تشتري من <span className="gold-text">Palm Hills</span>
          </h2>
          <p className="text-white/50 text-sm mt-3 max-w-md mx-auto leading-relaxed">
            عيش تجربة استثنائية مع بالم هيلز… مشاريع مبتكرة ومساحات متكاملة لمنزل وأسلوب حياة لا يُضاهى
          </p>
          <div className="w-12 h-0.5 gold-bg mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 text-center hover:border-[#C9A84C]/35 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{r.icon}</div>
              <h3 className="text-white font-black text-lg mb-2">{r.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
