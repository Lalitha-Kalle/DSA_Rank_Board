
const calculateScore = (submissionStats) => {
  let score = 0
  submissionStats.forEach((item) => {
    if(item.difficulty === "Easy") score += item.count*1
    if(item.difficulty === "Medium") score += item.count*2
    if(item.difficulty === "Hard") score += item.count*3;
  })
  return score
}

module.exports = calculateScore