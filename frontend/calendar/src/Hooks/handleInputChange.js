import React from 'react'

export const handleInputChange = () => {

    const [{name}, handleInputChange] = useForm ({
        name:''
        
    })

    const addMeeting = (e) => {
        e.preventDefault();

    const newMeeting = {
        id: new Date().getTime(),        
        name: name,
        content: 'content',
        done: false   
    }
    
    const action = {
        type: 'add',
        payload: newMeeting
    }
    dispatch(action);
    }
    return (
        <div>
            
        </div>
    )
}
