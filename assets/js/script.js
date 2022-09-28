const meuNome = document.querySelector('.meu-nome');
const fName = meuNome.innerHTML;
meuNome.innerHTML='';

//Animação nome
function typeWriter (nome) {
    setTimeout( () => {
    const meuNomeF = nome.split('');
    meuNome.innerHTML='';
    meuNomeF.forEach( (letra, index) => {
        setTimeout(function (){
            meuNome.innerHTML += letra;
        }, 150 * index)
    })}, 1300)
}

//Animação Card
VanillaTilt.init(document.querySelectorAll(".Avatar"),{
    max:25,
    speed:400,
    glare: true,
    "max-glare":.3,
});

// Filtro do Portifólio
$('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'js-btn'){
        eachBoxes('js', boxes);
    } else if(type == 'php-btn'){
        eachBoxes('php', boxes);
    } else if(type == 'client-btn') {
        eachBoxes('client', boxes);
    } else {
        eachBoxes('all', boxes);
    }
});

function eachBoxes(type, boxes){
    if(type == 'all'){
        $(boxes).fadeIn();
    }else {
        $(boxes).each(function(){
            if(!$(this).hasClass(type)) {
                $(this).fadeOut('slow');
            } else{
                $(this).fadeIn();
            }
        });
    }
};

//Whatsap
function whatsSendMessage() {
    let num = `+5517988069408`
    let msg = `Olá, Ives! Eu encontrei o seu contato aqui no seu portfólio e gostaria de saber:`

    window.open(`https://wa.me/${num}?text=${msg}`, '_blank');
};

//Email valido
function validateContactForm() {
    let validate = true

    if (!$('#subject').val()) {
        validate = false
    }

    if (!$('#name').val()) {
        validate = false
    }

    if (!$('#email').val()) {
        validate = false
    }

    if (!$('#message').val()) {
        validate = false
    }

    return validate
};

//aviso para preencher os campos 
function sendEmailContact() {
    if (!validateContactForm()) {
        Alert($('#email-alert'), 'Por favor, preencha todos os campos obrigatórios.', 'warning')
        return
    }

    let subject = $('#subject').val()
    let phone = $('#phone').val()
    let name = $('#name').val()
    let email = $('#email').val()
    let message = $('#message').val()

    let body = `Email: ${email}
                Nome: ${name}
                Telefone: ${phone}
                Mensagem: ${message}
                `

    window.open(`mailto:ivespmiranda@hotmail.com?subject=${subject}&body=${body}`)
};

function Alert(alertEl, message, type) {
    if ($('.alert').length) {
        $('.alert').detach()
    }

    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'


    alertEl.append(wrapper)
};
