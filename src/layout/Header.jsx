const Header = () => {
  return (
    <div className="header-container">
      <div className="left-side">
        <span>+971 52 299 0514</span>
        <span>|</span>
        <span>info@alfattah.ae</span>
      </div>
      <div className="right-side">
        <a
          href="https://www.facebook.com/people/Al-Fattah/61558987553137/?mibextid=JRoKGi"
          target="_blank"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://wa.me/971522990514" target="_blank">
          <i className="bi bi-whatsapp "></i>
        </a>
        <a
          href="https://www.instagram.com/alfattah.ae?igsh=M3k5aG10dGFyNHJn"
          target="_blank"
        >
          <i className="bi bi-instagram "></i>
        </a>
        <a href="https://www.tiktok.com/@fattahuae" target="_blank">
          <i className="bi bi-tiktok "></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCRqav5GwLAGeFrdZsGQWQ8A"
          target="_blank"
        >
          <i className="bi bi-youtube "></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
