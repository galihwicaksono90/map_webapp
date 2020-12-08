import { AiFillGithub } from "react-icons/ai";
import "../scss/footer.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-info">
        <h4>galihwicaksono90@gmail.com</h4>
        <h4>+628522974561</h4>
      </div>
      <div className="footer-icon">
        <a href="https://github.com/gorillahobo">
          <AiFillGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
