let currentLang = 'ar';

const i18n = {
    ar: {
        logo_name:         'مكتبة الندى',
        nav_home:          'الرئيسية',
        nav_books:         'الكتب',
        nav_categories:    'التصنيفات',
        nav_favorites:     'المفضلة',
        nav_contact:       'تواصل معنا',
        hero_eyebrow:      'مكتبة الندى',
        hero_title:        'بوابتك نحو المعرفة',
        hero_tagline:      'استكشف مجموعتنا المختارة بعناية من الكتب في العلوم والرواية والفلسفة والمزيد.',
        hero_browse:       'تصفح جميع الكتب',
        hero_cats:         'عرض التصنيفات',
        stat_books:        'كتاباً',
        stat_cats:         'تصنيفات',
        stat_rating:       'متوسط التقييم',
        next_quote:        'الاقتباس التالي →',
        featured_label:    'مختارة بعناية',
        featured_title:    'كتب مميزة',
        featured_sub:      'مجموعة مختارة من أبرز عناويننا',
        view_all:          'عرض جميع الكتب →',
        all_books_label:   'المجموعة الكاملة',
        all_books_title:   'جميع الكتب',
        all_books_sub:     'تصفح وفلتر المجموعة الكاملة',
        filter_category:   'التصنيف',
        all_categories:    'جميع التصنيفات',
        cat_fiction:       'رواية',
        cat_science:       'علوم',
        cat_history:       'تاريخ',
        cat_programming:   'برمجة',
        cat_philosophy:    'فلسفة',
        cat_mystery:       'غموض',
        filter_sort:       'الترتيب',
        sort_title:        'العنوان أ-ي',
        sort_rating:       'الأعلى تقييماً',
        sort_year:         'الأحدث أولاً',
        reset_btn:         'إعادة تعيين',
        cats_label:        'استكشف',
        categories_title:  'التصنيفات',
        categories_sub:    'اختر تصنيفاً لتصفح الكتب',
        fav_label:         'محفوظاتي',
        fav_title:         'المفضلة',
        fav_sub:           'الكتب التي حفظتها للقراءة لاحقاً',
        fav_empty:         'لم تقم بحفظ أي كتب بعد. اضغط على القلب في أي بطاقة كتاب!',
        contact_label:     'نسعد بتواصلك',
        contact_title:     'تواصل معنا',
        contact_sub:       'أسئلة، اقتراحات، أو ملاحظات — يسعدنا سماعك',
        contact_info_title:'معلومات المكتبة',
        info_location_title:'العنوان',
        info_location:     'بغداد، العراق',
        info_hours_title:  'ساعات العمل',
        info_hours:        'السبت – الخميس، ٩ص – ٩م',
        info_email_title:  'البريد الإلكتروني',
        info_phone_title:  'الهاتف',
        form_name:         'الاسم الكامل',
        form_name_ph:      'أدخل اسمك الكامل',
        form_email:        'البريد الإلكتروني',
        form_email_ph:     'example@email.com',
        form_message:      'الرسالة',
        form_msg_ph:       'اكتب رسالتك هنا…',
        form_send:         'إرسال الرسالة',
        footer_brand:      'مكتبة الندى',
        footer_desc:       'مكتبتك الرقمية المختارة — نؤمن بأن الكتاب الجيد يغيّر حياة كاملة.',
        footer_links:      'روابط سريعة',
        footer_cats:       'التصنيفات',
        footer_copy:       '© 2025 مكتبة الندى — جميع الحقوق محفوظة',
        theme_blue:        'أزرق',
        theme_green:       'أخضر',
        theme_pink:        'وردي',
        theme_red:         'أحمر',
        theme_dark:        'الوضع الداكن',
        theme_light:       'الوضع الفاتح',
        search_placeholder:'بحث عن كتاب…',
        showing:           'يُعرض',
        books_count:       'كتاب(كتب)',
        by_author:         'تأليف',
        pages_word:        'صفحة',
        no_books:          'لا توجد كتب مطابقة.',
        added_fav:         'تمت الإضافة للمفضلة ❤️',
        removed_fav:       'تمت الإزالة من المفضلة',
        add_to_fav:        '🤍 إضافة للمفضلة',
        remove_from_fav:   '❤️ إزالة من المفضلة',
        form_fill:         'يرجى ملء جميع الحقول.',
        form_email_err:    'يرجى إدخال بريد إلكتروني صحيح.',
        form_success:      'تم إرسال الرسالة! شكراً لك',
        form_success2:     'سنتواصل معك قريباً.',
        book_word:         'كتاب',
        books_word:        'كتب',
        featured_badge:    'مميز'
    },
    en: {
        logo_name:         'Al-Nada Library',
        nav_home:          'Home',
        nav_books:         'Books',
        nav_categories:    'Categories',
        nav_favorites:     'Favorites',
        nav_contact:       'Contact',
        hero_eyebrow:      'Al-Nada Library',
        hero_title:        'Your Gateway to Knowledge',
        hero_tagline:      'Explore our collection of hand-picked books across science, fiction, philosophy, and more.',
        hero_browse:       'Browse All Books',
        hero_cats:         'View Categories',
        stat_books:        'Books',
        stat_cats:         'Categories',
        stat_rating:       'Avg. Rating',
        next_quote:        'Next Quote →',
        featured_label:    'Hand-Picked',
        featured_title:    'Featured Books',
        featured_sub:      'A selection of our most celebrated titles',
        view_all:          'View All Books →',
        all_books_label:   'Full Collection',
        all_books_title:   'All Books',
        all_books_sub:     'Browse and filter the complete collection',
        filter_category:   'Category',
        all_categories:    'All Categories',
        cat_fiction:       'Fiction',
        cat_science:       'Science',
        cat_history:       'History',
        cat_programming:   'Programming',
        cat_philosophy:    'Philosophy',
        cat_mystery:       'Mystery',
        filter_sort:       'Sort by',
        sort_title:        'Title A–Z',
        sort_rating:       'Best Rated',
        sort_year:         'Newest First',
        reset_btn:         'Reset',
        cats_label:        'Explore',
        categories_title:  'Categories',
        categories_sub:    'Click a category to browse books',
        fav_label:         'Saved',
        fav_title:         'My Favorites',
        fav_sub:           'Books you\'ve saved for later',
        fav_empty:         'You haven\'t saved any books yet. Click the heart on any book card!',
        contact_label:     'Get in Touch',
        contact_title:     'Contact Us',
        contact_sub:       'Questions, suggestions, or feedback — we\'d love to hear from you',
        contact_info_title:'Library Information',
        info_location_title:'Location',
        info_location:     'Baghdad, Iraq',
        info_hours_title:  'Working Hours',
        info_hours:        'Sat – Thu, 9 AM – 9 PM',
        info_email_title:  'Email',
        info_phone_title:  'Phone',
        form_name:         'Full Name',
        form_name_ph:      'Enter your full name',
        form_email:        'Email Address',
        form_email_ph:     'example@email.com',
        form_message:      'Message',
        form_msg_ph:       'Write your message here…',
        form_send:         'Send Message',
        footer_brand:      'Al-Nada Library',
        footer_desc:       'Your curated digital library — we believe a great book can change a life.',
        footer_links:      'Quick Links',
        footer_cats:       'Categories',
        footer_copy:       '© 2025 Al-Nada Library — All Rights Reserved',
        theme_blue:        'Blue',
        theme_green:       'Green',
        theme_pink:        'Pink',
        theme_red:         'Red',
        theme_dark:        'Dark Mode',
        theme_light:       'Light Mode',
        search_placeholder:'Search for a book…',
        showing:           'Showing',
        books_count:       'book(s)',
        by_author:         'by',
        pages_word:        'pages',
        no_books:          'No books found matching your criteria.',
        added_fav:         'Added to favorites ❤️',
        removed_fav:       'Removed from favorites',
        add_to_fav:        '🤍 Add to Favorites',
        remove_from_fav:   '❤️ Remove from Favorites',
        form_fill:         'Please fill in all fields.',
        form_email_err:    'Please enter a valid email address.',
        form_success:      'Message sent! Thanks,',
        form_success2:     'We\'ll get back to you soon.',
        book_word:         'book',
        books_word:        'books',
        featured_badge:    'Featured'
    }
};

const t = (key) => (i18n[currentLang] && i18n[currentLang][key]) ? i18n[currentLang][key] : key;

const catI18nMap = {
    Fiction:     'cat_fiction',
    Science:     'cat_science',
    History:     'cat_history',
    Programming: 'cat_programming',
    Philosophy:  'cat_philosophy',
    Mystery:     'cat_mystery'
};


const books = [
    {
        id: 1, title: "To Kill a Mockingbird", author: "Harper Lee",
        category: "Fiction", year: 1960, rating: 4.8, pages: 281,
        thumb: "thumbs/To Kill a Mockingbird.jpg", featured: true,
        desc: "A story about racial injustice and childhood innocence in the American South. Follows young Scout Finch and her father Atticus as he defends a man accused of a crime he didn't commit.",
        desc_ar: "قصة عن الظلم العنصري وبراءة الطفولة في جنوب أمريكا. تتبع الطفلة سكاوت فينش ووالدها أتيكوس وهو يدافع عن رجل متهم بجريمة لم يرتكبها."
    },
    {
        id: 2, title: "A Brief History of Time", author: "Stephen Hawking",
        category: "Science", year: 1988, rating: 4.7, pages: 212,
        thumb: "thumbs/A Brief History of Time.jpg", featured: true,
        desc: "Hawking explains the universe, black holes, and the Big Bang in a way that anyone can understand. One of the best-selling science books ever written.",
        desc_ar: "يشرح هوكينغ الكون والثقوب السوداء والانفجار العظيم بطريقة يفهمها الجميع. من أكثر الكتب العلمية مبيعاً على الإطلاق."
    },
    {
        id: 4, title: "Clean Code", author: "Robert C. Martin",
        category: "Programming", year: 2008, rating: 4.5, pages: 431,
        thumb: "thumbs/Clean Code.jpg", featured: false,
        desc: "A guide to writing readable, maintainable code. Covers best practices that every programmer should know. Known as 'Uncle Bob's' classic.",
        desc_ar: "دليل لكتابة كود نظيف وقابل للصيانة. يغطي أفضل الممارسات التي يجب على كل مبرمج معرفتها. يُعرف بكلاسيكية 'العم بوب'."
    },
    {
        id: 5, title: "1984", author: "George Orwell",
        category: "Fiction", year: 1949, rating: 4.7, pages: 328,
        thumb: "thumbs/1984.jpg", featured: true,
        desc: "A dystopian novel set in a world ruled by totalitarian government surveillance and propaganda. One of the most important books of the 20th century.",
        desc_ar: "رواية ديستوبية في عالم تحكمه المراقبة الشمولية والدعاية الحكومية. من أهم كتب القرن العشرين."
    },
    {
        id: 6, title: "The Pragmatic Programmer", author: "David Thomas",
        category: "Programming", year: 1999, rating: 4.6, pages: 352,
        thumb: "thumbs/The Pragmatic Programmer.jpg", featured: false,
        desc: "Practical advice for software developers on how to think about and approach programming problems. A must-read for any serious developer.",
        desc_ar: "نصائح عملية لمطوري البرمجيات حول كيفية التفكير في مشاكل البرمجة وحلها. قراءة ضرورية لكل مبرمج جاد."
    },
    {
        id: 7, title: "The Great Gatsby", author: "F. Scott Fitzgerald",
        category: "Fiction", year: 1925, rating: 4.3, pages: 180,
        thumb: "thumbs/The Great Gatsby.jpg", featured: false,
        desc: "Set during the Jazz Age, this story follows the mysterious millionaire Jay Gatsby and his obsession with Daisy Buchanan. A classic American novel.",
        desc_ar: "تدور أحداثها في عصر الجاز، وتتبع المليونير الغامض جاي غاتسبي وهوسه بديزي بيوكانان. رواية أمريكية كلاسيكية."
    },
    {
        id: 8, title: "Cosmos", author: "Carl Sagan",
        category: "Science", year: 1980, rating: 4.8, pages: 365,
        thumb: "thumbs/Cosmos.jpg", featured: false,
        desc: "Carl Sagan explores the universe and our place in it. Covers planets, stars, galaxies, and the history of science. A timeless favorite.",
        desc_ar: "يستكشف كارل ساغان الكون ومكاننا فيه. يغطي الكواكب والنجوم والمجرات وتاريخ العلم. كتاب خالد لا يُنسى."
    },
    {
        id: 9, title: "The Art of War", author: "Sun Tzu",
        category: "Philosophy", year: -500, rating: 4.4, pages: 68,
        thumb: "thumbs/The Art of War.jpeg", featured: false,
        desc: "An ancient Chinese military strategy book. Still widely read today in business, sports, and everyday life. Short but very deep.",
        desc_ar: "كتاب استراتيجية عسكرية صيني قديم. لا يزال يُقرأ على نطاق واسع في الأعمال والرياضة والحياة اليومية. قصير لكنه عميق جداً."
    },
    {
        id: 10, title: "The Da Vinci Code", author: "Dan Brown",
        category: "Mystery", year: 2003, rating: 4.1, pages: 454,
        thumb: "thumbs/The Da Vinci Code.jpg", featured: false,
        desc: "A murder mystery at the Louvre leads Professor Langdon on a hunt across Europe. Full of twists, art history, and secret codes.",
        desc_ar: "لغز جريمة قتل في متحف اللوفر يقود البروفيسور لانغدون في مطاردة عبر أوروبا. مليء بالمفاجآت وتاريخ الفن والرموز السرية."
    },
    {
        id: 11, title: "Thinking, Fast and Slow", author: "Daniel Kahneman",
        category: "Science", year: 2011, rating: 4.5, pages: 499,
        thumb: "thumbs/Thinking Fast and Slow.jpg", featured: false,
        desc: "Nobel Prize winner Kahneman explores how our brain works in two different ways: fast intuitive thinking vs slow deliberate thinking.",
        desc_ar: "يستكشف الحائز على جائزة نوبل كانمان كيف يعمل دماغنا بطريقتين مختلفتين: التفكير السريع الحدسي مقابل التفكير البطيء المتأني."
    },
    {
        id: 12, title: "Brave New World", author: "Aldous Huxley",
        category: "Fiction", year: 1932, rating: 4.4, pages: 311,
        thumb: "thumbs/Brave New World.jpg", featured: false,
        desc: "A futuristic world where people are genetically engineered and conditioned to be happy. Questions what freedom and humanity really mean.",
        desc_ar: "عالم مستقبلي يتم فيه هندسة البشر وراثياً وتكييفهم ليكونوا سعداء. يتساءل عن المعنى الحقيقي للحرية والإنسانية."
    },
    {
        id: 13, title: "JavaScript: The Good Parts", author: "Douglas Crockford",
        category: "Programming", year: 2008, rating: 4.4, pages: 172,
        thumb: "thumbs/JavaScript The Good Parts.jpg", featured: false,
        desc: "Shows which parts of JavaScript are actually good and worth using. Very useful for understanding the language properly.",
        desc_ar: "يوضح الأجزاء الجيدة فعلاً في جافاسكربت والتي تستحق الاستخدام. مفيد جداً لفهم اللغة بشكل صحيح."
    },
    {
        id: 14, title: "Gone Girl", author: "Gillian Flynn",
        category: "Mystery", year: 2012, rating: 4.2, pages: 422,
        thumb: "thumbs/Gone Girl.jpg", featured: false,
        desc: "On their anniversary, Nick Dunne's wife disappears. The police investigation reveals dark secrets about their marriage. A gripping thriller.",
        desc_ar: "في ذكرى زواجهما، تختفي زوجة نيك دان. يكشف التحقيق أسراراً مظلمة عن زواجهما. رواية إثارة مشوقة."
    },
    {
        id: 15, title: "Meditations", author: "Marcus Aurelius",
        category: "Philosophy", year: 180, rating: 4.7, pages: 254,
        thumb: "thumbs/Meditations.jpg", featured: true,
        desc: "Personal writings of Roman Emperor Marcus Aurelius on Stoic philosophy. A guide to living calmly and wisely that people still read today.",
        desc_ar: "كتابات شخصية للإمبراطور الروماني ماركوس أوريليوس عن الفلسفة الرواقية. دليل للعيش بهدوء وحكمة لا يزال يُقرأ حتى اليوم."
    },
    {
        id: 16, title: "The Selfish Gene", author: "Richard Dawkins",
        category: "Science", year: 1976, rating: 4.3, pages: 360,
        thumb: "thumbs/The Selfish Gene.jpg", featured: false,
        desc: "Argues that genes, not organisms, are the true units of natural selection. Also introduced the concept of the 'meme'. Very influential.",
        desc_ar: "يُحاجج بأن الجينات، وليس الكائنات، هي الوحدات الحقيقية للانتقاء الطبيعي. قدّم أيضاً مفهوم 'الميم'. كتاب مؤثر جداً."
    }
];

const categories = [
    { name: "Fiction",      emoji: "📖" },
    { name: "Science",      emoji: "🔬" },
    { name: "History",      emoji: "🏺" },
    { name: "Programming",  emoji: "💻" },
    { name: "Philosophy",   emoji: "🏛️" },
    { name: "Mystery",      emoji: "🔍" }
];

const quotes = {
    ar: [
        { text: "القارئ يعيش ألف حياة قبل أن يموت.",              author: "جورج آر. آر. مارتن" },
        { text: "كلما قرأت أكثر، عرفت أشياء أكثر.",               author: "د. سوس" },
        { text: "الكتب سحر فريد يمكنك حمله أينما ذهبت.",          author: "ستيفن كينغ" },
        { text: "الكتاب حلم تمسكه بين يديك.",                      author: "نيل غيمان" },
        { text: "القراءة للعقل كالرياضة للجسد.",                   author: "جوزيف أديسون" },
        { text: "ليس كل من يتجول تائهاً.",                         author: "ج.ر.ر. تولكين" }
    ],
    en: [
        { text: "A reader lives a thousand lives before he dies.", author: "George R.R. Martin" },
        { text: "The more that you read, the more things you will know.", author: "Dr. Seuss" },
        { text: "Books are a uniquely portable magic.",             author: "Stephen King" },
        { text: "A book is a dream that you hold in your hand.",   author: "Neil Gaiman" },
        { text: "Reading is to the mind what exercise is to the body.", author: "Joseph Addison" },
        { text: "Not all those who wander are lost.",              author: "J.R.R. Tolkien" }
    ]
};


let favorites   = [];
let quoteIndex  = 0;
let currentPage = "home";


function toggleLang() {
    currentLang = (currentLang === 'ar') ? 'en' : 'ar';
    applyLang();
    refreshQuote();
    renderFeatured();
    renderAll();
    renderCategories();
    if (currentPage === 'favorites') renderFavorites();
}

function applyLang() {
    const html = document.getElementById('html-root');
    const btn  = document.getElementById('lang-btn');

    if (currentLang === 'ar') {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        btn.textContent = 'EN';
        document.title  = 'مكتبة الندى';
    } else {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        btn.textContent = 'عربي';
        document.title  = 'Al-Nada Library';
    }
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[currentLang][key] !== undefined) el.textContent = i18n[currentLang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (i18n[currentLang][key] !== undefined) el.placeholder = i18n[currentLang][key];
    });
    const darkOpt = document.getElementById('dark-option');
    const isDark  = document.getElementById('body-root').classList.contains('dark');
    if (darkOpt) {
        darkOpt.innerHTML =
            '<span class="theme-icon">' + (isDark ? '☀️' : '🌙') + '</span>' +
            '<span data-i18n="' + (isDark ? 'theme_light' : 'theme_dark') + '">' +
            t(isDark ? 'theme_light' : 'theme_dark') + '</span>';
    }
}


function showPage(name) {
    document.querySelectorAll('.page').forEach(p => { p.style.display = 'none'; });
    const target = document.getElementById('page-' + name);
    if (target) target.style.display = 'block';
    currentPage = name;
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-nav') === name);
    });

    if (name === 'favorites') renderFavorites();

    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('primary-nav').classList.remove('show');
}


function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}


function makeStars(rating) {
    const full = Math.floor(rating);
    const half = (rating - full >= 0.5) ? '½' : '';
    return '★'.repeat(full) + half;
}


function makeCard(book) {
    const isFav    = favorites.includes(book.id);
    const heart    = isFav ? '❤️' : '🤍';
    const catLabel = t(catI18nMap[book.category] || book.category);
    const badge    = book.featured
        ? `<span class="card-featured-badge">${t('featured_badge')}</span>`
        : '';

    return `
        <article class="book-card" onclick="openModal(${book.id})" tabindex="0"
                 role="button" aria-label="${book.title}">
            <div class="card-top">
                <img src="${book.thumb}" alt="${book.title}" loading="lazy">
                ${badge}
            </div>
            <div class="card-info">
                <div class="card-cat">${catLabel}</div>
                <div class="card-title">${book.title}</div>
                <div class="card-author">${t('by_author')} ${book.author}</div>
                <div class="card-bottom">
                    <span class="card-rating">
                        ${makeStars(book.rating)}
                        <span class="rating-num">${book.rating}</span>
                    </span>
                    <button class="heart-btn" id="hb-${book.id}"
                            onclick="event.stopPropagation(); toggleFav(${book.id})"
                            aria-label="${isFav ? t('remove_from_fav') : t('add_to_fav')}">
                        ${heart}
                    </button>
                </div>
            </div>
        </article>
    `;
}


function renderBooks(containerId, list) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (list.length === 0) {
        container.innerHTML = '<p class="empty-msg">' + t('no_books') + '</p>';
        return;
    }
    container.innerHTML = list.map(makeCard).join('');
}

function renderFeatured() {
    renderBooks('featured-books', books.filter(b => b.featured));
}

function renderAll(list) {
    if (!list) list = books;
    renderBooks('all-books', list);

    const info = document.getElementById('result-info');
    if (info) info.textContent = t('showing') + ' ' + list.length + ' ' + t('books_count');
}

function renderCategories() {
    const container = document.getElementById('cats-list');
    if (!container) return;

    container.innerHTML = categories.map(cat => {
        const count      = books.filter(b => b.category === cat.name).length;
        const label      = t(catI18nMap[cat.name] || cat.name);
        const countLabel = count + ' ' + (count === 1 ? t('book_word') : t('books_word'));
        return `
            <div class="cat-card" onclick="goToCategory('${cat.name}')" tabindex="0" role="button">
                <span class="cat-emoji" aria-hidden="true">${cat.emoji}</span>
                <div class="cat-name">${label}</div>
                <div class="cat-count">${countLabel}</div>
            </div>
        `;
    }).join('');
}

function renderFavorites() {
    const container = document.getElementById('fav-books');
    const msg       = document.getElementById('fav-msg');
    if (!container || !msg) return;

    if (favorites.length === 0) {
        container.innerHTML  = '';
        msg.style.display    = 'block';
    } else {
        msg.style.display    = 'none';
        const favBooks = favorites.map(id => books.find(b => b.id === id)).filter(Boolean);
        renderBooks('fav-books', favBooks);
    }
}


function toggleFav(id) {
    const idx = favorites.indexOf(id);
    if (idx === -1) {
        favorites.push(id);
        showToast(t('added_fav'));
    } else {
        favorites.splice(idx, 1);
        showToast(t('removed_fav'));
    }

    const isFav = favorites.includes(id);
    const hb = document.getElementById('hb-' + id);
    if (hb) {
        hb.textContent = isFav ? '❤️' : '🤍';
        hb.setAttribute('aria-label', isFav ? t('remove_from_fav') : t('add_to_fav'));
    }
    const mb = document.getElementById('m-fav-' + id);
    if (mb) mb.textContent = isFav ? t('remove_from_fav') : t('add_to_fav');
    document.getElementById('fav-count').textContent = favorites.length;

    if (currentPage === 'favorites') renderFavorites();
}


function applyFilter() {
    const cat    = document.getElementById('filter-cat').value;
    const sortBy = document.getElementById('sort-by').value;

    let result = (cat === 'all') ? [...books] : books.filter(b => b.category === cat);

    result.sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'year')   return b.year - a.year;
        return a.title.localeCompare(b.title);
    });

    renderAll(result);
}

function resetFilter() {
    document.getElementById('filter-cat').value = 'all';
    document.getElementById('sort-by').value    = 'title';
    renderAll(books);
}


function doSearch() {
    const query = document.getElementById('search-box').value.toLowerCase().trim();

    if (query === '') {
        showPage('books');
        renderAll(books);
        return;
    }

    const result = books.filter(b =>
        b.title.toLowerCase().includes(query) ||
        b.author.toLowerCase().includes(query) ||
        b.category.toLowerCase().includes(query) ||
        b.desc.toLowerCase().includes(query)
    );

    showPage('books');
    document.getElementById('filter-cat').value = 'all';
    renderAll(result);
}

function goToCategory(catName) {
    showPage('books');
    document.getElementById('filter-cat').value = catName;
    applyFilter();
}


function openModal(id) {
    const book = books.find(b => b.id === id);
    if (!book) return;

    const isFav    = favorites.includes(id);
    const favLabel = isFav ? t('remove_from_fav') : t('add_to_fav');
    const catLabel = t(catI18nMap[book.category] || book.category);

    let yearStr = book.year;
    if (book.year < 0) {
        yearStr = Math.abs(book.year) + (currentLang === 'ar' ? ' ق.م' : ' BC');
    }

    document.getElementById('modal-body').innerHTML = `
        <div class="m-img-box">
            <img src="${book.thumb}" alt="${book.title}">
        </div>
        <div class="m-content-box">
            <div class="card-cat" style="margin-bottom:0.5rem">${catLabel}</div>
            <h2 id="modal-title">${book.title}</h2>
            <p class="m-author">${t('by_author')} ${book.author}</p>
            <div class="m-tags">
                <span class="m-tag">⭐ ${book.rating}</span>
                <span class="m-tag">📅 ${yearStr}</span>
                <span class="m-tag">📄 ${book.pages} ${t('pages_word')}</span>
            </div>
            <p class="m-desc">${currentLang === 'ar' && book.desc_ar ? book.desc_ar : book.desc}</p>
            <button class="m-fav-btn" id="m-fav-${id}" onclick="toggleFav(${id})">${favLabel}</button>
        </div>
    `;

    const modal = document.getElementById('modal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        const closeBtn = document.getElementById('close-btn');
        if (closeBtn) closeBtn.focus();
    }, 150);
}

function closeModal() {
    document.getElementById('modal').classList.remove('open');
    document.body.style.overflow = '';
}
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});


function changeQuote() {
    const arr      = quotes[currentLang] || quotes.en;
    quoteIndex     = (quoteIndex + 1) % arr.length;
    const q        = arr[quoteIndex];
    const textEl   = document.getElementById('quote-text');
    const authorEl = document.getElementById('quote-author');

    textEl.style.opacity   = '0';
    authorEl.style.opacity = '0';

    setTimeout(() => {
        textEl.textContent   = q.text;
        authorEl.textContent = '— ' + q.author;
        textEl.style.opacity   = '1';
        authorEl.style.opacity = '1';
    }, 240);
}

function refreshQuote() {
    const arr = quotes[currentLang] || quotes.en;
    const q   = arr[quoteIndex % arr.length];
    document.getElementById('quote-text').textContent   = q.text;
    document.getElementById('quote-author').textContent = '— ' + q.author;
}


function toggleThemeMenu() {
    const menu  = document.getElementById('theme-menu');
    const btn   = document.getElementById('theme-btn');
    const isOpen = menu.style.display === 'block';
    menu.style.display = isOpen ? 'none' : 'block';
    btn.setAttribute('aria-expanded', String(!isOpen));
}

function setTheme(name) {
    const body   = document.getElementById('body-root');
    const isDark = body.classList.contains('dark');
    body.className = 'theme-' + name + (isDark ? ' dark' : '');
    document.getElementById('theme-menu').style.display = 'none';
}

function toggleDark() {
    const body   = document.getElementById('body-root');
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    const opt    = document.getElementById('dark-option');
    if (opt) {
        opt.innerHTML =
            '<span class="theme-icon">' + (isDark ? '☀️' : '🌙') + '</span>' +
            '<span data-i18n="' + (isDark ? 'theme_light' : 'theme_dark') + '">' +
            t(isDark ? 'theme_light' : 'theme_dark') + '</span>';
    }
    document.getElementById('theme-menu').style.display = 'none';
}
document.addEventListener('click', e => {
    const picker = document.getElementById('theme-picker');
    if (picker && !picker.contains(e.target)) {
        document.getElementById('theme-menu').style.display = 'none';
        document.getElementById('theme-btn').setAttribute('aria-expanded', 'false');
    }
});


function toggleMobileMenu() {
    const nav = document.getElementById('primary-nav');
    nav.classList.toggle('show');
    if (nav.classList.contains('show') && !document.getElementById('mobile-search-box')) {
        const searchDiv = document.createElement('div');
        searchDiv.className = 'mobile-search-wrap';
        searchDiv.id = 'mobile-search-wrap';
        searchDiv.innerHTML = `
            <div id="mobile-search-area" style="display:flex;width:100%;margin-top:0.6rem;padding-top:0.75rem;border-top:1px solid var(--c-border);">
                <input type="search" id="mobile-search-box" 
                       placeholder="${t('search_placeholder')}" 
                       aria-label="${t('search_placeholder')}"
                       autocomplete="off"
                       style="flex:1;padding:0.5rem 0.85rem;border:1px solid var(--c-border);border-right:none;border-radius:var(--radius-sm) 0 0 var(--radius-sm);background:var(--c-bg);color:var(--c-text);font-size:0.9rem;outline:none;font-family:inherit;">
                <button onclick="doMobileSearch()"
                        style="padding:0.5rem 0.85rem;border:1px solid var(--c-mid);background:var(--c-mid);color:white;border-radius:0 var(--radius-sm) var(--radius-sm) 0;cursor:pointer;display:flex;align-items:center;">
                    🔍
                </button>
            </div>
        `;
        nav.appendChild(searchDiv);
        const htmlDir = document.getElementById('html-root').getAttribute('dir');
        const mobileInput = document.getElementById('mobile-search-box');
        if (htmlDir === 'rtl' && mobileInput) {
            mobileInput.style.borderRight = '1px solid var(--c-border)';
            mobileInput.style.borderLeft = 'none';
            mobileInput.style.borderRadius = '0 var(--radius-sm) var(--radius-sm) 0';
            const mobileBtn = mobileInput.nextElementSibling;
            if (mobileBtn) mobileBtn.style.borderRadius = 'var(--radius-sm) 0 0 var(--radius-sm)';
        }
        mobileInput.addEventListener('keydown', e => {
            if (e.key === 'Enter') doMobileSearch();
        });
    }
    if (!nav.classList.contains('show')) {
        const mobileSearch = document.getElementById('mobile-search-wrap');
        if (mobileSearch) mobileSearch.remove();
    }
}

function doMobileSearch() {
    const mobileBox = document.getElementById('mobile-search-box');
    if (!mobileBox) return;
    const query = mobileBox.value.toLowerCase().trim();

    if (query === '') {
        showPage('books');
        renderAll(books);
        return;
    }

    const result = books.filter(b =>
        b.title.toLowerCase().includes(query) ||
        b.author.toLowerCase().includes(query) ||
        b.category.toLowerCase().includes(query) ||
        b.desc.toLowerCase().includes(query)
    );

    showPage('books');
    document.getElementById('filter-cat').value = 'all';
    renderAll(result);
}


function sendForm(event) {
    event.preventDefault();
    const name   = document.getElementById('f-name').value.trim();
    const email  = document.getElementById('f-email').value.trim();
    const msg    = document.getElementById('f-msg').value.trim();
    const result = document.getElementById('form-result');

    if (!name || !email || !msg) {
        result.className = 'error';
        result.textContent = t('form_fill');
        return;
    }
    if (!email.includes('@') || !email.includes('.')) {
        result.className = 'error';
        result.textContent = t('form_email_err');
        return;
    }

    result.className   = 'success';
    result.textContent = t('form_success') + ' ' + name + '. ' + t('form_success2');
    document.getElementById('contact-form').reset();
    setTimeout(() => { result.textContent = ''; result.className = ''; }, 5000);
}


function setupScrollTop() {
    const btn = document.getElementById('scroll-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


function setupHeaderScroll() {
    const header = document.getElementById('site-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 10);
    });
}


function setupKeyboard() {
    document.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            if (e.target.classList.contains('book-card')) e.target.click();
            if (e.target.classList.contains('cat-card'))  e.target.click();
        }
    });
}


function setupQuoteTransitions() {
    const textEl   = document.getElementById('quote-text');
    const authorEl = document.getElementById('quote-author');
    if (textEl)   textEl.style.transition   = 'opacity 0.24s ease';
    if (authorEl) authorEl.style.transition = 'opacity 0.24s ease';
}


function setupSearch() {
    const box = document.getElementById('search-box');
    if (box) {
        box.addEventListener('keydown', e => {
            if (e.key === 'Enter') doSearch();
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementById('body-root');
    const isDark = body.classList.contains('dark');
    if (isDark) {
        const opt = document.getElementById('dark-option');
        if (opt) {
            opt.innerHTML =
                '<span class="theme-icon">☀️</span>' +
                '<span data-i18n="theme_light">' + t('theme_light') + '</span>';
        }
    }
    applyLang();
    refreshQuote();
    renderFeatured();
    renderAll(books);
    renderCategories();
    showPage('home');
    setupScrollTop();
    setupHeaderScroll();
    setupKeyboard();
    setupQuoteTransitions();
    setupSearch();
});
