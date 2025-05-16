import './App.css'
import FileUpload from './components/FileUpload'
import { FormDialog } from './components/FormDialog'

function App() {
  return (
    <>
      <div className='rounded-xl my-5 p-5 bg-[#F7F7FF] min-h-[300px] flex flex-col justify-between'>
        <div className='flex-1 flex flex-col justify-center text-center'>
          <div>
            O que é um substantivo concreto?
          </div>
        </div>
        <div className='mt-5 flex justify-center align_center'>
          <button type="button" className="btn btn-primary">Ver resposta</button>
          <FormDialog>
            <button type="button" className="btn btn-primary-outline mx-3">Editar</button>
          </FormDialog>
          <FormDialog>
            <button type="button" className="btn btn-primary-outline mr-3">Novo</button>
          </FormDialog>
          <FileUpload />
          <button type="button" className="btn btn-primary-outline ml-3">Exportar</button>
        </div>
      </div>
    </>
  )
}

export default App
