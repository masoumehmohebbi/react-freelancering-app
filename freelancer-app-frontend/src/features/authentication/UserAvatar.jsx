import useUser from "./useUser";

const UserAvatar = () => {
  const { user } = useUser();
  return (
    <div className="flex items-center gap-x-2 text-secondary-700">
      <img
        src="/user.jpg"
        className="rounded-full w-7 h-7 object-cover object-center"
      />
      <span>{user?.name}</span>
    </div>
  );
};

export default UserAvatar;
