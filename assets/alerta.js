
document.addEventListener('DOMContentLoaded', function () {
   
    const form = document.querySelector('.contacto');

    //evento de envío del formulario

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        alert('Mensaje enviado con éxito!');
         
    });
});
