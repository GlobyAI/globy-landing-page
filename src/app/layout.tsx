import type { Metadata } from 'next'
import '../styles/global.scss'
import { METADATA } from '@/helpers/config'

export const metadata: Metadata = {
  title: METADATA.APP_NAME,
  description: METADATA.APP_DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="vn">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
