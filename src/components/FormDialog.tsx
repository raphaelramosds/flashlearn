import { type ComponentProps, type ReactNode } from "react";

import { Dialog } from 'radix-ui';
import { TextArea } from "./TextArea";

interface FormDialogProps {
    children: ReactNode,
    card ?: {
        front: string,
        back: string
    }
}

export function FormDialog({ children, card }: FormDialogProps) {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent">
                    <div className='p-5'>
                        <div>
                            <TextArea label="PERGUNTA" value={card?.front ?? ''}/>
                        </div>
                        <div className='my-5'>
                            <TextArea label="RESPOSTA" value={card?.back ?? ''}/>
                        </div>
                        <div className='flex items-center'>
                            <div>
                                <button type="button" className="btn btn-primary-none">Salvar</button>
                            </div>
                            <div>
                                <Dialog.Close asChild>
                                    <button className="btn" aria-label="Close">Cancelar</button>
                                </Dialog.Close>
                            </div>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );

}

