import React, { useEffect, useState } from 'react'

function Timer({dispatch, numQuestions}) {

    const [secondsLeft, setSecondsLeft] = useState(numQuestions * 30)

    let min = Math.floor(secondsLeft / 60);
    let sec = secondsLeft % 60

    if (secondsLeft < 1){
        dispatch({type:'finish'})
    }

    useEffect(() => {
        const id = setInterval(() => {

            setSecondsLeft(secondsLeft-1)
        },1000)

        return ()=> clearInterval(id) 
    }, [secondsLeft ])



  return (
    <div className='timer'>
        {min < 10 && "0"}
        {min}:{sec < 10 && "0"}
        {sec}
    </div>
  )
}

export default Timer