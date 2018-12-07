const v4 = require('uuid/v4');

import * as storage from '../services/storage';

export default class Model {
  constructor(items = storage.get()) {
    items ? (this.items = items) : (this.items = []);
  }

  addItem(title) {
    const item = {
      id: v4(),
      title
    };

    this.items.push(item);

    storage.set(this.items);

    return item;
  }

  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
    storage.remove(id);
  }

  checkItemInItems(title) {
    if (!this.items) return;
    return this.items.some(item => item.title === title);
  }
}
