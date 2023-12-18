/* eslint-disable no-undef */
import React from "react";
import { addPostActionCreator } from "../../../redux/profileReducer";
import { updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./myPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action);
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;