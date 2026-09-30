import { Mail } from "lucide-react";

import Container from "@/components/ui/container";
import GitHubIcon from "@/components/ui/icons/git-hub-icon";
import LinkedInIcon from "@/components/ui/icons/linked-in-icon";

const socialLinks = [
  {
    icon: GitHubIcon,
    title: "GitHub",
    description: "Explore my projects and source code.",
    href: "https://github.com/ali-tz-2004",
  },
  {
    icon: LinkedInIcon,
    title: "LinkedIn",
    description: "Connect with me professionally.",
    href: "https://www.linkedin.com/in/ali-taghizadeh-b167361b0/",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Get in touch for opportunities.",
    href: "mailto:alitz1382@gmail.com",
  },
];

export default function ConnectSection() {
  return (
    <section className="border-t py-12 sm:py-16 md:py-24">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Let&apos;s Connect
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Feel free to explore my work or get in touch.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {socialLinks.map(({ icon: Icon, title, description, href }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-xl border bg-background p-5 transition-colors hover:bg-muted/50"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border bg-muted/30">
                <Icon className="size-5 transition-transform group-hover:scale-110" />
              </div>

              <div>
                <h3 className="font-semibold">{title}</h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
