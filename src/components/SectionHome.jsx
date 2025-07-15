import { cn } from "../lib/utils";

export const SectionHome = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-screen flex items-center justify-center -z-10"
    >
      <div className="h-1/2 w-screen md:w-[80%] max-w-260 flex items-center justify-center gap-10 flex-col md:flex-row">
        <img
          src="/images/Sebastiaan.png"
          alt="Profielfoto"
          className={cn(
            "w-44 sm:w-47 md:w-49 lg:w-52 cards border-border-color border-4 shadow"
          )}
        />
        <div className="w-[70%] h-2/3 md:h-1/2 flex items-start justify-around flex-col">
          <div>
            <h1 className="t1 z-10">
              <span className="text-primary-foreground opacity-0 animate-fade-in">
                Sebastiaan{" "}
              </span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                de Vries
              </span>
            </h1>
            <h2 className="t4 mb-5 md:mb-0 italic text-graytext opacity-0 animate-fade-in-delay-2">
              01-07-2002 - sebastiaan@huizedevries.nl - +31 (0) 646772219
            </h2>
          </div>
          <p className="t3 text-foreground opacity-0 animate-fade-in-delay-3 z-10">
            Sebastiaan de Vries is een veelzijdige IT-professional met expertise
            in netwerkbeheer, software development en data-analyse. Als allround
            IT-medewerker combineert hij technische vaardigheden met een sterke
            focus op automatisering om bedrijfsprocessen te optimaliseren.
          </p>
        </div>
      </div>
    </section>
  );
};
