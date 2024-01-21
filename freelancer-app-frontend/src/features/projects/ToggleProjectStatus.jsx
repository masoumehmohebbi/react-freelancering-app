import useToggleProjectStatus from "./useProjectToggleStatus";
import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";

const ToggleProjectStatus = ({ project }) => {
  const { status } = project;

  //   const [enabled, setEnabled] = useState(
  //     project.status === "OPEN" ? true : false
  //   );

  const { isUpdating, ToggleProjectStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const newStatus = project.status === "OPEN" ? "CLOSE" : "OPEN";

    ToggleProjectStatus({ id: project._id, data: { status: newStatus } });
  };
  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loading width={50} height={20} />
      ) : (
        <Toggle
          enabled={status === "OPEN" ? true : false}
          label={project.status === "OPEN" ? "باز" : "بسته"}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
};

export default ToggleProjectStatus;
