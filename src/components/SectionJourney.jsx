import { School } from "lucide-react";
import { BsMicrosoft, BsRobot } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";

export const SectionJourney = () => {
  const schoolData = [
    {
      title: "Cals College IJsselstein",
      sub: "Elektra opleiding Utaliteit & Automatisering",
    },
    {
      title: "ROC Midden Nederland",
      sub: "Mechatronica Technicus Engineer",
    },
  ];

  const certificateData = [
    {
      title: "VCA Basis",
      sub: "Basis veiligheid voor op de werkvloer",
      icon: <MdSecurity className="text-primary-foreground w-5 h-5" />,
    },
    {
      title: "VCA VOL",
      sub: "Veiligheid Voor Operationeel Leidinggevende",
      icon: <MdSecurity className="text-primary-foreground w-5 h-5" />,
    },
    {
      title: "Educational Robotics Training CORE",
      sub: "Universal Robots Programmeur",
      icon: <BsRobot className="text-primary-foreground w-5 h-5" />,
    },
    {
      title: "Microsoft | MS 102",
      sub: "Microsoft 365 Administrator",
      icon: <BsMicrosoft className="text-primary-foreground w-5 h-5" />,
    },
    {
      title: "Microsoft | 70-740, 70-741, 70-742",
      sub: "Windows Server 2016 Administrator",
      icon: <BsMicrosoft className="text-primary-foreground w-5 h-5" />,
    },
  ];

  return (
    <section className="relative -z-10">
      <div className="flex flex-col gap-16 md:flex-row md:gap-22 items-center md:items-start justify-center">
        <div className="md:left-1/10 flex flex-col items-start md:items-center">
          {/* <h2 className="font-light text-glow text-primary text-2xl mb-12">
            Opleidingen
          </h2> */}
          <div className="relative">
            {/* line */}
            <div className="absolute left-5.75 top-5 bottom-5 w-0.5 bg-gray-600"></div>
            {/* timeline */}
            <div className="space-y-8">
              {schoolData.map((item, key) => (
                <div key={key} className="relative flex items-center">
                  {/* Circle */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 bg-background border-primary">
                    <span className="t2 text-primary">
                      <School className="text-primary-foreground w-5 h-5" />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="ml-8">
                    <h3 className="t2 text-glow font-normal text-primary-foreground">
                      {item.title}
                    </h3>
                    <h4 className="t4 text-graytext">{item.sub}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-center">
          {/* <h2 className="font-light text-primary text-2xl mb-12 text-glow ">
            Trainingen
          </h2> */}
          <div className="relative">
            {/* line */}
            <div className="absolute left-5.75 top-5 bottom-5 w-0.5 bg-gray-600"></div>
            {/* timeline */}
            <div className="space-y-8">
              {certificateData.map((item, key) => (
                <div key={key} className="relative flex items-center">
                  {/* Circle */}
                  <div className="t2 flex items-center justify-center w-12 h-12 rounded-full border-2 bg-background border-primary">
                    <span className="text-primary">{item.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="ml-8">
                    <h3 className="t2 text-primary-foreground">{item.title}</h3>
                    <h4 className="t4 text-graytext">{item.sub}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
