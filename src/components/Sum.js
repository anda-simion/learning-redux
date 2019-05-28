import React from 'react';
import { connect } from 'react-redux';
import { updateA, updateB, resetSum } from '../store/actions/actions';

const Sum = (props) => {
    return (
        <div>
            <div className="col">
                <div>
                    <span>A: </span>
                    <span>{props.a}</span>
                </div>
                <button onClick={() => props.updateA(props.b)}>Update A</button>
            </div>
            <div className="col">
                <div>
                    <span>B: </span>
                    <span>{props.b}</span>
                </div>
                <button onClick={() => props.updateB(props.a)}>Update B</button>
            </div>
            <div className="col">
                <button onClick={props.resetSum}>Reset</button>
            </div>
      </div>
    )
};

const mapStateToProps = (state) => (
    {
        a: state.sum.a,
        b: state.sum.b,
        reset: state.sum.reset
    }
);

const mapsDispatchToProps = {
    updateA,
    updateB,
    resetSum
};
/*
const mapsDispatchToProps = (dispatch) => (
    {
        updateA: (valueB) => dispatch(updateA(valueB)),
        updateB: (valueA) => dispatch(updateB(valueA))
    }
);
*/
export default connect(mapStateToProps, mapsDispatchToProps)(Sum);
