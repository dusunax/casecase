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
      className={`h-10 w-10 rounded-full ring-2 ring-slate-100 bg-yellow-400 shadow-md ${className}`}
    >
      {user.avatarUrl ? (
        <img
          className="inline-block w-full h-full object-cover"
          src={user.avatarUrl}
          alt="user image"
        />
      ) : (
        <AvatarIcon className="w-full h-full" color="rgba(0,0,0,0.3)" />
      )}
    </div>
  );
};

export default Avatar;
