import "../styles/profile.css";
const UserProfile = ({
  user,
  bestRankData,
  lastProblemSolved,
  numberOfProblemSolved,
}) => {
  return (
    <div className="user-profile">

      <div className="profile-header">

        <img
          src={user.titlePhoto}
          alt={user.handle}
          className="user-image"
        />

        <div className="profile-info">
          <h2>{user.handle}</h2>
          <p>{user.rank}</p>
          <p>{user.city}, {user.country}</p>
        </div>

      </div>

      <div className="profile-stats">

        <div className="stat-row">
          <span>Current Rating</span>
          <strong>{user.rating}</strong>
        </div>

        <div className="stat-row">
          <span>Maximum Rating</span>
          <strong>{user.maxRating}</strong>
        </div>

        <div className="stat-row">
          <span>Problems Solved</span>
          <strong>{numberOfProblemSolved}</strong>
        </div>

        <div className="stat-row">
          <span>Friends</span>
          <strong>{user.friendOfCount}</strong>
        </div>

        <div className="stat-row">
          <span>Best Contest</span>
          <strong>{bestRankData.contestName}</strong>
        </div>

        <div className="stat-row">
          <span>Contest Rank</span>
          <strong>#{bestRankData.rank}</strong>
        </div>

        <div className="stat-row">
          <span>Last Solved</span>
          <strong>
            {lastProblemSolved.index}. {lastProblemSolved.name}
          </strong>
        </div>

      </div>

    </div>
  );
};

export default UserProfile;