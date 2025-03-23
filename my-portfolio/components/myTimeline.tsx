import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

const FlipCard = ({
  frontImage,
  altText,
  description,
}: {
  frontImage: string;
  altText: string;
  description: string;
}) => {
  return (
    <div className="group h-20 md:h-44 lg:h-60 w-full perspective-1000 cursor-pointer">
      <div className="div relative preserve-3d w-full h-full duration-500 group-hover:rotate-y-180">
        <div className="absolute w-full h-full backface-hidden">
          <Image
            src={frontImage}
            alt={altText}
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-lg bg-neutral-800 dark:bg-neutral-700 flex items-center justify-center p-6 text-center">
          <p className="text-white text-xs md:text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export function TimelineDemo() {
  const data = [
    {
      title: "2025 - Now",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
            Full Stack Developer at Fernweh DomainEnroll Pvt Ltd.
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <FlipCard
              frontImage="https://assets.aceternity.com/templates/startup-1.webp"
              altText="startup template"
              description="An elegant hero section with animated gradients and responsive layout for modern startups"
            />
            <FlipCard
              frontImage="https://assets.aceternity.com/templates/startup-2.webp"
              altText="startup template"
              description="Feature showcase with interactive elements and smooth animations for product highlights"
            />
            <FlipCard
              frontImage="https://assets.aceternity.com/templates/startup-3.webp"
              altText="startup template"
              description="Testimonial section with carousel functionality and minimalist design for social proof"
            />
            <FlipCard
              frontImage="https://assets.aceternity.com/templates/startup-4.webp"
              altText="startup template"
              description="Pricing component with tiered options and hover states for clear conversion paths"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022-23",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
            Brototype - Full Stack Web Developer Trainee
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021-22",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
            Fortune IAS Academy - Pursued UPSC Civil Service Exam
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2017-20",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
            Completed Bachelor of Commerce in Finance and Taxation
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
