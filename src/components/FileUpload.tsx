import { useEffect, useState } from "react";

function FileUpload() {

    const [greeting, setGreeting] = useState('');
    const [file, setFile] = useState(null);

    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch("http://localhost:3000/", {
                method: 'GET'
            });
            const json = await res.json();
            setGreeting(json.message);
        }, 1000);
    }, []);    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        try {
            const res = await fetch("http://localhost:3000/file", {
                method: "POST",
                body: formData
            });
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.error("Erro no upload:", err);
        }
    }

    return (
        <>
            <p>{greeting}</p>
            <form onSubmit={handleSubmit} encType="multipart/form-data" method="POST">
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                <button type="submit">Carregar</button>
            </form>
        </>
    );
}

export default FileUpload;