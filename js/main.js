document.addEventListener('DOMContentLoaded', () => {
  const initMobileNav = () => {
    const header = document.querySelector('header');
    const nav = header?.querySelector('nav');
    if (!header || !nav) return;

    let toggle = header.querySelector('.nav-toggle');
    if (!toggle) {
      toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'nav-toggle';
      toggle.setAttribute('aria-label', 'Открыть меню');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '<span></span><span></span><span></span>';
      header.appendChild(toggle);
    }

    const accordion = nav.querySelector('.mobile-menu__accordion');
    const submenu = nav.querySelector('.mobile-menu__submenu');
    if (accordion && submenu) {
      accordion.addEventListener('click', (event) => {
        event.stopPropagation();
        const isOpen = !submenu.classList.contains('is-open');
        submenu.classList.toggle('is-open', isOpen);
        accordion.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    const closeNav = () => {
      document.body.classList.remove('nav-open');
      toggle?.setAttribute('aria-expanded', 'false');
      if (accordion && submenu) {
        submenu.classList.remove('is-open');
        accordion.setAttribute('aria-expanded', 'false');
      }
    };

    toggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = !document.body.classList.contains('nav-open');
      document.body.classList.toggle('nav-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('click', (event) => {
      if (document.body.classList.contains('nav-open') && !header.contains(event.target)) {
        closeNav();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeNav();
      }
    });

    const mqDesktop = window.matchMedia('(min-width: 993px)');
    mqDesktop.addEventListener('change', (event) => {
      if (event.matches) {
        closeNav();
      }
    });
  };

  const initHistorySlider = () => {
    const section = document.querySelector('.history');
    if (!section) return;
    const track = section.querySelector('.history__track');
    const cards = Array.from(section.querySelectorAll('.history__card'));
    const dotsContainer = section.querySelector('.history__dots');
    const prevBtn = section.querySelector('.history__nav--prev');
    const nextBtn = section.querySelector('.history__nav--next');

    if (!track || !dotsContainer || cards.length === 0) return;

    dotsContainer.innerHTML = '';
    const dots = cards.map((card, index) => {
      const year = card.dataset.year || card.querySelector('.history__year')?.textContent?.trim();
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'history__dot';
      dot.setAttribute('aria-label', year ? `Этап ${year}` : `Этап ${index + 1}`);
      dot.addEventListener('click', () => {
        card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      });
      dotsContainer.appendChild(dot);
      return dot;
    });

    const setActive = (index) => {
      cards.forEach((card, idx) => {
        card.classList.toggle('is-active', idx === index);
      });
      dots.forEach((dot, idx) => {
        dot.classList.toggle('is-active', idx === index);
      });
    };

    const getStep = () => {
      const card = cards[0];
      if (!card) return track.clientWidth;
      const styles = window.getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap || '0');
      return card.getBoundingClientRect().width + gap;
    };

    const updateNav = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (prevBtn) {
        prevBtn.disabled = track.scrollLeft <= 1;
      }
      if (nextBtn) {
        nextBtn.disabled = track.scrollLeft >= maxScroll - 1;
      }
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -getStep(), behavior: 'smooth' });
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: getStep(), behavior: 'smooth' });
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (!visible.length) return;
        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const index = cards.indexOf(visible[0].target);
        if (index >= 0) setActive(index);
      },
      {
        root: track,
        threshold: [0.4, 0.6, 0.8]
      }
    );

    cards.forEach((card) => observer.observe(card));

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const startDrag = (event) => {
      if (event.button !== undefined && event.button !== 0) return;
      isDown = true;
      track.classList.add('is-dragging');
      startX = event.pageX;
      scrollLeft = track.scrollLeft;
    };

    const stopDrag = () => {
      if (!isDown) return;
      isDown = false;
      track.classList.remove('is-dragging');
    };

    const moveDrag = (event) => {
      if (!isDown) return;
      event.preventDefault();
      const walk = event.pageX - startX;
      track.scrollLeft = scrollLeft - walk;
    };

    track.addEventListener('mousedown', startDrag);
    track.addEventListener('mousemove', moveDrag);
    track.addEventListener('mouseleave', stopDrag);
    window.addEventListener('mouseup', stopDrag);

    track.addEventListener('scroll', () => {
      window.requestAnimationFrame(updateNav);
    });

    window.addEventListener('resize', updateNav);
    setActive(0);
    updateNav();
  };

  const initTeamTimeline = () => {
    const section = document.querySelector('.team');
    if (!section) return;
    const items = Array.from(section.querySelectorAll('.team__item'));
    if (items.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    items.forEach((item) => observer.observe(item));
  };

  const initTestimonials = () => {
    const section = document.querySelector('.testimonials');
    if (!section) return;
    const cards = Array.from(section.querySelectorAll('.testimonial-card'));
    if (cards.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      cards.forEach((card) => card.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    cards.forEach((card) => observer.observe(card));
  };

  const initCasesProTabs = () => {
    const section = document.querySelector('.cases-pro');
    if (!section) return;

    const tabs = Array.from(section.querySelectorAll('.cases-tab'));
    const panels = Array.from(section.querySelectorAll('.case-panel'));
    if (!tabs.length || !panels.length) return;

    const activateCase = (caseId) => {
      tabs.forEach((tab) => {
        tab.classList.toggle('is-active', tab.dataset.case === caseId);
      });
      panels.forEach((panel) => {
        panel.classList.toggle('is-active', panel.id === caseId);
      });
    };

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const caseId = tab.dataset.case;
        if (!caseId) return;
        activateCase(caseId);
      });
    });
  };

  const initLogisticsCounters = () => {
    if (document.body.dataset.page !== 'index') return;
    const section = document.querySelector('.logistics-stats');
    if (!section) return;

    const counterNodes = Array.from(section.querySelectorAll('[data-counter-target]'));
    if (!counterNodes.length) return;

    const numberFormatter = new Intl.NumberFormat('en-US');
    const formatValue = (value) => numberFormatter.format(value);
    const setValue = (node, value) => {
      const suffix = node.dataset.counterSuffix || '';
      node.textContent = `${formatValue(value)}${suffix}`;
    };

    counterNodes.forEach((node) => setValue(node, 1));

    const targets = counterNodes.map((node) => Number(node.dataset.counterTarget) || 0);
    const duration = 3000;
    let started = false;

    const runAnimation = () => {
      if (started) return;
      started = true;
      const startValue = 1;
      const startTime = performance.now();

      const frame = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        counterNodes.forEach((node, index) => {
          const target = targets[index];
          const value = Math.floor(startValue + (target - startValue) * progress);
          setValue(node, value);
        });
        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          counterNodes.forEach((node, index) => setValue(node, targets[index]));
        }
      };

      requestAnimationFrame(frame);
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnimation();
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(section);
  };

  const ensureModal = () => {
    let existing = document.getElementById('callbackModal');
    if (existing) return existing;

    const template = `
      <div class="modal" id="callbackModal" aria-hidden="true">
        <div class="modal-overlay" data-close="modal"></div>
        <div class="modal-window" role="dialog" aria-modal="true" aria-labelledby="callbackModalTitle">
          <button
            class="modal-close"
            type="button"
            data-close="modal"
            aria-label="Закрыть окно"
            data-i18n-title="modal.closeLabel"
          >&times;</button>
          <h3 id="callbackModalTitle" data-i18n="modal.title">Оставьте заявку</h3>
          <p data-i18n="modal.description">Укажите контакты и кратко опишите груз — мы подготовим предложение и свяжемся в течение 15 минут.</p>
          <form class="modal-form">
            <label>
              <span data-i18n="modal.label.name">Имя</span>
              <input
                type="text"
                name="name"
                required
                placeholder="Как к вам обращаться"
                data-i18n-placeholder="modal.placeholder.name"
              >
            </label>
            <label>
              <span data-i18n="modal.label.phone">Телефон</span>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+996 ___ ___ ___"
                data-i18n-placeholder="modal.placeholder.phone"
              >
            </label>
            <label>
              <span data-i18n="modal.label.details">Описание груза</span>
              <textarea
                name="details"
                rows="3"
                placeholder="Маршрут, тип груза, сроки"
                data-i18n-placeholder="modal.placeholder.details"
              ></textarea>
            </label>
            <button type="submit" data-i18n="modal.submit">Отправить</button>
            <p class="modal-hint" data-i18n="modal.hint">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</p>
            <p class="modal-success" aria-live="polite"></p>
          </form>
        </div>
      </div>`;

    document.body.insertAdjacentHTML('beforeend', template);
    existing = document.getElementById('callbackModal');
    return existing;
  };

  const modal = ensureModal();
  const overlay = modal.querySelector('.modal-overlay');
  const closeControls = modal.querySelectorAll('[data-close="modal"]');
  const successNode = modal.querySelector('.modal-success');
  const form = modal.querySelector('form');
  const DEFAULT_LANG = 'ru';
  const page = document.body.dataset.page || 'index';
  const dictCache = {};
  let currentLang = DEFAULT_LANG;
  let currentDict = {};
  let contactWidget = null;
  let refreshPartnerPopups = () => {};

  const textNodes = [];
  const htmlNodes = [];
  const placeholderNodes = [];
  const titleNodes = [];

  const collectRuNodes = () => {
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      textNodes.push({ node, value: node.textContent });
    });
    document.querySelectorAll('[data-i18n-html]').forEach((node) => {
      htmlNodes.push({ node, value: node.innerHTML });
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
      placeholderNodes.push({ node, value: node.placeholder });
    });
    document.querySelectorAll('[data-i18n-title]').forEach((node) => {
      titleNodes.push({ node, value: node.title });
    });
  };

  const restoreRuNodes = () => {
    textNodes.forEach(({ node, value }) => {
      node.textContent = value;
    });
    htmlNodes.forEach(({ node, value }) => {
      node.innerHTML = value;
    });
    placeholderNodes.forEach(({ node, value }) => {
      node.placeholder = value;
    });
    titleNodes.forEach(({ node, value }) => {
      node.title = value;
    });
  };

  const ruMessages = {
    contact: {
      widget: {
        title: 'Всегда на связи',
        text: 'Ответим в мессенджерах или по телефону.',
        whatsapp: { label: 'WhatsApp', desc: 'Написать в мессенджер' },
        telegram: { label: 'Telegram', desc: 'Обсудить проект' },
        phone: { label: '+996 555 11 33 33', desc: 'Позвонить напрямую' },
        toggle: 'Написать нам'
      }
    },
    email: {
      validation: {
        missingAt: 'Нет символа @',
        missingDot: 'Нет символа .',
        success: 'Все отлично!'
      }
    },
    modal: {
      success: 'Спасибо! Мы получили заявку и уже работаем над ответом.'
    },
    partner: {
      kulikov: { since: 'С 2016 года', stats: 'оформили 90 рейсов с премиальной мебелью.' },
      kant: { since: 'С 2018 года', stats: 'перевозим по 1200 тонн стройматериалов ежегодно.' },
      translogistica: { since: 'С 2015 года', stats: 'организовали 65 мультимодальных цепочек.' },
      shoro: { since: 'С 2017 года', stats: 'поддерживаем FMCG-доставки в 30 городов.' },
      cocacola: { since: 'С 2014 года', stats: 'выполнили 150 рефрижераторных рейсов.' },
      nestle: { since: 'С 2013 года', stats: 'консолидировали 200+ партий ингредиентов.' },
      knauf: { since: 'С 2016 года', stats: 'доставили 3 500 тонн гипсокартона.' },
      shatura: { since: 'С 2019 года', stats: 'обеспечиваем 40 шоурумов мебелью.' },
      worldclass: { since: 'С 2020 года', stats: 'логистика спортивного оборудования для 15 клубов.' },
      keramin: { since: 'С 2012 года', stats: 'ежегодно перевозим 1 800 паллет плитки.' },
      borusan: { since: 'С 2011 года', stats: 'организовали 75 тяжеловесных перевозок.' },
      bellona: { since: 'С 2015 года', stats: 'выполнили 110 контейнерных отправок.' },
      tesladoor: { since: 'С 2019 года', stats: 'доставили 6 000 дверных комплектов.' },
      dhl: { since: 'С 2010 года', stats: 'помогаем с наземной частью экспресс-доставок.' },
      lg: { since: 'С 2014 года', stats: 'перевезли 1,2 млн единиц электроники.' },
      termoplex: { since: 'С 2017 года', stats: 'организуем 50 температурных маршрутов в год.' },
      penopleks: { since: 'С 2016 года', stats: 'обеспечиваем регулярные поставки теплоизоляционных материалов по СНГ.' },
      fabrika: { since: 'С 2018 года', stats: 'закрыли 90 проектов девелоперов.' },
      augrand: { since: 'С 2013 года', stats: 'сопровождаем экспорт мебели на 8 рынков.' },
      anto: { since: 'С 2011 года', stats: 'доставили 400 партий металлоконструкций.' },
      kumtor: { since: 'С 2009 года', stats: 'ведем горнопромышленные поставки без простоев.' }
    }
  };

  const getNested = (obj, path) => {
    if (!obj || !path) return undefined;
    return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
  };

  const loadDict = async (lang) => {
    if (lang === DEFAULT_LANG) return {};
    if (dictCache[lang]) return dictCache[lang];
    try {
      const response = await fetch(`data/i18n/${lang}.json`, { cache: 'no-store' });
      if (!response.ok) return {};
      const dict = await response.json();
      dictCache[lang] = dict;
      return dict;
    } catch (error) {
      return {};
    }
  };

  const translate = (key) => {
    if (currentLang === DEFAULT_LANG) {
      return getNested(ruMessages, key) ?? key;
    }
    return getNested(currentDict, key) ?? getNested(ruMessages, key) ?? key;
  };

  const applyTranslations = async (lang) => {
    if (lang === DEFAULT_LANG) {
      currentDict = {};
      return;
    }

    const dict = await loadDict(lang);
    currentDict = dict || {};

    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      const value = getNested(currentDict, key);
      if (typeof value === 'string') {
        node.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((node) => {
      const key = node.getAttribute('data-i18n-html');
      const value = getNested(currentDict, key);
      if (typeof value === 'string') {
        node.innerHTML = value;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
      const key = node.getAttribute('data-i18n-placeholder');
      const value = getNested(currentDict, key);
      if (typeof value === 'string') {
        node.placeholder = value;
      }
    });

    document.querySelectorAll('[data-i18n-title]').forEach((node) => {
      const key = node.getAttribute('data-i18n-title');
      const value = getNested(currentDict, key);
      if (typeof value === 'string') {
        node.title = value;
      }
    });
  };

  const highlightServiceNav = () => {
    const currentServiceKey = document.body.dataset.service;
    if (!currentServiceKey) return;
    document.querySelectorAll('[data-service-link]').forEach((link) => {
      link.classList.toggle('active', link.dataset.serviceLink === currentServiceKey);
    });
  };

  const initFaqPopups = () => {
    const cards = document.querySelectorAll('.faq-card');
    if (!cards.length) return;
    let activePopup = null;

    const closePopup = (popup) => {
      popup.classList.remove('is-visible');
      popup.setAttribute('aria-hidden', 'true');
      const trigger = popup.closest('.faq-card')?.querySelector('.faq-trigger');
      trigger?.setAttribute('aria-expanded', 'false');
      if (activePopup === popup) {
        activePopup = null;
      }
    };

    cards.forEach((card) => {
      const trigger = card.querySelector('.faq-trigger');
      const popup = card.querySelector('.faq-popup');
      if (!trigger || !popup) return;

      trigger.addEventListener('click', (event) => {
        event.stopPropagation();
        if (activePopup && activePopup !== popup) {
          closePopup(activePopup);
        }
        const isOpen = popup.classList.contains('is-visible');
        if (isOpen) {
          closePopup(popup);
        } else {
          popup.classList.add('is-visible');
          popup.setAttribute('aria-hidden', 'false');
          trigger.setAttribute('aria-expanded', 'true');
          activePopup = popup;
        }
      });
    });

    document.addEventListener('click', (event) => {
      if (!activePopup) return;
      if (!event.target.closest('.faq-card')) {
        closePopup(activePopup);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && activePopup) {
        closePopup(activePopup);
      }
    });
  };

  const initSnowfall = () => {
    if (page !== 'portfolio') return;
    const targets = document.querySelectorAll('.feature-card, .sidebar-card');
    if (!targets.length) return;

    const snowLayer = document.createElement('div');
    snowLayer.className = 'snow-container';
    document.body.appendChild(snowLayer);
    let hideTimeout;

    const spawnSnow = () => {
      const flakes = 35;
      for (let i = 0; i < flakes; i += 1) {
        const flake = document.createElement('span');
        flake.className = 'snowflake';
        flake.style.left = `${Math.random() * 100}%`;
        const size = Math.random() * 6 + 4;
        flake.style.width = `${size}px`;
        flake.style.height = `${size}px`;
        flake.style.animationDuration = `${Math.random() * 1.2 + 1.2}s`;
        flake.style.animationDelay = `${Math.random() * 0.3}s`;
        flake.style.opacity = `${Math.random() * 0.5 + 0.4}`;
        snowLayer.appendChild(flake);
        flake.addEventListener('animationend', () => flake.remove());
      }
      snowLayer.classList.add('is-visible');
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        snowLayer.classList.remove('is-visible');
      }, 1800);
    };

    targets.forEach((card) => {
      card.addEventListener('click', () => {
        spawnSnow();
      });
    });
  };

  const initFeatureThumbHeights = () => {
    if (page !== 'portfolio') return;
    const cards = document.querySelectorAll('.feature-card');
    if (!cards.length) return;
    let resizeTimer;
    const stackedQuery = window.matchMedia('(max-width: 1024px)');

    const applyHeight = () => {
      const stacked = stackedQuery.matches;
      cards.forEach((card) => {
        const mainImg = card.querySelector('.feature-main img');
        const thumbs = card.querySelector('.feature-thumbs');
        if (!thumbs) return;
        if (stacked) {
          thumbs.style.maxHeight = '';
          return;
        }
        if (!mainImg) {
          thumbs.style.maxHeight = '';
          return;
        }
        const height = mainImg.getBoundingClientRect().height;
        thumbs.style.maxHeight = height ? `${height}px` : '';
      });
    };

    const watchImage = (img) => {
      if (!img) return;
      if (img.complete) {
        applyHeight();
      } else {
        img.addEventListener('load', applyHeight);
      }
    };

    cards.forEach((card) => {
      watchImage(card.querySelector('.feature-main img'));
    });

    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(applyHeight, 150);
    });

    stackedQuery.addEventListener('change', applyHeight);
    applyHeight();
  };

  const initNewsFilters = () => {
    if (page !== 'portfolio') return;
    const filterBar = document.querySelector('.news-filters');
    if (!filterBar) return;
    const buttons = Array.from(filterBar.querySelectorAll('.news-filter'));
    const cards = Array.from(document.querySelectorAll('.news-card'));
    const emptyState = document.querySelector('.news-empty');
    if (!buttons.length || !cards.length) return;

    const applyFilter = (filter) => {
      let visibleCount = 0;
      buttons.forEach((button) => {
        button.classList.toggle('is-active', button.dataset.filter === filter);
      });
      cards.forEach((card) => {
        const categories = (card.dataset.category || '').split(/\s+/).filter(Boolean);
        const isMatch = filter === 'all' || categories.includes(filter);
        card.classList.toggle('is-hidden', !isMatch);
        card.setAttribute('aria-hidden', isMatch ? 'false' : 'true');
        if (isMatch) visibleCount += 1;
      });
      if (emptyState) {
        emptyState.hidden = visibleCount !== 0;
      }
    };

    filterBar.addEventListener('click', (event) => {
      const button = event.target.closest('.news-filter');
      if (!button) return;
      event.preventDefault();
      const filter = button.dataset.filter || 'all';
      applyFilter(filter);
    });

    const initial = buttons.find((button) => button.classList.contains('is-active'))?.dataset.filter || 'all';
    applyFilter(initial);
  };

  const initPartnerPopups = () => {
    const logos = document.querySelectorAll('.partners__logo');
    if (!logos.length) return;
    const partnerKeys = {
      Kulikov: 'partner.kulikov',
      'Kant TSP': 'partner.kant',
      'TransLogistica Kazakhstan': 'partner.translogistica',
      Шоро: 'partner.shoro',
      'Coca-Cola': 'partner.cocacola',
      Nestle: 'partner.nestle',
      Knauf: 'partner.knauf',
      Шатура: 'partner.shatura',
      'World Class': 'partner.worldclass',
      Керамин: 'partner.keramin',
      Borusan: 'partner.borusan',
      Bellona: 'partner.bellona',
      Tesladoor: 'partner.tesladoor',
      DHL: 'partner.dhl',
      LG: 'partner.lg',
      Termoplex: 'partner.termoplex',
      Penoplex: 'partner.penopleks',
      'Фабрика окон': 'partner.fabrika',
      'AU Grand': 'partner.augrand',
      'ANTO.KG': 'partner.anto',
      'Кумтор': 'partner.kumtor'
    };
    let activePopup = null;

    const closePopup = () => {
      if (!activePopup) return;
      activePopup.closest('.partners__logo')?.classList.remove('is-active');
      activePopup.setAttribute('aria-hidden', 'true');
      activePopup = null;
    };

    logos.forEach((logo) => {
      const key = logo.querySelector('img')?.alt?.trim();
      const storyKey = key ? partnerKeys[key] : null;
      if (!storyKey) return;
      const story = {
        since: translate(`${storyKey}.since`),
        stats: translate(`${storyKey}.stats`)
      };
      const popup = document.createElement('div');
      popup.className = 'partner-popup';
      popup.dataset.storyKey = storyKey;
      popup.setAttribute('role', 'dialog');
      popup.setAttribute('aria-hidden', 'true');
      popup.innerHTML = `<strong>${key}</strong><p>${story.since}. ${story.stats}</p>`;
      logo.appendChild(popup);

      logo.addEventListener('click', (event) => {
        event.stopPropagation();
        if (activePopup && activePopup !== popup) {
          closePopup();
        }
        const willOpen = !logo.classList.contains('is-active');
        if (willOpen) {
          logo.classList.add('is-active');
          popup.setAttribute('aria-hidden', 'false');
          activePopup = popup;
        } else {
          closePopup();
        }
      });
    });

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.partners__logo')) {
        closePopup();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closePopup();
      }
    });

    refreshPartnerPopups = () => {
      document.querySelectorAll('.partner-popup').forEach((popup) => {
        const storyKey = popup.dataset.storyKey;
        const title = popup.querySelector('strong')?.textContent || '';
        if (!storyKey) return;
        const since = translate(`${storyKey}.since`);
        const stats = translate(`${storyKey}.stats`);
        popup.innerHTML = `<strong>${title}</strong><p>${since}. ${stats}</p>`;
      });
    };
  };

  let updateLanguageMenu = null;

  const initLanguageMenu = () => {
    const root = document.querySelector('.lang');
    if (!root) return null;
    const btn = root.querySelector('#langBtn');
    const menu = root.querySelector('#langMenu');
    const current = root.querySelector('#langCurrent');
    if (!btn || !menu || !current) return null;

    const setCurrentLabel = (lang) => {
      const label = lang === 'zh' ? '中文' : lang === 'en' ? 'EN' : 'RU';
      current.textContent = label;
      menu.querySelectorAll('.lang__item').forEach((item) => {
        item.classList.toggle('is-active', item.dataset.lang === lang);
      });
    };

    const openMenu = () => {
      menu.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
    };

    const closeMenu = () => {
      menu.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    };

    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      menu.classList.contains('is-open') ? closeMenu() : openMenu();
    });

    menu.addEventListener('click', (event) => {
      const item = event.target.closest('.lang__item');
      if (!item) return;
      const lang = item.dataset.lang;
      if (lang) {
        setLang(lang);
      }
      closeMenu();
    });

    document.addEventListener('click', (event) => {
      if (!root.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    });

    return setCurrentLabel;
  };

  const initContactWidget = () => {
    if (contactWidget) return;
    const widget = document.createElement('div');
    widget.className = 'contact-widget';
    widget.innerHTML = `
      <div class="contact-widget__panel" aria-hidden="true">
        <h4 data-i18n="contact.widget.title">Всегда на связи</h4>
        <p data-i18n="contact.widget.text">Ответим в мессенджерах или по телефону.</p>
        <div class="contact-widget__links">
          <a class="contact-widget__link whatsapp" href="https://wa.me/996555113333" target="_blank" rel="noopener">
            <span class="contact-widget__icon">WA</span>
            <div>
              <span data-i18n="contact.widget.whatsapp.label">WhatsApp</span>
              <small data-i18n="contact.widget.whatsapp.desc">Написать в мессенджер</small>
            </div>
          </a>
          <a class="contact-widget__link telegram" href="https://t.me/+996555113333" target="_blank" rel="noopener">
            <span class="contact-widget__icon">TG</span>
            <div>
              <span data-i18n="contact.widget.telegram.label">Telegram</span>
              <small data-i18n="contact.widget.telegram.desc">Обсудить проект</small>
            </div>
          </a>
          <a class="contact-widget__link phone" href="tel:+996555113333">
            <span class="contact-widget__icon">TEL</span>
            <div>
              <span data-i18n="contact.widget.phone.label">+996 555 11 33 33</span>
              <small data-i18n="contact.widget.phone.desc">Позвонить напрямую</small>
            </div>
          </a>
        </div>
      </div>
      <button class="contact-widget__toggle" type="button" data-i18n-title="contact.widget.toggle" title="Написать нам">
        <span class="contact-widget__toggle-icon">☎</span>
      </button>`;
    document.body.appendChild(widget);
    contactWidget = widget;
    const toggle = widget.querySelector('.contact-widget__toggle');
    const panel = widget.querySelector('.contact-widget__panel');

    const setState = (isOpen) => {
      widget.classList.toggle('is-open', isOpen);
      panel?.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      toggle?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    };

    toggle?.addEventListener('click', (event) => {
      event.stopPropagation();
      setState(!widget.classList.contains('is-open'));
    });

    document.addEventListener('click', (event) => {
      if (!widget.contains(event.target)) {
        setState(false);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setState(false);
      }
    });
  };

  const openModal = () => {
    modal.classList.add('is-open');
    document.body.classList.add('modal-open');
    successNode.textContent = '';
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
  };

  document.querySelectorAll('[data-modal="callback"]').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      openModal();
    });
  });

  closeControls.forEach((control) => {
    control.addEventListener('click', closeModal);
  });

  overlay?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name') || 'Без имени';
    const phone = formData.get('phone') || 'Не указан';
    const details = formData.get('details') || 'Нет описания';

    const subject = encodeURIComponent('Заявка с сайта Caravan Logistics');
    const body = encodeURIComponent(
      `Имя: ${name}\nТелефон: ${phone}\nОписание: ${details}`
    );

    window.location.href = `mailto:info@caravan-logistics.com?subject=${subject}&body=${body}`;
    successNode.textContent = translate('modal.success');
    form.reset();
    setTimeout(closeModal, 2500);
  });

  const initBlurNumberHighlights = () => {
    if (document.body.dataset.page !== 'index') return;

    const containers = document.querySelectorAll(
      '.hero--info, .features .info .block, .tool-card__placeholder.blur'
    );

    containers.forEach((container) => {
      container.querySelectorAll('.digit-highlight').forEach((node) => {
        node.replaceWith(document.createTextNode(node.textContent || ''));
      });

      const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
        acceptNode: (node) => {
          if (!node.nodeValue || !/\d/.test(node.nodeValue)) {
            return NodeFilter.FILTER_REJECT;
          }
          const parent = node.parentElement;
          if (!parent || parent.closest('.digit-highlight')) {
            return NodeFilter.FILTER_REJECT;
          }
          if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      });

      const nodes = [];
      while (walker.nextNode()) {
        nodes.push(walker.currentNode);
      }

      nodes.forEach((node) => {
        const text = node.nodeValue;
        if (!text) return;
        const parts = text.split(/(\d[\d\s.,–\/-]*)/g);
        if (parts.length === 1) return;
        const fragment = document.createDocumentFragment();
        parts.forEach((part, index) => {
          if (!part) return;
          if (index % 2 === 1) {
            const span = document.createElement('span');
            span.className = 'digit-highlight';
            span.textContent = part;
            fragment.appendChild(span);
          } else {
            fragment.appendChild(document.createTextNode(part));
          }
        });
        node.replaceWith(fragment);
      });
    });
  };

  const setLang = async (lang) => {
    const targetLang = ['en', 'zh'].includes(lang) ? lang : DEFAULT_LANG;
    currentLang = targetLang;
    if (targetLang === DEFAULT_LANG) {
      restoreRuNodes();
      currentDict = {};
    } else {
      await applyTranslations(targetLang);
    }
    document.documentElement.lang = targetLang;
    localStorage.setItem('lang', targetLang);
    if (typeof updateLanguageMenu === 'function') {
      updateLanguageMenu(targetLang);
    }
    if (contactWidget) {
      const toggle = contactWidget.querySelector('.contact-widget__toggle');
      const toggleLabel = targetLang === DEFAULT_LANG ? null : getNested(currentDict, 'contact.widget.toggle');
      toggle?.setAttribute('aria-label', toggleLabel || getNested(ruMessages, 'contact.widget.toggle'));
    }
    refreshPartnerPopups();
    highlightServiceNav();
    initBlurNumberHighlights();
  };

  window.checkEmail = function checkEmail() {
    const email = document.querySelector('#emailField')?.value || '';
    if (!email.includes('@')) {
      alert(translate('email.validation.missingAt'));
    } else if (!email.includes('.')) {
      alert(translate('email.validation.missingDot'));
    } else {
      alert(translate('email.validation.success'));
    }
  };

  initFaqPopups();
  initSnowfall();
  initFeatureThumbHeights();
  initNewsFilters();
  initPartnerPopups();
  updateLanguageMenu = initLanguageMenu();
  initContactWidget();
  initMobileNav();
  initHistorySlider();
  initTeamTimeline();
  initTestimonials();
  initCasesProTabs();
  initLogisticsCounters();
  collectRuNodes();
  const savedLang = localStorage.getItem('lang') || DEFAULT_LANG;
  setLang(savedLang);
});
