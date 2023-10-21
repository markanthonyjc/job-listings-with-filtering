import style from './JobItemCompany.module.scss'
import Badge from '../../UI/Badge'

const JobItemCompany = ({ company }) => {
  const { name, badges } = company

  const renderBadges = () => {
    if (badges.length === 0) return null

    return <div className={style.badges}>
            {badges.map((badge, index) => {
              return <Badge key={index} name={badge}/>
            })}
        </div>
  }

  return <div className={style['job-item-company']}>
        <div className={style.info}>
            <p>{name}</p>
            {renderBadges()}
        </div>
    </div>
}

export default JobItemCompany
