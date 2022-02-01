import FriendListItem from "../FriendList/FriendListItem";
import friends from "../../data/friends.json";



const Friends = () => {
  return (   
      <ul  className="friend-list">
      {friends.map(({id, avatar, name, isOnline }) => {
          return (
              <FriendListItem                  
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}           
              />
          );
        })}
      </ul>  
  );
};

export default Friends;
