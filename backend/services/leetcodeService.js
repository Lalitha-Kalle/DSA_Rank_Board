const axios = require("axios")

const fetchLeetcodeData = async (username) => {
  const query = `
  query userProfile($username: String!) {
    matchedUser(username: $username) {
      submitStats {
        acSubmissonNum {
          difficulty
          count
        }
      }
    }
  }
  `

  const response = await axios.post('https://leetcode.com/graphql', {
    query,
    variables: { username }
  }, {
    headers: {"Content-Type": "application/json"}
  });

  return response.data.data.matchedUser.submitStats.acSubmissionNum;
};

module.exports = { fetchLeetcodeData };