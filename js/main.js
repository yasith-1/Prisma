
function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function copyCode(btn) {
    const pre = btn.closest('.code-block').querySelector('pre');
    const text = pre.innerText;
    navigator.clipboard.writeText(text).then(() => {
        btn.textContent = 'Copied!';
        btn.style.color = '#4ade80';
        setTimeout(() => { btn.textContent = 'Copy'; btn.style.color = ''; }, 2000);
    });
}
