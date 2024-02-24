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

// const x = 5;
// const myelement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myelement); 
// function Car() {
//     return <h2>I am a Car!</h2>;
// } 

// function Garage() {
//     return (
//         <>
//             <h1>Who lives in my Garage?</h1>
//             <Car />             
//         </>
//     );
// }

// function Car(props){
//     return <h2>I am a {props.brand.model }!</h2>;
// }
// function Garage(){
//     const carinfo = {name: "Ford", model: "Mustang"};
//     return (
//         <div>
//             <h1>Who lives in my Garage?</h1>
//             <Car brand={carinfo}/>
//         </div>
//     );
// }

// function Football(){
//     const shoot = (a) => {
//         alert(a);
//     }
//     return(
//         <button onClick={()=> shoot("Goal!")}>Take the shot!</button>
//     );
// }

// function Goal(props){
//     const isGoal = props.isGoal;
//     if(isGoal){
//         return <h1>Goal!</h1>
//     }
//     return <h1>Not Goal!</h1>
// }

function Garage(props){
    const cars = props.cars;
    return(
        <>
        <h1>Garage</h1>
        {cars.length > 0 && 
        <h2>
            You have {cars.length} cars in your garage.
        </h2>
        }
        </>
    );
}
const cars = ['Ford', 'BMW', 'Fiat'];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage cars = {cars}/>);


