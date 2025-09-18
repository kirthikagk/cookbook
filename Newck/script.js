// Search bar filtering
const searchInput = document.getElementById('searchInput');
const recipeCards = document.querySelectorAll('.recipe-card');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();

  recipeCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

// Category filter
function filterRecipes(category) {
  recipeCards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    if (category === 'all' || cardCategory === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
