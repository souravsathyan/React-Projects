import Image from "next/image";
import myProfilePic from "@/public/images/authors/dummy.jpg";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";
import CountUp from "react-countup";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MobileIcon,
} from "@radix-ui/react-icons";

function Intro() {
  return (
    <div className="p-4 max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center justify-center text-center">
      <section className="flex flex-col-reverse  gap-y-6 sm:gap-y-8 md:flex-row md:items-center md:gap-x-8 max-w-4xl mx-auto">
        <div className="flex-1">
          <h1 className="title md:text-left no-underline text-3xl sm:text-4xl md:text-5xl">
            Hey, I&apos;m Sourav
            <span className="ml-2 text-xl sm:text-2xl md:text-3xl font-light text-sky-400/100 text-opacity-70 block sm:inline">
              /saw·ruhv/
            </span>
          </h1>
          <AnimatedShinyText className="inline-flex items-center justify-center py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <p className="mt-3 text-sm sm:text-base md:text-left font-light text-muted-foreground">
              I&apos;m a software engineer based in Kerala, India. I&apos;m
              passionate about learning new technologies and sharing knowledge
              with others
            </p>
          </AnimatedShinyText>
          <div className="flex mt-5 gap-x-4 items-center justify-center md:justify-start">
            <div>
              <h1 className="text-left text-2xl text-neutral-400">Projects</h1>
              <CountUp
                start={0}
                delay={1}
                end={10}
                className="text-xl font-bold text-neutral-400"
              />
            </div>
            <div>
              <h1 className="text-left text-2xl text-neutral-400">
                Experience
              </h1>
              <CountUp
                start={0}
                delay={1}
                end={2.3}
                decimals={1}
                className="text-xl font-bold text-neutral-400"
              />
            </div>
          </div>
        </div>
        <div className="relative mx-auto md:mx-0">
          <Image
            className="rounded-lg grayscale w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] object-cover"
            src={myProfilePic}
            alt="sourav_k_sathyan"
            width={400}
            height={400}
            priority
          />
          <div className="flex mt-6 gap-x-6 items-center justify-center ">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              <GitHubLogoIcon width={24} height={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              <LinkedInLogoIcon width={24} height={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="hover:text-gray-500 transition-colors"
            >
              <EnvelopeClosedIcon width={24} height={24} />
            </a>
            <a
              href="tel:+1234567890"
              className="hover:text-gray-500 transition-colors"
            >
              <MobileIcon width={22} height={22} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;
