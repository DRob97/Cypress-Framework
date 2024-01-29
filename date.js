Date.prototype.nextWeek = function() {
    var date = new Date(this.valueOf())
    date.setDate(date.getDate() + 7)
    return date
}

Date.prototype.nextMonth = function() {
    var date = new Date(this.valueOf())
    date.setDate(date.getDate() + 28)
    return date
}

function returnDesiredDateFormat(aDate){
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

const currentDate = new Date()
const departureDate = currentDate.nextWeek()
const returnDate = currentDate.nextMonth()

console.log(returnDesiredDateFormat(currentDate))
console.log(returnDesiredDateFormat(departureDate))
console.log(returnDesiredDateFormat(returnDate))