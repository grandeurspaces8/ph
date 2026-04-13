const RESEND_API_KEY = process.env.RESEND_API_KEY
const TO_EMAIL = 'nadaabdelrahman777@gmail.com'

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, phone, project, ...tracking } = body

    if (!name || !phone) {
      return Response.json({ error: 'Name and phone required' }, { status: 400 })
    }

    const now = new Date().toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' })

    // Send email via Resend
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Palm Hills Leads <onboarding@resend.dev>',
        to: TO_EMAIL,
        subject: `🏠 عميل جديد: ${name} — Palm Hills East Cairo`,
        html: `
          <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 520px; margin: 0 auto; background: #0d0d0d; color: #fff; border-radius: 12px; overflow: hidden;">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #C9A84C, #E2C06A); padding: 24px; text-align: center;">
              <h1 style="margin: 0; color: #000; font-size: 20px; font-weight: 900;">🏠 عميل جديد — Palm Hills</h1>
              <p style="margin: 4px 0 0; color: #333; font-size: 13px;">${now}</p>
            </div>

            <!-- Body -->
            <div style="padding: 28px 24px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #C9A84C; font-weight: bold; width: 35%;">الاسم</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #fff;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #C9A84C; font-weight: bold;">الهاتف</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #fff;">
                    <a href="tel:${phone}" style="color: #E2C06A;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #C9A84C; font-weight: bold;">المشروع</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #fff;">${project || 'لم يحدد'}</td>
                </tr>
                ${tracking.utm_source ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 12px;">المصدر</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 12px;">${tracking.utm_source || ''} / ${tracking.utm_medium || ''} / ${tracking.utm_campaign || ''}</td>
                </tr>` : ''}
              </table>

              <!-- CTA -->
              <div style="margin-top: 24px; text-align: center;">
                <a href="https://wa.me/2${phone}?text=أهلاً ${name}، أنا من فريق بالم هيلز بتواصل معاك بخصوص استفساركم"
                   style="display: inline-block; background: #25D366; color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px; margin-left: 8px;">
                  💬 واتساب العميل
                </a>
                <a href="tel:${phone}"
                   style="display: inline-block; background: #C9A84C; color: #000; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px;">
                  📞 اتصل الآن
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="padding: 16px 24px; background: #111; text-align: center;">
              <p style="margin: 0; color: #555; font-size: 11px;">Palm Hills East Cairo Campaign — تم الإرسال تلقائياً</p>
            </div>
          </div>
        `,
      }),
    })

    if (!emailRes.ok) {
      const err = await emailRes.text()
      console.error('Resend error:', err)
      // Still return success to user — don't block the UX
    }

    console.log('📩 New Lead:', { name, phone, project })
    return Response.json({ success: true })

  } catch (e) {
    console.error('Lead API error:', e)
    return Response.json({ success: true }) // always succeed to user
  }
}
