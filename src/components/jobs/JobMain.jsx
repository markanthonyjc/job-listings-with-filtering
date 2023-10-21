import JobFilter from './jobs-header/JobFilter'
import style from './JobMain.module.scss'
import JobList from './jobs-content/JobList'
import { useEffect, useState } from 'react'
import Error from '../UI/Error'
import Loading from '../UI/Loading'

const URL = 'https://apimocha.com/mark.test.api/jobs'

const SKILLS_DEFAULT = []

const JobMain = () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [skillsFilter, setSkillsFilter] = useState([])

  useEffect(() => {
    fetch(URL)
      .then(data => data.json())
      .then(data => {
        setJobs(data)
        setLoading(false)
      })
      .catch(reason =>
        setError(true)
      )
  }, [])

  const addFilterHandler = skill => {
    if (skill && skill.target.children.length > 0) return

    const text = skill.target.textContent

    if (skillsFilter.some(item => item === text)) return

    setSkillsFilter(prevSkillsFilter => {
      return [...prevSkillsFilter, text]
    })
  }

  const clearFilterHandler = skill => {
    setSkillsFilter(skillsFilter.filter(item => item !== skill))
  }

  const clearAllFilterHandler = () => {
    setSkillsFilter(SKILLS_DEFAULT)
  }

  const jobsFiltered = skillsFilter.length
    ? jobs.filter(
      item => skillsFilter.every(
        s => item.skills.includes(s)
      )
    )
    : jobs

  const renderJobFilter = skillsFilter.length
    ? <JobFilter skills={skillsFilter}
                     clearFilterHandler={clearFilterHandler}
                     clearAllFilterHandler={clearAllFilterHandler}/>
    : null

  const renderJobList = !loading && !error
    ? <JobList jobs={jobsFiltered} addFilterHandler={addFilterHandler}/>
    : null

  const renderLoading = loading && <Loading/>
  const renderError = error && <Error/>

  return <div className={style['job-main']}>
        {renderJobFilter}
        {renderJobList}
        {renderLoading}
        {renderError}
    </div>
}

export default JobMain
