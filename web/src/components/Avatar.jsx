import AvatarPNG from "../assets/images/avatar.png";

export const Avatar = ({ image }) => {
  const url = image ? image : AvatarPNG;
  return (
    <div className=" w-12 h-12 rounded-full bg-brand-silver overflow-hidden">
      <img src={url} alt="" />
    </div>
  );
};
