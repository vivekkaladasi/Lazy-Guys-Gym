// import React from "react";
// import { Check } from "lucide-react";
// import { Link } from "react-router-dom";
// export const Pricing = () => {
//   const Pricing = [
//     {
//       imgUrl: "/pricing.jpg",
//       title: "3-MONTHS",
//       price: 6000,
//       length: 3,
//     },
//     {
//       imgUrl: "/pricing.jpg",
//       title: "6-MONTHS",
//       price: 9000,
//       length: 6,
//     },
//     {
//       imgUrl: "/pricing.jpg",
//       title: "12-MONTHS",
//       price: 15000,
//       length: 12,
//     },
//   ];
//   return (
//     <section className="pricing">
//       <h1> LAZY GUYS FITNESS PLANS</h1>
//       <div className="wrapper">
//         {Pricing.map((element) => {
//           return (
//             <div className="card" key={element.title}>
//               <img src={element.imgUrl} alt={element.title} />
//               <div className="title">
//                 <h1>{element.title}</h1>
//                 <h1>PACKAGE</h1>
//                 <h3>Rs {element.price}</h3>
//                 <p> For {element.length} </p>
//               </div>
//               <div className="description">
//                 <p>
//                   <Check /> EQUIPMENT
//                 </p>
//                 <p>
//                   <Check /> ALL DAY FREE TRAINING
//                 </p>
//                 <p>
//                   <Check /> FREE SAUNA EVERYDAY
//                 </p>
//                 <p>
//                   <Check /> OPEN 24/7
//                 </p>
//                 <p>
//                   <Check /> RENOWED TRAINERS
//                 </p>
//                 <Link to={"/"}>JOIN NOW</Link>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };
import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export const Pricing = () => {
  const Pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "3-MONTHS",
      price: 6000,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "6-MONTHS",
      price: 9000,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "12-MONTHS",
      price: 15000,
      length: 12,
    },
  ];
  return (
    <section id="pricing" className="pricing">
      <h1> LAZY GUYS FITNESS PLANS</h1>
      <div className="wrapper">
        {Pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p> For {element.length} </p>
              </div>
              <div className="description">
                <p>
                  <Check /> EQUIPMENT
                </p>
                <p>
                  <Check /> ALL DAY FREE TRAINING
                </p>
                <p>
                  <Check /> FREE SAUNA EVERYDAY
                </p>
                <p>
                  <Check /> OPEN 24/7
                </p>
                <p>
                  <Check /> RENOWED TRAINERS
                </p>
                <Link to={"/"}>JOIN NOW</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
