export function TextArea({ label }: { label: String }) {
    return (
        <>
            <label htmlFor="story">{label}</label>
            <textarea className="border block w-full rounded mt-3 p-1" id="story" name="story" />
        </>
    );
}