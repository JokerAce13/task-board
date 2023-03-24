import Image from "next/image"

function Header() {
    return (
        <div className="bg-black/40 font-inter">
            <div className="logo">
                <Image src="/logo.png" height={40} width={40} alt="Logo de la Aplicación"></Image>
                <a className="block text-center uppercase text-logo font-bold" href="https://leonidasesteban.com" target="_blank">Leonidas Esteban.com</a>
            </div>
        </div>
    )
}

export default Header
