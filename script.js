let result = document.getElementById("result")
        document.querySelector("button").addEventListener('click',()=>

        {
    const getAge = ()=>
    {
        let dob = document.querySelector("#dob").value
        
        let inputDay  = new Date(dob)
        let inputTime = inputDay.getTime()

        let currentDay  = new Date()
        let currentTime = currentDay.getTime()

        let value = currentTime - inputTime

        let sec  =  Math.floor(value/(1000))
        let min  =  Math.floor(value/(1000*60))
        let hrs  =  Math.floor(value/(1000*60*60))
        let day  =  Math.floor(value/(1000*60*60*24))
        let week =  Math.floor(value/(1000*60*60*24*7))
        let mon  =  Math.floor(value/(1000*60*60*24*30.4375))
        let yrs  =  Math.floor(value/(1000*60*60*24*365.25))

    function insert(x,y)
    {
        document.querySelector(x).innerHTML=y
    }

    insert("#year",yrs+" years")
    insert("#month",mon%12+" months")
    insert("#week",week%4+" weeks")
    insert("#day",day%7+" days")
    insert("#hour",hrs%24+" hours")
    insert("#min",min%60+" minutes")
    insert("#sec",sec%60+" seconds")
}

   setInterval(getAge,500)  
})