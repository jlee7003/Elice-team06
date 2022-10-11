const assets = (fileName: string) => {
    const path = "http://" + window.location.hostname + ":3000/assets/";

    return path + fileName;
};

export default assets;
