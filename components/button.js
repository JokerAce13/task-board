function Button({ description, styles, setShowButtons, setShowInvite }) {

    function handlerClick() {
        if(setShowButtons){
            setShowButtons(false)
        }
        if(setShowInvite){
            setShowInvite(true)
        }
    }

    return (
        <button className={`p-2 rounded capitalize ${styles}`} onClick={handlerClick}>
            <span>{description}</span>
        </button>
    )
}

export default Button
