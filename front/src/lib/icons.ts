const assets = (fileName: string) => {
    const path = "http://" + window.location.hostname + ":8080/src/assets/icons/";

    return path + fileName;
};

export default assets;
