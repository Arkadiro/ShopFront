import products from '../products.json';
import axios from 'axios';
import css from '../css/style.scss';
import html from '../index.html';


//import all imgs
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('../assets/products/', true));


//Dom elements
const url = 'http://localhost:8085/pull';
const body = document.querySelector('body');
const app = document.getElementById('app');
const app1 = document.getElementById('app1');
const h1 = document.createElement('h1');
const div = document.createElement('div');
const auth = document.getElementById('auth');
const authmsg = document.getElementById('authmsg');
const authmsgok = document.getElementById('authmsgok');

let token = JSON.parse(localStorage.getItem('token'));

//Events
auth.addEventListener('submit', login)


body.style = `
    width: 100%;
`;

app.style = `
    margin: 0;
    padding: 0;
    background-color: #ccc;
    height:300px;
    position: relative;
    boz-sizing: border-box;
`;

h1.style = `
    margin: 0;
    padding: 0;
    background-color: #3c3c3c;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;

    display: block;
    min-width:200px;
    transform: translateY(-50%) translateX(-50%);
`;

app.appendChild(h1).innerHTML = 'Magic Shop';

app1.appendChild(div).classList.add('block');

//Showing product list
for (let key in products.data) {
    app1.firstChild.innerHTML += `
    <div class="item">
        <img src="${products.data[key].image}">
        <p>${products.data[key].name}</p>
        <p>${products.data[key].price}</p>
        <button id="${[key]}">Order Now</button>
    </div>
    `;
};


const items = app1.firstElementChild.children;

Array.prototype.forEach.call(items, item => {
    item.lastElementChild.addEventListener('click', order);
});



showalert()

function order(el) {
    el.preventDefault();
    const button = el.target.id;
    const purchase = products.data[button]
    token = JSON.parse(localStorage.getItem('token'));

    //const header = "Authorization": 'Bearer' ${token};
    //console.log(token);

    axios({
        url,
        method: 'post',
        headers: { 'Authorization': `Bearer ${token}` },
        data: purchase
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            alert('Please login');
        });

};




function login(el) {
    const name = document.querySelector("#auth input[name='login']").value;
    const email = document.querySelector("#auth input[name='email']").value;
    el.preventDefault();
    axios({
        method: 'post',
        url: 'http://localhost:8085/auth',
        data: {
            name: name,
            email: email
        }
    })
        .then(function (response) {
            console.log(response);
            localStorage.setItem('token', JSON.stringify(response.data.token))
            showalert();
        })
        .catch(function (error) {
            console.log(error);
        });
};

function showalert() {
    token = JSON.parse(localStorage.getItem('token'));
    console.log(token);
    if (token !== null) {
        authmsg.style.display = 'none';
        authmsgok.style.display = 'block';

    } else {
        authmsgok.style.display = 'none';
        authmsg.style.display = 'block';
    }
};


