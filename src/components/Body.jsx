import { useState, useEffect } from "react";
import CartShimmer from "./CartShimmer";
import UserProfile from "./UserProfile";
import { fetchUserData } from "../services/codeforcesApi";
import ComparisonTable from "./ComparisonTable";
import "../styles/body.css";
import "../styles/comparison.css";
const Body = () => {
  // Search Inputs
  const [user1Input, setUser1Input] = useState("");
  const [user2Input, setUser2Input] = useState("");

  // Trigger Search
  const [user1Search, setUser1Search] = useState("");
  const [user2Search, setUser2Search] = useState("");

  // User Data
  const [user1, setUser1] = useState(null);
  const [user2, setUser2] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleCompareClick = () => {
    if(!user1Input.trim()||!user2Input.trim()){
      alert("please enter both usernames.");
      return;
    }
    setLoading(true);
    setUser1(null);
    setUser2(null);

    setUser1Search(user1Input.trim());
    setUser2Search(user2Input.trim());
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
        handleCompareClick();
    }
  };
  useEffect(() => {
    const loadUsers = async (handle, setter) => {
      try{
        if (user1Search) {
          await loadUser(user1Search, setUser1);
        }
        if (user2Search) {
          await loadUser(user2Search, setUser2);
        }
      }finally{
        setLoading(false);
      }
    };
    loadUsers();
  }, [user1Search, user2Search]);

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

  const loadUser = async (handle, setter) => {
    console.log("Loading", handle);
    try {

        const data = await fetchUserData(handle);

        const ratingHistory = data.rating.result;

        let bestContest = ratingHistory[0];

        for (const contest of ratingHistory) {
            if (contest.rank < bestContest.rank) {
                bestContest = contest;
            }
        }

        const solvedProblems = uniqueJson(data.all.result);

        const tagStatistics = countTags(solvedProblems);
        console.log({
          info: data.info,
          rating: data.rating,
          latest: data.latest,
          all: data.all
      });
        setter({
            info: data.info.result[0],
            bestContest,
            lastSolvedProblem: data.latest.result[0].problem,
            solvedProblemCount: solvedProblems.length,
            tagStatistics
        });
        console.log("Setter executed");

    } catch (error) {
      console.error(error);
      alert(error.message);
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
            value={user1Input}
            onChange={(e) => setUser1Input(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="search-box">
          <label>User 2</label>

          <input
            type="text"
            placeholder="jiangly"
            className="search-bar"
            value={user2Input}
            onChange={(e) => setUser2Input(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <button
          className="search-button"
          onClick={handleCompareClick}
          disabled={loading}
        >
          {loading?"Comparing...":"Compare"}
        </button>

      </div>

      {loading && (
        <div className="comparison-container">
          <CartShimmer />
          <CartShimmer />
        </div>  
      )}

      {(user1||user2) &&(

          <div className="comparison-container">

            {user1 && (
                <UserProfile
                    user={user1.info}
                    bestRankData={user1.bestContest}
                    lastProblemSolved={user1.lastSolvedProblem}
                    numberOfProblemSolved={user1.solvedProblemCount}
                    numberOfProblemWithTag={user1.tagStatistics}
                />
            )}

            {user2 && (
                <UserProfile
                    user={user2.info}
                    bestRankData={user2.bestContest}
                    lastProblemSolved={user2.lastSolvedProblem}
                    numberOfProblemSolved={user2.solvedProblemCount}
                    numberOfProblemWithTag={user2.tagStatistics}
                />
            )}
          </div>

      )}
      {user1 && user2 && (
        <ComparisonTable
            user1={user1}
            user2={user2}
        />
      )}

    </div>
  );
};

export default Body;