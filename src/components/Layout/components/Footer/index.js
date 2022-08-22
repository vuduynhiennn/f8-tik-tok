import styles from './Footer.module.scss'
import classNames from 'classnames';
const cx = classNames.bind(styles)

function Footer() {
    return ( 
        <footer className={cx('container')}>
            this is a footer tag
        </footer>
    );
}

export default Footer;