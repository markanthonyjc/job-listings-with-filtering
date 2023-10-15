import Skill from '../UI/Skill'
import style from './JobFilterItem.module.scss'
import { IconRemove } from '../../assets/images'

const JobFilterItem = ({ name, clearFilterHandler }) => {
  return <Skill>
    <div className={style['job-filter-item']}>
      <p>{name}</p>
      <button onClick={() => clearFilterHandler(name)}>
        <img src={IconRemove} alt="" />
      </button>
    </div>
  </Skill>
}

export default JobFilterItem
