import List from "./list"
import Card from "./card"
import { useState } from "react"
import { todoList, inProgressList, doneList } from "./data"
import Image from "next/image"
import Button from "./button"
import DetailCard from "./detail-card"
import Invite from "./invite"

function Board() {

    const [ showInvite, setShowInvite ] = useState(false);
    const [ showModal, setShowModal ] = useState(false);
    const [ detailContent, setDetailContent ] = useState();
    const [ dragged, setDragged ] = useState(null);
    const [ listOfLists, setListOfLists ] = useState({
        todoList,
        inProgressList,
        doneList
    });

    function handleDrop(event){
        const list = event.currentTarget.dataset.id
        const listOfListsClone = structuredClone(listOfLists)

        const newList = listOfListsClone[dragged.list].filter(item => item.id !== dragged.data.id)

        listOfListsClone[dragged.list] = newList
        listOfListsClone[list].push(dragged.data)

        console.log(list)
        console.log(dragged)

        setListOfLists(listOfListsClone)
    }

    return(
        <div className="flex flex-col flex-1 p-4 gap-4 font-inter">
            <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold">Development</h1>
                <div className="flex items-center p-4 border-x-2 border-white relative pr-20">
                    <div className="flex items-center justify-center px-2">
                        <Image className="absolute flex-1 inset-x-4" src="/teresa.png" height={32} width={32} alt="Imagen del Usuario" />
                        <Image className="absolute flex-1 inset-x-8" src="/steve.png" height={32} width={32} alt="Imagen del Usuario" />
                        <Image className="absolute flex-1 inset-x-12" src="/tyler.png" height={32} width={32} alt="Imagen del Usuario" />
                        <Image className="absolute flex-1 inset-x-16" src="/anamaria.png" height={32} width={32} alt="Imagen del Usuario" />
                    </div>
                </div>
                <div className="relative">
                    <Button styles="bg-secondary" description="invitar" setShowInvite={setShowInvite}/>
                    {
                        showInvite ? <Invite setShowInvite={setShowInvite}/> : null
                    }
                </div>
            </div>
            <main className="flex-1 flex gap-6">
                <List title="TODO" handleDrop={handleDrop} listOfLists={listOfLists} setListOfLists={setListOfLists} id="todoList" >
                    {
                        listOfLists.todoList.map(item => (
                            <Card {...item} key={item.id} setDragged={setDragged} setShowModal={setShowModal} setDetailContent={setDetailContent} />
                        ))
                    }
                </List>
                <List title="In Progress" handleDrop={handleDrop} listOfLists={listOfLists} setListOfLists={setListOfLists} id="inProgressList">
                    {
                        listOfLists.inProgressList.map(item => (
                            <Card {...item} key={item.id} setDragged={setDragged} setShowModal={setShowModal} setDetailContent={setDetailContent} />
                        ))
                    }
                </List>
                <List title="Done" handleDrop={handleDrop} listOfLists={listOfLists} setListOfLists={setListOfLists} id="doneList" >
                    {
                        listOfLists.doneList.map(item => (
                            <Card {...item} key={item.id} setDragged={setDragged} setShowModal={setShowModal} setDetailContent={setDetailContent} />
                        ))
                    }
                </List>
            </main>
            {/* <Overlay> */}
                <DetailCard onClose={() => setShowModal(false)} isShow={showModal} detailContent={detailContent} />
            {/* </Overlay> */}
        </div>
    )
}

export default Board
