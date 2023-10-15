import style from './JobItemCompany.module.scss'
import Badge from '../UI/Badge'

const JobItemCompany = ({ company }) => {
  return <div className={style['job-item-company']}>
      <div className={style.info}>
          <p>{company.name}</p>
          {company.badges.length > 0 && <div className={style.badges}>
              {company.badges.map((badge, index) => {
                return <Badge key={index} name={badge}/>
              })}
          </div>}
      </div>
    </div>
}

export default JobItemCompany
