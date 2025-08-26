import { Quote } from 'lucide-react';

export function TestimonialsSection() {
    return (
        <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
            <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                <div className="max-w-xl space-y-2">
                    <h3 className="text-secondary text-xl font-medium">
                        TESTIMONIALS
                    </h3>
                    <h2 className="text-primary text-4xl font-bold sm:text-5xl">
                        Hear from our clients{' '}
                    </h2>
                </div>
                <div className="flex max-w-lg flex-col items-start gap-4">
                    <p className="text-[#686666]">
                        Discover how we have helped our clients achieve
                        financial stability and reach their goals.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((t, index) => (
                    <TestmonialCard
                        key={index}
                        title={t.title}
                        message={t.message}
                        name={t.name}
                    />
                ))}
            </div>
        </section>
    );
}

const testimonials = [
    {
        title: 'Made Business Operations Smoother',
        message:
            'The accounting and tax services have streamlined my business operations, allowing me to focus on what matters most. The team always provides clear and effective solutions.',
        name: 'Liam Carter Johnson',
    },
    {
        title: 'Gave Us Guidance to Grow',
        message:
            'As a startup, we needed expert guidance with tax planning and bookkeeping. The team’s advice has been crucial in helping us grow confidently',
        name: 'Avery Grace Bennett',
    },
    {
        title: 'Made Payroll Effortless for Us',
        message:
            'Payroll management has never been easier. We can now focus on scaling our business while they handle all payroll complexities.',
        name: 'Ethan James Mackenzie',
    },
    {
        title: 'Simplified Financial Reporting for Us',
        message:
            'Financial reporting and tax filing were handled smoothly, giving us peace of mind and enabling better business decisions.',
        name: 'Mason Christopher Bell',
    },
    {
        title: 'Made Business Operations Smoother',
        message:
            'The accounting and tax services have streamlined my business operations, allowing me to focus on what matters most. The team always provides clear and effective solutions.',
        name: 'Liam Carter Johnson',
    },
    {
        title: 'Made Business Operations Smoother',
        message:
            'The accounting and tax services have streamlined my business operations, allowing me to focus on what matters most. The team always provides clear and effective solutions.',
        name: 'Liam Carter Johnson',
    },
];

function TestmonialCard({
    title,
    message,
    name,
}: {
    title: string;
    message: string;
    name: string;
}) {
    return (
        <div className="flex max-w-96 flex-col gap-4 rounded-md bg-[#E5F2F8] px-8 py-6">
            <Quote fill="#1B1E65" />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-[#5F5F5F]">{message}</p>
            <p className="font-medium">{name}</p>
        </div>
    );
}
