import EventEmitter from '../services/event-emitter';
import * as storage from '../services/storage';

export default class View extends EventEmitter {
  constructor() {
    super();

    this.form = document.querySelector('.form');
    this.input = this.form.querySelector('.form-input');
    this.notes = document.querySelector('.notes');

    this.form.addEventListener('submit', this.handelAdd.bind(this));
  }

  handelAdd(evt) {
    evt.preventDefault();

    const valueInput = this.input.value;

    if (valueInput === '') return;

    this.emit('add', valueInput);
  }

  creatNote(note) {
    const item = document.createElement('div');
    item.dataset.id = note.id;
    item.classList.add('item');

    const title = document.createElement('a');
    title.textContent = note.title;
    title.classList.add('title');
    title.setAttribute('href', this.input.value);
    title.setAttribute('target', '_blank');

    const button = document.createElement('button');
    button.textContent = 'X';
    button.dataset.action = 'remove';
    button.classList.add('close');

    item.append(title, button);

    this.appendEventListners(item);

    return item;
  }

  addNote(note) {
    const item = this.creatNote(note);

    this.form.reset();
    this.notes.appendChild(item);
  }

  addNotes() {
    storage.get().forEach(element => {
      this.addNote(element);
    });
  }

  appendEventListners(item) {
    const removeBtn = item.querySelector('[data-action="remove"]');

    removeBtn.addEventListener('click', this.handelRemove.bind(this));
  }

  handelRemove({ target }) {
    const parent = target.closest('.item');

    this.emit('remove', parent.dataset.id);
  }

  removeNote(id) {
    const item = this.notes.querySelector(`[data-id="${id}"]`);
    this.notes.removeChild(item);
  }
}
