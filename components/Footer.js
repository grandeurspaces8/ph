export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/5 py-8 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-9 h-9 rounded-full gold-bg flex items-center justify-center">
            <span className="text-black font-black text-xs">PH</span>
          </div>
          <div className="text-right">
            <div className="text-white font-black text-base leading-none">Palm Hills</div>
            <div className="text-[#C9A84C] text-xs tracking-widest">DEVELOPMENTS</div>
          </div>
        </div>

        {/* Disclaimer - exact from site */}
        <p className="text-white/30 text-xs leading-relaxed max-w-lg mx-auto">
          هذه الصفحة تخص{' '}
          <a href="#" className="text-[#C9A84C]/60 hover:text-[#C9A84C] transition-colors">مدير مبيعات</a>
          {' '}في بالم هيلز وليست الصفحة الرسمية للمطور
        </p>
        <p className="text-white/20 text-xs leading-relaxed max-w-lg mx-auto">
          هذا الموقع يُستخدم لأغراض تسويقية وإعلامية فقط، ولا يُمثل عرضًا رسميًا للبيع.
          جميع المعلومات، بما في ذلك الأسعار وتوافر الوحدات، قابلة للتغيير دون إشعار مسبق.
        </p>

        <div className="flex items-center justify-center gap-4 pt-2">
          <a href="#" className="text-white/30 hover:text-[#C9A84C] text-xs transition-colors">سياسة الخصوصية</a>
          <span className="text-white/10">|</span>
          <a href="#" className="text-white/30 hover:text-[#C9A84C] text-xs transition-colors">من نحن</a>
        </div>

        <p className="text-white/20 text-xs">© 2025 All Rights Reserved || Palmhillsdev.com</p>
      </div>
    </footer>
  )
}
