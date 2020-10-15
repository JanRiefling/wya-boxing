import React from 'react';
import Box from '@material-ui/core/Box';
import SetTimer from './SetTimer';
import SetRounds from './SetRounds';
import {useSelector} from 'react-redux';



export default function TimerForm(){

    const timer = useSelector(state => state.timerReducer);
return (
    <>
 <Box >
     <SetTimer />
     <SetRounds />
<div>{timer}</div>
 </Box>
 </>
);
}