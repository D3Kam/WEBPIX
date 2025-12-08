"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer1() {
  const formState = useForm();
  return (
    <footer className="bg-brand-primary px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-20">
          <div className="flex flex-col">
            <Link to="/" className="mb-5 md:mb-6">
              <img
                src="media/icons/Xpixel_Logo.svg"
                alt="Xpixel logo image"
                className="inline-block max-h-40"
              />
            </Link>
            <p className="mb-5 text-neutral-darkest md:mb-6">
              Stay connected with our evolving digital canvas project
            </p>
            <div className="w-full max-w-md">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Get pixel updates"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                />
                <Button title="Join" variant="secondary" size="sm">
                  Join
                </Button>
              </form>
              <p className="text-tiny text-neutral-dark">
                By subscribing, you agree to our privacy policy and consent to
                project updates
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold text-neutral-darkest md:mb-4">Explore xpixel</h2>
              <ul>
                <li className="text-small py-2">
                  <Link to="/how-it-works" className="flex items-center gap-3 text-neutral-dark transition-colors hover:text-neutral-darkest">
                    <span>How it works</span>
                  </Link>
                </li>
                <li className="text-small py-2">
                  <Link to="/xframe" className="flex items-center gap-3 text-neutral-dark transition-colors hover:text-neutral-darkest">
                    <span>Pricing</span>
                  </Link>
                </li>
                <li className="text-small py-2">
                  <Link to="/faq" className="flex items-center gap-3 text-neutral-dark transition-colors hover:text-neutral-darkest">
                    <span>FAQ</span>
                  </Link>
                </li>
                <li className="text-small py-2">
                  <Link to="/about" className="flex items-center gap-3 text-neutral-dark transition-colors hover:text-neutral-darkest">
                    <span>About us</span>
                  </Link>
                </li>
                <li className="text-small py-2">
                  <Link to="/contact" className="flex items-center gap-3 text-neutral-dark transition-colors hover:text-neutral-darkest">
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold text-neutral-darkest md:mb-4">Resources</h2>
              <ul>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 text-neutral-dark transition-colors hover:text-neutral-darkest">
                    <span>Blog</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 text-neutral-dark transition-colors hover:text-neutral-darkest">
                    <span>Community</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 text-neutral-dark transition-colors hover:text-neutral-darkest">
                    <span>Support</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 text-neutral-dark transition-colors hover:text-neutral-darkest">
                    <span>Developers</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 text-neutral-dark transition-colors hover:text-neutral-darkest">
                    <span>Docs</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold text-neutral-darkest md:mb-4">Connect with us</h2>
              <ul className="flex flex-col items-start">
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 text-neutral-dark transition-colors hover:text-neutral-darkest">
                    <Facebook className="size-6 text-neutral-darkest" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 text-neutral-dark transition-colors hover:text-neutral-darkest">
                    <Instagram className="size-6 text-neutral-darkest" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 text-neutral-dark transition-colors hover:text-neutral-darkest">
                    <Twitter className="size-6 p-0.5 text-neutral-darkest" />
                    <span>X</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 text-neutral-dark transition-colors hover:text-neutral-darkest">
                    <Linkedin className="size-6 text-neutral-darkest" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3 text-neutral-dark transition-colors hover:text-neutral-darkest">
                    <Youtube className="size-6 text-neutral-darkest" />
                    <span>Discord</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-neutral-dark/20" />
        <div className="text-small flex flex-col-reverse items-start justify-between pt-6 pb-4 text-neutral-dark md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-6 md:mt-0">
            © 2026 Xpixel
          </p>
          <ul className="text-small grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline transition-colors hover:text-neutral-darkest">
              <Link to="/legal">Privacy policy</Link>
            </li>
            <li className="underline transition-colors hover:text-neutral-darkest">
              <Link to="/legal">Terms of service</Link>
            </li>
            <li className="underline transition-colors hover:text-neutral-darkest">
              <Link to="/legal">Cookie settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
