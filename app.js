import products from './products.json'

const body = document.querySelector('body');
const app = document.getElementById('app');
const app1 = document.getElementById('app1');
const h1 = document.createElement('h1');
const ul = document.createElement('ul');

body.style =`
    width: 100%;
`

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
console.log(products.data);

app1.appendChild(ul);

for (let key in products.data){
    app1.firstChild.innerHTML += `
    <li>
        ${products.data[key].name} - ${products.data[key].price}
    </li>`
}

    
