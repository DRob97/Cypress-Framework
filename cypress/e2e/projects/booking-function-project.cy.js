/// <reference types="cypress"/>
import BookingFunction from '../../pages/BookingFunctionPage'

describe('Booking Function Project', function() {

    beforeEach(() => {
        cy.fixture('booking_function').then(function(data) {
            this.dropdowns = data.dropdowns
            this.onePassOneWay = data.onePassOneWay
            this.trip1Confirmation = data.trip1Confirmation
            this.onePassRound = data.onePassRound
            this.trip2Confirmation = data.trip2Confirmation
            this.twoPass = data.twoPass
            this.trip3Confirmation = data.trip3Confirmation
            
        })

        cy.clickCard('Project - Booking Function')
    })
    Date.prototype.tomorrow = function() {
        let date = new Date(this.valueOf())
        date.setDate(date.getDate() + 1)
        return date
    }

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

    const bookingFunction = new BookingFunction()

    it('Test Case 01 - Validate the default Book your trip form', function() {
        bookingFunction.getRadioButtons().each(function($el, index){
            cy.wrap($el).should('be.visible')
            if(index === 0){
                cy.wrap($el).should('have.attr', 'checked')
            }
            else{
                cy.wrap($el).should('not.have.attr', 'checked')
            }
        })

        bookingFunction.getLabels().should('be.visible')

        bookingFunction.getDropDowns().each(function($el, index){
            cy.wrap($el).should('be.visible')
            if(index === 3){
                cy.wrap($el).invoke('val').should('eq', this.dropdowns[index - 3])
            }
            else if(index === 4){
                cy.wrap($el,).invoke('val').should('eq', this.dropdowns[index - 3])
            }
        })

        bookingFunction.getDatePickers().each(function($el, index){
            cy.wrap($el).should('be.visible')
            if(index === 1){
                cy.wrap($el).should('not.be.enabled')
            }
        })

        bookingFunction.getBookButton().should('be.enabled')
    })

    it('Test Case 02 - Validate the Book your trip form when Round trip is selected', function() {
        bookingFunction.getRadioButtons().last().click().should('be.checked')
        bookingFunction.getRadioButtons().first().should('not.be.checked')

        bookingFunction.getLabels().should('be.visible')

        bookingFunction.getDropDowns().each(function($el, index){
            cy.wrap($el).should('be.visible')
            if(index === 3){
                cy.wrap($el).invoke('val').should('eq', this.dropdowns[index - 3])
            }
            else if(index === 4){
                cy.wrap($el,).invoke('val').should('eq', this.dropdowns[index - 3])
            }
        })

        bookingFunction.getDatePickers().should('be.visible')

        bookingFunction.getBookButton().should('be.enabled')
    })

    it('Test 03', function() {
        const todaysDate = bookingFunction.setTodaysDate()
        const departureDate = todaysDate.nextWeek()

        bookingFunction.getRadioButtons().parent().each(function($el){
            const el = $el.text()
            if(el === this.onePassOneWay[0]){
                cy.wrap($el).click()
            }
        })

        bookingFunction.getDatePickers().first().clear().type(returnDateNumbersSlashes(departureDate))

        bookingFunction.getDropDowns().each(function($el, index){
            cy.wrap($el).select(this.onePassOneWay[1][index])
        })

        bookingFunction.clickSubmit()

        bookingFunction.getDepartHeading().should('exist')
        .next().should('exist').and('have.text', this.trip1Confirmation[0])
        .next().should('exist').and('have.text', returnDateWrittenAbbreviated(departureDate))

        bookingFunction.getPassengerInfo().each(function($el, index) {
            cy.wrap($el).should('exist').and('have.text', this.trip1Confirmation[1][index])
        })
    })

    it('Test 04', function() {
        const todaysDate = bookingFunction.setTodaysDate()
        const departureDate = todaysDate.nextWeek()
        const returnDate = todaysDate.nextMonth()

        bookingFunction.getRadioButtons().parent().each(function($el){
            const el = $el.text()
            if(el === this.onePassRound[0]){
                cy.wrap($el).click()
            }
        })

        bookingFunction.getDatePickers().first().clear().type(returnDateNumbersSlashes(departureDate))
        bookingFunction.getDatePickers().last().clear().type(returnDateNumbersSlashes(returnDate))

        bookingFunction.getDropDowns().each(function($el, index){
            cy.wrap($el).select(this.onePassRound[1][index])
        })

        bookingFunction.clickSubmit()

        bookingFunction.getDepartHeading().should('exist')
        .next().should('exist').and('have.text', this.trip2Confirmation[0])
        .next().should('exist').and('have.text', returnDateWrittenAbbreviated(departureDate))
        
        bookingFunction.getReturnHeading().should('exist')
        .next().should('exist').and('have.text', this.trip2Confirmation[1])
        .next().should('exist').and('have.text', returnDateWrittenAbbreviated(returnDate))

        bookingFunction.getPassengerInfo().each(function($el, index) {
            cy.wrap($el).should('exist').and('have.text', this.trip2Confirmation[2][index])
        })
    })

    it('Test 05', function() {
        const todaysDate = bookingFunction.setTodaysDate()
        const departureDate = todaysDate.tomorrow()

        bookingFunction.getRadioButtons().parent().each(function($el){
            const el = $el.text()
            if(el === this.twoPass[0]){
                cy.wrap($el).click()
            }
        })

        bookingFunction.getDatePickers().first().clear().type(returnDateNumbersSlashes(departureDate))
       

        for(let i = 0; i <= 1; i++){
            bookingFunction.getDropDowns().each(function($el, index){
                cy.wrap($el).select(this.twoPass[1][index])
            })
        }

        bookingFunction.clickSubmit()

        bookingFunction.getDepartHeading().should('exist')
        .next().should('exist').and('have.text', this.trip3Confirmation[0])
        .next().should('exist').and('have.text', returnDateWrittenAbbreviated(departureDate))

        bookingFunction.getPassengerInfo().each(function($el, index) {
            cy.wrap($el).should('exist').and('have.text', this.trip3Confirmation[1][index])
        })
    })
})