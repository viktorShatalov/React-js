import React from 'react';
import s from './Users.module.css';
import UserPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import { followAPI, unfollowAPI } from '../../api/api';

let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={(e) => { props.onPageChange(p); }} >{p}</span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <NavLink to={'/profile/' + u.id}>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : UserPhoto} className={s.ava} />
                    </div>
                </NavLink>
                <div>
                    {u.followed ?
                        <button disabled={props.followingInProgress} onClick={() => {
                            props.toggleFolloingProgress(true);
                            unfollowAPI.deleteUsers(u.Id).then(response => {
                                if (response.data.resultCode == 0) { props.unfollow(u.Id) }
                                props.toggleFolloingProgress(false);
                            });
                        }}>Unfollow</button>

                        : <button disabled={props.followingInProgress} onClick={() => {
                            props.toggleFolloingProgress(true);
                            followAPI.postUsers(u.Id).then(response => {
                                if (response.data.resultCode == 0) { props.follow(u.Id) }
                                props.toggleFolloingProgress(false);
                            });
                        }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{/*u.location.country*/}</div>
                    <div>{/*u.location.city*/}</div>
                </span>
            </span>
        </div>)
        }
    </div>
}

export default Users;
