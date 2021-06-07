import React, { useEffect, useState} from 'react'

import './style.css'

import buildCalendar from './build'
import dayStyle from './style'
import Popoup from '../Hooks/Popoup'
import { MeetingServices } from '../services/MeetingServices'




    

export const Calendar = ({value, onChange, handleInputChange}) => {

    const [calendar, setCalendar] = useState([]);
    
    const [isOpen, setisOpen] = useState(false)  
    
    
    useEffect(() => {               
        setCalendar (buildCalendar(value));        
    }, [value])

  

    return (
<<<<<<< HEAD
        <table className="calendar">
=======
       
        <div className="calendar">
>>>>>>> 143a851db928f325efc614ad3b81446e7fc90546
            
           
                <tr className="daynames">
                    {
                        ["Saturday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"]
                        .map((d) => (
                            <th className="week">{d}</th>
                        ))
                    }
                </tr>
                {
                    calendar.map((week) => ( 
                    <tbody  
                    type="text"
                    name="name"
                    value={handleInputChange}>
                       
                        {
                            week.map((day) => (
                                <div className="day"
                                
                                onClick ={()=> onChange(day)}
                                onDoubleClick = {() => setisOpen(true)}>
                                                                    
                                    <div                                   
                                    className={dayStyle(day, value)}                                                                       
                                    >
                                    {day.format("D").toString()}                        
                                    </div>      
                                    <p> {MeetingServices}</p>                                                                        
                                </div>
                            ))}
                    </tbody>    
                    ))}
<<<<<<< HEAD
                    <Popoup
                     open = {isOpen}
                     onClick = {() => setisOpen(false)}
                     onChange={ handleInputChange}
                     >                                     
                    </Popoup> 
                      
            </table> 
        
=======
                    <Popoup open = {isOpen} onClick = {() => setisOpen(false)}>                                     
                    </Popoup>
                    
            
            </div>
           
>>>>>>> 143a851db928f325efc614ad3b81446e7fc90546
    )
    
}


