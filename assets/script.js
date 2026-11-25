const emailLink = document.querySelector('.split-link[data-copy]');

if (emailLink) {
    const label = emailLink.querySelector('.hint-label');
    const email = emailLink.dataset.copy;
    let timer;

    emailLink.addEventListener('click', async (e) => {
        e.preventDefault();

        try {
            await navigator.clipboard.writeText(email);
            emailLink.classList.add('copied');
            label.textContent = 'copiado';

            clearTimeout(timer);
            timer = setTimeout(() => {
                emailLink.classList.remove('copied');
                label.textContent = 'copiar';
            }, 2000);
        } catch (err) {
            // se o navegador bloquear a cópia, abre o app de e-mail
            window.location.href = emailLink.getAttribute('href');
        }
    });
}