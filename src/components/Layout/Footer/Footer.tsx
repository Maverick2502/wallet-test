import fa_facebook from "@assets/icons/fa_facebook.svg";
import fa_instagram from "@assets/icons/fa_instagram.svg";
import fa_twitter from "@assets/icons/fa_twitter.svg";
import fa_youtube from "@assets/icons/fa_youtube.svg";
import logo from "@assets/icons/logo.svg";
import * as I from "@models";
import classes from "./footer.module.scss";

const socials: I.SocialAttributes[] = [
  {
    alt: "Sfxdx's account on Facebook",
    img: fa_facebook,
    link: "https://www.facebook.com/sfxdx.ru/",
  },
  {
    alt: "Sfxdx's account on Twitter",
    img: fa_twitter,
    link: "https://twitter.com/sfxdx_team",
  },
  {
    alt: "Sfxdx's account on Youtube",
    img: fa_youtube,
    link: "https://www.youtube.com/channel/UCLTfqXbfXk4jFgzQMTSZaNg",
  },
  {
    alt: "Sfxdx's account on Instagram",
    img: fa_instagram,
    link: "https://www.instagram.com/sfxdx_team/?hl=en",
  },
];

function Footer() {
  return (
    <footer role="contentinfo" className={classes["footer"]}>
      <div className={classes["container"]}>
        <div className={classes["footer_sections"]}>
          <ul className={classes["footer_documents"]}>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Cookie Policy
              </a>
            </li>
          </ul>

          <div className={classes["footer_logo"]}>
            <img height={24} width={148} src={logo} alt="sfxdx's logotype" />
          </div>

          <ul className={classes["footer_socials"]}>
            {socials.map((item, idx) => (
              <li key={idx + 1}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img height={24} width={24} src={item.img} alt={item.alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes["footer_copyright"]}>
          <span>&copy;2022 All rights reserved. Powered by SFXDX</span>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
