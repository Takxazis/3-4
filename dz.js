var vopros = ['Вопрос №1','Вопрос №2','Вопрос №3']
var otvet = ['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3']


var title = document.createElement('h3');
title.classList.add('titleClass');
var titleText = document.createTextNode('Тест по программированию');
title.appendChild(titleText);
console.log(title);
document.body.appendChild(title);

var question = document.createElement('h2');
question.classList.add('questionClass')
var questionText = document.createTextNode(vopros[0]);
question.appendChild(questionText);
document.body.appendChild(question);
console.log(question);

var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

var label = document.createElement('label')
label.htmlFor = "id";
label.appendChild(document.createTextNode(otvet[0]));

document.body.appendChild(checkbox);
document.body.appendChild(label);















