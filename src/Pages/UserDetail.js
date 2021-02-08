import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { getUserDetail } from "../Redux/actions/UserActions"

const UserDetail = ({ user, getUserDetail }) => {
    const { id } = useParams();

    useEffect(() => {
        getUserDetail(id)
    }, [])

    return (
        <div>
            {/* {users !== 0 ? users.map((users))}
            <h3>{user.username}</h3> */}
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserDetail: (id) => dispatch(getUserDetail(id)),

    };
}


export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
