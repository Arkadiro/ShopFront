import products from '../products.json';
import axios from 'axios';
import html from '../index.html';
import css from '../css/style.scss';


//import all imgs
function requireAll(r) { r.keys().forEach(r); }

requireAll(require.context('../assets/products/', true));


//Dom elements
class globalVars{
    constructor(){
        this.url = 'http://localhost:8085/pull';
        this.body = document.querySelector('body');
        this.app = document.getElementById('app');
        this.app1 = document.getElementById('app1');
        this.h1 = document.createElement('h1');
        this.div = document.createElement('div');
        this.auth = document.getElementById('auth');
        this.authmsg = document.getElementById('authmsg');
        this.authmsgok = document.getElementById('authmsgok');
        this.globalName = document.querySelector("#auth input[name='login']");
        this.globalEmail = document.querySelector("#auth input[name='email']")

        this.token = () => JSON.parse(localStorage.getItem('token'));
        this.userName = () => JSON.parse(localStorage.getItem('userName')); 
    }
}
const element = new globalVars();


//Banner Draw
element.app.appendChild(element.h1).innerHTML = 'Magic Shop';
element.app1.appendChild(element.div).classList.add('block');


//Showing product list
for (let key in products.data) {
    element.app1.firstChild.innerHTML += `
    <div class="item">
        <img src="${products.data[key].image}">
        <p>${products.data[key].name}</p>
        <p>${products.data[key].price}</p>
        <button id="${[key]}">Order Now</button>
    </div>
    `;
};

//Global event
const items = element.app1.firstElementChild.children;

Array.prototype.forEach.call(items, item => {
    item.lastElementChild.addEventListener('click', order);
});

element.auth.addEventListener('submit', login)

showalert()

//App functions

function showalert() {
    let token = element.token();
    let userName = element.userName();
    console.log(token);
    if (token !== null) {
        authmsg.style.display = 'none';
        authmsgok.style.display = 'block';
        authmsgok.innerHTML = `
            <p>Hello, ${userName}</p>
            <button id="logout">Logout</button>
            `;
        function logOut(){
            document.getElementById('logout').addEventListener('click', function(){
            localStorage.removeItem('token');
            localStorage.removeItem('userName');
            element.globalName.value = '';
            element.globalEmail.value = '';            
            showalert();
            })
        }
        logOut()

    } else {
        authmsgok.style.display = 'none';
        authmsg.style.display = 'block';
    }
};

function order(el) {
    el.preventDefault();
    const button = el.target.id;
    let userName = {userName: element.userName()};
    const purchase = products.data[button]
    const order = Object.assign({}, purchase, userName)
    
    //const header = "Authorization": 'Bearer' ${token};
    //console.log(token);

    axios({
        url: element.url,
        method: 'post',
        headers: { 'Authorization': `Bearer ${element.token()}` },
        data: order
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            alert('Please login');
        });

};




function login(el) {
    el.preventDefault();
    axios({
        method: 'post',
        url: 'http://localhost:8085/auth',
        data: {
            name: element.globalName.value,
            email: element.globalEmail.value
        }
    })
        .then(function (response) {
            localStorage.setItem('userName', JSON.stringify(response.data.auth['name']))
            localStorage.setItem('token', JSON.stringify(response.data.token))
            showalert();
        })
        .catch(function (error) {
            console.log(error);
        });
};




