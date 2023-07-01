const button = document.querySelector('.button')

const clickHandler = async () => {
    try {
        const res = await fetch('https://reqres.in/api/users')
        const data = await res.json()
        console.log(data.data[3].first_name)
    } catch (error) {
        console.log(error)
    }
    

    /*fetch('https://reqres.in/api/users')
        .then(res => {
            if (!res.ok) {
                console.log('Problem')
                return
            }
            return res.json()
        })*/
}

button.addEventListener('click', clickHandler)