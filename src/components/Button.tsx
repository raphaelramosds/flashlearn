export function Button({ title }: { title: String }) {
    return (
        <>
            <button className="cursor-pointer">{title}</button>
        </>
    );
}