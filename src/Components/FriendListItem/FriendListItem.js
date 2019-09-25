import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(el => (
        <li className={styles.item} key={el.id}>
          <span
            className={`${styles.status} ${
              el.isOnline ? styles.green : styles.red
            }`}
          />
          <img
            className={styles.avatar}
            src={el.avatar}
            alt={el.name}
            width="48"
          />
          <p className={styles.name}>{el.name}</p>
        </li>
      ))}
    </>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

FriendListItem.defaultProps = {
  // bla: 'test',
};

export default FriendListItem;
