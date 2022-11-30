import React from "react";

export class Content extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick (element) {
        element.target.style.backgroundColor = "#" + this.getRandomColor();
        element.target.style.color = "#" + this.getRandomColor();
    }

    getRandomColor() {
        return Math.floor(Math.random() * 16777215).toString(16);
    }

    render() {
        return (
            <div>
                <p>Місце народження: м.Київ, 02.12.2002</p>
                <p onClick={this.onClick}>Освіта<br/>Школа: Димерська ЗОШ №1, смт. Димер;<br/>Університет: НТУУ КПІ, м.Київ </p>
                <p onClick={this.onClick}>Хоббі:</p>
                <ul>
                    <li>Музика</li>
                    <li>Комп`ютерні ігри</li>
                    <li>Образотворче мистецтво</li>
                    <li>Подорожі</li>
                </ul>

                <p>Улюблені фільми:</p>
                <ol>
                    <li>Втеча з Шоушенка (The Shawshank Redemption), 1994</li>
                    <li>Форрест Ґамп (Forrest Gump), 1994</li>
                    <li>Психo (Psycho), 1960</li>
                </ol>
                <p>Цю́рих (нім. Zürich, фр. Zurich, італ. Zurigo, лат. Turicum) — місто на північному сході Швейцарії, розташоване на березі Цюрихського озера біля його північно-західного краю.
                    <br/> Місто простягається між двома лісистими пасмами пагорбів, приблизно за 60 км від північних передгір'їв Альп. Столиця німецькомовного кантону Цюрих.
                    <br/> Найбільше за чисельністю населення місто країни — агломерація налічує близько 1,83 мільйонів людей.</p>

            </div>
        );
    }
}