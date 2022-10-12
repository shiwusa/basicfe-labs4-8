window.onload = function init() {
   	const elem3 =  document.getElementById("elem3");
   	const elem4 =  document.querySelector("#elem4");
   	elem3.addEventListener("click", setColorID);
   	elem4.addEventListener("click", setColorSelector);
   	const forPict = document.getElementById("forPict");
};

const randomColor = () => {
	const newColor= Math.floor(Math.random()*16777215).toString(16);
	return newColor;
}

const setColorID = () => {
  elem3.style.color = "#" + randomColor();
  elem3.style.backgroundColor = "#" + randomColor();
}

const setColorSelector = () => {
  elem4.style.color = "#" + randomColor();
  elem4.style.backgroundColor = "#" + randomColor();
}

const addPict = () => {
	const image = document.getElementById("newImg");
	if(!image) {
	let image = document.createElement("img");
        image.src = "https://3.bp.blogspot.com/-43ylXt8LDAY/WBCp6ATvNrI/AAAAAAAAAzE/-zL0wcAijKU0NWXYpWzfenwP2Kf0TN_hACLcB/s1600/article258508_2.jpg";
        image.alt = "thank u";
        image.id = "newImg";
        forPict.append(image);
    }
}

const zoomIn = () => {
	const img = document.getElementById("newImg");
	if (img) {
	let currHeight = img.clientHeight;
	img.style.height = (currHeight + 20) + "px"
	}
}

const zoomOut = () => {
	const img = document.getElementById("newImg");
	if (img) {
	let currHeight = img.clientHeight;
	img.style.height = (currHeight - 20) + "px"
	}
}

const deletePict = () => {
	const img = document.getElementById("newImg")
	if(img) {
		img.remove();
	}
}
