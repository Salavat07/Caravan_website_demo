(() => {
  const grid = document.getElementById('newsGrid');
  if (!grid) return;
  let currentLang = localStorage.getItem('lang') || 'ru';
  let itemsCache = [];
  const emptyMessages = {
    ru: 'Пока нет публикаций.',
    en: 'No posts yet.',
    zh: '暂无发布内容。'
  };

  const getDateLocale = () => (currentLang === 'en' ? 'en-US' : currentLang === 'zh' ? 'zh-CN' : 'ru-RU');

  const getLocalizedField = (item, field) => {
    if (currentLang === 'en' && item[`${field}_en`]) return item[`${field}_en`];
    if (currentLang === 'zh' && item[`${field}_zh`]) return item[`${field}_zh`];
    return item[field] || '';
  };

  const formatDate = (value) => {
    if (!value) return '';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString(getDateLocale(), {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    });
  };

  const renderCards = (items) => {
    grid.innerHTML = items.map((item) => {
      const title = getLocalizedField(item, 'title');
      const excerpt = getLocalizedField(item, 'excerpt');
      const tag = item.tag ? `<span class=\"news-card__tag\">${item.tag}</span>` : '';
      const date = item.date ? `<time class=\"news-card__date\" datetime=\"${item.date}\">${formatDate(item.date)}</time>` : '';
      const meta = tag || date ? `<div class=\"news-card__meta\">${tag}${date}</div>` : '';
      return `
        <article class="news-card" data-id="${item.id || ''}">
          <div class="news-card__media">
            <img src="${item.image}" alt="${title}">
          </div>
          <div class="news-card__body">
            ${meta}
            <h3 class="news-card__title">${title}</h3>
            <p class="news-card__excerpt">${excerpt}</p>
          </div>
        </article>
      `;
    }).join('');
  };

  fetch('data/news.json')
    .then((response) => response.json())
    .then((items) => {
      itemsCache = [...items].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
      renderCards(itemsCache);
    })
    .catch(() => {
      grid.innerHTML = `<p class="news-empty">${emptyMessages[currentLang] || emptyMessages.ru}</p>`;
    });

  window.addEventListener('caravan:languagechange', (event) => {
    currentLang = event.detail?.lang || 'ru';
    if (itemsCache.length) {
      renderCards(itemsCache);
    }
  });
})();
