import { spy } from 'sinon';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
// import Counter from '../../app/components/Counter';
import List from '../../app/components/List';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const actions = {
    add: spy(),
    // incrementIfOdd: spy(),
    addAsync: spy(),
    remove: spy()
  };
  const listofString = [1,2,3,4];
  const inputText = "Hello World";
  const component = shallow(<List items={listofString} inputTest={inputText} {...actions} />);
  return {
    component,
    actions,
    add: component.find('#add'),
    remove: component.find('#delete'),
    input: component.find('input'),
    p: component.find('.group-items'),
    l: listofString,
  };
}

describe('List component', () => {
  it('should should display list', () => {
    const { p, l } = setup();
    // expect(p.text()).toMatch(/^1$/);
    console.log("p text", p.text());
    expect(p.text()).toEqual(l.join(""));
  });

  it('should first button should call to add to list', ()=> {
    const { add, actions } = setup();
    add.at(0).simulate('click');
    expect(actions.add.called).toBe(true);
  })

  // it('should first button should call increment', () => {
  //   const { buttons, actions } = setup();
  //   buttons.at(0).simulate('click');
  //   expect(actions.increment.called).toBe(true);
  // });

  it('should match exact snapshot', () => {
    const { actions, l } = setup();
    const lst = (
      <div>
        <Router>
          <List counter={1} items={l} {...actions} />
        </Router>
      </div>
    );
    const tree = renderer.create(lst).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should remove button should call remove', () => {
    const { remove, actions } = setup();
    remove.at(0).simulate('click');
    expect(actions.remove.called).toBe(true);
  });

  it('type add new to do item after clickng add', () => {
    const { add, actions } =setup();
    add.at(0).simulate('click');
    expect(actions.add.called).toBe(true)
  })

  // it('should third button should call incrementIfOdd', () => {
  //   const { delete, actions } = setup();
  //   delete.at(0).simulate('click');
  //   expect(actions.incrementIfOdd.called).toBe(true);
  // });

  // it('should fourth button should call incrementAsync', () => {
  //   const { buttons, actions } = setup();
  //   buttons.at(3).simulate('click');
  //   expect(actions.incrementAsync.called).toBe(true);
  // });
});
