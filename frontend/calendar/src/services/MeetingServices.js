import React, {useReducer} from 'react'




export const MeetingServices = () => {

    const [ meeting ] = useReducer([])
    return (
        <div>
          <p>{meeting.name}</p>
        </div>
    )
}



