import logo from '../images/logo.svg';

function Header() {
  return (
    <header className="header content">
      <img
        className="header__logo"
        src={logo}
        alt="Логотип с надписью место россия"
      />
    </header>
  );
}
export default Header;