import style from './JobItemInfo.module.scss'

const JobItemInfo = ({ job }) => {
  const { name, publishing, type, condition } = job

  return <div className={style['job-item-info']}>
        <p>{name}</p>
        <ul className={style['job-detail']}>
            <li>{publishing.time_elapsed}</li>
            <li>{type}</li>
            <li>{condition}</li>
        </ul>
    </div>
}

export default JobItemInfo
