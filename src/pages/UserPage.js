import { useParams } from "react-router-dom";
export const UserPage = () => {
  const params = useParams();
  return <div>USER PAGE: {params.login}</div>;
};
