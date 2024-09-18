// const first = () => {
//     const greet = "hello";
//     const second = () => {
//         alert (greet);
//     }
//     return second;
// }

// const newFunc = first();
// newFunc();

const multiply  = (a,b) => a * b;
const curriedmultiply = (a) => (b) =>  a*b;