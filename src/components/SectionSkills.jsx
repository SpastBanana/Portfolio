import { Code2, Server } from "lucide-react";
import { BiNetworkChart } from "react-icons/bi";
import { GiElectricalResistance } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";
import { PiNetwork } from "react-icons/pi";

export const SectionSkills = () => {
  const SkillItems = [
    { name: "Programming", level: 70, icon: <Code2 className="t-ico3" /> },
    { name: "Networks", level: 80, icon: <PiNetwork className="t-ico3" /> },
    { name: "Servers", level: 75, icon: <Server className="t-ico3" /> },
    {
      name: "Engineering",
      level: 85,
      icon: <MdEngineering className="t-ico3" />,
    },
    {
      name: "Electronics",
      level: 90,
      icon: <GiElectricalResistance className="t-ico3" />,
    },
    { name: "IOT", level: 80, icon: <BiNetworkChart className="t-ico3" /> },
  ];
  return (
    <section className="relative -z-10 flex items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-[88%] max-w-208">
        {SkillItems.map((item, key) => (
          <div key={key} className="flex items-center justify-center">
            <div className="w-[95%] md:w-[80%] h-full cards border-3 border-borderclr p-2 sm:p-3 md:p-4 lg:p-5 flex items-start justify-center gap-2 md:gap-3 flex-col">
              <div className="text-primary-foreground font-light flex items-center gap-2">
                <div className="text-xl md:text-xl lg:text-2xl">
                  {item.icon}
                </div>
                <p className="t4">{item.name}</p>
              </div>
              <div className="relative w-[100%] h-4 sm:h-5 rounded-full bg-bar">
                <div
                  className="absolute left-0 top-0 h-4 sm:h-5 bg-primary rounded-full flex items-center justify-start"
                  style={{ width: item.level + "%" }}
                >
                  <p className="text-[10px] md:text-xs ml-2 font-thin md:font-light text-gray-300">
                    {item.level + "%"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
