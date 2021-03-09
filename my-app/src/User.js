import React from 'react'

class User extends React.Component {

    render() {
        const {user} = this.props;

        return (
            <div key={user.id} className="user">
                <h3>{user.login}</h3>
                <img src={user.avatar_url} alt="follower"/>
                <p>Followers: {user.followers}</p>
                <p>Following: {user.following}</p>
                <p>projects: {user.public_repos}</p>
            </div>
        )
    }


}

export default User;