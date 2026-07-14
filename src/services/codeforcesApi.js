export const fetchUserData = async (handle) => {

    const [

        infoRes,
        ratingRes,
        latestRes,
        allRes

    ] = await Promise.all([

        fetch(
            `https://codeforces.com/api/user.info?handles=${handle}`
        ),

        fetch(
            `https://codeforces.com/api/user.rating?handle=${handle}`
        ),

        fetch(
            `https://codeforces.com/api/user.status?handle=${handle}&from=1&count=1`
        ),

        fetch(
            `https://codeforces.com/api/user.status?handle=${handle}`
        )

    ]);

    return {

        info: await infoRes.json(),

        rating: await ratingRes.json(),

        latest: await latestRes.json(),

        all: await allRes.json()

    };

};