import "../Assets/Styles/FooterStyle.css";
import imgLogo from "../Assets/Images/footer-brand.png";
import imgGplay from "../Assets/Images/googleplay .png";
import imgApp from "../Assets/Images/appstore.png";
import imgFb from "../Assets/Images/face.png";
import imgPin from "../Assets/Images/pinter.png";
import imgIg from "../Assets/Images/instagram.png";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={imgLogo} alt="brand logo" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <ul className="footer-nav">
          <li>Tentang kami</li>
          <li>Blog</li>
          <li>Layanan</li>
          <li>Karir</li>
          <li>Pusat Media</li>
        </ul>
        <div className="social">
          <p>Download</p>
          <div className="social-download">
            <img src={imgGplay} alt="google play" />
            <img className="appStore" src={imgApp} alt="app store" />
          </div>
          <p>Social Media</p>
          <div className="social-media">
            <img src={imgFb} alt="facebook" />
            <img src={imgPin} alt="pinterest" />
            <img src={imgIg} alt="instagram" />
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright &copy; 2000-202 MilanTv. All Raight Reserved
      </div>
    </div>
  );
}
