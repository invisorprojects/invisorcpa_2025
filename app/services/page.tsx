import ServicesCard from '@/components/ServicesCard';
import services from '@/constants/services';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Services',
};

export default function Page() {
    return (
        <main>
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                    <div className="max-w-2xl">
                        <h3 className="text-secondary text-xl font-medium">
                            SERVICES
                        </h3>
                        <h2 className="text-primary text-4xl font-bold sm:text-5xl">
                            Innovative Accounting Solutions for Your
                            Business{' '}
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            We offer comprehensive accounting and tax services
                            tailored to your business needs, combining expert
                            insights with advanced tools to ensure accuracy and
                            compliance.
                        </p>
                    </div>
                </div>
                <Image
                    src="/assets/banners/banner-7.jpg"
                    alt="Services"
                    width={4096}
                    height={1632}
                    className="rounded-4xl shadow-md"
                />
            </section>
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-4">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    {services.map((service, index) => (
                        <ServicesCard
                            key={index}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
