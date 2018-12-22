// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './List.css';
import routes from '../constants/routes';

type Props = {
  add: (value) => void,
  incrementIfOdd: () => void,
  incrementAsync: () => void,
  remove: () => void,
  items: Array[]
  // textInput: string
};

export default class List extends Component<Props> {
  props: Props;
  
  constructor(props) {
    super(props);
    this.state = {
      textInput: ''
    };
  }
 
  onTextInputChange = (e) => {
    this.setState({textInput: e.target.value})
  }
  
  render() {
    const {
      add,
      incrementIfOdd,
      incrementAsync,
      remove,
      items,
      // textInput
    } = this.props;
    const { textInput } = this.state;
    const itemList = items.map((i, index) => {
      // console.log("i", i, "index", index)
      return (
      <div key={index}>
        <li>{i}</li>
        <button
            id="delete"
            className={styles.btn}
            onClick={() => {remove(index)}}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-minus" />
          </button>
      </div> 
      )
    });
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <h2 className={styles.title}>
          TODO List:
        </h2>
        <div>
        <input 
        type="text" 
        onChange={this.onTextInputChange}
        onKeyUp={(e)=> { if(e.keyCode === 13) {add(textInput)} }}/>
        <span>You typed: <code>{textInput}</code> </span>
        </div>
        <div className={styles.btnGroup}>
        <button
            id="add"
            className={styles.btn}
            onClick={()=> { add(textInput)}}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-plus" />
          </button>
          </div>
        <div className={`group-items ${styles.list}`} >
            {itemList}
        </div>
        {/* <div className={`counter ${styles.counter}`} data-tid="counter">
          {items}
        </div> */}
        {/* <div className={styles.btnGroup}>

        </div> */}
      </div>
    );
  }
}
