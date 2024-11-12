import { useNavigate } from "react-router-dom";
const LoginButton = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login", { replace: true });
  };
  return (
    <div className="cart-icon-container" onClick={navigateToLogin}>
      <i class="fa-solid fa-right-to-bracket"></i>
    </div>
  );
};

export default LoginButton;
