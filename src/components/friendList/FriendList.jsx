import PropTypes  from 'prop-types';
import { FriendListItem } from '../friendListItem/FriendListItem';

export const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(friend  => (
      <FriendListItem 
            id={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
        />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array,
}