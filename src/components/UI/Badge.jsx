import style from './Badge.module.scss'

const variants = {
  'NEW!': 'new',
  FEATURED: 'featured'
}

const Badge = ({ name }) => {
  return <div className={`${style.badge} ${style[variants[name]]}`}>
      <span>{name}</span>
    </div>
}

export default Badge
