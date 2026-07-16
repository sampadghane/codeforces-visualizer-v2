const ComparisonTable = ({ user1, user2 }) => {

    const higher = (a, b) => a > b;
    const lower = (a, b) => a < b;

    return (
        <div className="wnner">

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

                        <td className={higher(user1.info.rating, user2.info.rating) ? "winner" : ""}>
                            {higher(user1.info.rating, user2.info.rating) && "🏆 "}
                            {user1.info.rating}
                        </td>

                        <td className={higher(user2.info.rating, user1.info.rating) ? "winner" : ""}>
                            {higher(user2.info.rating, user1.info.rating) && "🏆 "}
                            {user2.info.rating}
                        </td>
                    </tr>

                    <tr>
                        <td>Maximum Rating</td>

                        <td className={higher(user1.info.maxRating, user2.info.maxRating) ? "winner" : ""}>
                            {higher(user1.info.maxRating, user2.info.maxRating) && "🏆 "}
                            {user1.info.maxRating}
                        </td>

                        <td className={higher(user2.info.maxRating, user1.info.maxRating) ? "winner" : ""}>
                            {higher(user2.info.maxRating, user1.info.maxRating) && "🏆 "}
                            {user2.info.maxRating}
                        </td>
                    </tr>

                    <tr>
                        <td>Problems Solved</td>

                        <td className={higher(user1.solvedProblemCount, user2.solvedProblemCount) ? "winner" : ""}>
                            {higher(user1.solvedProblemCount, user2.solvedProblemCount) && "🏆 "}
                            {user1.solvedProblemCount}
                        </td>

                        <td className={higher(user2.solvedProblemCount, user1.solvedProblemCount) ? "winner" : ""}>
                            {higher(user2.solvedProblemCount, user1.solvedProblemCount) && "🏆 "}
                            {user2.solvedProblemCount}
                        </td>
                    </tr>

                    <tr>
                        <td>Friends</td>

                        <td className={higher(user1.info.friendOfCount, user2.info.friendOfCount) ? "winner" : ""}>
                            {higher(user1.info.friendOfCount, user2.info.friendOfCount) && "🏆 "}
                            {user1.info.friendOfCount}
                        </td>

                        <td className={higher(user2.info.friendOfCount, user1.info.friendOfCount) ? "winner" : ""}>
                            {higher(user2.info.friendOfCount, user1.info.friendOfCount) && "🏆 "}
                            {user2.info.friendOfCount}
                        </td>
                    </tr>

                    <tr>
                        <td>Best Contest Rank</td>

                        <td className={lower(user1.bestContest.rank, user2.bestContest.rank) ? "winner" : ""}>
                            {lower(user1.bestContest.rank, user2.bestContest.rank) && "🏆 "}
                            {user1.bestContest.rank}
                        </td>

                        <td className={lower(user2.bestContest.rank, user1.bestContest.rank) ? "winner" : ""}>
                            {lower(user2.bestContest.rank, user1.bestContest.rank) && "🏆 "}
                            {user2.bestContest.rank}
                        </td>
                    </tr>

                </tbody>

            </table>

        </div>
    );
};

export default ComparisonTable;