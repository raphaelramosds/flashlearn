import {useState, useRef, type ReactNode, useEffect} from "react";

import {Toast, Dialog, VisuallyHidden} from 'radix-ui';
import {TextArea} from "./TextArea";
import type {Card} from "../@types/Card";
import {CheckIcon} from "@phosphor-icons/react";


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
                               setFlipped
                           }: FormDialogProps) {

    const [cardData, setCardData] = useState<Card>(card ?? {front: '', back: ''});

    const [open, setOpen] = useState(false);
    const timerRef = useRef(0);

    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

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

        setOpen(false);
        window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => {
            setOpen(true);
        }, 100);
    };

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay"/>
                <Dialog.Content className="DialogContent bg-black-soft text-white">
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
                                    onChangeEvent={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCardData({
                                        ...cardData,
                                        front: e.target.value
                                    })}
                                />
                            </div>
                            <div className='my-5'>
                                <TextArea
                                    name="back"
                                    label="RESPOSTA"
                                    value={card?.back ?? ''}
                                    onChangeEvent={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCardData({
                                        ...cardData,
                                        back: e.target.value
                                    })}
                                />
                            </div>
                            <div className='flex items-center'>
                                <div>
                                    <Toast.Provider swipeDirection="right">
                                        <button
                                            type="button"
                                            className="flex flex-row items-center bg-purple cursor-pointer p-2 rounded-sm font-bold"
                                            onClick={handleSave}>
                                            <CheckIcon className="mr-2" size={24}/>Salvar
                                        </button>

                                        <Toast.Root
                                            className="ToastRoot"
                                            open={open}
                                            onOpenChange={setOpen}
                                        >
                                            <Toast.Title className="ToastTitle">
                                                Flashcard salvo com sucesso
                                            </Toast.Title>
                                            <Toast.Description asChild>
                                            </Toast.Description>
                                            <Toast.Action
                                                className="ToastAction"
                                                asChild
                                                altText="Close this notification"
                                            >
                                                <button className="Button">
                                                    OK
                                                </button>
                                            </Toast.Action>
                                        </Toast.Root>
                                        <Toast.Viewport className="ToastViewport"/>
                                    </Toast.Provider>
                                </div>
                                <div className="ml-3">
                                    <Dialog.Close asChild>
                                        <button
                                            type="button"
                                            className="bg-black font-bold text-white cursor-pointer p-2 rounded-sm font-bold"
                                            aria-label="Close">Cancelar</button>
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

