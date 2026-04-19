const TO_EMAIL = 'apkzoz85@gmail.com'

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, phone, project, ...tracking } = body

    if (!name || !phone) {
      return Response.json({ error: 'Name and phone required' }, { status: 400 })
    }

    const now = new Date().toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' })

    // بناء محتوى الإيميل كـ plain text أو HTML عن طريق FormSubmit
    const utmInfo = tracking.utm_source
      ? `${tracking.utm_source}${tracking.utm_medium ? ' / ' + tracking.utm_medium : ''}${tracking.utm_campaign ? ' / ' + tracking.utm_campaign : ''}`
      : 'غير محدد'

    const formData = new FormData()
    formData.append('_to', TO_EMAIL)
    formData.append('_subject', `🏠 عميل جديد: ${name} — ${phone}`)
    formData.append('_template', 'table')
    formData.append('_captcha', 'false')
    formData.append('الاسم', name)
    formData.append('الهاتف', phone)
    formData.append('المشروع', project || 'لم يحدد')
    formData.append('المصدر', utmInfo)
    formData.append('الوقت', now)

    const response = await fetch(`https://formsubmit.co/ajax/${TO_EMAIL}`, {
      method: 'POST',
      body: formData,
    })

    const result = await response.json()
    console.log('✅ FormSubmit sent for lead:', name, phone, result)

    return Response.json({ success: true })
  } catch (e) {
    console.error('Lead API error:', e.message)
    return Response.json({ success: true }) // لا تبلغ الـ user بالخطأ
  }
}
