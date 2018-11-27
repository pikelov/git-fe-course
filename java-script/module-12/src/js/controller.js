export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.on('add', this.addNote.bind(this));
    view.on('remove', this.removeNote.bind(this));
  }

  addNote(title) {
    const item = this.model.addItem(title);
    this.view.addNote(item);
  }

  addNotes(note) {
    const item = this.model.addItem(note);
    this.view.addNotes(item);
  }

  removeNote(id) {
    this.model.removeItem(id);
    this.view.removeNote(id);
  }
}
