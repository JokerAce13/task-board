import Image from "next/image"
import { useState } from "react"
import { useEffect } from "react"
import Comment from "./comment"
import ReactDOM from "react-dom"

function DetailCard({ isShow, onClose, detailContent }) {

    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
      }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    }

    const modalContent = isShow ? (
        <div className="fixed inset-0 md:backdrop-opacity-10 md:backdrop-invert md:bg-black/30 font-inter">
            <div className="flex flex-col h-screen w-screen fixed md:h-auto md:w-1/2 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 gap-4 md:rounded bg-grayDetail p-4">
                <div className="flex justify-between">
                    <h2 className="text-gray-900 font-bold text-base">{detailContent.data.title}</h2>
                    <Image src="/cancel.svg" height={24} width={24} alt="Icono de cancelar o salir" onClick={handleCloseClick} />
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-gray-900 font-bold text-base">Descripción</h2>
                    <input className="p-4 bg-grayList rounded text-black placeholder-black" type="text" placeholder="Añadir una descripción..."/>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="" src={detailContent.data?.user?.avatar ?? '/userdefault.png'} height={32} width={32} alt="Imagen del Usuario" />
                    <input className="p-2 flex-1 bg-white rounded text-black placeholder-slate-400" type="text" placeholder="Escriba un comentario..."/>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    {
                        detailContent.data.comments.map(item => (
                            <Comment {...item} key={item.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    ) : null

    if(isBrowser){
        const modalRoot = document.getElementById("modal-root");
        return ReactDOM.createPortal(modalContent, modalRoot)
    }

    return null
}

export default DetailCard
