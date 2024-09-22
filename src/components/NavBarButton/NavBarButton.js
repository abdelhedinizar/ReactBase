import "./NavBarButton.css";
export default function navbarButton({ onToggleNavBar, isMenuOpen }) {
  return (
    <div
      className={`menu ${isMenuOpen ? "openmenu" : ""}`}
      onClick={onToggleNavBar}
    >
      <div>
        <span className="line-1"></span>
        <span className="line-2"></span>
        <span className="line-3"></span>
      </div>
    </div>
  );
}
