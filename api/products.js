const TARGET_URL = 'https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1/products'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ success: false, message: 'Method Not Allowed' })
  }

  try {
    const response = await fetch(TARGET_URL)
    const contentType = response.headers.get('content-type') || 'application/json; charset=utf-8'
    const responseBody = await response.text()

    res.setHeader('Content-Type', contentType)
    return res.status(response.status).send(responseBody)
  } catch {
    return res.status(502).json({ success: false, message: 'Bad Gateway' })
  }
}