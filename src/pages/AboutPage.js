import { Navigate, useNavigate, Outlet, NavLink } from "react-router-dom";

export function AboutPage() {
  const status = 200;

  const navigate = useNavigate();

  if (status === 404) {
    return <Navigate to="not-found" />;
  }

  const redirectToHome = () => {
    navigate("/");
  };

  return <h1 className="text-6xl">This is About page</h1>;
}
