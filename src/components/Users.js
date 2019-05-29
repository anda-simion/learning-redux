import React from 'react';
import { connect } from 'react-redux';

const Users = (props) => {

    return (
        <div>
            <h3>Users list</h3> 
            <p> Using redux-thunk</p>
            <ul>
                {
                    props.users.users.map(user => (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

const mapStateToProps = (state) => {
    return{
        users: state.users
    }
}

export default connect(mapStateToProps, null)(Users);
