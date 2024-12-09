const ConsomationAPI=async()=>{
    try {
        // const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Tunis,tn&APPID=584b4a7a31e71c8645f53d22222a0184')
        // const data = await res.json()

        const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Tunis,tn&APPID=584b4a7a31e71c8645f53d22222a0184')
        const data = res.data





        console.log(data.main.temp)
        var tempSpan = document.getElementById('temp')
        tempSpan.innerText = Math.round(data.main.temp-273,15)

        var city = document.querySelector('.city')
        city.innerText = data.name

        var currentDate = new Date()
        var currentDay = currentDate.getDate()
        var currentYear = currentDate.getFullYear()


        const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        var currentMonth = months[currentDate.getMonth()]

        var date = document.querySelector('.date')

        date.innerText = `${currentDay} ${currentMonth} ${currentYear}`



    } catch (error) {
        console.log(error)
    }
}

ConsomationAPI()