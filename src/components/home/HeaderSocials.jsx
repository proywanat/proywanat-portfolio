import React from "react";

const HeaderSocials = () => {

  const facebook__link = "https://www.facebook.com/proy.wanat";
  const linkedin__link = "https://www.linkedin.com/in/wanatchaporn-churvivat";
  const github__link = "https://github.com/proywanat";
  const email__link = "mailto:proywanat@gmail.com";

  return (
    <div className="home__socials">
      <a href={facebook__link} className="home__socials-link" target="_blank">
        <i class="fa-brands fa-facebook"></i>
      </a>

      <a href={linkedin__link} className="home__socials-link" target="_blank">
        <i class="fa-brands fa-linkedin"></i>
      </a>

      <a href={github__link} className="home__socials-link" target="_blank">
        <i class="fa-brands fa-github"></i>
      </a>

      <a href={email__link} className="home__socials-link" target="_blank">
        <i class="fa-regular fa-envelope"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
