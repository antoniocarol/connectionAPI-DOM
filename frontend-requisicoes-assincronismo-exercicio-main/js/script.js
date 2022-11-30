let cards = document.querySelectorAll('.card');


function getUser() {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            for (let i = 0; i < cards.length; i++) {
                const name = response.data[i].name;
                const email = response.data[i].email;
                const phone = response.data[i].phone;
                cards[i].children[0].textContent = name;
                cards[i].children[1].textContent = email;
                cards[i].children[2].textContent = phone;
            }
        })
        .catch(error => console.log(error))
}

getUser();

