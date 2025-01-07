let dataObj = [];

async function fetchRandomUser() {
    const response = await fetch('https://randomuser.me/api/?results=8');
    const data = await response.json();
    dataObj = data;

    displayUser();
}
function displayUser() {
    const datas = dataObj.results;
    const userContainer = document.querySelector('#user-container');
    userContainer.innerHTML = '';
    datas.forEach(({ name: { first, last }, gender, email, picture: { medium }, cell }) => {
        const div = document.createElement('div');
        div.setAttribute("id", "user-card")
        div.innerHTML = `
            <img src="${medium}" alt="...">
            <p><strong>Fullname: ${first} ${last}</strong></p>
            <p>Gender: ${gender}</p>
            <p>Email: ${email}</p>
             <p>Cell#: ${cell}</p>
          
        `
        userContainer.appendChild(div)


    });

}
document.querySelector('#generateRandomUser').addEventListener('click', () => {
    fetchRandomUser();
});
