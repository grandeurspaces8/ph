'use client'
import { useState } from 'react'
import { getCampaignParams } from '@/lib/utm'

const PHONE = '01008900076'
const WA_LINK = `https://wa.me/2${PHONE}?text=مهتم بوحدات بالم هيلز في القاهرة الجديدة`

export default function Hero() {
  const [form, setForm] = useState({ name: '', phone: '', project: '' })
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')

  const projects = [
    'Village Du La Capitale',
    '97 Hills',
    'Palm Hills New Cairo',
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim()) return setErr('من فضلك أدخل اسمك')
    if (!form.phone.match(/^[0-9+\s]{10,14}$/)) return setErr('رقم الهاتف غير صحيح')
    setErr('')
    setLoading(true)
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, ...getCampaignParams() }),
      })
      setDone(true)
    } catch {
      setDone(true) // show success anyway
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      className="min-h-screen relative flex items-center justify-center py-16 px-4"
      style={{
        background: `linear-gradient(135deg, rgba(13,13,13,0.97) 0%, rgba(22,18,10,0.95) 100%),
          url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80') center/cover no-repeat`,
      }}
    >
      {/* subtle gold glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-[#C9A84C]/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-md mx-auto">
        {/* Logo */}
        <div className="text-center mb-8 fade-up">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full gold-bg flex items-center justify-center shadow-lg shadow-[#C9A84C]/30">
              <span className="text-black font-black text-sm">PH</span>
            </div>
            <div className="text-right">
              <div className="text-white font-black text-xl leading-none tracking-wide">Palm Hills</div>
              <div className="text-[#C9A84C] text-xs tracking-[0.2em] font-semibold">DEVELOPMENTS</div>
            </div>
          </div>

          <h1 className="text-white text-3xl font-black leading-tight mb-2">
            امتلك وحدتك من <span className="gold-text">بالم هيلز</span>
          </h1>
          <p className="text-white/60 text-sm leading-relaxed">
            مقدم يبدأ من <span className="text-[#C9A84C] font-bold">1.5%</span>، قسط يصل إلى <span className="text-[#C9A84C] font-bold">12 سنة</span>
            <br />وحدات كاملة التشطيب
          </p>
        </div>

        {/* Form card */}
        <div className="glass rounded-2xl overflow-hidden shadow-2xl fade-up delay-1">
          <div className="gold-bg px-6 py-4 text-center">
            <p className="text-black font-black text-base">احصل على أفضل الأسعار الآن</p>
          </div>

          {done ? (
            <div className="p-8 text-center">
              <div className="w-16 h-16 rounded-full gold-bg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#C9A84C]/30">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-black mb-2">تم الإرسال بنجاح!</h3>
              <p className="text-white/60 text-sm mb-4">سيتواصل معك فريقنا في أقرب وقت</p>
              <a href={`tel:${PHONE}`} className="btn-gold block w-full py-3 text-center text-sm font-bold">
                📞 {PHONE}
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <input
                  className="input-field"
                  placeholder="الاسم الكامل *"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <input
                  className="input-field"
                  placeholder="رقم الهاتف *"
                  type="tel"
                  dir="ltr"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div>
                <select
                  className="input-field cursor-pointer"
                  value={form.project}
                  onChange={e => setForm({ ...form, project: e.target.value })}
                >
                  <option value="">المشروع المهتم به (اختياري)</option>
                  {projects.map(p => (
                    <option key={p} value={p} className="bg-[#161616]">{p}</option>
                  ))}
                </select>
              </div>

              {err && <p className="text-red-400 text-xs text-center">{err}</p>}

              <button type="submit" disabled={loading} className="btn-gold w-full py-3.5 text-base font-black disabled:opacity-60">
                {loading ? 'جاري الإرسال...' : 'احصل على السعر الآن ←'}
              </button>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a href={`tel:${PHONE}`} className="btn-phone py-3 text-sm">
                  📞 اتصل بنا
                </a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp py-3 text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.135.561 4.14 1.535 5.877L0 24l6.342-1.517A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.796 9.796 0 01-5.028-1.384l-.361-.214-3.767.902.945-3.658-.235-.374A9.754 9.754 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
                  </svg>
                  واتساب
                </a>
              </div>

              <p className="text-white/25 text-xs text-center">
                بالإرسال توافق على التواصل معك للرد على استفسارك
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
