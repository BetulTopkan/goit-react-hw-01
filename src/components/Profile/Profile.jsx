import css from "./Profile.module.css"

export default function Profile(props) { 
    return (
      <div className={css.profileInfo}>
        <div className={css.infoDiv}>
          <img className={css.avatar} src={props.avatar} alt="User avatar" />
          <p className={css.username}>{props.name}</p>
          <p className={css.tagLocation}>@{props.tag}</p>
          <p className={css.tagLocation}>{props.location}</p>
        </div>

        <ul className={css.statsList}>
          <li className={css.statsListItem}>
            <span>Followers</span>
            <span className={css.dataSpan}>{props.stats.followers}</span>
          </li>
          <li className={css.statsListItem}>
            <span>Views</span>
            <span className={css.dataSpan}>{props.stats.views}</span>
          </li>
          <li className={css.statsListItem}>
            <span>Likes</span>
            <span className={css.dataSpan}>{props.stats.likes}</span>
          </li>
        </ul>
      </div>
    );
}