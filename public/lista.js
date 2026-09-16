const tarefas = document.getElementById("tarefas")
const botao = document.getElementById("botao")
const lista = document.getElementById("lista")

 botao.addEventListener("click", function(){
const texto= tarefas.value;
const novatarefa = document.createElement("li")
//é uma função do JavaScript usada para criar um novo elemento HTML pelo código.

novatarefa.textContent = texto;
lista.appendChild(novatarefa);
//appendChild significa colocar a nova tarefa dentro da lista



 })