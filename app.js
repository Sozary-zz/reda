const container = document.querySelector(".container");

function createCard() {
  container.innerHTML = recipes
    .map(
      (recette) =>
        `
        <div class="card mx-2" style="width: 32%; ">
            <div class="card-img"></div>
            <div class="card-body" >
            <header class="card-title">
                <h2> ${recette.name} </h2>
                <span><i class="fas fa-clock" ></i> ${recette.time} min</span>
            </header>
                <div class="card-ingredient " >
                    ${recette.ingredients
                      .map(
                        (element) =>
                          `<div><span><b>${element.ingredient} </b></span>
                         <span>${
                           "quantity" in element ? ": " + element.quantity : ""
                         } </span>
                         <span>${
                           "quantite" in element ? ": " + element.quantite : ""
                         } </span>
                         <span>${"unit" in element ? element.unit : ""}</span>
                         </div>`
                      )
                      .join("")}
                </div>
                <div class="card-text" >
                    <span>${recette.description}</span>
                </div>        
            </div>
        </div>
        `
    )
    .join("");
}
createCard();
