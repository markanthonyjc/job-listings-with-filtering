import style from './JobItemInfo.module.scss'

const jobItemInfo = ({ job }) => {
  return <div className={style['job-item-info']}>
        <p>{job.name}</p>
        <ul className={style['job-detail']}>
            <li>{job.publishing.time_elapsed}</li>
            <li>{job.type}</li>
            <li>{job.condition}</li>
        </ul>
    </div>
}

export default jobItemInfo
