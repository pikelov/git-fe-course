import Model from '../js/model';

describe('Model class', () => {
    it('Should create item instance', () => {
        const item = new Model([item]);

        expect(item instanceof Model).toBe(true);
    });

    it('Should add item', () => {
        const item = new Model();

        expect(item.addItem('title')).toBeDefined();
    });

    it('Should remove item', () => {
        const item = new Model();

        expect(item.removeItem('id')).toBe(true);
    });

    it('Should check if item already in items', () => {
        const item = new Model();

        expect(item.checkItemInItems('id')).toBeDefined();
    })
})