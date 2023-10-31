import { createContext, useReducer, useState } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();

const GITHUB_URL = "https://api.github.com";
const GITHUB_TOKEN = "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";

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async (text) => {
    dispatch({
      type: "GET_USERS",
    });
    const response = await fetch(`${GITHUB_URL}/search/users?q=${text}`);
    const { items } = await response.json();

    dispatch({
      type: "GET_USERS_SUCCESS",
      payload: items,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
