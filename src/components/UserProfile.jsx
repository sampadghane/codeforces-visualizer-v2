const UserProfile = ({
  user,
  bestRankData,
  lastProblemSolved,
  numberOfProblemSolved,
  numberOfProblemWithTag,
}) => {
  return (
    <div className="user-profile">
      <div className="profile-left">
        <img
          src={user.titlePhoto}
          alt={user.handle}
          className="user-image"
        />

        <h2>{user.handle}</h2>

        <p>{user.rank}</p>

        <p>
          {user.city}, {user.country}
        </p>
      </div>

      <div className="profile-right">
        <div className="stat-card">
          <h3>Current Rating</h3>
          <p>{user.rating}</p>
        </div>

        <div className="stat-card">
          <h3>Maximum Rating</h3>
          <p>{user.maxRating}</p>
        </div>

        <div className="stat-card">
          <h3>Problems Solved</h3>
          <p>{numberOfProblemSolved}</p>
        </div>

        <div className="stat-card">
          <h3>Friends</h3>
          <p>{user.friendOfCount}</p>
        </div>

        <div className="stat-card">
          <h3>Best Rank</h3>
          <p>{bestRankData.rank}</p>
        </div>

        <div className="stat-card">
          <h3>Last Solved</h3>
          <p>{lastProblemSolved.index}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;