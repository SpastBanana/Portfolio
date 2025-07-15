import { useState, useEffect } from "react";
import { BiLogoVisualStudio } from "react-icons/bi";
import { BsAndroid, BsApple, BsMicrosoft } from "react-icons/bs";
import {
  DiCss3,
  DiHtml5,
  DiJavascript,
  DiLinux,
  DiPython,
  DiReact,
} from "react-icons/di";
import { FaRaspberryPi } from "react-icons/fa";
import { GrAruba, GrHp } from "react-icons/gr";
import { PiWindowsLogo } from "react-icons/pi";
import {
  SiArduino,
  SiCisco,
  SiDell,
  SiMikrotik,
  SiNetgear,
  SiProxmox,
  SiTplink,
  SiVeeam,
  SiVmware,
} from "react-icons/si";

export const SectionCarousel = () => {
  const [translateX, setTranslateX] = useState(0);

  // Sample company/client logos - replace with your actual images
  const images = [
    { icon: <SiMikrotik />, name: "MikroTik" },
    { icon: <SiCisco />, name: "Cisco" },
    { icon: <GrAruba />, name: "Aruba" },
    { icon: <SiNetgear />, name: "Netgear" },
    { icon: <SiTplink />, name: "Tplink" },
    { icon: <GrHp />, name: "HP" },
    { icon: <SiDell />, name: "Dell" },
    { icon: <SiVeeam />, name: "Veeam" },
    { icon: <SiProxmox />, name: "Proxmox" },
    { icon: <SiVmware />, name: "VMWare" },
    { icon: <BsMicrosoft />, name: "Microsoft" },
    { icon: <PiWindowsLogo />, name: "Windows" },
    { icon: <DiLinux />, name: "Linux" },
    { icon: <BsAndroid />, name: "Android" },
    { icon: <BsApple />, name: "Apple" },
    { icon: <BiLogoVisualStudio />, name: "VS-Code" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiHtml5 />, name: "HTML" },
    { icon: <DiCss3 />, name: "CSS" },
    { icon: <DiJavascript />, name: "JS" },
    { icon: <FaRaspberryPi />, name: "RPi" },
    { icon: <SiArduino />, name: "Arduino" },
  ];

  // Create seamless loop by duplicating images
  const duplicatedImages = [...images, ...images];
  const itemWidth = 100 / 4; // Each item takes 1/3 of the container width

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prevTranslateX) => {
        const newTranslateX = prevTranslateX + 0.2;

        if (newTranslateX >= images.length * itemWidth) {
          return 0;
        }

        return newTranslateX;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [images.length, itemWidth]);

  return (
    <section className="relative -z-10 w-[80%] md:w-full mx-auto max-w-4xl mb-18">
      <div>
        {/* Carousel container */}
        <div className="overflow-hidden">
          <div
            className="flex"
            style={{ transform: `translateX(-${translateX}%)` }}
          >
            {duplicatedImages.map((item, key) => (
              <div key={key} className="flex-shrink-0 px-4 md:w-[20%] w-[25%]">
                <div className="flex items-center justify-center flex-col gap-3">
                  <div className="t-ico1 text-primary-foreground">
                    {item.icon}
                  </div>
                  <p className="t3 text-center text-primary-foreground">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
