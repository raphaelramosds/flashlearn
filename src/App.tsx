import './App.css'

import FileUpload from './components/FileUpload';

import { Button } from './components/Button';
import { Text } from './components/Text';
import { TextArea } from './components/TextArea';

function App() {
  return (
    <>
      <div className='border rounded p-5'>
        <div>
          <TextArea label="Pergunta"/>
        </div>
        <div className='my-5'>
          <TextArea label="Resposta"/>
        </div>
        <div className='flex items-center'>
          <div>
            <Button title="Salvar"/>
          </div>
          <div className='ml-3'>
            <FileUpload />
          </div>
        </div>
      </div>
      <div className='border rounded my-5 p-5'>
        <div>
          <Text content="Pergunta do flashcard"/>
        </div>
        <div className='mt-5'>
          <Button title="Ver resposta"/>
        </div>
      </div>
    </>
  )
}

export default App
