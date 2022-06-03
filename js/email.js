const btn = document.getElementById('button');

    document.getElementById('form')
        .addEventListener('submit', function(event) {
        event.preventDefault();
    btn.value = 'Enviando...';
        const serviceID = 'service_k39qr1h###';
        const templateID = 'template_h4b362l';
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Enviar Email';
            alert('Email Enviado correctamente!');
        }, (err) => {
            btn.value = 'Email Enviado INCORRECTAMENTE!';
            alert(JSON.stringify(err));
        });
    });