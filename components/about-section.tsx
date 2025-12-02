import Section from "./section";

export default function AboutSection() {
  return (
    <Section title="About Me">
      <p className="text-base text-foreground leading-relaxed text-justify">
        Crafting{" "}
        <span className="font-semibold text-primary">
          fast, reliable web solutions
        </span>{" "}
        that just work is what I'm all about. I blend strong backend skills with
        clean, interactive frontends using{" "}
        <span className="text-primary font-medium">
          Laravel, TypeScript, React, and Next.js{" "}
        </span>
        to deliver experiences that users and teams enjoy.
      </p>
      <br />
      <p className="text-base text-foreground leading-relaxed text-justify">
        I also focus on{" "}
        <span className="font-semibold text-primary">
          smooth deployment processes
        </span>
        , ensuring every project runs efficiently from development to live
        launch.
      </p>
    </Section>
  );
}
