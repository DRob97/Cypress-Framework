Date.prototype.nextWeek = function() {
    let date = new Date(this.valueOf())
    date.setDate(date.getDate() + 7)
    return date
}

Date.prototype.nextMonth = function() {
    let date = new Date(this.valueOf())
    date.setDate(date.getDate() + 28)
    return date
}

function returnDateNumbersSlashes(aDate){
    const step1 = aDate.toDateString()
    const step2 = step1.slice(4)
    const step3 = step2.split(' ')

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
    'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    
    let monthNum
    let dayNum = step3[1]
    let yearNum = step3[2]

    months.forEach((month, index) =>{
        if(step3[0] === month) monthNum = index + 1
    })
    
    monthNum = monthNum.toString()
    
    if(monthNum < 10) return `0${monthNum}/${dayNum}/${yearNum}`
    else return `${monthNum}/${dayNum}/${yearNum}`
}

function returnDateWrittenAbbreviated(aDate){
    const step1 = aDate.toDateString()
    return step1
}

const currentDate = new Date()
const departureDate = currentDate.nextWeek()
const returnDate = currentDate.nextMonth()

console.log(returnDateNumbersSlashes(currentDate))
console.log(returnDateNumbersSlashes(departureDate))
console.log(returnDateNumbersSlashes(returnDate))

console.log(returnDateWrittenAbbreviated(currentDate))
console.log(returnDateWrittenAbbreviated(departureDate))
console.log(returnDateWrittenAbbreviated(returnDate))