import css from './Friends.module.css';
import { FriendsCard } from './FriendsCard/FriendsCard';
import friends from '../../data/friends.json';

export const Friends = () => {
    return (
        <ul className={css.friendList}>
            <FriendsCard friends={friends} />
        </ul>
    );
};

