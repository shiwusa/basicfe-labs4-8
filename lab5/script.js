window.onload = function init() {
	const form = document.getElementById('form');
    const color = document.getElementById('color');
   	form.addEventListener('change', onFormChange);
	form.addEventListener('submit', onFormSubmit);
    createTable();
    const td2 = document.getElementById('td2');
    td2.addEventListener('mouseover', () => elemChangeColorRandom(td2));
    td2.addEventListener('click', () => elemChangeColor(td2));
    td2.addEventListener('dblclick', () => changeColor(td2));
};

const formData = {
	name: '',
    variant: '',
    phone: '',
    faculty: '',
    address: '',
    isValid: false
};

const nameRegex = (name) => 
	/^[А-Яа-яІіЇї]{3,} [А-Яа-яІіЇї]\.[А-Яа-яІіЇї]\.$/.test(name);

const variantRegex = (variant) =>
    /^\d{2}$/.test(variant);

const phoneRegex = (phone) =>
    /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/.test(phone);   

const facultyRegex = (faculty) =>
    /^[А-ЯІіЇї]{4}$/.test(faculty);     

const addressRegex = (address) =>
	/^м.\s\d{6}$/.test(address);


const onFormChange = (e) => {
    formData[e.target.id] = e.target.value;
    if(e.target.classList.contains("invalid")){
        e.target.classList.remove("invalid");
        e.target.classList.add("valid");
    }
    if (!nameRegex(e.target.value) 
        && !variantRegex(e.target.value) 
        && !phoneRegex(e.target.value) 
        && !facultyRegex(e.target.value)
        && !addressRegex(e.target.value)) {
            if(!e.target.classList.contains("invalid") && e.target.classList.contains("valid")){
                e.target.classList.add("invalid");
                e.target.classList.remove("valid");
            }
            e.target.nextElementSibling.style.display = 'inline';
            formData.isValid = false;
    } else {
            if(!e.target.classList.contains("valid") && e.target.classList.contains("invalid")){
                e.target.classList.add("valid");
                e.target.classList.remove("invalid");
            }
            e.target.nextElementSibling.style.display = 'none';   
            formData.isValid = true;
    }
};

const onFormSubmit = (e) => {
    e.preventDefault();
    if(formData.isValid === false){
    	alert("Неправильно заповнена форма");
        return;
    }
    let newWin = window.open('about:blank', 'data', 'width=300,height=200');
    newWin.document.write(`
    ПІБ: ${ formData.name } <br>
    Варіант: ${ formData.variant } <br>
    Телефон: ${ formData.phone } <br>
    Факультет: ${ formData.faculty } <br>
    Адреса: ${ formData.address }
    `);
}

const createTable = () => {
    const tbody = document.createElement('tbody');
    const table = document.getElementById('table');
    for (let i = 0; i < 6; i++) {
      const tr = document.createElement('tr');
      tr.id = 'tr' + (i + 1);
  
      for (let j = 0; j < 6; j++) {
        const n = i * 6 + j + 1;
        const td = document.createElement('td');
        td.innerHTML = n;
        td.id = 'td' + n;
  
        tr.appendChild(td);
      }
  
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
  };
  
const randomColor = () => {
    const color= Math.floor(Math.random()*16777215).toString(16);
    return color;
}

const elemChangeColorRandom = (elem) => {
    let bcolor = randomColor();
    elem.style.backgroundColor = "#" + bcolor;
}

const elemChangeColor = (elem) => {
    elem.style.backgroundColor = color.value;
};

const changeColor = (elem) => {
    let ret = elem.parentElement.id.replace('tr','');
    let rowCount = table.rows.length;
    for (let i = parseInt(ret); i <= rowCount; i += 1){
        for (let j = 1, col; col = table.rows[i-1].cells[j]; j+=6) {
            col.style.backgroundColor = color.value;
        }  
    }
};

