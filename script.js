const candies = [
    {
        name: "Lishchina",
        image: "imgs/Lischina.webp",
        descriptionUrl: "https://www.marvelfoods.com/products/roshen-leschina-candies-1kg",
        ingredients: "Sugar, vegetable oils (palm, palm kernel, shea), cocoa mass (solids and paste), fat-reduced cocoa powder, roasted hazelnuts, skimmed milk powder, roasted almonds, cocoa butter, soy lecithin (emulsifier), polyglycerol polyricinoleate (emulsifier), artificial vanilla flavoring, chocolate coating (sugar, cocoa mass (solids and paste), cocoa butter, shea oil, soy lecithin (emulsifier), polyglycerol polyricinoleate, artificial vanilla flavoring). <b>Contains soy, tree nuts (hazelnut and almond), milk. May contain peanuts, sesame seed, egg, gluten (wheat).</b>",
        nutrition: "Approx. 520 kcal per 100g. Contains milk, nuts.",
        nutritionImage: "imgs/nutrition/LischinaNutrition.webp",
        summary: "Milk chocolate candy with roasted hazelnut and almond filling."
    },
    {
        name: "Crabs",
        image: "imgs/Crabs.webp",
        descriptionUrl: "https://www.marvelfoods.com/products/roshen-crabs-candies-1kg",
        ingredients: "Candy shell: glucose syrup, sugar, artificial vanilla flavoring, colored with vegetable juice and paprika, Filling: sugar, roasted grated peanuts, cocoa mass, non-hydrogenated palm oil, artificial flavorings (Vanilla, Peanuts), soy lecithin. <b>Contains peanuts and soy. May contain</b> wheat, milk, eggs, hazelnuts, almonds, sesame.",
        nutrition: "Approx. 390 kcal per 100g. Contains gelatin.",
        nutritionImage: "imgs/nutrition/CrabsNutrition.webp",
        summary: "Crunchy candies with Cocoa-Peanut filling."
    },
    {
        name: "Duchess Pear",
        image: "imgs/Pear.webp",
        descriptionUrl: "https://www.marvelfoods.com/products/roshen-caramel-duchess-candies-1kg",
        ingredients: "Glucose syrup, sugar, lactic acid (acidity regulator), artificial duchess pear flavoring, curcumin (color), indigo carmine (color). <b>May contain</b> milk and soy.",
        nutrition: "Approx. 460 kcal per 100g. Contains milk.",
        nutritionImage: "imgs/nutrition/PearNutrition.webp",
        summary: "Pear flavored hard candy. A sister candy of Berberis."
    },
    {
        name: "Berberis",
        image: "imgs/Karamelkino.webp",
        descriptionUrl: "https://www.marvelfoods.com/products/roshen-karamelkino-hard-candy-1kg",
        ingredients: "Glucose syrup, sugar, lactic acid (acidity regulator), citric acid (acidity regulator), artificial Barberry flavoring, artificial Vanilla flavoring, black carrot (color), paprika extract (color). <b>May contain</b> milk and soy.",
        nutritionImage: "imgs/nutrition/KaramelkinoNutrition.webp",
        summary: '<a href="https://en.wikipedia.org/wiki/Berberis" target="_blank" rel="noopener noreferrer">Barberry (aka Berberis)</a> flavoured hard candy. A sister candy of Duchess.'
    },
    {
        name: "Korovka",
        image: "imgs/Korovka_Milk.webp",
        descriptionUrl: "https://www.marvelfoods.com/products/roshen-korovka-candy-1kg",
        ingredients: "Sugar, sweetened condensed composite milk product (skimmed condensed milk (44%), sugar, non-hydrogenated palm oil, lactose), glucose syrup, sweet cream butter, flavoring (vanillin). <b>Contains milk. May contain</b> wheat, eggs, soy, hazelnuts, almonds, peanuts, sesame.",
        nutritionImage: "imgs/nutrition/MilkyNutrition.webp",
        summary: "Sweetened condensed milk in a slightly hardened sweet cream butter. Very sweet."
    },
    {
        name: "Konafetto Bianco",
        image: "imgs/Konafetto_Bianco.webp",
        descriptionUrl: "https://www.marvelfoods.com/products/roshen-rolled-wafer-candy-1kg",
        ingredients: "Sugar, vegetable oils (palm, sunflower, shea), coconut oil, wheat flour, cocoa mass, whey permeate powder (milk), skimmed milk powder, cocoa powder, butter, cream milk powder, soy lecithin (emulsifier), ammonium bicarbonate and sodium bicarbonate (leavening), corn starch, salt, artificial flavoring. <b>Contains: Milk, Soy, Wheat. May contain:</b> almonds, eggs, hazelnuts, peanuts, and sesame.",
        nutritionImage: "imgs/nutrition/KonafettoNutrition.webp",
        summary: "Glazed crispy wafers with soft creamy filling."
    },
    {
        name: "Crazy Bee",
        image: "imgs/Crazy_Bee.webp",
        descriptionUrl: "https://www.marvelfoods.com/products/roshen-crazy-bee-frutty-jelly-candy-2-2-lbs-1-kg",
        ingredients: "Glucose syrup, sugar, Sorbitol syrup, Carrageenan, Acidity regulators (lactic acid, citric acid, trisodium citrate), Modified corn starch, Artificial flavors (orange, lemon lime, strawberry, cherry, wild berry), Glazing agent (beeswax), Concentrated apple juice, Colors (anthocyanins, paprika extract, beta-carotene, turmeric extract, Black Blue No.1). <b>May contain</b> egg products, milk products, hazelnuts, almonds, peanuts, sesame seeds.",
        nutritionImage: "imgs/nutrition/CrazyBeeNutrition.webp",
        summary: "Soft gummies with different fruit flavored jelly fillings."
    },
    {
        name: "Romashka Vanilla & Rum",
        image: "imgs/Romashka.webp",
        descriptionUrl: "https://www.marvelfoods.com/products/roshen-romashka-chocolate-candy-1kilogram",
        ingredients: "Sugar, sweetened condensed composite product (condensed skimmed milk, sugar, palm oil, lactose), cocoa mass, glucose syrup, vegetable oils (palm, shea), fat reduced cocoa powder, cocoa butter, brandy, emulsifiers (soy lecithin, polyglycerol polyricinoleate), artificial flavorings (vanilla, rum), preservative (potassium sorbate). <b>Contains milk and soy. May contain</b> wheat, eggs, hazelnuts, almonds, peanuts, and sesame.",
        nutrition: "Serving size 2 pieces (27g)<br>Calories 120<br>Total Fat 4g 5%<br>Saturated Fat 2.5g 12%<br>Trans Fat 0g<br>Cholesterol 0mg 0%<br>Sodium 10mg 0%<br>Total Carb. 20g 7%<br>Dietary Fiber &lt;1g 2%<br>Total Sugars 18g<br>Incl. 17g Added Sugars 34%<br>Protein &lt;1g 2%<br>Vit. D 0mcg 0%<br>Calcium 26mg 2%<br>Iron 2mg 8%<br>",
        summary: 'Cocoa-forward, vanilla and rum flavored candy. "A timeless choice"'
    },
    {
        name: "Kara Kum",
        image: "imgs/Kara_Kum.webp",
        descriptionUrl: "https://www.marvelfoods.com/products/roshen-kara-kum-candies-1kg",
        ingredients: "Sugar, vegetable oils (palm, shea, palm kernel, sunflower), cocoa mass (solids and paste), wheat flour, fat-reduced cocoa powder, roasted almonds, roasted hazelnuts, cocoa butter, soy lecithin (emulsifier), polyglycerol polyricinoleate (emulsifier), artificial vanilla flavoring, skimmed milk powder, leavening agents ( sodium hydrogen carbonate, ammonium hydrogen carbonate), salt, chocolate coating (sugar, cocoa mass (solids and paste), cocoa butter, shea oil, soy lecithin (emulsifier), polyglycerol polyricinoleate, artificial vanilla flavoring). <b>Contains tree nuts (hazelnuts and almonds), soy, milk, gluten (wheat). May contain:</b> peanuts, sesame seeds, egg.",
        nutrition: "Approx. 510 kcal per 100g. Contains milk.",
        nutritionImage: "imgs/nutrition/Kara-KumNutrition.webp",
        summary: 'Chocolate glazed candies with waffle crumbs and praline filling. <a href="https://www.cabinet.ox.ac.uk/kara-kum-sweets-central-asia" target="_blank" rel="noopener noreferrer">History</a>'
    },
    {
        name: "Krasnyi Mak",
        image: "imgs/Krasnyi_Mak.webp",
        descriptionUrl: "https://www.marvelfoods.com/products/roshen-krasnyi-mak-candies-1kg",
        ingredients: "Sugar, Chocolate Glaze 27% (Sugar, Cocoa Mass, Cocoa Butter, Shea Butter, Palm oil), Emulsifiers (soy lecithin, polyglycerol), vanilla flavor, vegetable oils (palm, shea, palm kernel), wheat flour, low-fat-cocoa powder, roasted grated hazelnuts, roasted grated almonds, raising agents (sodium hydrogen carbonate, ammonium hydrogen carbonate), artificial flavoring (vanilla), salt, sunflower oil. <b>Contains soy, wheat, milk, hazelnuts, almonds. May contain</b> eggs, peanuts, sesame.",
        nutrition: "Approx. 490 kcal per 100g. Contains wheat and milk.",
        nutritionImage: "imgs/nutrition/KrasnyiMakNutrition.webp",
        summary: 'Chocolate-coated sweets with roasted hazelnuts and almonds. Means "Red Poppy Seed".'
    },
    {
        name: "Royal Sharm Hazelnut Cream",
        image: "imgs/Royal_Sharm_Nut_Cream.webp",
        descriptionUrl: "https://novus.zakaz.ua/en/products/tsukerka-avk-ukrayina--novus02855420000000/",
        ingredients: "Milk chocolate 36.2% (sugar, cocoa butter, skim milk powder, grated cocoa, cocoa butter equivalent (palm, shea), milk fat, cocoa powder with reduced fat content, emulsifier soy lecithin, vanillin flavor), vegetable fat (palm, sunflower), sugar, molasses, dry whey, wafers (wheat flour, sugar, corn starch, low-fat cocoa powder), salt, soy lecithin emulsifier, baking soda, flavoring vanillin, potato starch, roasted grated hazelnut 4%. <b> Contains soy, milk, wheat May contain</b> traces of peanuts, nuts and eggs",
        nutrition: "Per 100g:<br>Calories - 574.00kcal<br>Proteins - 5.80g<br>Fats - 39.00g<br>Carbohydrates - 50.00g",
        summary: "Candies with delicate nut cream in a crispy wafer, covered with milk chocolate glaze. Hazelnut filling."
    },
    {
        name: "Royal Sharm Butter Cream",
        image: "imgs/Royal_Sharm_Butter_Cream.webp",
        descriptionUrl: "https://novus.zakaz.ua/en/products/tsukerka-avk-ukrayina--novus02855422000000/",
        ingredients: "Milk chocolate 36.2% (sugar, cocoa butter, skimmed milk powder, cocoa mass, cocoa butter equivalent (palm, shea), milk fat, cocoa powder with reduced fat content, soy lecithin emulsifier, vanillin flavor), vegetable fat (palm, sunflower), sugar, molasses, wafers (wheat flour, sugar, corn starch, cocoa powder with reduced fat content, salt, soy lecithin emulsifier, baking soda, flavoring vanillin, potato starch), whole milk powder 4.8%, dry whey, powdered cream 0.8%, vanillin flavor. <b>Contains soy, milk, wheat. May contain</b> traces of peanuts, nuts and eggs.",
        nutrition: "Per 100g:<br>Calories - 574.00kcal<br>Proteins - 4.40g<br>Fats - 38.00g<br>Carbohydrates - 53.00g",
        summary: "Candies with delicate nut cream in a crispy wafer, covered with milk chocolate glaze. Butter cream filling."
    }
];

const cardsContainer = document.getElementById("cardsContainer");
const searchInput = document.getElementById("searchInput");
const searchInfo = document.getElementById("searchInfo");
const detailModal = document.getElementById("detailModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalContent = document.getElementById("modalContent");

function createCard(candy, index) {
    const card = document.createElement("article");
    card.className = "candy-card";
    card.innerHTML = `
    <img src="${candy.image}" alt="${candy.name} candy image" />
    <div class="card-content">
      <div>
        <h2 class="card-title">${candy.name}</h2>
      </div>
      <div class="card-section">
        <p>${candy.summary}</p>
      </div>
      <div class="card-action">
        <button type="button" class="details-button" data-candy-index="${index}">View details</button>
        <a href="${candy.descriptionUrl}" target="_blank" rel="noopener noreferrer">Full description</a>
      </div>
    </div>
  `;
    return card;
}

function updateSearchInfo(filteredCount, totalCount) {
    const label = filteredCount === totalCount ? "candies available" : "candies found";
    searchInfo.textContent = `${filteredCount} ${label} of ${totalCount}`;
}

function renderCandies(items) {
    cardsContainer.innerHTML = "";

    if (items.length === 0) {
        const emptyMessage = document.createElement("div");
        emptyMessage.className = "no-results";
        emptyMessage.textContent = "No candy matches your search. Try a different keyword.";
        cardsContainer.appendChild(emptyMessage);
        return;
    }

    items.forEach((candy, index) => {
        cardsContainer.appendChild(createCard(candy, index));
    });
}

function openModal(candy) {
    const nutritionHtml = candy.nutritionImage
        ? `<img class="nutrition-image" src="${candy.nutritionImage}" alt="Nutrition facts for ${candy.name}" />`
        : `<p>${candy.nutrition}</p>`;

    modalContent.innerHTML = `
    <div class="modal-detail">
      <img src="${candy.image}" alt="${candy.name} image" class="modal-detail-image" />
      <div class="modal-detail-copy">
        <h2>${candy.name}</h2>
        <div class="modal-section">
          <strong>Ingredients</strong>
          <p>${candy.ingredients}</p>
        </div>
        <div class="modal-section">
          <strong>Nutrition facts</strong>
          ${nutritionHtml}
        </div>
        <a class="modal-full-link" href="${candy.descriptionUrl}" target="_blank" rel="noopener noreferrer">Open full description</a>
      </div>
    </div>
  `;

    detailModal.classList.remove("hidden");
    detailModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    detailModal.classList.add("hidden");
    detailModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    modalContent.innerHTML = "";
}

function handleCardClick(event) {
    const button = event.target.closest(".details-button");
    if (!button) return;

    const index = Number(button.dataset.candyIndex);
    openModal(candies[index]);
}

function filterCandies() {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        updateSearchInfo(candies.length, candies.length);
        renderCandies(candies);
        return;
    }

    const filtered = candies.filter((candy) => {
        return [candy.name, candy.ingredients, candy.descriptionUrl]
            .some((field) => field.toLowerCase().includes(query));
    });

    updateSearchInfo(filtered.length, candies.length);
    renderCandies(filtered);
}

cardsContainer.addEventListener("click", handleCardClick);
modalCloseBtn.addEventListener("click", closeModal);
detailModal.addEventListener("click", (event) => {
    if (event.target === detailModal) {
        closeModal();
    }
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !detailModal.classList.contains("hidden")) {
        closeModal();
    }
});

searchInput.addEventListener("input", filterCandies);
renderCandies(candies);
updateSearchInfo(candies.length, candies.length);
