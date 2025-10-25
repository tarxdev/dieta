// --- SCRIPT PARA ÍCONES (garante que sejam renderizados) ---
feather.replace();

// --- SCRIPT DO MENU HAMBÚRGUER ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fechar menu ao clicar em um link (para uma melhor experiência mobile)
navLinks.addEventListener('click', () => {
     navLinks.classList.remove('active');
});

// --- SCRIPT DA CALCULADORA TMB ---
const tmbForm = document.getElementById('tmb-form');
const tmbResultDiv = document.getElementById('tmb-result');

tmbForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    
    if (isNaN(age) || isNaN(weight) || isNaN(height) || age <= 0 || weight <= 0 || height <= 0) {
         tmbResultDiv.innerHTML = 'Por favor, preencha todos os campos com valores válidos.';
         tmbResultDiv.classList.remove('hidden');
         return;
    }

    let tmb = 0;
    // Fórmula de Mifflin-St Jeor
    if (gender === 'male') {
        tmb = 10 * weight + 6.25 * height - 5 * age + 5;
    } else { // female
        tmb = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    tmbResultDiv.innerHTML = `Sua Taxa de Metabolismo Basal (TMB) é de aproximadamente <strong>${tmb.toFixed(0)} calorias</strong> por dia.`;
    tmbResultDiv.classList.remove('hidden');
});


// --- SCRIPT DO ACORDEÃO (NOVO) ---
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const currentlyActiveHeader = document.querySelector('.accordion-header.active');
        
        // Fecha o acordeão que já estiver ativo, se não for o que foi clicado
        if (currentlyActiveHeader && currentlyActiveHeader !== this) {
            currentlyActiveHeader.classList.remove('active');
            currentlyActiveHeader.nextElementSibling.style.maxHeight = 0;
            currentlyActiveHeader.querySelector('.icon').textContent = '+';
        }

        // Abre ou fecha o acordeão clicado
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        const icon = this.querySelector('.icon');

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            icon.textContent = '+';
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            icon.textContent = '-';
        }
    });
});