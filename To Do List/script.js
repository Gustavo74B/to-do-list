let respostaAPI = [
    { "id": 1, "descricao": "Varrer a sala"},
    { "id": 2, "descricao": "Revisar a aula de bd"},
    { "id": 3, "descricao": "Lavar a louça"},
    { "id": 4, "descricao": "Lavar a roupa"},
    { "id": 5, "descricao": "Arrumar a cama"},
]

const lista_ul = document.getElementById("lista_ul")

function init (){
    carregarLista()
}

function carregarLista(){
    // 1. chamar a API com a lista de tarefas atual

    let contador = -1;
    const listContainer = document.getElementById("lista_ul")
    listContainer.innerHTML = '';

    // 2. Iterar a respostaAPI
    while( respostaAPI.length > 0 && ++contador < respostaAPI.length){
        //2.1 Mesclar HTML com respostaAPI para exibir em tela
        listContainer.innerHTML += `<li class="atividade">
        <input type="checkbox" name="concluido_pendente" id="concluido_pendente">
        <label for="concluido_pendente">${respostaAPI[contador].descricao}</label>
        <button>
            <img src="https://clipartcraft.com/images/pencil-clipart-black-and-white-silhouette-4.png" alt="Lápis" class="lapis">
        </button>                
        <button>
            <img src="https://th.bing.com/th/id/OIP.6zQopmoTrq0wEVa-xIOSpAHaHa?w=190&h=191&c=7&r=0&o=5&pid=1.7" alt="Lixeira" class="lixeira">
        </button>
    </li>`;
    }
}







function salvarTarefa() {
    // 1. chmar a API REST POST para salvar a tarefa
    const add_texto = document.getElementById("add_texto")
    respostaAPI.push({ "id": getProximoId, "descricao": add_texto.value});
    // 2. Limpare o campo
    add_texto.value = ''
    // 3. Recarregar a lista
    carregarLista()
}

function getProximoId(){
    return 1;
}

function editarTarefa(id){
    
}
