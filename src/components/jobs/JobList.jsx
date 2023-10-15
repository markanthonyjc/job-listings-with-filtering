import JobItem from './JobItem'
import style from './JobList.module.scss'

const JobList = ({ jobs, addFilterHandler }) => {
  return <div className={style['job-list']}>
    {
      jobs.map(job => {
        return <JobItem key={job.id} job={job} addFilterHandler={addFilterHandler}/>
      })
    }
  </div>
}

export default JobList
