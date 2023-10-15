import JobItem from './JobItem'
import style from './JobList.module.scss'

const JobList = ({ jobs, addFilterHandler }) => {
  const renderJobs = jobs.map(job => {
    return <JobItem key={job.id} job={job} addFilterHandler={addFilterHandler}/>
  })

  return <div className={style['job-list']}>
    {renderJobs}
  </div>
}

export default JobList
