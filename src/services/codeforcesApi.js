export const fetchUserData = async (handle) => {

    const infoRes = await fetch(
        `https://codeforces.com/api/user.info?handles=${handle}`
    );

    const info = await infoRes.json();
    if (info.status !== "OK") {
        throw new Error(info.comment || "Failed to fetch user info");
    }

    const ratingRes = await fetch(
        `https://codeforces.com/api/user.rating?handle=${handle}`
    );

    const rating = await ratingRes.json();
    if (info.status !== "OK") {
        throw new Error(info.comment || "Failed to fetch user info");
    }

    const latestRes = await fetch(
        `https://codeforces.com/api/user.status?handle=${handle}&from=1&count=1`
    );

    const latest = await latestRes.json();
    if (info.status !== "OK") {
        throw new Error(info.comment || "Failed to fetch user info");
    }

    const allRes = await fetch(
        `https://codeforces.com/api/user.status?handle=${handle}`
    );

    const all = await allRes.json();
    if (info.status !== "OK") {
        throw new Error(info.comment || "Failed to fetch user info");
    }

    return {
        info,
        rating,
        latest,
        all
    };
};