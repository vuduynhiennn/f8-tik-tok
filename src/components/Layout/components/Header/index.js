import classNames from 'classnames/bind';
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

function Header() {
    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src='' alt='logo'/>
                </div>
                <div className={cx('search')}>
                    <input type='text' spellCheck={false} placeholder='Search accounts and video '/>
                    <button className={cx('clear')}>
                        {/* clear */}
                    </button>
                    { /* loading */ }

                    <button className={cx('search')}>
                        { /* search */ }
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;