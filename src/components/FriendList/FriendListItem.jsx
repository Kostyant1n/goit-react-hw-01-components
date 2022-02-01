import PropTypes from 'prop-types';
import styles from './FriendListItem.module.scss';

const FriendListItem = props => {
  const { avatar, name, isOnline } = props;

  return (
    <li className={styles.item}>
      {isOnline ? (
        <>
          <span className={styles.online}></span>
        </>
      ) : (
        <span className={styles.offline}></span>
      )}
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default FriendListItem;
