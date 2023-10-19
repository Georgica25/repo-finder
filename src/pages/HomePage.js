import { useState } from "react";
import { UserList } from "../components/user/UserList";
import { UserSearch } from "../components/user/UserSearch";
export function HomePage() {
  const [searchText, setSearchText] = useState("");

  const searchUsers = (text) => {
    setSearchText(text);
  };

  return (
    <div>
      <UserSearch onSearchSubmit={searchUsers} />

      {searchText && <UserList searchTerm={searchText} />}
    </div>
  );
}
