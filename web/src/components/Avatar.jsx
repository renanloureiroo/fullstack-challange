import AvatarPNG from "../assets/images/avatar.png";

export const Avatar = ({ image, size = "medium" }) => {
  const url = image ? image : AvatarPNG;
  return (
    <div
      className={`rounded-full bg-brand-silver overflow-hidden ${
        size === "medium"
          ? " w-12 h-12"
          : size === "small"
          ? "w-7 h-7"
          : size === "big"
          ? "w-16 h-16"
          : ""
      }`}
    >
      <img src={url} alt="" />
    </div>
  );
};
