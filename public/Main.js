document.getElementById('submit')
    .addEventListener('click', () => {
        const formElement = document.getElementById('form');
        const form = new FormData(formElement);
        fetch('/upload-image', {
            method: 'POST',
            body: form
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    });
