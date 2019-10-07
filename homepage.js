const SeleniumInfra = require("./SeleniumInfraOron")
const seleniumInfra = new SeleniumInfra()


class Hompage {
    constructor(URL) {
        seleniumInfra.getURL(URL)
    }

///////////////////////////////////////////////////////////////////////////////////////

    async search(input) {
        try {
            await seleniumInfra.write(input, "id", "inputSearch")
            await seleniumInfra.clickElement("id", "inputSearchSubmit")
      

           // only the page name need in URlvalidation
           let isUrlValid = await seleniumInfra.URLvalidation(input.toLowerCase())

           if(isUrlValid){
            console.log('we got the new Url' + input+ 'page')
            return true
           }
           else{
            console.log( 'fail: the new Url' + input + 'page not opened!!!' )
            return false
           }
        }
        catch (error) {
            console.error(' got an error in search  func ,The eror is :' + error)
        }
    }
/////////////////////////////////////////////////////////////////////////////////////////////

    async Advsearch(typeArr, ratingArr, date, string1, string2) {
        try {

         await seleniumInfra.clickElement("id","myBtn")
            // pressing the button
            for (let i in typeArr) {
                if (typeArr[i] == "Chocolate") {
                    seleniumInfra.clickElement("xpath", "//*[@id='modalBodyFormId']/div[1]/input[1]")

                 //lior example of value:
                    //*input[@value="Chocolate"]

                } else if (typeArr[i] == "Cheese") {
                    seleniumInfra.clickElement("xpath", "//*[@id='modalBodyFormId']/div[1]/input[2]")
                } else if (typeArr[i] == "Mousse") {
                    seleniumInfra.clickElement("xpath", "//*[@id='modalBodyFormId']/div[1]/input[3]")
                }
                else {
                    console.log("there is problem with tpye arr")
                }


            for (let j in ratingArr) {
                    if (ratingArr[j] == "0-3") {
                        seleniumInfra.clickElement("xpath","//*[@id='modalBodyFormId']/div[2]/input[1]")


                    } else if (ratingArr[j] == "4") {

                        seleniumInfra.clickElement("xpath","//*[@id='modalBodyFormId']/div[2]/input[2]")


                    } else if (ratingArr[j] == "5")

                     {
                        seleniumInfra.clickElement("xpath","//*[@id='modalBodyFormId']/div[2]/input[3]")


                    } else {
                        console.log("there is problem with rating arr")
                    }

                     
                }
  
            }
            await seleniumInfra.write(date,"xpath","//*[@id='modalBodyFormId']/div[3]/input")
            await seleniumInfra.write(string1,"xpath","//*[@id='input1']")
            await seleniumInfra.write(string2,"xpath","//*[@id='input2']")
            await seleniumInfra.clickElement("id","myBtnForm")
            
        }
        catch (error) {
            console.error("there is problem with " + Advsearch)
         }
        

    }
}










async function Try() {

    let tests = await new Hompage("https://cakes-automation-course.herokuapp.com/index.html")
    // await testHome.search("about")

    let typeArr = ["Chocolate","Cheese","Mousse"]
    let ratingArr = [ "0-3","4", "5"]


    await tests.Advsearch(typeArr,ratingArr,"14091990","I am the King","in my dreams")



}

Try()
