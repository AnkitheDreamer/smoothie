
// Refresh page when clicking "Dreamer Cafe"
document.getElementById("refreshPage").addEventListener("click", () => {
  location.reload();
});

// Smoothie class
class Smoothie {
  constructor(name, base, fruits, sweetness, topping) {
      this.name = name;
      this.base = base;
      this.fruits = fruits;
      this.sweetness = sweetness;
      this.topping = topping;
  }

  getDescription() {
      return `
          <h3>Smoothie Details</h3>
          <p><strong>Name:</strong> ${this.name}</p>
          <p><strong>Base:</strong> ${this.base}</p>
          <p><strong>Fruits:</strong> ${this.fruits.join(', ')}</p>
          <p><strong>Sweetness:</strong> ${this.sweetness}</p>
          <p><strong>Topping:</strong> ${this.topping}</p>
      `;
  }
}

// Calculate price
function calculatePrice(fruits, topping) {
  const basePrice = 5; // $5 for base
  const fruitPrice = fruits.length * 2; // $2 per fruit
  const toppingPrice = topping === "None" ? 0 : 1; // $1 for toppings
  return basePrice + fruitPrice + toppingPrice;
}

// Handle smoothie order
document.getElementById('orderBtn').addEventListener('click', () => {
  const name = document.getElementById('customerName').value;
  const base = document.getElementById('base').value;
  const fruits = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(fruit => fruit.value);
  const sweetness = document.querySelector('input[name="sweetness"]:checked').value;
  const topping = document.getElementById('topping').value;

  const smoothie = new Smoothie(name, base, fruits, sweetness, topping);
  const price = calculatePrice(fruits, topping);

  document.getElementById('orderSummary').innerHTML = `
      ${smoothie.getDescription()}
      <p><strong>Total Price:</strong> $${price.toFixed(2)}</p>
  `;
});
