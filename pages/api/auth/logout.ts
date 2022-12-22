import { NextApiRequest, NextApiResponse } from "next"
import { serialize } from "cookie"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { cookies } = req
    const jwt = cookies.ecovision

    if(!jwt) {
        return res.status(200).json({
            message: "You are not logged in"
        })
    }else{
        const serialized_jwt = serialize("ecovision", "", {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: -1, // * 24 * 30,
            path: "/"
        })

        return res.setHeader('Set-Cookie', serialized_jwt)
            .status(200)
            .json({ 
                success: true, 
                message: "You are logged out"
            })
    }
}