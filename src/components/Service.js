import Link from "next/link";

import styles from "./styles/Service.module.css";

const services = [
  {
    id: "archive",
    title: "Archive",
    description:
      "The Hockinson Math Club has a free program to host, archive, and publish any team’s publications.",

    primaryLink: {
      href: "/archive",
      label: "Open Archive",
    },

    secondaryLink: {
      href: "/archive/submit",
      label: "Learn How",
    },
  },
  {
    id: "latex_template",
    title: "LaTeX Template",
    description:
      "A modern LaTeX template, used for the generated PDFs on our archive.",

    primaryLink: {
      href: "https://github.com/hockinson/template",
      label: "View Source",
    },
  },
];

export default function Service(props) {
  const service = services.find((s) => s.id === props.id);

  return (
    <div className={styles.service}>
      <h3>{service.title}</h3>
      <p>{service.description}</p>

      <div className={styles.links}>
        <Link className={styles.primaryLink} href={service.primaryLink.href}>
          {service.primaryLink.label}
        </Link>

        {service.secondaryLink && (
          <Link
            className={styles.secondaryLink}
            href={service.secondaryLink.href}
          >
            {service.secondaryLink.label}
          </Link>
        )}
      </div>
    </div>
  );
}
