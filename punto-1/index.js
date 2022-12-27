(() => {
const form = document.querySelector('#form');
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const dateBirth = document.getElementById('dateBirth');
    sendForm(dateBirth.value);
});
})();

sendForm = (dateBirth) => {
    fetch('index.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        body: {dateBirth}
    })
    .then(response => response.text())
    .then(data => document.querySelector('textBirth').innerHTML = data)
}