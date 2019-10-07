const SeleniumInfra = require("../SeleniumInfraOron")
const seleniumInfra = new SeleniumInfra()

class Store {

    constructor(URL) {
        seleniumInfra.getURL(URL)
    }

    async checkCurrentDay() {
        let nameOfDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let time = new Date()
        let day = nameOfDays[time.getDay()]

        let boldDay = await seleniumInfra.findElementByList("className", "today")
        await console.log(boldDay)
        for (let d of boldDay) {
            let weightOfDay=await d.getCssValue("font-weight")
            // console.log(temp)
            let today = await seleniumInfra.getTextFromElement(null,null,d)
            if (weightOfDay== 700 && day==today)
            return console.log(`it's ok, ${day}  is bold!!!!!!!!!!!!!!`)
            // else{
            //     console.log(`the other day is not bold`)
            // }

        
            
            
        }

        
        
    }

     
}



async function test() {

    let Check = await new Store("https://cakes-automation-course.herokuapp.com/store.html")

    await Check.checkCurrentDay()
    

}


test()