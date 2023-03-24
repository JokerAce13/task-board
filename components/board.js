import List from "./list"
import Card from "./card"
import { useState, useEffect } from "react"
import { todoList, inProgressList, doneList } from "./data"
import Image from "next/image"
import Button from "./button"
import DetailCard from "./detail-card"
import Invite from "./invite"
import useIsMobile from "./utils"

function Board() {

    const [ showTodoList, setShowTodoList ] = useState(false);
    const [ showInProgressList, setShowInProgressList ] = useState(false);
    const [ showDoneList, setDoneList ] = useState(false);

    let isMobileMode = useIsMobile()

	useEffect(()=>{
        if (isMobileMode) {
            setShowTodoList(true)
            setShowInProgressList(false)
            setDoneList(false)
            setShowSliderButtons(true)
        } else {
            setShowTodoList(true)
            setShowInProgressList(true)
            setDoneList(true)
            setShowSliderButtons(false)
        }
	}, [isMobileMode])

    const [ showSliderButtons, setShowSliderButtons ] = useState(false);
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

        setListOfLists(listOfListsClone)
    }

    function handleClick(event){
        const currentListId = event.target.id;
        if(currentListId === "todo")
        {
            setShowTodoList(true)
            setShowInProgressList(false)
            setDoneList(false)
        } else if (currentListId === "inProgrees"){
            setShowTodoList(false)
            setShowInProgressList(true)
            setDoneList(false)
        } else if (currentListId === "done"){
            setShowTodoList(false)
            setShowInProgressList(false)
            setDoneList(true)
        }
    }

    return(
        <div className="flex flex-col flex-1 p-4 gap-4 font-inter">
            <div className="flex items-center gap-4 flex-wrap">
                <h1 className="text-2xl font-bold">Development</h1>
                <div className="flex items-center p-4 border-x-2 border-white relative pr-[104px]">
                    <div className="flex items-center justify-center px-2">
                        <Image className="absolute flex-1 inset-x-4" src="/teresa.png" height={32} width={32} alt="Imagen del Usuario" />
                        <Image className="absolute flex-1 inset-x-10" src="/steve.png" height={32} width={32} alt="Imagen del Usuario" />
                        <Image className="absolute flex-1 inset-x-16" src="/tyler.png" height={32} width={32} alt="Imagen del Usuario" />
                        <Image className="absolute flex-1 inset-x-[88px]" src="/anamaria.png" height={32} width={32} alt="Imagen del Usuario" />
                    </div>
                </div>
                <div className="md:relative">
                    <Button styles="bg-secondary" description="invitar" setShowInvite={setShowInvite}/>
                    {
                        showInvite ? <Invite setShowInvite={setShowInvite}/> : null
                    }
                </div>
            </div>
            <main className="flex flex-1 gap-6">
                {
                    showTodoList ?
                    <List title="TODO" handleDrop={handleDrop} listOfLists={listOfLists} setListOfLists={setListOfLists} id="todoList" >
                        {
                            listOfLists.todoList.map(item => (
                                <Card {...item} key={item.id} setDragged={setDragged} setShowModal={setShowModal} setDetailContent={setDetailContent} />
                            ))
                        }
                    </List> : null
                }
                {
                    showInProgressList ?
                    <List title="In Progress" handleDrop={handleDrop} listOfLists={listOfLists} setListOfLists={setListOfLists} id="inProgressList">
                        {
                            listOfLists.inProgressList.map(item => (
                                <Card {...item} key={item.id} setDragged={setDragged} setShowModal={setShowModal} setDetailContent={setDetailContent} />
                            ))
                        }
                    </List> : null
                }
                {
                    showDoneList ?
                    <List title="Done" handleDrop={handleDrop} listOfLists={listOfLists} setListOfLists={setListOfLists} id="doneList" >
                        {
                            listOfLists.doneList.map(item => (
                                <Card {...item} key={item.id} setDragged={setDragged} setShowModal={setShowModal} setDetailContent={setDetailContent} />
                            ))
                        }
                    </List> : null
                }
            </main>
            {
                showSliderButtons ?
                <div id="slider-buttons" className="flex gap-2 items-center justify-center">
                    <button id="todo" onClick={handleClick} type="button" className={`w-3 h-3 bg-white rounded-full ${showTodoList ? null : "opacity-30"}`} aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button id="inProgrees" onClick={handleClick} type="button" className={`w-3 h-3 bg-white rounded-full ${showInProgressList ? null : "opacity-30"}`} aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button id="done" onClick={handleClick} type="button" className={`w-3 h-3 bg-white rounded-full ${showDoneList ? null : "opacity-30"}`} aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                </div> : null
            }
            <DetailCard onClose={() => setShowModal(false)} isShow={showModal} detailContent={detailContent} />
        </div>
    )
}

export default Board
