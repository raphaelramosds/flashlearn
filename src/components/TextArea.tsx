export function TextArea({ label }: { label: String }) {
    return (
        <>
            <label htmlFor="story">{label}</label>
            <textarea id="story" name="story" />
        </>
    );
}