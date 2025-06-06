document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const mensagem = document.getElementById('mensagem');
    const listaTarefas = document.getElementById('lista-tarefas');

    async function carregarTarefas() {
        const res = await fetch('/api/tarefas');
        const tarefas = await res.json();
        listaTarefas.innerHTML = '';
        tarefas.forEach(tarefa => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${tarefa.titulo}</strong>: ${tarefa.descricao} <br><small>${new Date(tarefa.data).toLocaleString()}</small>`;
            listaTarefas.appendChild(li);
        });
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const titulo = document.getElementById('titulo').value.trim();
        const descricao = document.getElementById('descricao').value.trim();

        if (!titulo || !descricao) {
            mensagem.textContent = 'Preencha todos os campos!';
            return;
        }

        try {
            const response = await fetch('/api/tarefas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ titulo, descricao })
            });
            if (!response.ok) {
                const erro = await response.text();
                throw new Error(erro || 'Erro ao salvar');
            }
            mensagem.textContent = 'Tarefa salva com sucesso!';
            form.reset();
            await carregarTarefas(); // Atualiza a lista após salvar
        } catch (err) {
            mensagem.textContent = 'Erro ao salvar tarefa: ' + err.message;
        }
    });

    carregarTarefas(); // Carrega as tarefas ao abrir a página
});
