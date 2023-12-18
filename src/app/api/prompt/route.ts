import { NextResponse } from 'next/server';
export  async function POST(resquest:Request) {
  const data = await resquest.json()
  const requestData = {
    "prompt":{
      "text":data.prompt
    }
  };
  console.log(requestData)
  const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=${process.env.GEMINI_API_KEY}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData)
    })
    const apiResponse = await resp.json()
    if (!resp.ok) {
        throw new Error('unable to register user')
    }
  return NextResponse.json({apiResponse})
}