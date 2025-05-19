import { useState, type ReactNode } from "react";

import { Dialog, VisuallyHidden } from 'radix-ui';
import { TextArea } from "./TextArea";
import type { Card } from "../@types/Card";


interface FormDialogProps {
    children: ReactNode,
    cards: Card[],
    card?: Card,
    setCurrentCard: Function,
    setContent: Function,
    setCards: Function,
    setFlipped: Function
}

export function FormDialog({
    children,
    cards,
    card,
    setCurrentCard,
    setContent,
    setCards,
    setFlipped }: FormDialogProps) {

    const [cardData, setCardData] = useState<Card>(card ?? { front: '', back: '' });

    const handleSave = () => {
        let newCards = cards.slice(),
            idx = cards.findIndex((c) => c.back == card?.back && c.front == card?.front);

        if (idx > 0) {
            newCards[idx] = cardData;
        } else {
            newCards.push(cardData);
        }

        setCurrentCard(cardData);
        setContent(cardData?.front);
        setCards(newCards);
        setFlipped(false);
    };

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent">
                    <VisuallyHidden.Root>
                        <Dialog.Title className="DialogTitle">Card form</Dialog.Title>
                        <Dialog.Description className="DialogDescription">
                            Displays a form for creating/updating a flashcard.
                        </Dialog.Description>
                    </VisuallyHidden.Root>
                    <div className='p-5'>
                        <form>
                            <div>
                                <TextArea
                                    name="front"
                                    label="PERGUNTA"
                                    value={card?.front ?? ''}
                                    onChangeEvent={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCardData({ ...cardData, front: e.target.value })}
                                />
                            </div>
                            <div className='my-5'>
                                <TextArea
                                    name="back"
                                    label="RESPOSTA"
                                    value={card?.back ?? ''}
                                    onChangeEvent={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCardData({ ...cardData, back: e.target.value })}
                                />
                            </div>
                            <div className='flex items-center'>
                                <div>
                                    <button type="button" className="btn btn-primary-none" onClick={handleSave}>Salvar</button>
                                </div>
                                <div>
                                    <Dialog.Close asChild>
                                        <button type="button" className="btn" aria-label="Close">Cancelar</button>
                                    </Dialog.Close>
                                </div>
                            </div>
                        </form>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

