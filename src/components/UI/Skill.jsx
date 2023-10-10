import style from './Skill.module.scss'

const Skill = ({ children }) => {
  return <div className={style.skill}>
    {children}
  </div>
}

export default Skill
