import { useState } from "react";
import { Login } from "./login";
import { Register } from "./register";

const UnauthenticatedApp = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {isLogin ? <Login /> : <Register />}
      <button onClick={() => setIsLogin(!isLogin)}>
        切换到{isLogin ? "注册" : "登录"}
      </button>
    </div>
  );
};

export default UnauthenticatedApp;
