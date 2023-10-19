import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";
import { UserItem } from "./UserItem";
export function UserList({ searchTerm }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (searchTerm !== "") {
      fetchUsers(searchTerm);
    }
  }, [searchTerm]);

  const fetchUsers = async (text) => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${text}`,
      {
        headers: {
          Authorization: "token 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",
        },
      }
    );
    const { items } = await response.json();

    setUsers(items);
    setLoading(false);
  };

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}
