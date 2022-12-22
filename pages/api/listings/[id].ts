// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const backendURI = process.env.NEXT_PUBLIC_BACKEND_API || "https://ecovision-backend.vercel.app" 
    const { id } = req.query

    if(!id) {
        return res.status(404).json({
            success: false,
            message: "No id provided",
        })
    }else{
        let config = {};
        if(req.method == 'GET'){ // * GET LISTING DETAILS
            config = {
                method: "GET"
            }
        }else if(req.method == "PUT"){ // * UPDATE LISTING DETAILS
            config = {
                method: "PUT",
                body: JSON.stringify(req.body),
                headers: {
                    "Content-Type": "application/json",
                }
            }
        }else if(req.method == 'DELETE'){ // * DELETE LISTING DETAILS
            config = {
                method: "DELETE"
            }
        }

        const rawResponse = await fetch(`${backendURI}/api/listings/${id}`, config)
        const response = await rawResponse.json()
        
        return res.status(200).json(response)
    }

}