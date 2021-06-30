import "./Price.css";

function Price(): JSX.Element {
    return (
        <div className="Price">
			price: {calcPrice()} $
        </div>
    );
}

function calcPrice():number{
    const ingredientsList = document.querySelectorAll(".custom-ingredients > li");
    let price = 1; // top and bottom bun cost
    ingredientsList.forEach(element => {
        if(element.classList.contains("cheese")){
            price += 1;
        } else if(element.classList.contains("patty")){
            price += 2;
        } else if(element.classList.contains("tomato")){
            price += 0.5;
        } else if(element.classList.contains("salad")){
            price += 0.5;
        }
    });
    return price;
}

export default Price;
