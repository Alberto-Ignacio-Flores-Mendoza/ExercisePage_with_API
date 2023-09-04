import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';


// Arrows
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};


//Real Scrollbar

const HorixontalScrollbar = ({data, bodyPart, setBodyPart, isBodyParts}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item)=> 
      <Box key={item.ID || item}
            itemID={item.ID || item}
            title={item.ID || item}
            m ="0 40px"
            >

       {isBodyParts ? 
       <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}></BodyPart> : <ExerciseCard exercise={item}></ExerciseCard>
       
       }

      </Box>
      
      )}
    </ScrollMenu>
  )
}

export default HorixontalScrollbar