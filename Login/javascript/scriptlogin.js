function IrMenu(){
    // Esta linha está correta para navegação
    window.location.href = "../sidemenu/index.html"; 
}

document.addEventListener('DOMContentLoaded', function(){
    const forms = document.getElementById('Forms') // A tag <form> ou <div> pai
    const button = document.getElementById('loginbtn')
    const user = document.getElementById('email')
    const senha = document.getElementById('senha')
    const erro = document.getElementById('error')
    
    button.addEventListener('click', function(event){
        
        // 🚨 PASSO CRÍTICO: Impede a submissão padrão do formulário.
        event.preventDefault(); 
        
        const userValue = user.value.trim();
        const senhaValue = senha.value.trim();

        // Lógica de validação: verifica se os campos estão preenchidos
        if (userValue === '' || senhaValue === '') {
            erro.textContent = 'Por favor, preencha o e-mail e a senha.'
        } else {
            // Se a validação for bem-sucedida, limpa o erro e chama a função de navegação.
            erro.textContent = ''; 
            IrMenu(); 
        }
    });
});