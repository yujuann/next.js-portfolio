// import React, { useState, useEffect } from "react";
// import classes from "../.././styles/data.module.css";
// const Data = () => {
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div className="{`${classes.nav__time}}">
//       <p className="d-flex align-items-center gap-2 mb-0">
//         접속 시간: {currentTime.toLocaleTimeString()}
//       </p>
//     </div>
//   );
// };

// export default Data;
