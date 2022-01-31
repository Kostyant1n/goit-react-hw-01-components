import PropTypes from "prop-types";

const FriendListItem = (props) => {
  const { avatar, name, isOnline } = props;
 
  return (
    <li className="item" >

         {isOnline ? (
          <>
            <span className="online"></span>
          
          </>
        ) : (
           <span className="offline"></span>
        )}     
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
</li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,  
};

export default FriendListItem;
