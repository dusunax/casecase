import { AvatarIcon } from "@radix-ui/react-icons";

interface Props {
  user: {
    avatarUrl: string | undefined;
  };
  className?: string;
}

const Avatar = ({ user, className }: Props) => {
  return (
    <div
      className={`h-10 w-10 rounded-full ring-2 ring-slate-100 bg-red-500 ${className}`}
    >
      {user.avatarUrl ? (
        <img
          className="inline-block w-full h-full object-cover"
          src={user.avatarUrl}
          alt="user image"
        />
      ) : (
        <AvatarIcon className="w-full h-full" />
      )}
    </div>
  );
};

export default Avatar;
