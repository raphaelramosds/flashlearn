export function Button({ title }: { title: String }) {
    return (
        <>
            <button type="button" className="btn">{title}</button>
        </>
    );
}