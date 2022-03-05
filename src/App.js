import "./App.css";
import { Main } from "./Routes/_Routes";
import { UserContextProvider } from "./Contexts/UserContext";

export default function App() {
  return (
    <UserContextProvider>
      <Main />
    </UserContextProvider>
  );
}
