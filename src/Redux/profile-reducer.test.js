import profileReducer, { AddPostAC, deletePost } from './profile-reducer';
import React from 'react';

let state = {
    posts: [
        { id: 1, messege: 'post', likesCount: 153333 },
        { id: 2, messege: 'post', likesCount: 153333 }
    ],
};

it('length of post should be true', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
});
