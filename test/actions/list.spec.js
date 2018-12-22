import { spy } from 'sinon';
import * as actions from '../../app/actions/list';

describe('actions', () => {
  const payload = 'i love tam';
  it('should add a new item to list', () => {
    expect(actions.add(payload)).toMatchSnapshot();
  });

  it('should create remove item action', () => {
    expect(actions.remove()).toMatchSnapshot();
  })

  it('should remove item from list', () => {
    const index = 1;
    const fn = actions.remove(index);
    expect(fn).toBeInstanceOf(Function);
    const dispatch = spy();
    const getState = () => {
      return {items: ['test', 'test2']}
    };
    const filteredList = ['test']
    fn(dispatch, getState);
    // dispatch.alwaysReturned()
    expect(dispatch.calledWith({ type: actions.REMOVE_ITEM, payload: filteredList})).toBe(true);
  });

  

  // it('should incrementIfOdd should create increment action', () => {
  //   const fn = actions.incrementIfOdd();
  //   expect(fn).toBeInstanceOf(Function);
  //   const dispatch = spy();
  //   const getState = () => ({ counter: 1 });
  //   fn(dispatch, getState);
  //   expect(dispatch.calledWith({ type: actions.INCREMENT_COUNTER })).toBe(true);
  // });

  // it('should incrementIfOdd shouldnt create increment action if counter is even', () => {
  //   const fn = actions.incrementIfOdd();
  //   const dispatch = spy();
  //   const getState = () => ({ counter: 2 });
  //   fn(dispatch, getState);
  //   expect(dispatch.called).toBe(false);
  // });

  // There's no nice way to test this at the moment...
  // it('should incrementAsync', done => {
  //   const fn = actions.incrementAsync(1);
  //   expect(fn).toBeInstanceOf(Function);
  //   const dispatch = spy();
  //   fn(dispatch);
  //   setTimeout(() => {
  //     expect(dispatch.calledWith({ type: actions.INCREMENT_COUNTER })).toBe(
  //       true
  //     );
  //     done();
  //   }, 5);
  // });
});
