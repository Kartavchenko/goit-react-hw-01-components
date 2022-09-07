import { FriendListItem } from '../friendListItem/FriendListItem';

export const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(friend => (
        <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
        />
    ))}
  </ul>
);