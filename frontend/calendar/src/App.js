import React, {useState} from 'react'
import moment from 'moment'
import { Calendar } from './Components/Calendar'


export const App = () => {
    const [value, setValue] = useState(moment());

    return (
        <Calendar 
        value= {value}
        onChange= {setValue}
        />
    )
}
