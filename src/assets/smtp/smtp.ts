import axios, { type AxiosResponse } from 'axios'

interface EmailParams {
  SecureToken: string
  To: string | string[]
  From: string
  Subject: string
  Body: string
  [key: string]: any // For any additional parameters
}
async function sendEmail(params: EmailParams): Promise<string> {
  const data = {
    ...params,
    nocache: Math.floor(1e6 * Math.random() + 1),
    Action: 'Send'
  }

  try {
    const response: AxiosResponse<string> = await axios.post(
      'https://smtpjs.com/v3/smtpjs.aspx?',
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to send email: ${error}`)
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}

export default sendEmail
