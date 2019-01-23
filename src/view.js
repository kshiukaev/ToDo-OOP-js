import { createElement } from './helpers.js';
import { threadId } from 'worker_threads';

class View {
  constructor() {
    this.form = document.getElementById('todo-form');
    this.input = document.getElementById('add-input');
    this.list = document.getElementById('todo-list');

    this.form.addEventListener('submit', this.handleAdd.bind(this));
  }

  createElement(todo){
    const chechbox = createElement('input', { type: 'checkbox', className: 'checkbox', checked.completed ? 'checked' : ''});
    const label = createElement('label', { className: 'title' }, todo.title);
    const editInput = createElement('input', { type: 'text', className: 'textField'});
    const editButton = createElement('button', { className: 'edit' }, 'Изменить');
    const removeButton = createElement('button', { className: 'remove' }, 'Удалить');
    const item = createElement('li', {className: `todo-item${todo.completed ? 'completed' : '' }`, 'data-id': todo.id }, chechbox, label, editInput, editButton, removeButton);
  
    return this.addEventListener(item);
  }

  addEventListener(item){
    const chechbox = listItem.querySelector('checkbox');
    const editButton = listItem.querySelector('button.edit');
    const removeButton = listItem.querySelector('button.remove');
    
    chechbox.addEventListener('change', this.handleToggle.bind(this));
    editButton.addEventListener('click', this.handleEdit.bind(this));
    removeButton.addEventListener('click', this.handleRemove.bind(this));

    return item;
  }

  handleAdd(event){
    event.preventDefault();

    if(!this.input.value) return alert('Неоходимо ввести название задачи');

    const value = this.input.value;

    // add item to model
  }

  handleToggle({ target }){
    const listItem = target.parentNode;
    const id = listItem.getAttribute('data-id');
    const completed = target.completed; 

    // update model
  }

  handleEdit({ target }){
    const listItem = target.parentNode;
    const id = listItem.getAttribute('data-id');
    const label = listItem.querySelector('.title');
    const input = listItem.querySelector('.textField');
    const editButton = listItem.querySelector('button.edit');
    const title = input.value;
    const isEditing = listItem.classList.contains('editing');

    if(isEditing){
      // update model
    } else {
      input.value = label.textContent;
      editButton.textContent = 'Сохранить';
      listItem.classList.add('editing');
    }
  }
  handleRemove({ target }){
    const listItem = target.parentNode;
    const id = listItem.getAttribute('data-id');
    // remove item from Model
  }
  findListItem(id){
    return this.list.querySelector(`[data-id="${id}"`);
  }
  addItem(todo){
    const listItem = this.createElement(todo);

    this.input.value = '';
    this.list.appendChild(listItem);
  }

  toggleItem(todo){
    const listItem = this.findListItem(todo.id);
    const chechbox = listItem.querySelector('.checkbox');

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
    const input = listItem.querySelector('.textField');
    const editButton = listItem.querySelector('button.edit');
  
    label.textContent = todo.title;
    editButton.textContent = 'Изменить';
    listItem.classList.remove('editing');
  }

  removeItem(id){
    const listItem = this.findListItem(todo.id);

    this.list.removeChild(listItem);
  }
}

export default View;