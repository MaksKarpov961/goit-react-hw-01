import FriendListItem from "../FriendListItem/FriendListItem";



export default function FriendList({ friends }) {
  return (
    <ul>
	{/* Кількість li залежить від кількості об'єктів в масиві */}
	<li>
		<FriendListItem />
	</li>
</ul>
  )
}