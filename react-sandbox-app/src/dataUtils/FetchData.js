export async function getData() {
    const res = await fetch('/messages/nasa');
    const data = await res.json();
    console.log(data)
};

export async function insertData(dataToSend) {
    const res = await fetch('/messages/nasa', {
        method: "POST",
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(dataToSend)
    });
    const data = await res.text();
    console.log(data);
};

