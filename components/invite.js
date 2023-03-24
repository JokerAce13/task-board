import Image from "next/image"
import Button from "./button"

function Invite({setShowInvite}) {

    function handleClickClose() {
        setShowInvite(false)
    }

    return (
        <div className="flex flex-col gap-4 p-4 w-96 bg-white rounded text-black absolute -left-72 z-30 md:left-0 top-12 shadow-2xl">
            <div className="flex justify-between">
                <h2>Invitar al tablero</h2>
                <Image className="cursor-pointer" src="/cancel.svg" height={24} width={24} alt="Icono de cancelar o salir" onClick={handleClickClose} />
            </div>
            <input id="inputCreateText" className="p-2 rounded border-blue-500 border  text-black placeholder-slate-500 opacity-100 bg-white"  type="text" placeholder="Dirección de correo electrónico"/>
            <Button styles="bg-blue-500 text-white" description="Enviar invitación" setShowInvite={handleClickClose} />
        </div>
    )
}

export default Invite
