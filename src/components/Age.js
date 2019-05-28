import React from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions';

const Age = (props) => {
    return (
        <React.Fragment>
            <div>Age: 
                <span>{props.age}</span>
            </div>
            <button 
                className="ageUp"
                onClick={props.onAgeUp}
            >
                Age Up
            </button>
            <button 
                className="ageDown"
                onClick={props.onAgeDown}
            >
                Age Down
            </button>

            <hr/>
        
            <div>
                <ul>
                    {
                        props.history.map(item => (
                            <li 
                                className="historyItem" 
                                key={item.id}
                                onClick={() => props.onDeleteItem(item.id)}
                            >
                                {item.age}
                            </li>
                        ))
                    }
                </ul>
            </div>
      </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
      age: state.age.age,
      history: state.age.history
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onAgeUp: () => dispatch(actionCreator.ageUp(1)),
      onAgeDown: () => dispatch(actionCreator.ageDown(1)),
      onDeleteItem: (id) => dispatch(actionCreator.deleteItem(id))
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Age);
  
