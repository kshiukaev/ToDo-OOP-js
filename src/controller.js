class Controller {
  constructor(model, view){
    this.model = model;
    this.view = view;
    
    view.on('add', this.addTodo.bind(this));
    view.on('toggle', this.toggleTodo.bind(this));
    view.on('edit', this.editTodo.bind(this));
    view.on('remove', this.removeTodo.bind(this));
  }

  toggleTodo( id, completed){
    const todo = this.model.updateItem(id, { completed });

    this.view.toggleItem(todo);
  }

  addTodo(title){
    const todo = this.model.addItem({
      id: Date.now(),
      title,
      completed: false
    });

    this.view.addItem(todo);
  }

  editTodo( { id, title } ){
    const todo = this.model.updateItem(id, { title });

    this.view.editItem(todo);
  }

  removeTodo( id ){
    const todo = this.model.updateItem(id);

    this.view.removeItem(todo);
  }
} 