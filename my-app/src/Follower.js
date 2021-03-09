import React from 'react'

class Follower extends React.Component {

    render() {
        const {follower} = this.props;

        return (
            <div key={follower.id} className="follower">
                <h3>{follower.login}</h3>
                <img src={follower.avatar_url} alt="me"/>
            </div>
        )
    }


}

export default Follower;