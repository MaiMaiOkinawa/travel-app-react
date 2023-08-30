import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="">
          <a href="/">
            <h1>mes.</h1>
          </a>
          <p>Speak Read Grow Together</p>
        </div>
        <div className="social-icons">
          <a href="https://github.com/MaiMaiOkinawa">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/mai-uchida-okinawa/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/MaiMaiOkinawaa">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Contact Me</h4>
          <a href="/">
            <i class="fa-regular fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
