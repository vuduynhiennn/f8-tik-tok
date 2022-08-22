import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'

import Header from "../components/Header";
import SideBar from "./SideBar";

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return ( 
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>
                    { children }
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;