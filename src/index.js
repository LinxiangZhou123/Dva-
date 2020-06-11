import dva from 'dva';
import React from "react";
import './index.css';
import Router from "./router";
import HelloWorld from "./models/helloWorld"
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use();

// 3. Model
app.model(HelloWorld);

// 4. Router
app.router(Router);

// 5. Start
app.start('#root');
//TODO: hot module replacement
// if (module.hot) {
//     module.hot.accept("./router.js", () => {
//       const app = require("./router.js").default;
//       app.start('#root');
//     });
// }