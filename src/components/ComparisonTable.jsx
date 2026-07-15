const ComparisonTable = ({ user1, user2 }) => {
  return (
    <div className="comparison-table">
      <h2>Comparison</h2>

      <table>

        <thead>
          <tr>
            <th>Metric</th>
            <th>{user1.info.handle}</th>
            <th>{user2.info.handle}</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Current Rating</td>
            <td>{user1.info.rating}</td>
            <td>{user2.info.rating}</td>
          </tr>

          <tr>
            <td>Maximum Rating</td>
            <td>{user1.info.maxRating}</td>
            <td>{user2.info.maxRating}</td>
          </tr>

          <tr>
            <td>Problems Solved</td>
            <td>{user1.solvedProblemCount}</td>
            <td>{user2.solvedProblemCount}</td>
          </tr>

          <tr>
            <td>Friends</td>
            <td>{user1.info.friendOfCount}</td>
            <td>{user2.info.friendOfCount}</td>
          </tr>

          <tr>
            <td>Best Contest Rank</td>
            <td>{user1.bestContest.rank}</td>
            <td>{user2.bestContest.rank}</td>
          </tr>

        </tbody>

      </table>
    </div>
  );
};

export default ComparisonTable;