import { Dialog } from 'radix-ui';
import './App.css'

import { Text } from './components/Text';
import { Form } from './components/Form';

function App() {
  return (
    <>
      <div className='rounded-xl my-5 p-5 bg-[#F7F7FF] min-h-[500px] flex flex-col justify-between'>
        <div>
          <Text content="Pergunta do flashcard" />
        </div>
        <div className='mt-5'>
          <button type="button" className="btn btn-primary">Ver resposta</button>
          <button type="button" className="btn btn-primary-outline mx-3">Editar</button>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button type="button" className="btn btn-primary-outline">Novo</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContent">
                {/* <Dialog.Title className="DialogTitle">Novo flashcard</Dialog.Title> */}
                {/* <Dialog.Description className="DialogDescription">
                  Make changes to your profile here. Click save when you're done.
                </Dialog.Description> */}
                <Form>
                  <Dialog.Close asChild>
                    <button className="btn" aria-label="Close">Cancelar</button>
                  </Dialog.Close>
                </Form>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </>
  )
}

export default App
