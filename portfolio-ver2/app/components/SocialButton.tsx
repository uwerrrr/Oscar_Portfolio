import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "@/app/components/Button";
import { cn } from "@/lib/utils";
import { socials } from "@/lib/data";

interface SocialButtonProps {
  social: keyof typeof socials;
}

const SocialButton = ({ social }: SocialButtonProps) => {
  const selectedSocial = socials[`${social}`];

  let hoverColor: string;
  switch (social) {
    case "linkedin":
      hoverColor = "hover:text-[#145ab5]";
      break;
    case "github":
      hoverColor = "hover:text-[#662a8c]";
      break;
    default:
      hoverColor = "hover:text-[#fb923c]";
      break;
  }

  // const hoverColor = `hover:text-blue-500`;
  return (
    <Button
      className={cn("p-1  bg-transparent border-none text-xl", hoverColor)}
    >
      <a
        href={
          social == "email"
            ? `mailTo:${selectedSocial.url}`
            : selectedSocial.url
        }
        target="_blank"
      >
        <FontAwesomeIcon icon={selectedSocial.icon} size="2xl" />
      </a>
    </Button>
  );
};

export default SocialButton;
