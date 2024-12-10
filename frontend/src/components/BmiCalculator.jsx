// // import React from 'react'
// // import { useState , useMemo } from "react";
// // import { toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // export const BmiCalculator = () => {
// //  const [height, setHeight] = useState(180);
// //   const [weight, setWeight] = useState(70);
// //   const [gender , setGender] = useState("");
// //   const[bmi , setBmi] =useState("")

// //   const calculateBMI = (e) =>{
// //     e.preventDefault();
// //     const calculateBMI = (e) => {
// //       e.preventDefault();

// //       if (!height || !weight || !gender) {
// //         toast.error("Please fill all the fields for a valid BMI value");
// //         return;
// //       }

// //       const heightInMeters = height / 100;
// //       const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
// //       setBmi(bmiValue);

// //       if (bmiValue < 18.5) {
// //         toast.warning(`Your BMI value is ${bmiValue}`);
// //       } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
// //         toast.success(`Your BMI value is ${bmiValue}`);
// //       } else if (bmiValue >= 24.9) {
// //         toast.warning(`You are overweight. BMI: ${bmiValue}`);
// //       }
// //     };

// //   }

// //   if(!height || !weight || !gender){
// //     toast.error("please fill all the fields for valid BMI Value")
// //     return;
// //   }
// //     const heightInMeters = height/100;
// //     const bmiValue = (weight/(heightInMeters * heightInMeters)).toFixed(2)
// //     setBmi(bmiValue);

// //     if(bmiValue < 18.5){
// //       toast.warning("BMI VALUE IS", {bmiValue })
// //     }

// //     else if (bmiValue >= 18.5 && bmiValue<24.9  ){
// //       toast.success("BMI VALUE IS ", {bmiValue} )
// //     }
// //     else if(bmiValue>= 24.9){
// //       toast.warning("YOU are overweight",{bmiValue})
// //     }

// //   return <section className='bmi'>
// //   <h1> BMI CALCULATOR</h1>
// //   <div className='container'>
// //     <div className='wrapper'>
// //       <form onSubmit={calculateBMI}>
// //         <div>
// //           <label>Height(CM)</label>
// //           <input type='number' value={height} onChange={(e)=> setHeight(e.target.value)} required></input>
// //         </div>
// //         <div>
// //           <label>weight(kg)</label>
// //           <input type='number' value={weight} onChange={(e)=> setWeight(e.target.value)} required></input>
// //         </div>
// //         <div>
// //           <label>Gender</label>
// //           <select value={gender} onChange={(e) => setGender(e.target.value)}>
// //             <option value =" "> Select Gender</option>
// //             <option value ="Male"> Male</option>
// //             <option value ="Female"> Female</option>
// //           </select>

// //            </div>
// //            <button type ="submit"> calculate BMI</button>
// //       </form>
// //     </div>
// //     <div className='wrapper'>
// //       <img src='/bmi.jpg' alt='bmi image'/>
// //     </div>
// //   </div>

// //   </section>
// // }
// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export const BmiCalculator = () => {
//   const [height, setHeight] = useState(180);
//   const [weight, setWeight] = useState(70);
//   const [gender, setGender] = useState("");
//   const [bmi, setBmi] = useState("");

//   const calculateBMI = (e) => {
//     e.preventDefault();

//     if (!height || !weight || !gender) {
//       toast.error("Please fill all the fields for a valid BMI value");
//       return;
//     }

//     const heightInMeters = height / 100;
//     const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
//     setBmi(bmiValue);

//     if (bmiValue < 18.5) {
//       toast.warning(`Your BMI value is ${bmiValue}`);
//     } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
//       toast.success(`Your BMI value is ${bmiValue}`);
//     } else if (bmiValue >= 24.9) {
//       toast.warning(`You are overweight. BMI: ${bmiValue}`);
//     }
//   };

//   return (
//     <section className="bmi">
//       <h1>BMI CALCULATOR</h1>
//       <div className="container">
//         <div className="wrapper">
//           <form onSubmit={calculateBMI}>
//             <div>
//               <label>Height (CM)</label>
//               <input
//                 type="number"
//                 value={height}
//                 onChange={(e) => setHeight(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label>Weight (KG)</label>
//               <input
//                 type="number"
//                 value={weight}
//                 onChange={(e) => setWeight(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label>Gender</label>
//               <select value={gender} onChange={(e) => setGender(e.target.value)}>
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//               </select>
//             </div>
//             <button type="submit">Calculate BMI</button>
//           </form>
//         </div>
//         <div className="wrapper">
//           <img src="/bmi.jpg" alt="BMI image" />
//         </div>
//       </div>
//     </section>
//   );
// };
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const BmiCalculator = () => {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please fill all the fields for a valid BMI value");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning(`Your BMI value is ${bmiValue}`);
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success(`Your BMI value is ${bmiValue}`);
    } else if (bmiValue >= 24.9) {
      toast.warning(`You are overweight. BMI: ${bmiValue}`);
    }
  };

  return (
    <section id="bmi" className="bmi">
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label>Height (CM)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Weight (KG)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type="submit">Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="BMI image" />
        </div>
      </div>
    </section>
  );
};
