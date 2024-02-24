import React from 'react';
import ReactDOM from 'react-dom/client';

// const myelement = (
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// );

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(myelement);

// const myElement = <h1>React is {5+5} times better with JSX</h1>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

// const myelement = (
//   <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//   </ul>
// );

// const myelement = (
//   <div>
//     <p>I am a paragraph.</p>
//     <p>I am a paragraph too.</p>
//   </div>
// );

// const myelement = <input type="text" />;

// const myelement = <h1 className="myclass">Hello World</h1>;

// const x = 5;
// let text = "Goodbye";
// if (x < 10) {
//   text = "Hello";
// }
// const myelement = <h1>{text}</h1>;

const x = 5;
const myelement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myelement); 


