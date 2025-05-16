function FileUpload() {

    let fileReader: FileReader;

    const handleFileChosen = (file: File) => {
        fileReader = new FileReader();
        fileReader.onloadend = (e) => {
            const content = fileReader.result;
            console.log(content);
        };
        fileReader.readAsText(file);
    }

    return (
        <>
            <label
                className="btn btn-primary-outline"
                htmlFor="file-upload"
            >Importar</label>
            <input
                id="file-upload"
                type="file"
                accept=".txt"
                onChange={e => {
                    const files = e.target.files;
                    if (files && files[0]) {
                        handleFileChosen(files[0]);
                    }
                }}
                style={{ display: "none" }}
            />
        </>
    );
}

export default FileUpload;