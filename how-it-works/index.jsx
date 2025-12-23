import React from "react";
import { Navbar3 } from "@/components/shared/Navbar3";
import { Header98 } from "./components/Header98";
import { Layout414 } from "./components/Layout414";
import { Layout10 } from "./components/Layout10";
import { Layout16 } from "./components/Layout16";
import { Layout1 } from "./components/Layout1";
import { Layout10_1 } from "./components/Layout10_1";
import { Layout105 } from "./components/Layout105";
import { Layout155 } from "./components/Layout155";
import { Footer1 } from "@/components/shared/Footer1";

export default function Page() {
  return (
    <div>
      <Navbar3 />
      <Layout155/>
      
      <Layout10_1 />
      <Layout16 />
      <Layout10 />
      <Layout1 />
      
      <Layout105 />
      <Layout414 />
      <Footer1 />
    </div>
  );
}
