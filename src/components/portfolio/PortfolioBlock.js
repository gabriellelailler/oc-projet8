import React, { useState } from 'react';
import { Box } from "@mui/material";
import {info} from "../../info/Info";


function PortfolioBlock(props) {
   const { image, source, title, tech1, tech2, description } = props;

   const [isHovered, setIsHovered] = useState(false);

   const renderTech2 = tech2 ? (
      <>
         <span style={{ margin: '0 10px' }}></span>
         <Box p={1} color={'rgb(47, 46, 127)'} border={'2px solid rgb(120, 120, 220)'} borderRadius={'25px'}>
         <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{tech2}</span>
         </Box>
      </>
   ) : null;

   const imageStyle = {
      transition: 'transform 0.5s ease-in-out',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
   };
   

   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <a href={source} target="_blank" rel="noopener noreferrer">
            <img
               src={image}
               alt={'mockup'}
               style={imageStyle}
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
            />
         </a>
         <h1 style={{ fontSize: '2rem' }}>{title}</h1>
         <Box textAlign="center" pt={1} pl={5} pr={5}>
            <p>{description}</p>
         </Box>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'1.5rem'} alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box display={'flex'} flexDirection={'line'}>
            <Box p={1} color={'rgb(47, 46, 127)'} border={'2px solid rgb(120, 120, 220)'} borderRadius={'25px'}>
            <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{tech1}</span>
            </Box>
               {renderTech2}
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;
