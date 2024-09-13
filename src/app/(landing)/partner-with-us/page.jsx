import { Button, Image } from '@/components/core';
import Featured01 from './assets/featured-01.png';
import Featured02 from './assets/featured-02.png';
import HeroImage from './assets/hero-image.png';

export default function PartnerWithUs_Page() {
  return (
    <main>
      {/* hero section */}
      <section className="overflow-hidden" data-name="hero">
        <div className="container-lg relative flex flex-col justify-between md:mt-10 md:flex-row lg:mt-20">
          <div className="section_wrapper z-1 my-16 mr-[-10%] max-w-[36rem] gap-3">
            <h3 className="text-[2.5rem] font-bold leading-[1.1] md:text-[3.25rem] xl:text-[4rem]">
              Partner With Us
            </h3>
            <p className="max-w-[30rem] text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
              quam vitae ex suscipit semper. Integer ullamcorper libero non quam
              pellentesque vulputate.
            </p>
            <Button size="lg" className="mt-3 self-start">
              Contact Us
            </Button>
          </div>
          <div className="relative w-full shrink-0 self-end md:w-[63%] md:min-w-[23rem]">
            <Image
              src={HeroImage}
              priority
              alt="hero image"
              className="mt-[-5%] w-full md:mt-[-10%] md:translate-x-[14%]"
              height={554}
              width={792}
            />
          </div>
        </div>
      </section>
      {/* highlights */}
      <section className="">
        <div className="relative flex">
          <div className="absolute inset-0 -bottom-10 -z-1 bg-gray-pale md:-bottom-20" />
          <div className="container my-8 flex flex-col gap-6 md:my-12 lg:my-16 lg:flex-row lg:justify-between">
            <p className="max-w-[40rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
              quam vitae ex suscipit semper. Integer ullamcorper libero non quam
              pellentesque vulputate. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas.
            </p>
            <Button size="lg" className="mt-3 self-start">
              Contact Us
            </Button>
          </div>
        </div>
        <div className="container flex gap-[clamp(1rem,2.5vw,3rem)]">
          <div className="flex-1">
            <Image src={Featured01} className="w-full flex-1" alt="featured" />
          </div>
          <div className="flex-1">
            <Image src={Featured02} className="w-full flex-1" alt="featured" />
          </div>
        </div>
      </section>
      {/* features */}
      <section>
        <div className="container">
          <hgroup>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
              quam vitae ex suscipit semper. Integer ullamcorper libero non quam
              pellentesque vulputate.
            </p>
          </hgroup>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <div className="size-16 rounded-full"></div>
              <h4>Lorem ipsum dolor</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                et quam vitae ex suscipit semper. Integer ullamcorper libero non
                quam pellentesque vulputate.
              </p>
            </div>
            <div>
              <div className="size-16 rounded-full"></div>
              <h4>Lorem ipsum dolor</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                et quam vitae ex suscipit semper. Integer ullamcorper libero non
                quam pellentesque vulputate.
              </p>
            </div>
            <div>
              <div className="size-16 rounded-full"></div>
              <h4>Lorem ipsum dolor</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                et quam vitae ex suscipit semper. Integer ullamcorper libero non
                quam pellentesque vulputate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
