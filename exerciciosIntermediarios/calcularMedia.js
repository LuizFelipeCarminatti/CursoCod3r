const media = array => {
    let media = 0
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
        media = total / array.length
    }
    console.log(media)
}

media([1, 2, 3, 4, 5,])