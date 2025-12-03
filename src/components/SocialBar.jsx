import React from "react";
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const SocialBar = () => {
  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com", color: "#1DA1F2" },
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/100064200993187", color: "#1877F2" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/hitechhomesluxury?igsh=MWljd21xOTZ1aHkwcA==", color: "#C13584" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/hitech-homesgurgaon/", color: "#0A66C2" },
    { name: "YouTube", icon: Youtube, href: "https://m.youtube.com/@hitech_homes", color: "#FF0000" },
  ];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40">

      {/* ⭐ Main Pill Container */}
      <div className="bg-white rounded-full shadow-xl p-3 flex flex-col gap-3 border border-gray-200">

        {socialLinks.map((link) => (
          <div key={link.name} className="relative group">

            {/* Icon */}
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.name}
              style={{ color: link.color }}
              className={`
                p-2.5 rounded-full bg-white transition-all duration-300 block
                hover:text-white hover:shadow-lg
              `}
            >
              <link.icon size={18} />
            </a>

            {/* Hover Label */}
            <span
              style={{ backgroundColor: link.color }}
              className="
                absolute right-full top-1/2 -translate-y-1/2
                mr-3 py-1 px-3 text-sm text-white rounded-full
                opacity-0 transition-all duration-300 whitespace-nowrap
                group-hover:opacity-100 group-hover:mr-4
              "
            >
              Follow us on {link.name}
            </span>

          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialBar;
