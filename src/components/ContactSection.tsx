"use client";

import { Download } from "lucide-react";
import { MapPin, Phone, Mail, Home } from "lucide-react";
import { useRef } from "react";
import { sendContactEmail } from "../assets";
import SocialLink from "./socialLink";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      await sendContactEmail(form.current);

      alert("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center pt-24 pb-20 px-6 lg:px-16 xl:px-24"
    >
      <h1 className="text-4xl font-bold mb-12">Get In Touch</h1>

      <div className="sm:w-300 pt-14 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6 h-full ">

          <div className="border border-border rounded-md p-6 max-w-6xl shadow-lg">
            <div className="flex flex-col gap-7">

              <div className="border border-border rounded-sm p-4 flex items-center gap-4 transition-transform duration-300 hover:scale-105 bg-background">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Phone Number</p>
                  <p className="text-sm text-muted-foreground">
                    +63 999 787 9184
                  </p>
                </div>
              </div>

              <div className="border border-border rounded-sm p-4 flex items-center gap-4 transition-transform duration-300 hover:scale-105 bg-background">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">
                    maryllelagunaa@gmail.com
                  </p>
                </div>
              </div>

              <div className="border border-border rounded-sm p-4 flex items-center gap-4 transition-transform duration-300 hover:scale-105 bg-background">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">
                    Baybay City Leyte, Philippines
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex sm:flex-row flex-col-reverse gap-3"> 
            
            <a
              href="/Resume-Laguna_Marylle.pdf"
              download
              className=" inline-flex items-center justify-center gap-2 px-6 py-3 mt-4
                  w-full sm:w-fit rounded-xl bg-foreground text-background font-medium shadow-sm
                  hover:shadow-md hover:scale-[1.03] transition">
              <Download size={18} />
              Download CV
              </a>
              <SocialLink className="flex flex-row pl-5"/>
            </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full border border-border rounded-md p-8 lg:p-10 shadow-sm">

          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >

            <div className="flex flex-col gap-2">
              <label className="font-medium">Your Name</label>
              <input placeholder="John Doe" name="user_name"
                className="border border-border rounded-sm px-4 py-3 bg-background"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium">Email Address</label>
              <input placeholder="john@example.com" name="user_email"
                className="border border-border rounded-sm px-4 py-3 bg-background"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium">Subject</label>
              <input placeholder="Project Inquiry" name="subject"
                className="border border-border rounded-sm px-4 py-3 bg-background"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium">Message</label>
              <textarea placeholder="I'd like to discuss a project..." name="message"
                rows={6}
                className="border border-border rounded-sm px-4 py-3 bg-background resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-sm py-3 bg-foreground text-background font-medium transition-transform duration-300 hover:scale-105"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}