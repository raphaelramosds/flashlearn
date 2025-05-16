import { type ReactNode } from "react";

import { Dialog } from 'radix-ui';
import { TextArea } from "./TextArea";

export function FormDialog({ children }: { children: ReactNode }) {
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
                            <TextArea label="PERGUNTA" />
                        </div>
                        <div className='my-5'>
                            <TextArea label="RESPOSTA" />
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

