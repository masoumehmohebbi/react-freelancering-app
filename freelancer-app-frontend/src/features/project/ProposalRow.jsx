import Table from "../../ui/Table";
import truncateText from "../../utils/TruncateText";

const ProposalRow = ({ proposal, index }) => {
  return (
    <Table.row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>
        <p>{truncateText(proposal.description, 50)}</p>
      </td>
      <td>{proposal.duration} روز</td>
      <td>{proposal.price}</td>
      <td>
        <span>{proposal.status}</span>
      </td>
      <td>++</td>
    </Table.row>
  );
};

export default ProposalRow;
