'use server';
export async function sendContact(prevState: unknown, formData: FormData) {
    console.log('formData:', formData);
    const data = Object.fromEntries(formData.entries());
    try {
        const response = await fetch(
            'https://invisortech.ca/API/invisorglobal_email/',
            {
                method: 'POST',

                body: JSON.stringify(data),
            }
        );
        console.log('response:', response);

        if (response.status === 200) {
            return {
                status: 'SUCCESS',
                message:
                    'Thank you for contacting us. We will get back to you soon.',
            };
        } else {
            return {
                status: 'ERROR',
                message: 'Something went wrong. Please try again later.',
            };
        }
    } catch (error) {
        console.error('error:', error);
        return { status: 'ERROR', message: 'Internal Server Error' };
    }
}
