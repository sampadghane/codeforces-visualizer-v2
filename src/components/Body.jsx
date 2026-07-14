import { useState, useEffect } from "react";
import CartShimmer from "./CartShimmer";
import UserProfile from "./UserProfile";
import { fetchUserData } from "../services/codeforcesApi";

const Body = () => {
  // Search Inputs
  const [user1Input, setUser1Input] = useState("");
  const [user2Input, setUser2Input] = useState("");

  // Trigger Search
  const [user1Search, setUser1Search] = useState("");
  const [user2Search, setUser2Search] = useState("");

  // User Data
  const [userInfo, setUserInfo] = useState(null);
  const [bestContest, setBestContest] = useState(null);
  const [lastSolvedProblem, setLastSolvedProblem] = useState(null);
  const [solvedProblemCount, setSolvedProblemCount] = useState(null);
  const [tagStatistics, setTagStatistics] = useState(null);

  const handleCompareClick = () => {
    setUser1Search(user1Input);
    setUser2Search(user2Input);
  };

  useEffect(() => {
    if (user1Search) {
      loadUser(user1Search);
    }
  }, [user1Search]);

  const uniqueJson = (arr) => {
    const uniqueSet = new Set();

    return arr.filter((item) => {
      const uniqueKey = item.problem.contestId + item.problem.index;

      if (!uniqueSet.has(uniqueKey) && item.verdict === "OK") {
        uniqueSet.add(uniqueKey);
        return true;
      }

      return false;
    });
  };

  const countTags = (arr) => {
    const tagMap = new Map();

    arr.forEach((item) => {
      item.problem.tags.forEach((tag) => {
        tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
      });
    });

    return tagMap;
  };

  const loadUser = async (handle) => {
    try {
      const data = await fetchUserData(handle);

      setUserInfo(data.info);

      const ratingHistory = data.rating.result;

      let bestContestData = ratingHistory[0];

      for (const contest of ratingHistory) {
        if (contest.rank < bestContestData.rank) {
          bestContestData = contest;
        }
      }

      setBestContest(bestContestData);

      setLastSolvedProblem(data.latest.result[0].problem);

      const solvedProblems = uniqueJson(data.all.result);

      setSolvedProblemCount(solvedProblems.length);

      setTagStatistics(countTags(solvedProblems));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="body">

      <div className="compare-search">

        <div className="search-box">
          <label>User 1</label>

          <input
            type="text"
            placeholder="tourist"
            className="search-bar"
            onChange={(e) => setUser1Input(e.target.value)}
          />
        </div>

        <div className="search-box">
          <label>User 2</label>

          <input
            type="text"
            placeholder="jiangly"
            className="search-bar"
            onChange={(e) => setUser2Input(e.target.value)}
          />
        </div>

        <button
          className="search-button"
          onClick={handleCompareClick}
        >
          Compare
        </button>

      </div>

      {userInfo === null && <CartShimmer />}

      {userInfo &&
        bestContest &&
        lastSolvedProblem &&
        solvedProblemCount !== null &&
        tagStatistics && (

          <UserProfile
            user={userInfo.result[0]}
            bestRankData={bestContest}
            lastProblemSolved={lastSolvedProblem}
            numberOfProblemSolved={solvedProblemCount}
            numberOfProblemWithTag={tagStatistics}
          />

      )}

    </div>
  );
};

export default Body;