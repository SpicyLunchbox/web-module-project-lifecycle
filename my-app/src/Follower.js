import React from 'react'

class Follower extends React.Component {

    render() {
        const {Follower} = this.props;

        return (
            <div key={Follower.id} className="Follower">
                <h3>{Follower.name}</h3>
                <p>Followers: {Follower.followers}</p>
                <p>Following: {Follower.following}</p>
                <p>projects: {Follower.public_repos}</p>
            </div>
        )
    }


}

export default Follower;