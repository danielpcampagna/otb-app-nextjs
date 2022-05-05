import axios, { AxiosRequestHeaders } from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const functionUrl = `${process.env.AZURE_FUNCTION_URL}`
    const functionCode = `${process.env.AZURE_FUNCTION_CODE}`
    const baseUrl = `${functionUrl}?code=${functionCode}`
    console.log('baseUrl', baseUrl)
    
    const headers: AxiosRequestHeaders = {}
    const keys = Object.keys(req.headers)

    for (const key of keys) {
        let value = req.headers[key]
        if (typeof value === "object" && Array.isArray(value)) {
            value = value.join(';')
        } else {
            value = value
        }
        value ||= ''
        headers[key] = value
    }
    
    axios.post(baseUrl, {}, { headers })
    .then(console.log)
    // .catch(console.error)
    // .finally(console.log)

    if (req.method == 'POST') {
        res.status(204).end()
        return
    }
    res.status(404)
}
