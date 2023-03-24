import Image from "next/image"
import Button from "./button"

function CreateCard({ setShowButtons, setShowAddCard, listOfLists, setListOfLists, idList }) {


    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
      }

    function handleClickAddCard(){
        const listOfListsClone = structuredClone(listOfLists)
        const inputCreateText = document.getElementById('inputCreateText').value
        const newId = getRandomNumber(20, 10000)

        const newCard = { id: newId,  title: inputCreateText  }

        listOfListsClone[idList].push(newCard)

        setListOfLists(listOfListsClone)

        setShowButtons(false)
        setShowAddCard(true)
    }

    function handleClickClose() {
        setShowButtons(false)
        setShowAddCard(true)
    }

    return(
        <div className="flex flex-col gap-4">
            <input id="inputCreateText" className="p-2 rounded text-black placeholder-slate-500 opacity-100 bg-white"  type="text" placeholder="Introduzca un título para esta tarjeta..."/>
            <div className="flex gap-4">
                <Button styles="bg-blueButton text-white" description="Añada tarjeta" setShowButtons={handleClickAddCard} />
                <Image className="cursor-pointer" src="/cancel.svg" height={24} width={24} alt="Icono de cancelar o salir" onClick={handleClickClose} />
            </div>
        </div>
    )
}

export default CreateCard
