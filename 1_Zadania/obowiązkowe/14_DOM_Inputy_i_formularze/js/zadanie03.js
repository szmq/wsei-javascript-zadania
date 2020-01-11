document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.querySelector('form')
  const table = document.querySelector('table tbody')

  window.table = table

  const addToTable = (team1, team2, score1, score2) => {
    const newScore = document.createElement('tr')
    newScore.innerHTML = `<td>${team1}</td><td>${team2}</td><td>${score1} - ${score2}</td>`
    table.append(newScore)
  }

  form.addEventListener('submit', event => {
    event.preventDefault()

    const team1 = document.getElementById('team1').value
    const team2 = document.getElementById('team2').value
    const points1 = document.getElementById('points1').value
    const points2 = document.getElementById('points2').value

    const scoreNotNegative = (points1 >= 0) && (points2 >= 0)

    if (scoreNotNegative && team1 !== team2) {
      addToTable(team1, team2, points1, points2)
    }
  });
});
