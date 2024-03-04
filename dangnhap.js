const form = document.querySelector('form');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const dob = document.querySelector('#dob').value;
    const cccd = document.querySelector('#cccd').value;
    const address = document.querySelector('#address').value;

    window.location.href = 'questions.html'
})
