import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Weather from "./weather"
import Calculator from "./Test1";
import TodoApp from "./todoApp";
import Main from "./main";
import Blog from "./blog/Blog";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Mmad from "./mmad";
import {ThemeProvider} from './component/Context/theme'


ReactDOM.render(
  <ThemeProvider>
    <Mmad/>
  </ThemeProvider>,
  document.getElementById('root')
);




// ReactDOM.render(
//   <BrowserRouter>
//     <Routes>
//     <Route path="/" element={<Mmad />} />
//     {/* <Route path="/" element={<App />} /> */}
//       {/* <Route path="/" element={<Main />} /> */}
//       {/* <Route path="/" element={<Blog />} /> */}
//       {/* <Route path="/" element={<BaseLayout />} /> */}
//       <Route path="cal" element={<Calculator />} />
//       <Route path="todo" element={<TodoApp />} />
//       <Route path="weather" element={<Weather />} />
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
