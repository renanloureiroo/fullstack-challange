import { Avatar } from "./Avatar";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";

export const Tweet = ({ name, username, children, avatar, verify = false }) => {
  return (
    <div className="flex space-x-3 p-4 w-full border-b border-brand-silver">
      <Avatar image={avatar} />

      <div className="space-y-5">
        <div className="space-y-1">
          <div className=" flex items-center space-x-2 text-sm">
            <span className="font-bold">{name}</span>
            {verify && <BadgeCheckIcon className="w-4 h-4" />}
            <span className="text-brand-silver">@{username}</span>
          </div>
          <p>{children}</p>
        </div>

        <div className="flex space-x-1 items-center text-xs text-brand-silver">
          <button>
            <HeartIcon className="w-5 h-5 stroke-1" />
          </button>
          <span>1M</span>
        </div>
      </div>
    </div>
  );
};
