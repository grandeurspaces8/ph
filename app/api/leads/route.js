import nodemailer from 'nodemailer'

const TO_EMAIL = 'nada.abdelrahman@grandeur-spaces.com'

function buildEmailHTML(name, phone, project, tracking, now) {
  return `
  <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 520px; margin: 0 auto; border-radius: 12px; overflow: hidden; border: 1px solid #e0c97a;">
    <div style="background: linear-gradient(135deg, #C9A84C, #E2C06A); padding: 24px; text-align: center;">
      <h1 style="margin: 0; color: #000; font-size: 20px; font-weight: 900;">🏠 عميل جديد — Palm Hills</h1>
      <p style="margin: 6px 0 0; color: #333; font-size: 13px;">${now}</p>
    </div>
    <div style="padding: 28px 24px; background: #1a1a1a; color: #fff;">
      <table style="width:100%; border-collapse:collapse;">
        <tr>
          <td style="padding:12px 0; border-bottom:1px solid #333; color:#C9A84C; font-weight:bold; width:35%;">الاسم</td>
          <td style="padding:12px 0; border-bottom:1px solid #333; color:#fff; font-size:16px; font-weight:bold;">${name}</td>
        </tr>
        <tr>
          <td style="padding:12px 0; border-bottom:1px solid #333; color:#C9A84C; font-weight:bold;">الهاتف</td>
          <td style="padding:12px 0; border-bottom:1px solid #333;">
            <a href="tel:${phone}" style="color:#E2C06A; font-size:16px; font-weight:bold;">${phone}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 0; border-bottom:1px solid #333; color:#C9A84C; font-weight:bold;">المشروع</td>
          <td style="padding:12px 0; border-bottom:1px solid #333; color:#fff;">${project || 'لم يحدد'}</td>
        </tr>
        ${tracking.utm_source ? `
        <tr>
          <td style="padding:10px 0; color:#666; font-size:12px;">المصدر</td>
          <td style="padding:10px 0; color:#666; font-size:12px;">${tracking.utm_source || ''}${tracking.utm_medium ? ' / ' + tracking.utm_medium : ''}${tracking.utm_campaign ? ' / ' + tracking.utm_campaign : ''}</td>
        </tr>` : ''}
      </table>
      <div style="margin-top:24px; text-align:center; display:flex; gap:12px; justify-content:center;">
        <a href="https://wa.me/2${phone}?text=أهلاً ${encodeURIComponent(name)}، أنا من فريق بالم هيلز"
           style="display:inline-block; background:#25D366; color:white; padding:12px 24px; border-radius:8px; text-decoration:none; font-weight:bold; font-size:14px; margin-left:8px;">
          💬 واتساب العميل
        </a>
        <a href="tel:${phone}"
           style="display:inline-block; background:#C9A84C; color:#000; padding:12px 24px; border-radius:8px; text-decoration:none; font-weight:bold; font-size:14px;">
          📞 اتصل الآن
        </a>
      </div>
    </div>
    <div style="padding:14px; background:#111; text-align:center;">
      <p style="margin:0; color:#555; font-size:11px;">Palm Hills East Cairo Campaign — تم الإرسال تلقائياً</p>
    </div>
  </div>`
}

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, phone, project, ...tracking } = body

    if (!name || !phone) {
      return Response.json({ error: 'Name and phone required' }, { status: 400 })
    }

    const now = new Date().toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' })

    // Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // App Password من Google
      },
    })

    await transporter.sendMail({
      from: `"Palm Hills Leads" <${process.env.GMAIL_USER}>`,
      to: TO_EMAIL,
      subject: `🏠 عميل جديد: ${name} — ${phone}`,
      html: buildEmailHTML(name, phone, project, tracking, now),
    })

    console.log('✅ Email sent for lead:', name, phone)
    return Response.json({ success: true })

  } catch (e) {
    console.error('Lead API error:', e.message)
    return Response.json({ success: true }) // لا تبلغ الـ user بالخطأ
  }
}
