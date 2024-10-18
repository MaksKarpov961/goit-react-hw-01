import css from './Profile.module.css'
import PropTypes from 'prop-types';



export default function Profile({name, tag, location, image, stats}) {
  return (
    <div className= {css.profile_container}>
      <div>
        <div className= {css.img_wrapper}>
          <img className= {css.img}
            src={image}
            alt="User avatar"
          />
        </div>
        <div className= {css.user_info_wrapper}>
          <p className= {css.user_name}>{name}</p>
          <p className= {css.user_email}>@{tag}</p>
          <p className= {css.user_adress}>{location}</p>
        </div>
      </div>

      <ul className= {css.stats_wrapper}>
        <li className= {css.item}>
          <span className= {css.stats_info_name}>Followers</span>
          <span className= {css.stats_ifo_number}>{stats.followers}</span>
        </li>
        <li className= {css.item}>
          <span className= {css.stats_info_name}>Views</span>
          <span className= {css.stats_ifo_number}>{stats.views}</span>
        </li>
        <li className= {css.item}>
          <span className= {css.stats_info_name}>Likes</span>
          <span className= {css.stats_ifo_number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}


// Опис типів пропсів компонента 
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};