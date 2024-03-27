import React from 'react'

const NavBar = (props) => {
    return (
        <>
            <button onClick={props.handleDecrement} disabled={!props.hasPrev}>Précédent</button>
            <button onClick={props.handleIncrement} disabled={!props.hasNext}>Précédent</button>
        </>
    )
}

export default NavBar