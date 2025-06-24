import { useState } from 'react'
import './App.css'
// import FileUpload from './components/FileUpload'
import { FormDialog } from './components/FormDialog'

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
    <>
      <div className='rounded-xl my-5 p-5 min-h-[300px] flex flex-col justify-between'>
        <div className='flex-1 flex flex-col justify-center text-center'>
          <div>
            {content}
          </div>
        </div>
        <div className='mt-5 flex justify-center align_center'>
          {!flipped
            ? <button type="button" className="btn btn-primary" onClick={flipCard}>Ver resposta</button>
            : <button type="button" className="btn btn-primary" onClick={getNextCard}>Próximo</button>}
          <FormDialog
            card={currentCard}
            cards={cards}
            setCurrentCard={setCurrentCard}
            setContent={setContent}
            setCards={setCards}
            setFlipped={setFlipped}>
            <button type="button" className="btn btn-primary-outline mx-3">Editar</button>
          </FormDialog>
          <FormDialog
            cards={cards}
            setCurrentCard={setCurrentCard}
            setContent={setContent}
            setCards={setCards}
            setFlipped={setFlipped}>
            <button type="button" className="btn btn-primary-outline mr-3">Novo</button>
          </FormDialog>
          {/*<FileUpload />*/}
          {/*<button type="button" className="btn btn-primary-outline ml-3">Exportar</button>*/}
        </div>
      </div>
    </>
  )
}

export default App
