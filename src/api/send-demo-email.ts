// Email service for sending demo requests
// This would typically integrate with a service like SendGrid, Mailgun, or similar

interface DemoRequestData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  companySize: string;
  industry: string;
  useCase: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export async function sendDemoRequestEmail(data: DemoRequestData) {
  // In a real implementation, you would use a proper email service
  // For now, we'll simulate the email sending
  
  const emailContent = {
    to: 'support@adrshyamai.com',
    subject: `Demo Request from ${data.firstName} ${data.lastName} - ${data.company}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #3B82F6, #8B5CF6); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Demo Request</h1>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937; margin-bottom: 20px;">Contact Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Name:</td>
              <td style="padding: 8px 0; color: #6b7280;">${data.firstName} ${data.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 8px 0; color: #6b7280;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
              <td style="padding: 8px 0; color: #6b7280;">${data.phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Company:</td>
              <td style="padding: 8px 0; color: #6b7280;">${data.company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Job Title:</td>
              <td style="padding: 8px 0; color: #6b7280;">${data.jobTitle}</td>
            </tr>
          </table>

          <h2 style="color: #1f2937; margin: 30px 0 20px 0;">Company Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Company Size:</td>
              <td style="padding: 8px 0; color: #6b7280;">${data.companySize}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Industry:</td>
              <td style="padding: 8px 0; color: #6b7280;">${data.industry}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Primary Use Case:</td>
              <td style="padding: 8px 0; color: #6b7280;">${data.useCase}</td>
            </tr>
          </table>

          <h2 style="color: #1f2937; margin: 30px 0 20px 0;">Demo Preferences</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Preferred Date:</td>
              <td style="padding: 8px 0; color: #6b7280;">${data.preferredDate || 'Flexible'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Preferred Time:</td>
              <td style="padding: 8px 0; color: #6b7280;">${data.preferredTime || 'Flexible'}</td>
            </tr>
          </table>

          ${data.message ? `
            <h2 style="color: #1f2937; margin: 30px 0 20px 0;">Additional Message</h2>
            <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #3B82F6;">
              <p style="margin: 0; color: #6b7280; line-height: 1.6;">${data.message}</p>
            </div>
          ` : ''}

          <div style="margin-top: 30px; padding: 20px; background: white; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #6b7280;">
              <strong>Next Steps:</strong> Contact the prospect within 24 hours to schedule the demo.
            </p>
          </div>
        </div>
      </div>
    `,
    text: `
      New Demo Request from ${data.firstName} ${data.lastName}
      
      Contact Information:
      - Name: ${data.firstName} ${data.lastName}
      - Email: ${data.email}
      - Phone: ${data.phone || 'Not provided'}
      - Company: ${data.company}
      - Job Title: ${data.jobTitle}
      
      Company Details:
      - Company Size: ${data.companySize}
      - Industry: ${data.industry}
      - Primary Use Case: ${data.useCase}
      
      Demo Preferences:
      - Preferred Date: ${data.preferredDate || 'Flexible'}
      - Preferred Time: ${data.preferredTime || 'Flexible'}
      
      ${data.message ? `Additional Message: ${data.message}` : ''}
    `
  };

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // In production, you would send this via your email service
  console.log('Demo request email would be sent:', emailContent);
  
  // Also send confirmation email to the user
  const confirmationEmail = {
    to: data.email,
    subject: 'Demo Request Received - AdrshyamAI',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #3B82F6, #8B5CF6); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Thank You for Your Interest!</h1>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Hi ${data.firstName},
          </p>
          
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Thank you for requesting a demo of AdrshyamAI! We're excited to show you how our invisible intelligence platform can transform your call operations.
          </p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10B981;">
            <h3 style="color: #1f2937; margin: 0 0 10px 0;">What happens next?</h3>
            <ul style="color: #6b7280; margin: 0; padding-left: 20px;">
              <li>Our team will contact you within 24 hours</li>
              <li>We'll schedule a personalized demo at your convenience</li>
              <li>You'll see AdrshyamAI in action with real use cases</li>
              <li>We'll discuss how it can solve your specific challenges</li>
            </ul>
          </div>
          
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            In the meantime, feel free to explore our resources or contact us directly at 
            <a href="mailto:support@adrshyamai.com" style="color: #3B82F6;">support@adrshyamai.com</a> 
            or <a href="tel:+916360154904" style="color: #3B82F6;">+91 6360154904</a>.
          </p>
          
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Best regards,<br>
            The AdrshyamAI Team
          </p>
        </div>
      </div>
    `
  };

  console.log('Confirmation email would be sent:', confirmationEmail);
  
  return { success: true };
}