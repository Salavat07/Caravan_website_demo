(() => {
  const grid = document.getElementById('newsGrid');
  if (!grid) return;

  const formatDate = (value) => {
    if (!value) return '';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    });
  };

  const renderCards = (items) => {
    grid.innerHTML = items.map((item) => {
      const tag = item.tag ? `<span class=\"news-card__tag\">${item.tag}</span>` : '';
      const date = item.date ? `<time class=\"news-card__date\" datetime=\"${item.date}\">${formatDate(item.date)}</time>` : '';
      const meta = tag || date ? `<div class=\"news-card__meta\">${tag}${date}</div>` : '';
      return `
        <article class="news-card" data-id="${item.id || ''}">
          <div class="news-card__media">
            <img src="${item.image}" alt="${item.title}">
          </div>
          <div class="news-card__body">
            ${meta}
            <h3 class="news-card__title">${item.title}</h3>
            <p class="news-card__excerpt">${item.excerpt}</p>
          </div>
        </article>
      `;
    }).join('');
  };

  fetch('data/news.json')
    .then((response) => response.json())
    .then((items) => {
      const sorted = [...items].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
      renderCards(sorted);
    })
    .catch(() => {
      grid.innerHTML = '<p class="news-empty">Пока нет публикаций.</p>';
    });
})();
