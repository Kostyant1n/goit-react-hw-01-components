import Profile from "../Profile/ProfileListItem";
import user from '../../data/user.json';


const Profiles = () => {
    return (
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
    )
}
export default Profiles;
