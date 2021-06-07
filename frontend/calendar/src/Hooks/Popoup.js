import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
import { addNoteReducer } from '../Reducer/addNoteReducer'



export default function Popoup({ open, day, onClick, handleInputChange }) {
    
    
    
    const [ meeting , dispatch] = useReducer(addNoteReducer, [])

    fetch('http://localhost:3800/api',{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(meeting)
    })

    const addMeeting = (e) => {
        e.preventDefault();

    const newMeeting = {
        id: new Date().getTime(),        
        name: {handleInputChange},
        content: 'content',
        done: false   
    }
    
    const action = {
        type: 'add',
        payload: newMeeting
    }
    dispatch(action);
    }

    if (!open) return null
    
    return ReactDOM.createPortal (
        <>
            
            <div className="popup">
                <form  onSubmit = {addMeeting}  action="api" type="POST" className="container">
                    <label className="popup-title">
                        NAME <input type="text" placeholder="NAME" name="name" required/>
                    </label>
                
                <div className="time">
                <label>
                    <input type="date" name="Appoiment request" required/>
                </label>
                </div>
                <div>
                <label>Start
                    <input type="time" name="appt"
                     min="00:00" max="12:00"/>
                </label>
                <label>End
                    <input type="time" name="appt"
                     min="00:00" max="12:00"/>
                </label>
                <div>
                    <label>

                    </label>
                </div>
                <div class="message">
                    <label for="message"></label>
                    <textarea name="message" placeholder="Reminder" id="message_input" cols="30" rows="5" ></textarea>
                </div>


                </div>
                <button 
                type ="submit"
                className="btn btn-primary"                                
                onClick={onClick}
                >Done
                </button>
                
                </form>
            </div>
            
        </>,
        document.getElementById('portal')
    )
}
