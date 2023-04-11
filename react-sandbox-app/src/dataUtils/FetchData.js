export async function getData() {
    const res = await fetch('/messages/nasa');
    const data = await res.json();
    console.log(data)
};

export async function insertData(dataToSend) {
    const res = await fetch('/messages/nasa', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
    });
    const data = res.json();
    console.log(data);
};

