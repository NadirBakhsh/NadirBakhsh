import React from "react";
import { Button } from "../ui/AppButton";
import SocialMedia from "../ui/SocialMedia";

interface Props {}

function ContactSection(props: Props) {
  const {} = props;

  return (
    <div className="Contact h-auto bg-white pb-40">
      <div className="container mx-auto relative flex flex-col md:flex-row gap-10 md:gap-32">
        {/* Contact Form */}
        <div className="max-w-[500px] mt-10 flex-1 px-5">
          <form className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="peer block h-12 w-full px-3 py-2 text-sm text-primary-neutral border border-black rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-primary-neutral focus:border-primary-neutral"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-3 -top-0 py-[2px] px-2 bg-white text-zinc-500 text-sm transition-all duration-200 transform scale-100 origin-left peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary-neutral"
              >
                Your name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="peer block h-12 w-full px-3 py-2 text-sm text-primary-neutral border border-black rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-primary-neutral focus:border-ring-primary-neutral"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-3 -top-0 py-[2px] px-2 bg-white text-zinc-500 text-sm transition-all duration-200 transform scale-100 origin-left peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary-neutral"
              >
                Email
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="Phone Number"
                name="Phone Number"
                className="peer block h-12 w-full px-3 py-2 text-sm text-primary-neutral border border-black rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-primary-neutral focus:border-ring-primary-neutral"
                placeholder=" "
              />
              <label
                htmlFor="Phone Number"
                className="absolute left-3 -top-0 py-[2px] px-2 bg-white text-zinc-500 text-sm transition-all duration-200 transform scale-100 origin-left peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary-neutral"
              >
                Phone Number {`(Optional)`}
              </label>
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="peer block  w-full px-3 py-2 text-sm text-primary-neutral border border-black rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-primary-neutral focus:border-ring-primary-neutral"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-3 -top-0 py-[2px] px-2 bg-white text-zinc-500 text-sm transition-all duration-200 transform scale-100 origin-left peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary-neutral"
              >
                Message
              </label>
            </div>
            <div className="flex flex-col md:flex-row gap-[8px]">
              <Button size="md" className="max-w-[136px] text-sm ">Get In Touch</Button>
              <div className="flex gap-2 mt-3 md:mt-0">
              <SocialMedia size="sm" />
              </div>
            </div>
          </form>
        </div>

        <div className="flex-1 mt-10 max-w-[600px] px-5">
          <h2 className="text-3xl md:text-5xl  text-black font-extrabold">
            Let’s talk for
          </h2>
          <h2 className="text-3xl md:text-5xl mt-2 md:mt-3 text-black font-extrabold">
            Something special
          </h2>
          <p className="text-base text-zinc-500 mt-5 ">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
          <h2 className=" text-2xl md:text-3xl  text-black font-semibold mt-6">
            Nadir Bakhsh
          </h2>
          <h2 className="text-2xl md:text-3xl  text-black font-semibold mt-2">
            +92 3052013106
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
