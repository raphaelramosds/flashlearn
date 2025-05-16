function FileUpload() {

    let fileReader : FileReader;

    const handleFileChosen = (file : File) => {
        fileReader = new FileReader();
        fileReader.onloadend = (e) => {
            const content = fileReader.result;
            console.log(content);
        };
        fileReader.readAsText(file);
    }

    return (
        <>
            <p>File handler</p>
            <input type="file" accept=".txt" onChange={e => handleFileChosen(e.target.files[0])}/>
        </>
    );
}

export default FileUpload;