'use client';

import { useState } from 'react';

export default function ReviewPage() {
    const [showThanks, setShowThanks] = useState(false);

    const handleRating = (rating: 'sad' | 'okay' | 'happy') => {
        if (rating === 'happy') {
            window.location.href = 'https://g.page/r/CR__sP0hWnrvEBM/review';
        } else {
            setShowThanks(true);
        }
    };

    if (showThanks) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
                <div className="w-full max-w-2xl text-center">
                    <div className="mb-8 text-8xl">🙏</div>
                    <h1 className="mb-4 text-5xl font-bold text-gray-900">
                        Thank You!
                    </h1>
                    <p className="text-xl text-gray-600">
                        We appreciate your feedback and will work hard to improve our services.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-12">
            <div className="w-full max-w-3xl text-center">
                <h1 className="mb-12 text-5xl font-bold text-gray-900 md:text-6xl">
                    How would you rate our service?
                </h1>

                <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
                    {/* Sad */}
                    <button
                        onClick={() => handleRating('sad')}
                        className="group flex h-40 w-40 items-center justify-center rounded-full bg-orange-400 shadow-2xl transition-all hover:scale-110 hover:bg-orange-500 hover:shadow-3xl"
                        aria-label="Rate as sad"
                    >
                        <div className="text-9xl text-orange-600 transition-transform group-hover:scale-110">
                            😞
                        </div>
                    </button>

                    {/* Okay */}
                    <button
                        onClick={() => handleRating('okay')}
                        className="group flex h-40 w-40 items-center justify-center rounded-full bg-yellow-400 shadow-2xl transition-all hover:scale-110 hover:bg-yellow-500 hover:shadow-3xl"
                        aria-label="Rate as okay"
                    >
                        <div className="text-9xl text-yellow-600 transition-transform group-hover:scale-110">
                            😐
                        </div>
                    </button>

                    {/* Happy */}
                    <button
                        onClick={() => handleRating('happy')}
                        className="group flex h-40 w-40 items-center justify-center rounded-full bg-green-400 shadow-2xl transition-all hover:scale-110 hover:bg-green-500 hover:shadow-3xl"
                        aria-label="Rate as happy"
                    >
                        <div className="text-9xl text-green-600 transition-transform group-hover:scale-110">
                            😊
                        </div>
                    </button>
                </div>

                <p className="mt-12 text-lg text-gray-600">
                    Your feedback helps us serve you better
                </p>
            </div>
        </div>
    );
}

