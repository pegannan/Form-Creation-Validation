async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

   const dataContainer = document.getElementById("api-data")

   try{
    const response = await fetchUserData((apiUrl) => {
        const users = await.response.json()})
        array.forEach(element => {
            <li>user's name</li>
        });;

        dataContainer.innerHTML = ''

        const userList = <ul><li></li></ul>

    catch{
        dataContainer.innerHTML = 'Failed to load user data.'
    }
   };
}

document.addeventlistener("DOMContentLoaded", (event) => callback(fetchUserData))