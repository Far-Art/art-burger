import "./Calories.css";

function Calories(): JSX.Element {
    return (
        <div className="Calories">
            Calories: {calcCalories()} kcal
        </div>
    );
}

function calcCalories():number{
    const ingredientsList = document.querySelectorAll(".custom-ingredients > li");
    let calories = 140; // top and bottom bun calories
    ingredientsList.forEach(element => {
        if(element.classList.contains("cheese")){
            calories += 87;
        } else if(element.classList.contains("patty")){
            calories += 295;
        } else if(element.classList.contains("tomato")){
            calories += 15;
        } else if(element.classList.contains("salad")){
            calories += 23;
        }
    });
    return calories;
}

export default Calories;
