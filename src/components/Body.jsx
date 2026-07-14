import { useState, useEffect } from "react";
import CartShimmer from "./CartShimmer";
import UserProfile from "./UserProfile";

let Body=()=>{
   
   
    let [inputText, setInputText] = useState('');
    let [searchText, setSearchText] = useState('');
    let [JsonValue, setJsonValue] = useState(null)
    let [bestRankData, setBestRankData] = useState(null);
    let [lastProblemSolved, setLastProblemSolved] = useState(null);
    let [numberOfProblemWithTag, setNumberOfProblemWithTag] = useState(null);
    let [numberOfProblemSolved, setNumberOfProblemSolved] = useState(null);
 
    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSearchClick = () => {
        setSearchText(inputText);
    };
    
    useEffect(() => {
        if (searchText) {  
            FetchHandleInfo();
            FetchBestContestRank();
            FetchLastProblemSolved();
            FetchAllProblem();
        }
    }, [searchText]);
   
    const FetchHandleInfo = async ()=>{
        let link="https://codeforces.com/api/user.info?handles="+searchText;
        const data = await fetch(link);
        const jsonData = await data.json();
        setJsonValue(jsonData);
   }

   const FetchBestContestRank = async ()=>{
    let link="https://codeforces.com/api/user.rating?handle="+searchText;
    const data = await fetch(link);
    const jsonData = await data.json();
    let minRankIndex=0;
    let minRank=100000000;
    for(let i=0;i<jsonData.result.length;i++)
    {
        if(jsonData.result[i].rank<minRank)
        {
            minRank=jsonData.result[i].rank;
            minRankIndex=i;
        }
    }
    setBestRankData(jsonData.result[minRankIndex]);
   }

   const  FetchLastProblemSolved = async ()=>{
    let link="https://codeforces.com/api/user.status?handle="+searchText+"&from=1&count=1";
    const data = await fetch(link);
    const jsonData = await data.json();
    setLastProblemSolved(jsonData.result[0].problem);
   }

   const FetchAllProblem = async ()=>{
    let link="https://codeforces.com/api/user.status?handle="+searchText;
    const data = await fetch(link);
    const jsonData = await data.json();
    const uniqueJson = (arr) => {
    const uniqueSet = new Set();
    
    return arr.filter(item => {
        const uniqueKey = item.problem.contestId + item.problem.index;
        if (!uniqueSet.has(uniqueKey) && item.verdict=="OK") {
        uniqueSet.add(uniqueKey);
        return true;
        }
        return false;
    });
    };

    const countTags = (arr) => {
        const tagMap = new Map();
        arr.forEach(item => {
          item.problem.tags.forEach(tag => {
            if (tagMap.has(tag)) {
              tagMap.set(tag, tagMap.get(tag) + 1);
            } else {
              tagMap.set(tag, 1);
            }
          });
        });
        return tagMap;
      };
      
    const filteredArray = uniqueJson(jsonData.result);

    const filteredArrayLength=filteredArray.length;
    
    setNumberOfProblemSolved(filteredArrayLength);

    const tagMap = countTags(filteredArray);

    // Print the tagMap
    // tagMap.forEach((value, key) => {
    // console.log(`${key}: ${value}`);
    // });

    setNumberOfProblemWithTag(tagMap);
   
    }
   
  
    
    return(
        
        <div id="body">
            
            <div className="search-container">
               <input type="text" placeholder="Enter Your User ID" className="search-bar"  onChange={handleInputChange}/>
               <button type="submit" className="search-button" onClick={handleSearchClick}>Search</button>
            </div>



            {
               JsonValue===null &&
                 <CartShimmer/>
            }

            
            
            {
                JsonValue!==null && bestRankData!==null && lastProblemSolved!==null && numberOfProblemWithTag!==null && numberOfProblemSolved!=null && 
                <UserProfile
                    user={JsonValue.result[0]}
                    bestRankData={bestRankData}
                    lastProblemSolved={lastProblemSolved}
                    numberOfProblemSolved={numberOfProblemSolved}
                    numberOfProblemWithTag={numberOfProblemWithTag}
                />
            }
        </div>
    )
}

export default Body;