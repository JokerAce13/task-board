import Image from "next/image"

function List({ title, children, handleDrop, id }) {

    function handleDragOver(event){
        event.preventDefault();
    }

    return (
        <div data-id={id} className="relative flex-1" onDragOver={handleDragOver} onDrop={handleDrop}>
            <div className="absolute inset-0 flex flex-col gap-4 flex-1 bg-slate-300 text-gray-900 rounded p-4">
                <div className="flex justify-between items-center">
                    <h2 className="font-bold">{title}</h2>
                    <Image src="/options.svg" height={32} width={32} alt="Icono de Opciones" />
                </div>
                <div className="flex flex-col gap-4 flex-1 overflow-auto">
                    { children }
                </div>
                <div className="flex items-center gap-1">
                    <Image src="/add.svg" height={32} width={32} alt="Icono de Opciones" />
                    <span className="text-base">Añada otra tarjeta</span>
                </div>
            </div>
        </div>
    )
}

export default List
