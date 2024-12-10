import { UserProvider } from '@auth0/nextjs-auth0/client'
import '../styles/global.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="se">
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body suppressHydrationWarning={true} className="light">
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  )
}
