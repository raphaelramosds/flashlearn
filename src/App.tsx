import './App.css'
import { Button } from './components/Button';
import FileUpload from './components/FileUpload';
import { Text } from './components/Text';
import { TextArea } from './components/TextArea';

function App() {
  return (
    <>
      <div>
        <TextArea label="Pergunta"/>
        <TextArea label="Resposta"/>
        <Button title="Salvar"/>
        <FileUpload />
      </div>
      <div>
        <Text content="Pergunta do flashcard"/>
        <Button title="Ver resposta"/>
      </div>
    </>
  )
}

export default App
