import style from './Error.module.scss'
import { IconError } from '../../assets/images'

const Error = () => {
  return <div className={style.error}>
        <img src={IconError} alt=""/>
        <p>Oops! Something went wrong</p>
    </div>
}

export default Error
