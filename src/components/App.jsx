import Profile from "./Profile/Profile";
import userData from "../userData.json"

import friends from '../friends.json'
import FriendList from "./FriendList/FriendList";

import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from '../transactions.json'



export default function App () {
  return (
    <div className="container">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends.friends} />

      <TransactionHistory items={transactions} />

    </div>
  )
}

