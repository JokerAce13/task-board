import Image from "next/image"
import CreateCard from "./create-card";
import { useState } from "react"

function List({ title, children, handleDrop, listOfLists, setListOfLists, id }) {

    const [ showButtons, setShowButtons ] = useState(false);
    const [ showAddCard, setShowAddCard ] = useState(true);

    function handleDragOver(event){
        event.preventDefault();
    }

    function handleClick(event){
        setShowAddCard(false)
        setShowButtons(true)
    }

    return (
        <div data-id={id} className="relative flex-1 font-normal" onDragOver={handleDragOver} onDrop={handleDrop}>
            <div className="absolute inset-0 flex flex-col gap-4 flex-1 bg-grayList text-gray-900 rounded p-4">
                <div className="flex justify-between items-center">
                    <h2 className="font-bold">{title}</h2>
                    <Image src="/options.svg" height={32} width={32} alt="Icono de Opciones" />
                </div>
                <div className="flex flex-col gap-4 flex-1 overflow-auto overflow-y-scroll no-scrollbar">
                    { children }
                </div>
                {
                    showAddCard ?
                    <div className="flex items-center gap-1 cursor-pointer text-gray-600" onClick={handleClick}>
                        <Image src="/add.svg" height={32} width={32} alt="Icono de Opciones" />
                        <span className="text-base font-normal">Añada otra tarjeta</span>
                    </div> : null
                }
                {
                    showButtons ? <CreateCard setShowButtons={setShowButtons} setShowAddCard={setShowAddCard} listOfLists={listOfLists} setListOfLists={setListOfLists} idList={id} /> : null
                }
            </div>
        </div>
    )
}

export default List
