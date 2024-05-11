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
  return (
    <Button
      className={cn(
        "p-1 text-txt_primary-500 bg-transparent border-none text-xl",
        `hover:text-[${selectedSocial.color}]`
      )}
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
