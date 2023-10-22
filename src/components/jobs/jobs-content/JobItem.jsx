import style from './JobItem.module.scss'
import JobCard, { ModifierStyle } from '../JobCard'
import JobItemCompany from './JobItemCompany'
import JobItemInfo from './JobItemInfo'
import JobItemSkill from './JobItemSkill'
import Separator from '../../UI/Separator'
import JobItemImage from './JobItemImage'

const JobItem = ({ job, addFilterHandler }) => {
  const { company, skills } = job
  const { image, badges } = company

  const modifierStyle = badges.some(
    item => item.toLowerCase().includes(ModifierStyle.FEATURED.toLowerCase())
  )
    ? ModifierStyle.FEATURED
    : ''

  return <JobCard modifierStyle={modifierStyle}>
        <div className={style['job-item']}>
            <JobItemImage image={image}/>
            <div className={style['job-info']}>
                <JobItemCompany company={company}/>
                <JobItemInfo job={job}/>
            </div>
            <Separator/>
            <JobItemSkill skills={skills}
                          addFilterHandler={addFilterHandler}/>
        </div>
    </JobCard>
}

export default JobItem
