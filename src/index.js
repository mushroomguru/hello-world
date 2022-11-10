import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


const mainDiv = <div>

<p>This is the first paragraph</p>
<p>This is the second paragraph</p>
<p>This is the first paragraph</p>
<p>This is the first paragraph</p>
<p>This is the first paragraph</p>







</div>


root.render(mainDiv);

// Version 2
// const p1 = <p id="firstPara">This is a paraghraph</p>
// const p2 = <p>This is a paragraph 2</p>
// const myList = <ul>
// <li>One</li>
// <li>Two</li>
// <li>Three</li>
// <li>Four</li>
// <li>Five</li>
// </ul>
// const mainDiv = <div>
//   {p1}{p2}{myList}
// </div>

// root.render(mainDiv);


//Version 1
//const p1 = React.createElement("p",null,"This is paragraph 1");
// const p1 = React.createElement("p",{id: "firstPara"},"This is paragraph 1");
// const mainDiv = React.createElement("div",null,p1);
// root.render(mainDiv);

//<p>This is paragraph 1</p>
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
