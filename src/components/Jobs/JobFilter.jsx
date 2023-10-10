import JobFilterItem from './JobFilterItem'
import style from './JobFilter.module.scss'
import JobCard, { ModifierStyle } from './JobCard'

const JobFilter = ({ skills, clearFilterHandler, clearAllFilterHandler }) => {
  const _skills = skills.map((skill, index) => {
    return <JobFilterItem key={index}
                          name={skill}
                          clearFilterHandler={clearFilterHandler}/>
  })

  return <JobCard modifierStyle={ModifierStyle.FILTER}>
        <div className={style['job-filter']}>
            <div className={style.list}>{_skills}</div>
            <div className={style.actions}>
                <a href="#" onClick={clearAllFilterHandler}>Clear</a>
            </div>
        </div>
    </JobCard>
}

export default JobFilter
