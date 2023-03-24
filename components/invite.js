import Image from "next/image"
import Button from "./button"

function Invite({setShowInvite}) {

    function handleClickClose() {
        setShowInvite(false)
    }

    return (
        <div className="flex flex-col gap-4 p-4 w-96 bg-white rounded text-black absolute min-[320px]:left-[15px] min-[320px]:top-[17%] min-[320px]:w-[325px] min-[375px]:left-[15px] min-[375px]:top-[12%] min-[375px]:w-[385px] min-[425px]:left-[15px] min-[425px]:w-[441px] top-[12%] z-30 md:left-0 md:top-12 shadow-2xl">
            <div className="flex justify-between">
                <h2 className="font-bold">Invitar al tablero</h2>
                <Image className="cursor-pointer" src="/cancel.svg" height={24} width={24} alt="Icono de cancelar o salir" onClick={handleClickClose} />
            </div>
            <input id="inputCreateText" className="p-2 rounded border-blue-500 border  text-black placeholder-slate-500 opacity-100 bg-white"  type="text" placeholder="Dirección de correo electrónico"/>
            <Button styles="bg-blueButton text-white" description="Enviar invitación" setShowInvite={handleClickClose} />
        </div>
    )
}

export default Invite
