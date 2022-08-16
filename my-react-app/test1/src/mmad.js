import React from "react";
// import Footer from "./blog/Footer";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
import { useContext } from "react";
import {ThemeContext } from "./component/Context/theme"
import Header from "./component/Header/header";
import Skills from "./component/Skills/skills";
import Footer from "./component/Footer/footer";
import Projects from "./component/projectss/projects"
import Contact from "./component/contact/contact"
import About from "./component/About/about"
import './mmad.css'

const Mmad = () => {
  const [{ themeName}] =useContext(ThemeContext)
  return (
    <div id='top' className={`${themeName} app`} >
      <Header />
      <main>
      <About />
      <Projects/>
      <Skills />
       <Contact/>
      </main>
      <Footer />
    </div>
  );
};

export default Mmad;
//  function Mmad(){
//     return(
//         <Box sx={{
//             display: 'flex',
//             '& > :not(style)': {
//               m: 1,
//               width: Screen.width,
//               height: Screen.height,

//             },
//           }}>
//           <Paper variant="outlined" elevation={0}/>

//         </Box>

//     );
// };
