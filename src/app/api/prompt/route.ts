// import { NextResponse } from 'next/server'

// export async function GET(request: Request) {
//     // const data = await request.json()
//     // const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=${process.env.GEMINI_API_KEY}`, {
//     //     method: "POST",
//     //     headers: {
//     //         "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify({
//     //         prompt: data.prompt
//     //     })
//     // })
//     // const apiResponse = await resp.json()
//     // if (!apiResponse.ok) {
//     //     throw new Error('unable to register user')
//     // }
//     return NextResponse.json(
//         {hi:"hiiii"},
//     )
// }


import type { NextApiRequest, NextApiResponse } from 'next';
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const data = req.body;
  res.status(200).json({ id:1 });
}