import React from "react";

function Image() {
    function addPict() {
        const image = document.getElementById("newImg");
        const forPict = document.getElementById("forPict");
        if (!image) {
            let image = document.createElement("img");
            image.src = "https://3.bp.blogspot.com/-43ylXt8LDAY/WBCp6ATvNrI/AAAAAAAAAzE/-zL0wcAijKU0NWXYpWzfenwP2Kf0TN_hACLcB/s1600/article258508_2.jpg";
            image.alt = "thank u";
            image.id = "newImg";
            forPict.append(image);
        }
    }

    function zoomIn() {
        const img = document.getElementById("newImg");
        if (img) {
            let currHeight = img.clientHeight;
            img.style.height = (currHeight + 20) + "px"
        }
    }

    function zoomOut() {
        const img = document.getElementById("newImg");
        if (img) {
            let currHeight = img.clientHeight;
            img.style.height = (currHeight - 20) + "px"
        }
    }

    function deletePict() {
        const img = document.getElementById("newImg")
        if (img) {
            img.remove();
        }
    }
        return (
            <div>
                <a href="https://www.zuerich.com/en">
                    <img alt="Beautiful view on the city"
                         src="https://tripmydream.cc/travelhub/travel/blocks/14/9298/block_149298.jpg?v1"
                         height="300"/>
                </a>
                <br/>
                <button onClick={addPict}>Додати</button>
                <button onClick={zoomIn}>Збільшити</button>
                <button onClick={zoomOut}>Зменшити</button>
                <button onClick={deletePict}>Видалити</button>
                <div id="forPict"></div>
            </div>
        );
}

export default Image;