import React from 'react'

const Profile = (props) => {
    return (
        <div>
            {props.currentUser.username ? <h1> Hello {props.currentUser.username} </h1> : null}
            {props.currentUser.username ? <p> Email {props.currentUser.email}</p> : null}
            {/* <p> Articles Read {props.currentUser.articles.length}</p> why undefined */}
            {/* try to get api running so that you can make settings in profile */}
        </div>
    )
}

export default Profile