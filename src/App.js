import React from 'react';
import './App.css';
import SocialProfile from './Components/SocialProfile/SocialProfile';
import Stats from './Components/Stats/Stats';
import FriendList from './Components/FriendList/FriendList';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
import friends from './Components/FriendList/friends.json';
import items from './Components/TransactionHistory/transaction.json';

function App() {
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
  return (
    <div className="App">
      <SocialProfile user={user} />
      <Stats stats={stats} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
}

export default App;
