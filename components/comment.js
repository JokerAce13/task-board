import Image from "next/image"
import Button from "./button"
import { useState } from "react"

function Comment(props) {

    let timeAgo = ''
    const [ showButtons, setShowButtons] = useState(false);

    if(props.createdAt){
        const updatedAt = new Date(props.createdAt)
        const today = new Date()
        const diffMilliseconds = updatedAt - today
        const diffDays = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24))
        timeAgo = new Intl.RelativeTimeFormat('es').format(diffDays, 'days')
    }

    function handleClickClose() {
        setShowButtons(false)
    }

    return (
        <div className="flex items-start gap-2 text-black">
            <Image className="" src={props.user.avatar} height={32} width={32} alt="Imagen del Usuario" />
            <div className="flex flex-col flex-1 gap-2">
                <div className="flex gap-2 items-center">
                    <span className="font-bold">{props.user.name}</span>
                    <span className="text-grayText">{timeAgo}</span>
                </div>
                <span className="p-2 flex-1 bg-white rounded text-black placeholder-grayText">{props.text}</span>
                <a className="underline text-grayText" href="#" onClick={() => setShowButtons(true)}>Responder</a>
                {
                    showButtons ?
                    <div className="flex gap-2">
                        <Button styles="bg-blueButton text-white" description="Guardar" setShowButtons={handleClickClose}/>
                        <Button styles="bg-transparent" description="Cancelar" setShowButtons={handleClickClose}/>
                    </div> : null
                }
            </div>
        </div>
    )
}

export default Comment
