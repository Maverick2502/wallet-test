import { Layout } from "@components";
import ReactDOM from "react-dom/client";
import App from "./pages/App/App.tsx";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Layout key="layout">
    <App key="app" />
  </Layout>
);
