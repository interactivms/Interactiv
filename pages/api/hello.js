// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSession } from 'next-auth/react';

export default async function session(req, res) {
  try {
    const session = await getSession({req})
    console.log(session)
    if(!session) return res.status(403).send('Unauthenticated')

    res.send(session)
  } catch (error) {
    console.log(error)
  }
}
