import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { APP_ROUTERS } from './helpers/config'

// This function can be marked `async` if using `await` inside
export default async function middleware(request: NextRequest) {
  const cookie = (await cookies()).get('appSession')
  if (cookie && cookie.value) {
    return NextResponse.redirect(
      new URL(
        process.env.AUTH0_REDIRECT_URI || APP_ROUTERS.INDEX,
        request.nextUrl,
      ),
    )
  } else {
    return NextResponse.next()
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/sign-in',
}
