const PHONE = '01008900076'
const WA_LINK = `https://wa.me/2${PHONE}?text=مهتم بوحدات بالم هيلز في القاهرة الجديدة`

export default function ContactBar() {
  return (
    <section className="py-14 px-4 bg-[#111111]">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-white/60 text-sm leading-relaxed mb-6">
          مزيد من الأسعار والوحدات المتاحة وخطط السداد، لا تتردد في التواصل معنا
          <br />
          <span className="text-[#C9A84C] font-bold">مباشرة من بالم هيلز</span>
        </p>

        <a
          href={`tel:${PHONE}`}
          className="gold-text text-4xl font-black block mb-6 hover:opacity-80 transition-opacity"
        >
          {PHONE}
        </a>

        <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
          <a href={`tel:${PHONE}`} className="btn-phone py-4 text-base font-black rounded-xl">
            📞 اتصال
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp py-4 text-base font-black rounded-xl">
            <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.135.561 4.14 1.535 5.877L0 24l6.342-1.517A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.796 9.796 0 01-5.028-1.384l-.361-.214-3.767.902.945-3.658-.235-.374A9.754 9.754 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
            </svg>
            واتساب
          </a>
        </div>
      </div>
    </section>
  )
}
