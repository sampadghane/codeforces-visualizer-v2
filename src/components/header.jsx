import "../styles/header.css";
const Header = () => {
  return (
    <header id="header">
      <div className="header-content">
        <img
          id="image"
          src="https://codeforces.org/s/73673/images/codeforces-sponsored-by-ton.png"
          alt="Codeforces Logo"
        />

        <h1>Codeforces Visualizer</h1>

        <p className="subtitle">
          Analyze competitive programming profiles with ease.
        </p>
      </div>
    </header>
  );
};

export default Header;