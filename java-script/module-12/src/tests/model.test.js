import Model from '../js/model';

describe('Model class', () => {
    let modelInstance;

    beforeEach(() => {
        modelInstance = new Model();
    });

    it('Should create item instance', () => {
        expect(modelInstance).toBeDefined();
        expect(modelInstance instanceof Model).toBe(true);
        expect(modelInstance.items.length).toBe(0);
    });

    it('Should add item', () => {
        modelInstance.addItem('title');

        expect(modelInstance.items.length).toBeGreaterThan(0);
    });

    it('Should remove item', () => {
        const id = modelInstance.items[0].id;

        modelInstance.removeItem(id);

        expect(modelInstance.items.length).toBe(0);
    });

    it('Should check if item already in items', () => {
        modelInstance.addItem('new title');

        expect(modelInstance.checkItemInItems('new title')).toBeTruthy();

        expect(modelInstance.checkItemInItems('new title 2')).toBeFalsy();
    })
});