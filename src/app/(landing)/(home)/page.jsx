import { Anchor, Button, Image } from '@/components/core';
import { Mockup } from '@/components/ui';
import BadgeAppStore from '@public/ui/badge-appstore.png';
import BadgePlayStore from '@public/ui/badge-playstore.png';
import AppHomeImage from './assets/app_home.png';
import HeroImage from './assets/hero-image.png';
import WebProfileImage from './assets/web_profile.png';

export default function Home_Page() {
  return (
    <main>
      {/* hero section */}
      <section className="" data-name="hero">
        <div className="container my-20 flex max-w-[70rem] flex-col items-center justify-center gap-[clamp(2rem,1vw,3rem)] md:flex-row">
          <div className="section_wrapper">
            <h3 className="text-balance text-[2.5rem] font-bold leading-[1.1] md:text-[3.25rem] xl:text-[4rem]">
              Design Your Perfect Day.
            </h3>
            <p className="max-w-[25rem] text-base font-normal">
              Get the best of health and fitness, all in one place. Get the best
              of health and fitness, all in one plac et the best of health and
              fitness.
            </p>
            <Button size="lg" className="mt-3 self-start">
              Contact Us
            </Button>
          </div>
          <Image
            src={HeroImage}
            priority
            alt="app"
            className="w-full shrink-0 drop-shadow-2xl max-md:max-w-md md:w-[clamp(16.25rem,40vw,33.8rem)] lg:rounded-3xl"
            height={604}
            width={541.67}
          />
        </div>
      </section>
      {/* feature section 1 */}
      <FeatureSection
        image={AppHomeImage}
        header="TITLE GOES HERE"
        title="Experience workouts like never before."
        description="Get the best of health and fitness, all in one place. Get the best of health and fitness, all in one plac et the best of health and fitness"
        cta={<button>Contact Us</button>}
      />
      <FeatureSection
        image={AppHomeImage}
        header="TITLE GOES HERE"
        title="Experience workouts like never before."
        description="Get the best of health and fitness, all in one place. Get the best of health and fitness, all in one plac et the best of health and fitness"
        cta={<button>Contact Us</button>}
      />
      <FeatureSection
        image={AppHomeImage}
        header="TITLE GOES HERE"
        title="Experience workouts like never before."
        description="Get the best of health and fitness, all in one place. Get the best of health and fitness, all in one plac et the best of health and fitness"
        cta={<button>Contact Us</button>}
      />
      <section>
        <div className="container mb-16 mt-20 flex flex-col items-center justify-center gap-4 text-center">
          <h3 className="section_title max-w-[38rem]">
            Experience workouts like never lorem ipsum before
          </h3>
          <p className="section_description max-w-[41rem]">
            Get the best of health and fitness, all in one place. Get the best
            of health and fitness, all in one plac et the best of health and
            fitness.
          </p>
          <Button size="lg" className="mt-3">
            Contact Us
          </Button>
        </div>
        <div className="container flex items-center justify-center">
          <div className="relative flex max-w-[66rem]">
            <Image
              src={WebProfileImage}
              alt="app web profile"
              sizes="(min-width:96rem) 64vw, (min-width:90rem) 72vw, (min-width:80rem) 80vw, 100vw"
              height={944}
              width={565}
              className="aspect-[944/565] w-[90%] shrink-0 rounded-[2vw] object-cover object-top lg:rounded-3xl"
              style={{
                boxShadow: '0px 13.6px 45.33px 0px #00000029',
                WebkitBoxShadow: '0px 13.6px 45.33px 0px #00000029',
              }}
            />
            <Mockup
              src={AppHomeImage}
              alt="app-home"
              className="absolute right-0 top-[20%] w-[28%]"
            />
          </div>
        </div>
      </section>
      <section className="-mt-20 flex flex-col bg-gray-pale pt-20 md:-mt-36 md:pt-40">
        <div className="container mb-20 mt-44 flex flex-col items-center justify-center gap-4">
          <blockquote className="flex max-w-[46.125rem] flex-col gap-6 text-center">
            <p className="text-[1.25rem] font-bold italic leading-none sm:text-[1.875rem] md:text-[2rem]">
              “Feed your mind with music. Our tracks help to stimulate your
              brainwave activity and enhance your focus.”
            </p>
            <small className="text-sm font-medium italic">- Jonathan Doe</small>
          </blockquote>
        </div>
      </section>
      <section>
        <div className="container mb-16 mt-20 flex flex-col items-center justify-center gap-4 text-center">
          <h3 className="section_title max-w-[46rem]">
            Groomcy take action. Download the app now.
          </h3>
          <p className="section_description max-w-[41rem]">
            Get the best of health and fitness, all in one place. Get the best
            of health and fitness, all in one plac et the best of health and
            fitness.
          </p>
          <div className="mx-auto mt-3 flex flex-row items-center gap-3">
            <Anchor href="#">
              <Image
                src={BadgeAppStore}
                alt="app-store"
                sizes="(min-width:96rem) 12vw, (min-width:80rem) 15vw, (min-width:64rem) 20vw, (min-width:48rem) 26vw, (min-width:40rem) 31vw, 50vw"
                height={60}
                width={200}
              />
            </Anchor>
            <Anchor href="#">
              <Image
                src={BadgePlayStore}
                alt="play-store"
                sizes="(min-width:96rem) 12vw, (min-width:80rem) 15vw, (min-width:64rem) 20vw, (min-width:48rem) 26vw, (min-width:40rem) 31vw, 50vw"
                height={60}
                width={200}
              />
            </Anchor>
          </div>
          <small className="mt-14 text-center text-sm text-charcoal">
            &copy; 2020 Groomcy
          </small>
        </div>
      </section>
    </main>
  );
}

/**
 * @type {React.FC<{
 *   header: string;
 *   title: string;
 *   image: import('next/image').ImageProps['src'];
 *   description: string;
 *   cta: React.ReactNode;
 * }>}
 */
const FeatureSection = ({ header, title, image, description, cta }) => (
  <section className="group/section flex even:bg-gray-pale" data-name="feature">
    <div className="container my-20 flex flex-col-reverse items-center justify-center gap-[clamp(2rem,5vw,6rem)] md:flex-row-reverse md:group-even/section:flex-row xl:gap-[clamp(2rem,15vw,10rem)]">
      <Mockup
        src={image}
        alt="app-home"
        className="w-[clamp(10rem,38%,18rem)] xl:w-[28%]"
      />
      <div className="section_wrapper items-start">
        <p className="section_header">{header}</p>
        <h3 className="section_title">{title}</h3>
        <p className="section_description">{description}</p>
        <Button size="lg" className="mt-3" asChild>
          {cta}
        </Button>
      </div>
    </div>
  </section>
);
