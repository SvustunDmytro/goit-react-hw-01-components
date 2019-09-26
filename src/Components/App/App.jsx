/* eslint-disable import/extensions */
import React from 'react';
import styles from './App.module.css';
import SocialProfile from '../SocialProfile/SocialProfile.jsx';
import Stats from '../Stats/Stats.jsx';
import FriendList from '../FriendList/FriendList.jsx';
import TransactionHistory from '../TransactionHistory/TransactionHistory.jsx';
import friends from '../FriendList/friends.json';
import items from '../TransactionHistory/transaction.json';

const user = {
  name: 'Jacques Gluke',
  tag: '@jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

function App() {
  return (
    <div className={styles.App}>
      <SocialProfile user={user} />
      <Stats stats={stats} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
}

export default App;
