import { PlusIcon } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
} from '@/components/ui/accordion';

const items = [
    {
        id: '1',
        title: 'What services do you offer?',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    },
    {
        id: '2',
        title: 'How do you tailor your services to my business?',
        content:
            'We take the time to understand your unique goals and challenges, providing customized solutions that best fit your financial needs.',
    },
    {
        id: '3',
        title: 'How will I be updated on my financial status?',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    },
    {
        id: '4',
        title: 'What makes your team different from others?',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    },
    {
        id: '5',
        title: 'Can you assist with future planning and growth strategies?',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    },
];

function FaqAccordion() {
    return (
        <div className="w-full space-y-4 sm:w-1/2">
            <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="3"
            >
                {items.map((item) => (
                    <AccordionItem
                        value={item.id}
                        key={item.id}
                        className="py-2"
                    >
                        <AccordionPrimitive.Header className="flex">
                            <AccordionPrimitive.Trigger className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center gap-4 rounded-md py-2 text-left text-lg leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg]:-order-1 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                                {item.title}
                                <PlusIcon
                                    color="#1B1E65"
                                    size={20}
                                    className="pointer-events-none shrink-0 transition-transform duration-200"
                                    aria-hidden="true"
                                />
                            </AccordionPrimitive.Trigger>
                        </AccordionPrimitive.Header>
                        <AccordionContent className="ps-7 pb-2 text-sm">
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

export default function Faq() {
    return (
        <section className="mx-auto flex flex-col items-start justify-between gap-4 p-4 sm:flex-row sm:items-center sm:p-8 md:p-12 lg:p-16 xl:p-24">
            <div className="max-w-lg px-4 py-12 sm:w-1/2">
                <h6 className="text-secondary mb-2 text-lg font-semibold tracking-wide uppercase">
                    Frequently Asked Questions
                </h6>

                <h2 className="text-primary mb-4 text-4xl leading-snug font-bold sm:text-5xl">
                    Your Questions,
                    <br />
                    Answered
                </h2>

                <p className="text-primary text-base leading-relaxed font-medium sm:text-lg">
                    We&#39;ve compiled a list of the most common questions we
                    receive. From service details to general inquiries,
                    we&#39;ve got you covered.
                </p>
            </div>
            <FaqAccordion />
        </section>
    );
}
