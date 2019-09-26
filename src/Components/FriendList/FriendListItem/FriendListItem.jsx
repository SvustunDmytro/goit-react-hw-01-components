import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => (
  <li className={styles.item}>
    <span
      className={`${styles.status} ${isOnline ? styles.green : styles.red}`}
    />
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

FriendListItem.defaultProps = {
  // bla: 'test',
};

export default FriendListItem;
