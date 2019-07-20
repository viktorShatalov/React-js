import React from 'react';
import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    setCurrentPage,
    getUsers
} from '../../Redux/users-reduser';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChange = (pageNumder) => {
        this.props.getUsers(pageNumder, this.props.pageSize);
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, 
    {follow, unfollow, setCurrentPage, getUsers })(UsersContainer);
