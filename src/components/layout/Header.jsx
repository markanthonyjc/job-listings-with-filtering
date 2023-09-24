import {BgHeaderMobile} from '../../assets/images';
import style from './Header.module.scss';

const Header = () => {
    return <header className={style.header}>
        <img src={BgHeaderMobile} alt=""/>
    </header>;
};

export default Header;
