import React from "react";
import { Navbar3 } from "@/components/shared/Navbar3";
import { VideoHero } from "./components/VideoHero";
import { Logo1 } from "./components/Logo1";
import { Layout410 } from "./components/Layout410";
import { Layout399 } from "./components/Layout399";
import { Layout22 } from "./components/Layout22";
import { Cta2 } from "./components/Cta2";
import { Faq11 } from "./components/Faq11";
import { Footer1 } from "@/components/shared/Footer1";

export default function Page() {
  return (
    <div>
      <Navbar3 />
      <VideoHero />
      <Layout22 />
      <Layout410  />
      <Layout399 />

      <Cta2 />
      <Faq11 />
      <Footer1 />
    </div>
  );
}
