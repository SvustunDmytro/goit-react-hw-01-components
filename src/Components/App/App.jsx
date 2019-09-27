/* eslint-disable import/extensions */
import React from 'react';
import styles from './App.module.css';
import SocialProfile from '../SocialProfile/SocialProfile.jsx';
import Stats from '../Stats/Stats.jsx';
import FriendList from '../FriendList/FriendList.jsx';
import TransactionHistory from '../TransactionHistory/TransactionHistory.jsx';
import friends from '../FriendList/friends.json';
import items from '../TransactionHistory/transaction.json';
import user from '../SocialProfile/user';
import stats from '../Stats/stats';

const App = () => (
  <div className={styles.App}>
    <SocialProfile user={user} />
    <Stats stats={stats} title="Upload stats" />
    <FriendList friends={friends} />
    <TransactionHistory items={items} />
  </div>
);

export default App;
