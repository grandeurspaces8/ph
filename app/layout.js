import './globals.css'

export const metadata = {
  title: 'امتلك وحدتك من بالم هيلز | القاهرة الجديدة',
  description: 'وحدات كاملة التشطيب في القاهرة الجديدة والعاصمة الإدارية. مقدم يبدأ من 1.5%، تقسيط حتى 12 سنة.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
