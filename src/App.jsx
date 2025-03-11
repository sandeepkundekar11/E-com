import { useContext } from "react";
import AppContent from "./context/AppContext";

function App() {
  const { userinfo, info2 } = useContext(AppContent);
  return (
    <>
      <h1 className="text-center text-gray-950">
        hello {info2?.name}
        {userinfo?.name}
      </h1>
    </>
  );
}

export default App;
