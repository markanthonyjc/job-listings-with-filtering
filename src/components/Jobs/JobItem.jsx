import style from './JobItem.module.scss'
import JobCard, { ModifierStyle } from './JobCard'
import JobItemCompany from './JobItemCompany'
import JobItemInfo from './JobItemInfo'
import JobItemSkill from './JobItemSkill'
import Separator from '../UI/Separator'
import JobItemImage from './JobItemImage'

const JobItem = ({ job, addFilterHandler }) => {
  const modifierStyle = job.company.badges.some(
    item => item.toLowerCase().includes(ModifierStyle.FEATURED.toLowerCase())
  )
    ? ModifierStyle.FEATURED
    : ''

  return <JobCard modifierStyle={modifierStyle}>
        <div className={style['job-item']}>
            <JobItemImage image={job.company.image}/>
            <div className={style['job-info']}>
                <JobItemCompany company={job.company}/>
                <JobItemInfo job={job}/>
            </div>
            <Separator/>
            <JobItemSkill skills={job.skills} addFilterHandler={addFilterHandler}/>
        </div>
    </JobCard>
}

export default JobItem
