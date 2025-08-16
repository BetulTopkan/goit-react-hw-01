import clsx from "clsx";
import css from "./FriendList.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  const statusClass = isOnline ? "online" : "offline";
    const classNames = clsx(
      css[statusClass],
      css.itemPTag
    );
  return (
    <div className={css.friendListItemDiv}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.itemPTag}>{name}</p>
      <p className={classNames}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
