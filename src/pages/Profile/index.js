import styles from './Profile.module.scss'
import classNames from 'classnames';

const cx = classNames.bind(styles)

function Profile() {
    return ( 
        <div className={cx('wrapper')}>
        </div>
    );
}

export default Profile;