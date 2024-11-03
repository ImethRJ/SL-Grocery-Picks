document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.querySelector('.cart-items');
  const totalElement = document.querySelector('.cart-summary p');
  let total = 0;

  // Function to parse price from the product's price text
  function parsePrice(priceText) {
      // Extract numbers and decimals using regex
      const cleanedPrice = priceText.match(/[\d\.]+/g); // Match only numbers and decimal points
      return cleanedPrice ? parseFloat(cleanedPrice[0]) : 0;
  }

  // Handle add-to-cart button
  document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', (event) => {
          const productCard = event.target.closest('.product-card');
          const productName = productCard.querySelector('h4').textContent;
          const productPriceText = productCard.querySelector('p').textContent;
          const productPrice = parsePrice(productPriceText);

          // Create cart item element
          const cartItem = document.createElement('div');
          cartItem.classList.add('cart-item');
          cartItem.textContent = `${productName} - Rs. ${productPrice.toFixed(2)}`;
          cartItemsContainer.appendChild(cartItem);

          // Update total
          total += productPrice;
          totalElement.textContent = `Total: Rs. ${total.toFixed(2)}`;
      });
  });
});
