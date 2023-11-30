const axios = require("axios")


const call = async () => {
    const url = "https://nft.petz.money/v1/metadata/0.json";
    // const url = "https://jsonplaceholder.typicode.com/users";
    try {
        const { data } = await axios.get(url);
        // console.log(">> fetchNftImgdata", data);
    } catch (error) {
        // console.error(">> Error fetching nft imgs :", error);
    }
}

call()