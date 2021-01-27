import ProjectList from "pages/ProjectList";

import { logout } from "helpers/auth";

const AuthenticatedApp = () => {
  return (
    <div>
      <button onClick={logout}>注销</button>
      <ProjectList />
    </div>
  );
};

export default AuthenticatedApp;
