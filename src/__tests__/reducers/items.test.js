import reducer from '../../reducers/items';

describe('items reducer', () => {
  it('should return the initial state', () => {
    const result = reducer(undefined, {} )
    expect(result).toEqual([]);
  });

  it('should ADD_ITEM', () => {
    const result = recuder([], { type: 'ADD_ITEM', name: 'Buy Milk' });
    expect(result).toEqual(['Buy Milk']);
  });

  it('should REMOVE_ITEM', () => {
    const items = ['Buy Milk', 'Learn React', 'Learn Redux']
    const result = reducer(items, {index: 1});
    expect(result).toEqual(['Buy Milk', 'Learn Redux']);  
  });
});