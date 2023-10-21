import style from './JobItemSkill.module.scss'
import Skill from '../../UI/Skill'

const JobItemSkill = ({ skills, addFilterHandler }) => {
  const renderSkills = skills.map((skill, index) => {
    return <Skill key={index}>{skill}</Skill>
  })

  return <div className={style['job-item-skill']}
              onClick={addFilterHandler}>
      {renderSkills}
  </div>
}

export default JobItemSkill
