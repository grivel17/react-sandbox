const test1 = "Test1 passed...";
async function testFetch() {
    const URL = "http://localhost:3000/messages/nasa";
    const res = await fetch(URL);
    const data = res.json();

    console.log(res, data);
}

async function testFetch2(forum) {
    const response = await fetch(`/messages/${forum}`);
    if(!response.ok){
        const errorText = await response.text;
        throw new Error(`Nie można wczytać wiadomości z forum ${forum} ${errorText}`)
    }
    
    const body = await response.json();
    console.log(body)
}

export default {
    test1,
    testFetch,
    testFetch2
};
