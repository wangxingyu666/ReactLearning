import React, { useState } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import "./App.css";

const InnerApp = ({ setUser, user }) => {
  let location = useLocation();

  React.useEffect(() => {
    if (location.state && location.state.user) {
      setUser(location.state.user);
    }
  }, [location]);

  return <AppRoutes user={user} />;
};

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <InnerApp setUser={setUser} user={user} />
    </BrowserRouter>
  );
};

export default App;
