// Function to generate a random attack number. from 500 to 2000

export const generateAttackPts = () => {
    return Math.floor(Math.random() * 1500 + 500)
}

// Generate cards randomly

export const generateCards = (arr) => {
    for (let i = arr.length - 1; i>0; i--) {
        let k = Math.floor(Math.random() * i)
        let valueTemp = arr[i]
        arr[i] = arr[k]
        arr[k] = valueTemp
    }

    return arr
}

// export const startDuel = (cardPlayer, cardEnemy,wins,losses,changeCardPlayer,changeCardEnemy) => {
//     if((cardEnemy !== null) && (cardPlayer !== null) ) {
//         if (selectedCardPlayer.attackPts > cardEnemy.attackPts) {
//                 settotalWins(() => totalWins + 1)                   
//         } else {
//             settotalLost(() => totalLost + 1) 
//         }

//         setplayerHand(playerHand.forEach((value,id) => {
//             if (id !== selectedCardPlayer.cardId) {
//                 return value
//             }
//         }))

//         setenemyHand(enemyHand.forEach((value,id) => {
//             if (id !== cardEnemy.cardId) {
//                 return value
//             }
//         }))

//         changeCardPlayer(null)
//         changeCardEnemy(null)

//     } else if (playerHand.length == 0) { // Check if all cards were played
//         if (totalWins > totalLost) {
//             alert("Congratulation! You have cleansed the animal kingdom!")
//         } else alert("You have lost! Try again!!!!")

        
//     }
// }