import { createElement } from './helpers.js';

class View {
  constructor(){
    this.form = document.getElementById('todo-form');
    this.input = document.getElementById('add-input');
    this.list = document.getElementById('todo-list');
  }
  createElement(todo){
    const checkbox = createElement('input', { type: 'checkbox', className: 'checkbox', checked: todo.completed ? 'checked' : ''});
    const label = createElement('label', { className: 'title' }, todo.title);
    const editInput = createElement('button', { type: 'text', className: 'textfield' });
  }

  findListItem(id){
    return this.list.querySelector(`[data-id="${id}"]`);
  }
  addItem(todo){
    const listItem = this.createElement(todo);

    this.input.value = '';
    this.list.appendChild(listItem);
  }

  toggleItem(todo){
    const listItem = this.findListItem(todo.id);
    const checkbox = listItem.querySelector('.checkbox');

    checkbox.checked = todo.completed;

    if(todo.completed){
      listItem.classList.add('completed');
    } else {
      listItem.classList.remove('completed');
    }
  }
  editItem(todo){
    const listItem = this.findListItem(todo.id);
    const label = listItem.querySelector('.title');
    const input = listItem.querySelector('.textfield');
    const editButton = listItem.querySelector('.button.edit');

    label.textContent = todo.title;
    editButton.textContent = 'Change';
    listItem.classList.remove('editing');
  }
  removeItem(id){
    const listItem = this.findListItem(todo.id);
    this.list.removeChild(listItem);
  }
}

export default View;