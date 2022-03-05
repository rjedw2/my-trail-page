import { useUserInfo } from "../Contexts/UserContext";

export default function LoginButton() {
  const user = useUserInfo();
  function handleLogin(e) {
    e.preventDefault();
    user.login();
  }
  return (
    <div className="loginButton" onClick={handleLogin}>
      Sign In
    </div>
  );
}
