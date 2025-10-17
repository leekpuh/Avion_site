import cardData from "./data.json";
import "./styles.css";
import "../../../styles/FlexFonts.css";
import { useEffect, useState } from "react";

const placeholderMinPrice = cardData.reduce((minProd, currentProd) => {
    return currentProd.price < minProd.price ? currentProd : minProd;
});
const placeholderMaxPrice = cardData.reduce((minProd, currentProd) => {
    return currentProd.price > minProd.price ? currentProd : minProd;
});

function PlantPost() {
    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();

    const handleMinPrice = (num) => {
        setMinPrice(parseInt(num.target.value) || "");
    };
    const handleMaxPrice = (num) => {
        setMaxPrice(parseInt(num.target.value) || "");
    };

    const [filteredItems, setFilteredItems] = useState(cardData);
    const [selectedColor, setSelectedColor] = useState([]);
    const [selectedType, setSelectedType] = useState([]);
    const [sortState, setSortState] = useState(false);

    const handleSelectedColor = (color) => {
        let arrayColor = JSON.parse(JSON.stringify(selectedColor));
        let indexColor = arrayColor.indexOf(color);

        if (indexColor === -1) {
            arrayColor.push(color);
        } else {
            arrayColor.splice(indexColor, 1);
        }
        setSelectedColor(arrayColor);
    };

    const handleSelectedType = (type) => {
        let arrayType = JSON.parse(JSON.stringify(selectedType));
        let indexType = arrayType.indexOf(type);

        if (indexType === -1) {
            arrayType.push(type);
        } else {
            arrayType.splice(indexType, 1);
        }
        setSelectedType(arrayType);
    };

    useEffect(() => {
        console.log("use neff");
        let filteredArray = cardData.filter(
            (item) =>
                (selectedType.length === 0 ||
                    selectedType.includes(item.type)) &&
                (selectedColor.length === 0 ||
                    selectedColor.includes(item.color)) &&
                item.price >= (minPrice || 0) &&
                item.price <= (maxPrice || 1000)
        );
        if (
            filteredArray.length === 0 &&
            selectedColor === 0 &&
            selectedType === 0
        ) {
            setFilteredItems(cardData);
        } else {
            if (document.getElementById("order-list").value === "popular") {
            }
            if (document.getElementById("order-list").value === "date") {
                filteredArray.sort(function (a, b) {
                    if (a.arrivalDate < b.arrivalDate) return 1;
                    if (a.arrivalDate > b.arrivalDate) return -1;
                    if (a.arrivalDate === b.arrivalDate) return 0;
                });
            }
            if (document.getElementById("order-list").value === "lowPrice") {
                filteredArray.sort(function (a, b) {
                    if (a.price > b.price) return 1;
                    if (a.price < b.price) return -1;
                    if (a.aprice === b.price) return 0;
                });
            }
            if (document.getElementById("order-list").value === "highPrice") {
                filteredArray.sort(function (a, b) {
                    if (a.price < b.price) return 1;
                    if (a.price > b.price) return -1;
                    if (a.price === b.price) return 0;
                });
            }
           
            setFilteredItems(filteredArray); 
        }
    }, [maxPrice, minPrice, selectedColor, selectedType, sortState]);

    return (
        <div className="container-plantpost">
            <header className="order">
                <select id="order-list" onChange={setSortState}>
                    <option value="popular">Popular first</option>
                    <option value="date">New arrivals first</option>
                    <option value="lowPrice">Low price first</option>
                    <option value="highPrice">High price first</option>
                </select>
            </header>
            <div className="wrapper-filter-card">
                <aside className="filter">
                    <p>Price</p>
                    <input
                        placeholder={"£" + placeholderMinPrice.price}
                        id="min-price-range"
                        value={minPrice}
                        onChange={handleMinPrice}
                    ></input>{" "}
                    -
                    <input
                        placeholder={"£" + placeholderMaxPrice.price}
                        id="max-price-range"
                        value={maxPrice}
                        onChange={handleMaxPrice}
                    ></input>
                    <form className="flex-column">
                        <p>Color</p>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleSelectedColor("Green")}
                            />
                            Green
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleSelectedColor("Red")}
                            />
                            Red
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleSelectedColor("Purple")}
                            />
                            Purple
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleSelectedColor("White")}
                            />
                            White
                        </label>
                    </form>
                    <form className="flex-column">
                        <p>Type</p>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() =>
                                    handleSelectedType("Foliage Plants")
                                }
                            />
                            Foliage Plants
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() =>
                                    handleSelectedType("Succulentus")
                                }
                            />
                            Succulentus
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() =>
                                    handleSelectedType("Flowering Plants")
                                }
                            />
                            Flowering Plants
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleSelectedType("Pines")}
                            />
                            Pines
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleSelectedType("Palms")}
                            />
                            Palms
                        </label>
                    </form>
                </aside>
                <div className="container-cards">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <div className="card" key={item.id}>
                                <img src={item.src} alt={item.name} />
                                <div className="text-proportion">
                                    <p>{item.name}</p>
                                    <p>£{item.price}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No matches found</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PlantPost;
