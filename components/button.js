function Button({ description, styles, setShowButtons }) {
    return (
        <button className={`p-2 bg-secondary rounded capitalize ${styles}`} onClick={() => setShowButtons(false)}>
            <span>{description}</span>
        </button>
    )
}

export default Button
