'use client';

export default function ContactUsForm() {
    return (
        <div className="mx-auto w-full max-w-xl">
            <div className="relative w-full" style={{ paddingTop: '120%' }}>
                <iframe
                    height="500px"
                    src="https://in.bigin.online/org60062843164/forms/submit-your-details"
                    className="absolute inset-0 h-full max-h-[500px] w-full"
                    style={{ border: 'none' }}
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}
