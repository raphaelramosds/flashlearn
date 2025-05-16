import type { ReactNode } from "react";
import FileUpload from "./FileUpload";
import { TextArea } from "./TextArea";

export function Form({ children }: { children: ReactNode }) {
    return (
        <div className='p-5'>
            <div>
                <TextArea label="PERGUNTA" />
            </div>
            <div className='my-5'>
                <TextArea label="RESPOSTA" />
            </div>
            <div className='flex items-center'>
                <div>
                    <button type="button" className="btn btn-primary-none">Salvar</button>
                </div>
                <div className='mx-3'>
                    <FileUpload />
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}