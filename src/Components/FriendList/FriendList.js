import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => (
  <div className={styles.FriendListWrapper}>
    <ul className={styles.friend_list}>
      <FriendListItem friends={friends} />
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

FriendList.defaultProps = {
  // bla: 'test',
};

export default FriendList;
