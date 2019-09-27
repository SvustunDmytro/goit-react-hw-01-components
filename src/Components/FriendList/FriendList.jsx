import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
// eslint-disable-next-line import/extensions
import FriendListItem from './FriendListItem/FriendListItem.jsx';

const FriendList = ({ friends }) => (
  <div className={styles.FriendListWrapper}>
    <ul className={styles.friend_list}>
      {friends.map(el => (
        <FriendListItem
          key={el.id}
          isOnline={el.isOnline}
          avatar={el.avatar}
          name={el.name}
        />
      ))}
    </ul>
  </div>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FriendList;
