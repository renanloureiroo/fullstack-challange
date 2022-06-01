import { Avatar } from "./Avatar";

export const Tweet = ({ name, username, tweet, avatar }) => {
  return (
    <div className="flex space-x-3 p-4 w-full border-b border-brand-silver">
      <Avatar image={avatar} />

      <div className="space-y-1">
        <div className="space-x-2">
          <span>{name}</span>
          <span>@{username}</span>
        </div>
        <p>{tweet}</p>
      </div>
    </div>
  );
};
