import Section from "./section";

export default function AboutSection() {
  return (
    <Section title="About Me">
      <p className="text-base text-foreground leading-relaxed text-justify">
        Hi, I'm a{" "}
        <span className="font-semibold text-primary">
          full-stack web developer
        </span>{" "}
        with over two years of
        <span className="text-primary font-medium">
          {" "}
          proven experience
        </span>{" "}
        crafting high-quality web solutions. I specialize in building{" "}
        <span className="font-semibold">
          interactive front-end experiences
        </span>{" "}
        with
        <span className="text-primary font-medium"> React and Next.js</span>,
        and develop
        <span className="font-semibold">
          {" "}
          stable, scalable back-end systems
        </span>{" "}
        using
        <span className="text-primary font-medium"> Laravel and Node.js</span>.
      </p>
      <br />
      <p className="text-base text-foreground leading-relaxed text-justify">
        My expertise includes integrating{" "}
        <span className="font-semibold">secure payment gateways</span>,
        implementing
        <span className="text-primary font-medium">
          {" "}
          authentication systems
        </span>
        , managing databases, and optimizing applications for{" "}
        <span className="font-semibold text-primary">
          speed and reliability
        </span>
        . Whether starting from scratch or improving existing projects, I focus
        on delivering{" "}
        <span className="font-semibold">clean, polished, and efficient</span>{" "}
        results that drive real impact.
      </p>
    </Section>
  );
}
