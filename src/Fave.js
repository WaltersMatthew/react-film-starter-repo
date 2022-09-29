import { useState } from 'react'

export default function Fave() {
    const [isFave, setIsFave] = useState(false)  

    const handleClick = (e) => {
        setIsFave(!isFave)
        e.stopPropagation()
    }

    const action = isFave ? 'remove_from_queue' : 'add_to_queue'

    return(
        <div 
            onClick={handleClick} 
            className={`film-row-fave ${action}`}
        > 

            <p className="material-icons"> {`${action}`}</p>
        </div>
    )
}