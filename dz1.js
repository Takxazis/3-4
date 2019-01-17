var vopros = ['1. Вопрос №1', '2. Вопрос №2', '3. Вопрос №3']
var otvet = ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
var h = ['h1', 'h2', 'h3'];

var master = {
        createTitle: function (titleName) {
                var title = document.createElement(h[2]);
                title.classList.add('titleClass');
                title.innerHTML = titleName;
                document.body.appendChild(title);
        },
        createQuestion: function (questionName) {
                var question = document.createElement(h[1]);
                question.classList.add('questionClass');
                question.innerHTML = questionName;
                document.body.appendChild(question);
        },
        createCheckbox: function (otvet) {
                var br = document.createElement('br');
                var checkbox = document.createElement('input');
                checkbox.classList.add('checkboxClass');
                checkbox.type = "checkbox";
                checkbox.name = "name";
                checkbox.value = "value";
                checkbox.id = "id";
                var label = document.createElement('label')
                label.htmlFor = "id";
                label.innerHTML = otvet;
                label.classList.add('labelClass');
                document.body.appendChild(checkbox);
                document.body.appendChild(label);
                document.body.appendChild(br);
               
        },
        createButton: function(buttonName){
                var button = document.createElement('button');
                button.classList.add('buttonClass');
                button.innerHTML = buttonName;
                document.body.appendChild(button);
        }

}

master.createTitle('Тест по программированию');
master.createQuestion(vopros[0]);
master.createCheckbox(otvet[0]);
master.createCheckbox(otvet[1]);
master.createCheckbox(otvet[2]);
master.createQuestion(vopros[1]);
master.createCheckbox(otvet[0]);
master.createCheckbox(otvet[1]);
master.createCheckbox(otvet[2]);
master.createQuestion(vopros[2]);
master.createCheckbox(otvet[0]);
master.createCheckbox(otvet[1]);
master.createCheckbox(otvet[2]);
master.createButton('Проверить мои результаты');

