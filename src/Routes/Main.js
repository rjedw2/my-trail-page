import { BrowserRouter as Router } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { useUserInfo } from "../Contexts/UserContext";
import {
  HikeNew,
  HikeView,
  Home,
  ProfileEdit,
  ProfileView,
  Welcome,
} from "./_Routes";

export default function Main() {
  const userInfo = useUserInfo();
  return userInfo && userInfo.isAuthenticated === null ? (
    <Loading />
  ) : (
    <div className="App">
      <Router>
        <Header />
        <div className="main">
          <PublicRoute path="/welcome" Component={Welcome} />
          <ProtectedRoute path="/profile/me" Component={ProfileEdit} />
          <ProtectedRoute path="/profile/:id" Component={ProfileView} />
          <ProtectedRoute path="/hike/:id" Component={HikeView} />
          <ProtectedRoute path="/hike/new" Component={HikeNew} />
          <ProtectedRoute exact path="/" Component={Home} />
          <ProtectedRoute path="/home" Component={Home} />
        </div>
      </Router>
    </div>
  );
}
