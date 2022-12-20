import emailjs from '@emailjs/browser'

export default async function sendEmail(data) {
  const result = await emailjs.send(
    'service_kge0ylp',
    'template_b50r9ak',
    data,
    'EC1VqNtOcMwPWYWqW'
  )
  if (result.status === 200) return true

  return false
}
