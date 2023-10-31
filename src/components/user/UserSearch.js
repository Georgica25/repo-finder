import { useContext, useState } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
export function UserSearch() {
  const [text, setText] = useState("");
  const { fetchUsers, users } = useContext(GithubContext);
  const { alert, setAlert } = useContext(AlertContext);

  const onSearchChange = (evt) => {
    setText(evt.target.value);
  };

  const onHandleSubmit = (evt) => {
    evt.preventDefault();

    if (text === "") {
      setAlert("You have to add a search term", "error");
      return;
    }

    fetchUsers(text);

    setText("");
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={onHandleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                name="text"
                value={text}
                onChange={onSearchChange}
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>

      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg">Clear</button>
        </div>
      )}
    </div>
  );
}
