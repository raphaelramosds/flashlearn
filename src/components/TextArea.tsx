export function TextArea({ value, label }: { label: String, value : String }) {
    return (
        <>
            <label className="text-xs" htmlFor="story">{label}</label>
            <textarea rows={5} className="shadow-sm block w-full rounded mt-2 p-1" id="story" name="story">
                {value}
            </textarea>
        </>
    );
}