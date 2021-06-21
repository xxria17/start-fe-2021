
async function loadJsonFile(json) {

    const response = await fetch(json);
    const result = await response.json()
    return result;
}

export default {loadJsonFile};