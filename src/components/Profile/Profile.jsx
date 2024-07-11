import s from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={s.userCard}>
      <div className={s.info}>
        <img className={s.userImg} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={s.stats}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
