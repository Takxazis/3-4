const vopros = ['1. Вопрос №1', '2. Вопрос №2', '3. Вопрос №3']
const otvet = ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']

const master = Object.freeze({
        creatElementNode: function(nameElement, className, textNode) {
          const element = document.createElement(nameElement);
          element.classList.add(className)
          element.innerHTML = textNode;
          return element;
        },
        createCheckbox: function (otvet) {
                const checkbox = document.createElement('input');
                const div = document.createElement('div');
                const label = document.createElement('label');
                //создание чекбокса
                checkbox.classList.add('checkboxClass');
                checkbox.type = "checkbox";
                checkbox.name = "name";
                checkbox.value = "value";
                checkbox.id = otvet;
                // создание лейбла
                label.htmlFor = otvet;
                label.innerHTML = otvet;
                label.classList.add('labelClass');
                // присоеденение к диву всего
                div.appendChild(label);
                div.appendChild(checkbox);
                return div;
               
        }

});

const creatElementNode = master.creatElementNode;

document.body.appendChild(creatElementNode('h1', 'titleClass','Тест по программированию'));

for(let i = 0; i < vopros.length; i++) {
  const ol = creatElementNode('ol', 'ol', '');
  const h2 = creatElementNode('h2', 'h2', vopros[i]);
  ol.appendChild(h2);
  for(let j = 0; j < otvet.length; j++) {
    const li = creatElementNode('li', 'li', '');
    const createCheckbox = master.createCheckbox(otvet[j]);
    const ul = creatElementNode('ul', 'ul', '');
    li.appendChild(createCheckbox);
    ul.appendChild(li)
    h2.appendChild(ul);
    
  }
  document.body.appendChild(ol)
}

document.body.appendChild(creatElementNode('button', 'buttonClass','Проверить мои результаты');