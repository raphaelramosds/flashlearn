import {useState} from 'react'
import './App.css'
// import FileUpload from './components/FileUpload'
import {FormDialog} from './components/FormDialog'
import {PencilIcon, PlusIcon} from "@phosphor-icons/react";

function App() {

    const [cards, setCards] = useState([
        {
            front: "O que é um substantivo concreto?",
            back: "É um substantivo com existência independente"
        },
        {
            front: "O que é um substantivo abstrato?",
            back: "É um substantivo que designa uma ação, qualidade, estado ou sentimento"
        },
    ]);

    const [currentCard, setCurrentCard] = useState(cards[0]);
    const [content, setContent] = useState(currentCard.front);
    const [flipped, setFlipped] = useState(false)

    function flipCard() {
        setContent(currentCard.back);
        setFlipped(true);
    }

    function getNextCard() {
        let newCard = cards[Math.floor(Math.random() * cards.length)];
        setCurrentCard(newCard);
        setFlipped(false);
        setContent(newCard.front);
    }

    return (
        <main>
            <header className="flex items-center justify-between">
                <div>
                    <img className="w-50" src="public/flashlearn-white-logo.svg"/>
                </div>
                <div>
                    <FormDialog
                        cards={cards}
                        setCurrentCard={setCurrentCard}
                        setContent={setContent}
                        setCards={setCards}
                        setFlipped={setFlipped}>
                        <button
                            className="flex flex-row items-center bg-white hover:bg-white/90 cursor-pointer p-2 rounded-sm font-bold text-lg">
                            <PlusIcon className="mr-2" size={24}/>Novo
                        </button>
                    </FormDialog>
                </div>
            </header>

            <div className='flex flex-col justify-center items-center text-center my-24'>
                <div>
                    <FormDialog
                        card={currentCard}
                        cards={cards}
                        setCurrentCard={setCurrentCard}
                        setContent={setContent}
                        setCards={setCards}
                        setFlipped={setFlipped}>
                        <button className="text-dark-purple cursor-pointer">
                            <PencilIcon size={32}/>
                        </button>
                    </FormDialog>
                </div>
                <div className="text-4xl text-white font-bold font-lexend h-25">
                    {content}
                </div>
            </div>

            <div className='flex justify-center align_center'>
                {!flipped
                    ? <button type="button"
                              className="flex flex-row items-center bg-white hover:bg-white/90 cursor-pointer p-4 rounded-sm font-bold text-lg"
                              onClick={flipCard}>Ver resposta</button>
                    : <button type="button"
                              className="flex flex-row items-center bg-white hover:bg-white/90 cursor-pointer p-4 rounded-sm font-bold text-lg"
                              onClick={getNextCard}>Próximo</button>}
                {/*<FileUpload />*/}
                {/*<button type="button">Exportar</button>*/}
            </div>

        </main>
    );
}

export default App
