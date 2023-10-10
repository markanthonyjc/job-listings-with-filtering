import style from './JobItemSkill.module.scss'
import Skill from '../UI/Skill'

const JobItemSkill = ({ skills, addFilterHandler }) => {
  return <div className={style['job-item-skill']} onClick={addFilterHandler}>
      {
        skills.map((skill, index) => {
          return <Skill key={index}>{skill}</Skill>
        })
      }
  </div>
}

export default JobItemSkill
