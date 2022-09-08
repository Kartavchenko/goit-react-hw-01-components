import PropTypes from 'prop-types';
import { FriendListItem } from '../friendListItem/FriendListItem';
import { List } from './friendList.styled';

export const FriendList = ({ friends }) => (
  <List>
    {friends.map(friend  => (
      <FriendListItem 
            id={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
        />
    ))}
  </List>
);

FriendList.propTypes = {
  friends: PropTypes.array,
}