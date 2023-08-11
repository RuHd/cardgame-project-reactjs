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
