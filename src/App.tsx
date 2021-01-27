import { useAuthCtx } from "hooks/useAuthCtx";

import AuthenticatedApp from "auth-app";
import UnauthenticatedApp from "unauth-app";

import "./App.css";

function App() {
  const { user } = useAuthCtx();

  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
