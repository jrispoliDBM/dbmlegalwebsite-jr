export const sendEmail = async (email: string, subject: string, message: string) => {
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
       body: JSON.stringify({
          email,
          subject,
          message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log('Email sent successfully!');
      } else {
        console.log(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

export const sendObjectEmail = async (data: any, title: string) => {
    const formattedData = Object.entries(data)
    .map(([key, value]) => `${key}: ${value}`)
   .join('\n');

   await sendEmail('llmandell@gmail.com; joseph.rispoli@dbmlegalservics.com', `DBM - ${title}`, formattedData);
};


