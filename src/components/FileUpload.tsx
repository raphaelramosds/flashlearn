import { useEffect, useState } from "react";

function FileUpload() {

    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch("http://localhost:3000/", {
                method: 'GET'
            });
            const json = await res.json();
            setGreeting(json.message);
        }, 1000);
    }, [greeting]);    

    return (
        <>
            <p>{greeting}</p>
            <form action = "http://localhost:3000/file" encType="multipart/form-data" method="POST">
                <input id="txt-file" type="file" />
            </form>
        </>
    );
}

export default FileUpload;