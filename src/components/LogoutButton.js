import { useUserInfo } from "../Contexts/UserContext";

export default function LogoutButton() {
  const user = useUserInfo();
  function handleLogout(e) {
    e.preventDefault();
    user.logout();
  }
  return (
    <div className="logoutButton" onClick={handleLogout}>
      Sign Out
    </div>
  );
}
