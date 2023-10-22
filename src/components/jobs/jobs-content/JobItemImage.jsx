import style from './JobItemImage.module.scss'

const JobItemImage = ({ image }) => {
  return <div className={style['job-item-image']}>
        <img height={50}
             src={image}
             alt=""/>
    </div>
}

export default JobItemImage
