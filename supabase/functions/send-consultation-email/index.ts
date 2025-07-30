import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, company, email, phone, serviceType, message, subject } = await req.json()

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'نظام الموقع <noreply@hadaf.com.sa>',
        to: ['info@hadaf.com.sa'],
        subject: subject || 'طلب استشارة مجانية',
        html: `
          <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
            <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #1f2937; text-align: center; margin-bottom: 30px; border-bottom: 2px solid #3b82f6; padding-bottom: 15px;">
                طلب استشارة مجانية جديد
              </h2>
              
              <div style="margin-bottom: 20px;">
                <h3 style="color: #374151; margin-bottom: 15px;">معلومات العميل:</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px; border: 1px solid #e5e7eb; background-color: #f3f4f6; font-weight: bold; width: 30%;">الاسم:</td>
                    <td style="padding: 8px; border: 1px solid #e5e7eb;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border: 1px solid #e5e7eb; background-color: #f3f4f6; font-weight: bold;">الشركة:</td>
                    <td style="padding: 8px; border: 1px solid #e5e7eb;">${company}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border: 1px solid #e5e7eb; background-color: #f3f4f6; font-weight: bold;">البريد الإلكتروني:</td>
                    <td style="padding: 8px; border: 1px solid #e5e7eb;"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border: 1px solid #e5e7eb; background-color: #f3f4f6; font-weight: bold;">رقم الهاتف:</td>
                    <td style="padding: 8px; border: 1px solid #e5e7eb;"><a href="tel:${phone}" style="color: #3b82f6;">${phone}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border: 1px solid #e5e7eb; background-color: #f3f4f6; font-weight: bold;">نوع الخدمة:</td>
                    <td style="padding: 8px; border: 1px solid #e5e7eb;">${serviceType}</td>
                  </tr>
                </table>
              </div>
              
              <div style="margin-bottom: 20px;">
                <h3 style="color: #374151; margin-bottom: 15px;">تفاصيل الطلب:</h3>
                <div style="background-color: #f9fafb; padding: 15px; border-right: 4px solid #3b82f6; border-radius: 5px;">
                  <p style="margin: 0; line-height: 1.6; color: #374151;">${message}</p>
                </div>
              </div>
              
              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 14px; margin: 0;">
                  تم إرسال هذا الطلب من موقع شركة هدف للموارد البشرية
                </p>
                <p style="color: #6b7280; font-size: 12px; margin: 5px 0 0 0;">
                  تاريخ الإرسال: ${new Date().toLocaleString('ar-SA', { 
                    timeZone: 'Asia/Riyadh',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          </div>
        `,
      }),
    })

    if (res.ok) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      })
    } else {
      const error = await res.text()
      return new Response(JSON.stringify({ error }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      })
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})