import Image from "next/image"

function Card({ title, user, comments = [], id, setDragged, setShowModal, setDetailContent }) {

    function handleDragStart(event){
        console.log(event.target.closest('[data-id]').dataset.id)
        setDragged({
            data: { title, user, comments, id },
            list: event.target.closest('[data-id]').dataset.id
        })
    }

    function handleClick(event){
        setShowModal(true)
        setDetailContent({
            data: { title, user, comments }
        })
    }

    return(
        <div draggable onDragStart={handleDragStart} onClick={handleClick} className="flex flex-col gap-4 text-black weign font-light bg-white p-2 rounded-sm">
            <div className="flex justify-between items-center">
                <p>{title}</p>
                <span>
                    <Image src="/edit.svg" height={20} width={20} alt="Icono de Edición"></Image>
                </span>
            </div>
            {
                comments.length != null && user?.avatar != null ?

                <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                        <Image src="/comments.svg" height={20} width={20} alt="Icono de Comentarios"></Image>
                        { comments.length > 0 ? comments.length : null }
                    </span>
                    <span>
                        <Image src={user.avatar} height={32} width={32} alt="Imagen del Usuario"></Image>
                    </span>
                </div> : null
            }
        </div>
    )
}

export default Card
