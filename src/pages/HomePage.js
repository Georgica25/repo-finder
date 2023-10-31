import { UserList } from "../components/user/UserList";
import { UserSearch } from "../components/user/UserSearch";
import { Alert } from "../components/layout/Alert";
import AlertContext from "../context/alert/AlertContext";
import { useContext } from "react";
export function HomePage() {
  const { alert } = useContext(AlertContext);
  return (
    <div>
      {alert && <Alert />}

      <UserSearch />

      <UserList />
    </div>
  );
}
