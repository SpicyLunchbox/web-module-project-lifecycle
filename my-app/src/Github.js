import React from 'react';
import User from './User';
import Follower from './Follower';

export default function Github(props) {
    return (
        <>
        <div className="github_panel">
                <User user={props.githubUsers}/>
        </div>


        <div className="follower_panel">
            {props.followers.map(follower => (
                <Follower follower={follower}/>
            ))}
        </div>
        </>
    )
}