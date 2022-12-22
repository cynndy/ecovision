// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != "GET") {
        return res.status(405).json({
            success: false,
            message: "Method not allowed",
        })
    }

    const backendURI = process.env.NEXT_PUBLIC_BACKEND_API || "https://ecovision-backend.vercel.app" 
    const rawResponse = await fetch(`${backendURI}/api/listings`)
    const response = await rawResponse.json()

    return res.status(200).json(response)
}