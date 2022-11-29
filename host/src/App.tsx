import "./App.css";
// 导入远程模块
// 1. 组件
// @ts-ignore
// import RemoteApp from "remote_app/App";
// 2. 工具函数
// @ts-ignore
import { add } from "remote_app/utils";
// 3. 异步组件
// @ts-ignore
// import RemoteButton from "remote_app/Button";
import AppRemote from "./AppRemote";

function App() {
  return (
    <div className="App">
      <AppRemote />
      {add(1, 2)}
    </div>
  );
}

export default App;
