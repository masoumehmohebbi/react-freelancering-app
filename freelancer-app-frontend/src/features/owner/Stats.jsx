const Stats = ({ projects }) => {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map((p) => p.status === 2).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );
  return <div>Stats</div>;
};

export default Stats;
