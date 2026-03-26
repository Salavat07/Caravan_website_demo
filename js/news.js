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
    const fragment = document.createDocumentFragment();

    items.forEach((item) => {
      const title = getLocalizedField(item, 'title');
      const excerpt = getLocalizedField(item, 'excerpt');

      const article = document.createElement('article');
      article.className = 'news-card';
      article.dataset.id = item.id || '';

      const media = document.createElement('div');
      media.className = 'news-card__media';

      const image = document.createElement('img');
      image.src = item.image || '';
      image.alt = title;
      image.loading = 'lazy';
      image.decoding = 'async';
      media.appendChild(image);

      const body = document.createElement('div');
      body.className = 'news-card__body';

      if (item.tag || item.date) {
        const meta = document.createElement('div');
        meta.className = 'news-card__meta';

        if (item.tag) {
          const tag = document.createElement('span');
          tag.className = 'news-card__tag';
          tag.textContent = item.tag;
          meta.appendChild(tag);
        }

        if (item.date) {
          const date = document.createElement('time');
          date.className = 'news-card__date';
          date.dateTime = item.date;
          date.textContent = formatDate(item.date);
          meta.appendChild(date);
        }

        body.appendChild(meta);
      }

      const heading = document.createElement('h3');
      heading.className = 'news-card__title';
      heading.textContent = title;

      const text = document.createElement('p');
      text.className = 'news-card__excerpt';
      text.textContent = excerpt;

      body.append(heading, text);
      article.append(media, body);
      fragment.appendChild(article);
    });

    grid.replaceChildren(fragment);
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
