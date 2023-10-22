import { GridLoader } from 'react-spinners'
import style from './Loading.module.scss'

const LOADER_COLOR = '#36d7b7'

const Loading = () => {
  return <div className={style.loading}>
        <GridLoader color={LOADER_COLOR}/>
        <span>Loading...</span>
    </div>
}

export default Loading
