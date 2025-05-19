import type React from "react";

export function TextArea({ value, label, name, onChangeEvent }: { label: String, value: string, name: string, onChangeEvent : React.ChangeEventHandler }) {
    return (
        <>
            <label className="text-xs" htmlFor={name}>{label}</label>
            <textarea 
                rows={5}
                className="shadow-sm block w-full rounded mt-2 p-1"
                id={name}
                name={name}
                defaultValue={value}
                onChange={onChangeEvent}
            >
            </textarea>
        </>
    );
}