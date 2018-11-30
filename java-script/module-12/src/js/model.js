const v4 = require('uuid/v4');

import * as storage from '../services/storage';

export default class Model {
  constructor(items = []) {
    this.items = items;
  }

  addItem(title) {
    const item = {
      id: v4(),
      title,
    };

    this.items.push(item);

    storage.set(this.items);

    return item;
  }

  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
    storage.remove(id);
  }
}
