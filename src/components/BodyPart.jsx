import React from 'react'
import {Stack, Typography} from '@mui/material'
import Icon from '../assets/icons/gym.png'
import Legs from '../assets/icons/legs.png'
import Waist from '../assets/icons/waist.png'
import Back from '../assets/icons/back.png'
import Calves from '../assets/icons/calves.png'
import Chest from '../assets/icons/chest.png'
import Forearm from '../assets/icons/forearm.png'
import  Shoulder from '../assets/icons/shoulder.png'
import  Cardio from '../assets/icons/cardio.png'
import  Bicep from '../assets/icons/Logo.png'









const BodyPart = ({item, setBodyPart,bodyPart}) => {

  let isLeg = false;
  let isWaist = false;
  let isBack = false;
  let isCardio = false;
  let isChest =false;
  let isForearms =false;
  let isCalves = false; 
  let isNeck =false; 
  let isShoulders = false; 
  let isBiceps = false; 



  
  if(item==='upper legs') isLeg = true;
  if(item==='waist') isWaist = true;
  if(item==='back') isBack = true;
  if(item==='cardio') isCardio = true;
  if(item==='chest') isChest = true;
  if(item==='lower arms') isForearms = true;
  if(item==='lower legs') isCalves = true;
  if(item==='neck') isNeck = true;
  if(item==='shoulders') isShoulders = true;
  if(item==='upper arms') isBiceps = true;

  return (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    {isLeg?  <img className='icons' src={Legs} alt="dumbbell" style={{ width: '80px', height: '80px' }} /> 
    : isWaist? <img className='icons' src={Waist} alt="dumbbell" style={{ width: '80px', height: '80px' }} /> 
    : isBack? <img className='icons' src={Back} alt="dumbbell" style={{ width: '80px', height: '80px' }}  />
    : isCardio? <img className='icons' src={Cardio} alt="dumbbell" style={{ width: '80px', height: '80px' }} />
    : isChest? <img className='icons' src={Chest} alt="dumbbell" style={{ width: '80px', height: '80px' }} />
    : isCalves? <img className='icons' src={Calves} alt="dumbbell" style={{ width: '80px', height: '80px' }} />
    : isForearms? <img className='icons' src={Forearm} alt="dumbbell" style={{ width: '80px', height: '80px' }} />
    : isNeck? <img className='icons' src={Shoulder} alt="dumbbell" style={{ width: '80px', height: '80px' }} />
    : isShoulders? <img className='icons' src={Shoulder} alt="dumbbell" style={{ width: '80px', height: '80px' }} />
    : isBiceps? <img className='icons' src={Bicep} alt="dumbbell" style={{ width: '80px', height: '80px' }} />
    : <img className='icons' src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />





  
  
  }
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
  )
}

export default BodyPart