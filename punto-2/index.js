
async function getData() {
    return fetch('http://jsonplaceholder.typicode.com/posts');
}

(async () => {
    const data =  await (await getData()).json();
    let table = document.querySelector('#data');
    for (let i = 0; i<=data.length; i++) {
        if (data[i]) {
            const tr = document.createElement('tr');
            let tdId = document.createElement('td');
            let tdTitle = document.createElement('td');
            let tdUserId = document.createElement('td');
            let tdBody = document.createElement('td');
            tdId.appendChild(document.createTextNode(data[i].id));
            tdTitle.appendChild(document.createTextNode(data[i].title));
            tdUserId.appendChild(document.createTextNode(data[i].userId));
            tdBody.appendChild(document.createTextNode(data[i].body));
            tr.appendChild(tdId);
            tr.appendChild(tdTitle);
            tr.appendChild(tdUserId);
            tr.appendChild(tdBody);
            table.appendChild(tr)
        }
    }
})()
