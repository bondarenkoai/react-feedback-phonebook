import PropTypes from 'prop-types';
import { Description } from './Description/Description';
import { Stats } from './Stats/Stats';
import css from './Profile.module.css';
import users from '../../data/users.json';

export const Profile = () => {
    return (
        <div className={css.profilePosition}>
            {users.map(({ username, tag, location, avatar, stats }) => (
                <div className={css.profile} key={username}>
                    <Description
                        username={username}
                        tag={tag}
                        location={location}
                        avatar={avatar}
                    />
                    <Stats stats={stats} />
                </div>
            ))}
        </div>
    );
};

Profile.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            tag: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            stats: PropTypes.shape({
                followers: PropTypes.number.isRequired,
                views: PropTypes.number.isRequired,
                likes: PropTypes.number.isRequired,
            }).isRequired,
        })
    ),
};
