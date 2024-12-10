import { handleAuth, handleLogin } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'
export const GET = handleAuth({
  login: (req: NextApiRequest, res: NextApiResponse) => {
    const url = req.url
    const connection = url?.split('?connection=')[1]
    if (req.url?.includes('login') && !connection) {
      return res.status(400).json({ error: 'Connection is required' })
    }
    return handleLogin(req, res, {
      authorizationParams: {
        connection,
        prompt: 'login',
        screen_hint: 'signin',
      },
      returnTo: process.env.AUTH0_REDIRECT_URI,
    })
  },
})
