import Image from 'next/image';
import Link from 'next/link';

export default function ReviewPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
            <div className="w-full max-w-2xl text-center">
                <h1 className="mb-8 text-4xl font-bold text-gray-900">
                    Leave Us a Review
                </h1>

                <p className="mb-8 text-lg text-gray-600">
                    We&apos;d love to hear about your experience! Scan the QR code or click the link below to leave us a review.
                </p>

                <div className="mb-8 flex justify-center">
                    <div className="rounded-lg border-4 border-gray-200 p-4 shadow-lg">
                        <Image
                            src="/qr.png"
                            alt="Review QR Code"
                            width={300}
                            height={300}
                            className="h-auto w-full max-w-[300px]"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <p className="text-xl font-medium text-gray-900">
                        Or visit:
                    </p>
                    <Link
                        href="https://www.invisorcpa.ca/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-blue-600 px-8 py-4 text-xl font-bold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
                    >
                        https://www.invisorcpa.ca/review
                    </Link>
                </div>

                <p className="mt-8 text-sm text-gray-500">
                    Your feedback helps us improve and serve you better!
                </p>
            </div>
        </div>
    );
}
