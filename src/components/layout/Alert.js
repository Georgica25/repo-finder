import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

export function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    <p>
      Type: {alert.type}, Message: {alert.msg}
    </p>
  );
}
