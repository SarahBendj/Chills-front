import './style.scss';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className="copyright">
      Relax-center - {year} ©
    </footer>
  );
};

export default Footer;
