import React from "react";
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client"
import App from "./App"
import App1 from "./App1"
import './styles.css'

// ReactDOM.render(
//     <React.StrictMode>
//       <App1 />
//     </React.StrictMode>,
//     document.getElementById("root")
//   );

createRoot(document.getElementById("root")).render(<App/>)

// ReactDOM.render(
//     <React.StrictMode>
//       <App1 />
//     </React.StrictMode>,
//     document.getElementById("root")
//   );