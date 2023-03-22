function Overlay({ children }) {
    return (
        <div className="fixed inset-0 backdrop-opacity-10 backdrop-invert bg-black/30">
            { children }
        </div>
    )
}

export default Overlay
