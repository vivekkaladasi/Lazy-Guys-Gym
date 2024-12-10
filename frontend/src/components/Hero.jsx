// import React from "react";

//   export const Hero = () => {
//   return(
//   <section className='hero'>
//     <div className="content">
//       <div className="title">
//         <h1>LET'S</h1>
//         <h1>PROVE THEM</h1>
//         <h1>WRONG</h1>
//       </div>
//       <div className="sub-title">
//         <p>Your Journey Through Discipline Starts Here</p>
//         <p>Unleash Your Potential</p>
//       </div>
//       <div className="buttons">
//         <button>
//         start Your Journey
//         </button>
//         <button >
//         Discover Your Plan
//         </button>
//       </div>
//     </div>
//   </section>
// )};
// import React from "react";

// export const Hero = () => {
//   return (
//     <section className="hero">
//       <div className="content">
//         <div className="title">
//           <h1>LET'S</h1>
//           <h1>PROVE THEM</h1>
//           <h1>WRONG</h1>
//         </div>
//         <div className="sub-title">
//           <p>Your Journey Through Discipline Starts Here</p>
//           <p>Unleash Your Potential</p>
//         </div>
//         <div className="buttons">
//           <button>
//             start Your Journey
//           </button>
//           {/* Link to the Pricing section */}
//           <a href="#pricing">
//             <button>
//               Discover Your Plan
//             </button>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

import React from "react";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>LET'S</h1>
          <h1>PROVE THEM</h1>
          <h1>WRONG</h1>
        </div>
        <div className="sub-title">
          <p>Your Journey Through Discipline Starts Here</p>
          <p>Unleash Your Potential</p>
        </div>
        <div className="buttons">
          <button>Start Your Journey</button>
          {/* Link to Pricing section */}
          <a href="#pricing">
            <button>Discover Your Plan</button>
          </a>
          {/* Link to BMI Calculator section */}
          <a href="#bmi">
            <button>Calculate Your BMI</button>
          </a>
        </div>
      </div>
    </section>
  );
};
