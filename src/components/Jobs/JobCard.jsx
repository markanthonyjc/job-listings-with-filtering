import style from './JobCard.module.scss'

export const ModifierStyle = {
  FILTER: 'filter',
  FEATURED: 'featured'
}

const JobCard = ({ children, modifierStyle }) => {
  const styles = `${style['job-card']} ${style[`job-card-${modifierStyle}`]}`

  return <div className={styles}>{children}</div>
}

export default JobCard
