/* ==========================================================================
   ⚙️ ПОЛНОЕ ИНТЕРАКТИВНОЕ ЯДРО АКАДЕМИИ САНДРЫ ЛОТОС // ЧАСТЬ 1
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ⚡ ЕДИНЫЙ ЦЕЛЕВОЙ АДРЕС НАШЕЙ ЭКОСИСТЕМЫ В ВК
    const vkTargetLink = "https://vk.ru/sandra_lotos";

    // 1. АВТОМАТИЧЕСКИЙ БАННЕР COOKIE С СОХРАНЕНИЕМ В КЭШ БРАУЗЕРА (ФЗ-152 РФ)
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookie');

    if (cookieBanner && acceptBtn) {
        if (!localStorage.getItem('cookie_accepted_lotos')) {
            setTimeout(() => {
                cookieBanner.classList.add('show');
            }, 1500); 
        }

        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookie_accepted_lotos', 'true');
            cookieBanner.classList.remove('show');
        });
    }

    // 2. УЛЬТИМАТИВНАЯ БАЗА ДАННЫХ ДЛЯ ОПИСАНИЯ ВСЕХ 14 ПРЕМИУМ УСЛУГ В ОКНЕ (С 1 ПО 6)
    const servicesData = {
        'capsule-1': { 
            title: 'Премиальный Итальянский Кератин', 
            description: 'Высокополимерные гранулы для тугой, герметичной фиксации капсул. Устойчив к высоким температурам, уходовым средствам и масляным маскам.', 
            features: ['Оригинальное итальянское производство (заводской сертификат)', 'Сверхпрочная фиксация до 5 месяцев носки прядей', 'Гипоаллергенный прозрачный или цветной био-состав'], 
            price: '4 500 ₽' 
        },
        'capsule-2': { 
            title: 'Стартовый набор топ-мастера', 
            description: 'Профессиональный комплект оборудования и расходников, собранный лично Сандрой Лотос для быстрого старта вашей бьюти-практики.', 
            features: ['Аппарат для горячего микрокапсульного наращивания', 'Щипцы для идеального формирования нано-капсул', 'Стартовая палитра донорских оттенков волос'], 
            price: '18 900 ₽' 
        },
        'capsule-3': { 
            title: 'Книга-руководство: Секреты колористики', 
            description: 'Эксклюзивное печатное и цифровое издание от академии. Полный разбор сложных бьюти-смешиваний без потери качества.', 
            features: ['Алгоритмы точного попадания в тон клиента с первого раза', 'Формулы бережного окрашивания донорских волос', 'Разбор критических ошибок при работе с жестким блондом'], 
            price: '2 900 ₽' 
        },
        'capsule-4': { 
            title: 'Эргономичные щипцы для нано-капсул', 
            description: 'Инструмент с идеальной балансировкой осей для снижения нагрузки на суставы и кисть мастера при длительной интенсивной работе.', 
            features: ['Медицинская высокопрочная сталь с матовым копированием', 'Оптимальный зазор губок для формирования капсул-рисинок', 'Антискользящие деликатные накладки на рукояти'], 
            price: '6 200 ₽' 
        },
        'capsule-5': { 
            title: 'Гайд: Привлечение VIP-клиентов 2026', 
            description: 'Пошаговая методология позиционирования бьюти-мастера в дорогом премиальном сегменте с автоматическим привлечением заявок.', 
            features: ['Скрипты общения с высокобюджетной базой клиентов', 'Настройка личного бренда в соцсетях без бьюти-шаблонов', 'Правила безболезненного формирования высокого чека'], 
            price: '3 500 ₽' 
        },
        'capsule-6': { 
            title: 'Ультразвуковой аппарат для наращивания', 
            description: 'Инновационный инструмент для бережного скрепления донорских прядей ультразвуковой волной без термического воздействия на стержень.', 
            features: ['Абсолютное отсутствие теплового повреждения чешуек', 'Мгновенное ультразвуковое застывание полимера за 1 секунду', 'Эргономичный облегченный корпус для долгих процедур'], 
            price: '34 500 ₽' 
        },
        // ПРОДОЛЖЕНИЕ БАЗЫ ДАННЫХ ДЛЯ ОПИСАНИЯ ПРЕМИУМ УСЛУГ (С 7 ПО 14)
        'capsule-7': { 
            title: 'Профессиональная безопасная бритва для срезов', 
            description: 'Высокоточный инструмент для выполнения идеального скрытого каскадного среза и мягкой шлифовки границ наращивания.', 
            features: ['Японские лезвия со специальным защитным покрытием', 'Сбалансированная ручка из хирургической стали', 'Идеально плавное скольжение по прядям без зазубрин'], 
            price: '4 800 ₽' 
        },
        'capsule-8': { 
            title: 'Нано-гель для защиты краевой зоны', 
            description: 'Органический барьерный гель, предотвращающий термическое или механическое раздражение кожи головы во время процедуры.', 
            features: ['Экстракт алоэ вера и пантенол в активной основе', 'Создание невидимой защитной дышащей микропленки', 'Легко смывается теплой водой без остатка и липкости'], 
            price: '1 900 ₽' 
        },
        'capsule-9': { 
            title: 'Жидкость-ремувер премиум-класса', 
            description: 'Деликатный состав для быстрого разрушения полимерных связей кератина во время коррекции без пересушивания структуры.', 
            features: ['Абсолютное отсутствие резкого токсичного запаха ацетона', 'Мгновенное размягчение капсулы за 3 секунды', 'Мгновенно испаряется, не повреждая донорскую прядь'], 
            price: '2 400 ₽' 
        },
        'capsule-10': { 
            title: 'Карда для подготовки донорских прядей', 
            description: 'Профессиональный инструмент для качественного ручного прочеса, выравнивания и смешивания волос различных оттенков.', 
            features: ['Частые эластичные иглы из закаленной нержавеющей стали', 'Надежное крепление к рабочей поверхности струбцинами', 'Минимизация потери драгоценных волосков при вычесе'], 
            price: '7 500 ₽' 
        },
        'capsule-11': { 
            title: 'Чек-лист: Чек-ап здоровья волос', 
            description: 'Пошаговый медицинский и эстетический алгоритм трихологической диагностики состояния структуры перед началом процедуры.', 
            features: ['Определение эластичности и пористости стержня волоса', 'Тест на допустимую нагрузку луковиц и корней', 'Противопоказания к проведению процедуры наращивания'], 
            price: '990 ₽' 
        },
        'capsule-12': { 
            title: 'Защитные термо-диски с разметкой', 
            description: 'Комплект многоразовых дисков из термостойкого гибкого пластика для идеального зонирования кожи головы по проборам.', 
            features: ['Анатомическая форма с точной сеткой шага прядей', 'Высокая устойчивость к температурам до 240°C', 'В наборе 12 дисков различного диаметра под разные зоны'], 
            price: '1 200 ₽' 
        },
        'capsule-13': { 
            title: 'Фирменный бьюти-кейс мастера', 
            description: 'Элегантная и жесткая сумка-органайзер для бережной транспортировки инструментов и расходных материалов мастера.', 
            features: ['Ударопрочный каркас с дорогой кожаной фактурой', 'Адаптивные внутренние перегородки на липучках', 'Специальный защищенный отсек для хрупкого аппарата'], 
            price: '9 800 ₽' 
        },
        'capsule-14': { 
            title: 'Интенсив по скоростному капсулированию', 
            description: 'Дополнительный углубленный практический видео-модуль по оптимизации времени мастера при подготовке сложного среза.', 
            features: ['Техника скоростного "скрытого хвата" при формировании', 'Сокращение времени общей процедуры на 40-50 минут', 'Разбор работы со сложными ультра-тонкими прядями'], 
            price: '5 900 ₽' 
        }
    };
    // 3. ЦЕНТРАЛЬНЫЙ ДВИЖОК ДЛЯ ПОДРОБНОГО РАССМОТРЕНИЯ УСЛУГ С СИНХРОНИЗАЦИЕЙ С VK.RU
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalList = document.getElementById('modalList');
    const modalPayBtn = document.getElementById('modalPayBtn');

    if (modal && modalTitle && modalDescription && modalList) {
        const capsules = document.querySelectorAll('.product-capsule');
        
        capsules.forEach(capsule => {
            capsule.style.pointerEvents = 'auto'; 
            
            capsule.addEventListener('click', (e) => {
                if (e.target.classList.contains('btn-pay-link')) {
                    return;
                }
                
                e.preventDefault();
                const id = capsule.getAttribute('data-product');
                const data = servicesData[id];

                if (data) {
                    modalTitle.innerText = data.title;
                    modalDescription.innerText = data.description;
                    
                    // Обеспечиваем редирект по вашей точной ссылке для кнопки заказа
                    if (modalPayBtn) {
                        modalPayBtn.innerText = `Приобрести за ${data.price} через VK`;
                    }
                    
                    modalList.innerHTML = '';
                    data.features.forEach(feat => {
                        const li = document.createElement('li');
                        li.innerText = feat;
                        modalList.appendChild(li);
                    });

                    // Обеспечиваем редирект по вашей точной ссылке для кнопки связи
                    let contactBox = modal.querySelector('.modal-contact-lotos-zone');
                    if (!contactBox) {
                        contactBox = document.createElement('div');
                        contactBox.classList.add('modal-contact-lotos-zone');
                        contactBox.innerHTML = `
                            <a href="${vkTargetLink}" target="_blank" class="btn-contact-lotos">
                                СВЯЗАТЬСЯ С САНДРОЙ ЛОТОС В VK →
                            </a>
                        `;
                        modalList.parentElement.appendChild(contactBox);
                    }

                    modal.style.display = 'flex';
                    setTimeout(() => { modal.classList.add('active'); }, 10);
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        if (modalPayBtn) {
            modalPayBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                modal.classList.remove('active');
                document.body.style.overflow = '';
                setTimeout(() => { modal.style.display = 'none'; }, 300);
                
                window.open(vkTargetLink, '_blank');
            });
        }

        const close = () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            setTimeout(() => { modal.style.display = 'none'; }, 300);
        };

        const closeBtn = document.querySelector('.modal-close-btn');
        const overlay = document.querySelector('.modal-overlay');
        if(closeBtn) closeBtn.addEventListener('click', close);
        if(overlay) overlay.addEventListener('click', close);
    }

    // 4. ПЕРЕХВАТ И ПЕРЕНАПРАВЛЕНИЕ НА VK.RU ДЛЯ ВСЕХ ОСТАЛЬНЫХ КНОПОК ПЛАТФОРМЫ
    const payButtons = document.querySelectorAll('.prices-section .btn-pay');
    payButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(vkTargetLink, '_blank');
        });
    });

    const navStartBtn = document.querySelector('.btn-nav');
    const heroExploreBtn = document.querySelector('.btn-banner-prime');

    if (navStartBtn) {
        navStartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(vkTargetLink, '_blank');
        });
    }

    if (heroExploreBtn) {
        heroExploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(vkTargetLink, '_blank');
        });
    }

    // 5. ДВИЖОК ГОРИЗОНТАЛЬНОЙ КАРУСЕЛИ ОТЗЫВОВ И ПОЛНОЭКРАННОГО LIGHTBOX
    const lightbox = document.getElementById('reviewLightbox');
    const lightboxImg = document.getElementById('lightboxTargetImg');
    const lightboxClose = document.querySelector('.lightbox-close');
    const reviewCards = document.querySelectorAll('.slider-capsule');

    if (lightbox && lightboxImg) {
        reviewCards.forEach(card => {
            card.style.pointerEvents = 'auto'; 
            card.addEventListener('click', (e) => {
                e.preventDefault(); e.stopPropagation();
                const imgInside = card.querySelector('img');
                if (imgInside) {
                    const srcPath = imgInside.getAttribute('src');
                    if (srcPath) {
                        lightboxImg.setAttribute('src', srcPath);
                        lightbox.style.display = 'flex';
                        setTimeout(() => { lightbox.classList.add('active'); }, 10);
                        document.body.style.overflow = 'hidden';
                    }
                }
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
            setTimeout(() => { lightbox.style.display = 'none'; lightboxImg.setAttribute('src', ''); }, 300);
        };

        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.classList.contains('lightbox-image-wrapper')) {
                closeLightbox();
            }
        });
    }
});
