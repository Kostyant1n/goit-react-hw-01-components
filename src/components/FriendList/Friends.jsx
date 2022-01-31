import FriendListItem from "../FriendList/FriendListItem";
import friends from "../../data/friends.json";



const Friends = () => {
  return (   
      <ul  className="friend-list">
        {friends.map((friend) => {
          return (
              <FriendListItem                  
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}           
              />
          );
        })}
      </ul>  
  );
};

export default Friends;
