"use client";

import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: "-50%",
        transition: {
          duration: isMobile ? 8 : 15,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls, isMobile]);

  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <h3 className="text-center text-white/50 text-xl">
          Already chosen by these market leaders
        </h3>
        <div
          className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div className="flex gap-8 py-8" animate={controls} initial={{ x: "0%" }}>
            {/* First set of logos */}
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="relative w-32 aspect-[3/2] shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
              >
                <Image src={logo.image} alt={logo.name} fill className="object-contain" />
              </div>
            ))}
            {/* Duplicate set of logos for seamless loop */}
            {logos.map((logo) => (
              <div
                key={`${logo.name}-duplicate`}
                className="relative w-32 aspect-[3/2] shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
              >
                <Image src={logo.image} alt={logo.name} fill className="object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
