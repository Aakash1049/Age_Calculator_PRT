let date= document.getElementById("date")
let month= document.getElementById("month")
let year= document.getElementById("year")
let result=document.getElementById("result")
function submitHandler(){
    let dateValue=date.value
    let monthValue=month.value
    let yearValue=year.value
    let currentDate= new Date()
    if(isNaN(dateValue) || isNaN(monthValue) || isNaN(yearValue) || dateValue.length===0 || monthValue.length===0 || yearValue.length!==4 || dateValue>31 || monthValue>12 || yearValue> currentDate.getFullYear() || dateValue<=0 || monthValue<=0 || yearValue<=0){
        let error=""
        if(isNaN(dateValue) || dateValue.length===0 || dateValue>31 || dateValue<=0 ){
            error="<span>Please Enter valid data for date field<span><br>"
        }
        if(isNaN(monthValue) || monthValue.length===0 || monthValue>12 || monthValue<=0){
            error=error+"<span>Please Enter valid data for Month field<span><br>"
        }
        if(isNaN(yearValue) || yearValue.length!==4 || yearValue>currentDate.getFullYear()){
            error=error+"<span>Please Enter valid data for Year field<span><br>"
        }
        result.innerHTML=error
        return
    }
    
    
    let dateResult, monthResult, yearResult
    if(currentDate.getMonth() >= monthValue){
        // console.log("1", currentDate.getMonth(), monthValue)

        yearResult= currentDate.getFullYear() - yearValue
        monthResult = currentDate.getMonth() + 1 - monthValue 
        if(currentDate.getDate() < dateValue){
            dateResult=30 - dateValue + currentDate.getDate() 
            monthResult = monthResult - 1
        }
        else{
            dateResult = dateValue - currentDate.getDate()
            // monthResult=monthResult+1
        }
    }  
    else{
        console.log("2", currentDate.getDate())
        yearResult= currentDate.getFullYear() - yearValue -1
        monthResult = 12 - monthValue + currentDate.getMonth() + 1  //2 => 12 - 2 - 12 // 12 - 7 + 2 
        if(currentDate.getDate() < dateValue){
            dateResult=30 - dateValue + currentDate.getDate() 
            monthResult = monthResult - 1
        }
        else{
            dateResult = - dateValue + currentDate.getDate()
        }
    } 
    result.innerHTML = ` <p> Your age is ${yearResult} years ${monthResult} months and ${dateResult} days`
}

