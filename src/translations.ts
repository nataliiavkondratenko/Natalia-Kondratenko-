export type Language = 'ua' | 'en' | 'ru';

export interface TranslationSchema {
  header: {
    name: string;
    role: string;
    nav: {
      about: string;
      areas: string;
      process: string;
      method: string;
      contacts: string;
    };
    contactButton: string;
    mobileContactsTitle: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    title: {
      line1: string;
      line2: string;
    };
    insight: string;
    control: string;
    start: string;
    description: {
      line1: string;
      line2: string;
    };
    cta: string;
    marquee: string[];
  };
  about: {
    badge: string;
    name: {
      first: string;
      last: string;
    };
    tags: string[];
    lead: string;
    paragraphs: [string, string, string, string];
    standardsTitle: string;
    standardsText: string;
    languagesTitle: string;
    languagesText: string;
  };
  areas: {
    badge: string;
    title: string;
    description: string;
    categories: {
      title: string;
      items: string[];
    }[];
  };
  process: {
    badge: string;
    title: {
      line1: string;
      line2: string;
      line3: string;
    };
    intro1: string;
    intro2: string;
    ctaButton: string;
    steps: {
      label: string;
      title: string;
      description: string;
    }[];
    forWhomLabel: string;
    forWhomText: string;
    marquee: string[];
    logistics: {
      title: {
        line1: string;
        line2: string;
      };
      subtitle: string;
      cards: string[];
      bottomNote: string;
      ctaButton: string;
    };
  };
  method: {
    badge: string;
    title: string;
    subtitle: {
      line1: string;
      line2: string;
    };
    points: {
      title: string;
      text: string;
    }[];
    quote: {
      title: string;
      caption: string;
      line1: string;
      line2: string;
    };
  };
  footer: {
    ctaCard: {
      line1: string;
      line2: string;
    };
    emailCard: {
      title: string;
      description: string;
      button: string;
    };
    messengerCard: {
      title: string;
      description: string;
      button: string;
    };
    marqueePill: string[];
    contactsTitle: string;
    practiceTitle: string;
    hoursLabel: string;
    hoursDays: string;
    hoursTime: string;
    phoneLabel: string;
    emailLabel: string;
    instagramLabel: string;
    facebookLabel: string;
    facebookName: string;
    copyrightName: string;
    copyrightSubtitle: string;
    allRightsReserved: string;
  };
  modal: {
    emailTitle: string;
    messengerTitle: string;
    allTitle: string;
    or: string;
    namePlaceholder: string;
    contactPlaceholder: string;
    messagePlaceholder: string;
    submitEmail: string;
    submitGeneral: string;
    submitting: string;
    successTitle: string;
    successDescription: string;
    successButton: string;
    errorName: string;
    errorContact: string;
    closeAria: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  ua: {
    header: {
      name: 'Наталія Кондратенко',
      role: 'Клінічний психолог • психотерапевт',
      nav: {
        about: 'Про мене',
        areas: 'Напрямки',
        process: 'Процес',
        method: 'Метод',
        contacts: 'Контакти',
      },
      contactButton: 'Обговорити свій запит',
      mobileContactsTitle: 'Контакти',
      menuOpen: 'Відкрити меню',
      menuClose: 'Закрити меню',
    },
    hero: {
      title: {
        line1: 'Коли звичні способи',
        line2: 'перестають працювати',
      },
      insight: 'Інтелект не рятує.',
      control: 'Контроль більше не дає результату.',
      start: 'З цього ми й починаємо роботу.',
      description: {
        line1: 'Індивідуальна психотерапія та консультації',
        line2: 'у психоаналітичному підході',
      },
      cta: 'ОБГОВОРИТИ СВІЙ ЗАПИТ',
      marquee: ['психоаналітичний підхід', 'професійна етика', 'конфіденційність'],
    },
    about: {
      badge: 'Про мене',
      name: {
        first: 'Наталія',
        last: 'Кондратенко',
      },
      tags: ['Магістр клінічної психології', 'Регулярна супервізія', 'Власний психоаналіз'],
      lead: 'Я - клінічний психолог і психотерапевт у психоаналітичному підході',
      paragraphs: [
        'Працюю з дорослими, з підлітками, з батьками. До мене звертаються з різним. Коли ситуації повторюються. Коли складно вплинути на те, що відбувається. Коли власний стан стає нестерпним - тривога, виснаження, розгубленість.',
        'Або коли з дитиною чи дорослими близькими відбувається те, що виходить з-під контролю: хвороба, залежність або поведінка, яку ви не можете змінити чи зрозуміти.',
        'У роботі ми не шукаємо швидких рішень. Дивимось, що насправді відбувається, і як це стає можливим.',
        'Я не заспокоюю і не даю простих відповідей. І це створює можливість для змін.',
      ],
      standardsTitle: 'Стандарти практики',
      standardsText: 'Маю понад 800 годин власного аналізу і регулярну супервізію.',
      languagesTitle: 'Мови роботи',
      languagesText: 'Працюю українською, російською та англійською мовами.',
    },
    areas: {
      badge: 'Напрямки',
      title: 'З якими ситуаціями до мене звертаються',
      description:
        'Запити можуть звучати по-різному, але в них повторюється одне: людина багато витримує, намагається контролювати ситуацію - і так раз за разом по колу.',
      categories: [
        {
          title: 'Відповідальність і виснаження',
          items: ['тиск відповідальності', 'складні рішення', 'хвороби дітей та інших близьких', 'зрив функціональності в роботі'],
        },
        {
          title: 'Стосунки',
          items: ['емоційне виснаження', 'конфлікти', 'ревнощі', 'відчуття, що «все тримається на мені»'],
        },
        {
          title: 'Батьківство і складні ситуації з дітьми',
          items: ['булінг', 'самоушкодження', 'втрата контакту', 'істерики, агресія, конфлікти з вчителями'],
        },
        {
          title: 'Майбутні та молоді батьки',
          items: ['пошук здорової структури сім’ї', 'страх повторення досвіду власного дитинства', 'труднощі з межами та правилами', 'як відрізнити любов від дитиноцентричності'],
        },
      ],
    },
    process: {
      badge: 'Процес',
      title: {
        line1: 'Кілька',
        line2: 'перших',
        line3: 'зустрічей',
      },
      intro1: 'Думка про психотерапію з’являється. Але незрозуміло, з чого почати, та чи варто.',
      intro2: 'Можна почати з кількох перших розмов, щоб проаналізувати свою ситуацію і вирішити, чи хочете ви продовжити роботу.',
      ctaButton: 'Можемо почати з однієї розмови',
      steps: [
        {
          label: 'Формат',
          title: '3-4 індивідуальні зустрічі',
          description: 'Кількість і частота зустрічей обговорюються індивідуально. Стандартна тривалість - 50 хвилин.',
        },
        {
          label: 'Що відбувається',
          title: 'Розмова про вашу ситуацію',
          description: 'Ви розповідаєте про те, що вас привело, і ми разом дивимось, що саме турбує і як це вбудовано в ваше життя.',
        },
        {
          label: 'Що стає зрозуміліше',
          title: 'Прояснення тем і запиту',
          description: 'Розуміємо, що саме призвело до звернення, які теми повторюються та чи підходить вам така форма роботи.',
        },
        {
          label: 'Що далі',
          title: 'Рішення про продовження',
          description: 'Стає зрозуміліше, чи починати регулярну терапію, зробити паузу, або завершити на цьому етапі.',
        },
      ],
      forWhomLabel: 'Для кого це',
      forWhomText: 'Цей формат підходить, якщо ви вагаєтесь, чи варто починати терапію, але хочете розібратися з тим, що відбувається, і дати собі можливість спробувати.',
      marquee: ['психоаналітичний підхід', 'професійна етика', 'конфіденційність'],
      logistics: {
        title: {
          line1: 'Щоб не ускладнювати',
          line2: 'те, що і так складно',
        },
        subtitle: 'Я приділяю увагу не тільки самій роботі, а й тому, щоб вона була організована передбачувано і надійно.',
        cards: [
          'Ми домовляємося про стабільний час і будуємо роботу послідовно.',
          'Запис, оплату і формат ми узгоджуємо наперед, і це не створює додаткового навантаження в процесі.',
          'Я працюю з клієнтами з різних країн, тому пропоную зручні способи оплати без зайвих технічних складнощів.',
        ],
        bottomNote: 'Це дозволяє зосередитися на тому, заради чого ви приходите.',
        ctaButton: 'Можемо почати з однієї розмови',
      },
    },
    method: {
      badge: 'Метод',
      title: 'Чому психоаналітичний підхід',
      subtitle: {
        line1: 'Психоаналітична психотерапія працює не лише з симптомами,',
        line2: 'а з причинами.',
      },
      points: [
        {
          title: 'ЗУСИЛЛЯ',
          text: 'Часто людина намагається змінити ситуацію через контроль, зусилля, раціональне пояснення, певні вправи, чек-лісти чи техніки.',
        },
        {
          title: 'ПОВТОРЕННЯ',
          text: 'Психоаналітична терапія дозволяє побачити, що саме в цих ситуаціях повторюється.',
        },
        {
          title: 'ТРАНСФОРМАЦІЯ',
          text: 'Психоаналітична робота допомагає людині змінити не лише ситуацію, а й свій власний спосіб жити з нею.',
        },
      ],
      quote: {
        title: '«Довго, дорого і назавжди»',
        caption: 'так іноді говорять про психоаналіз',
        line1: 'Але «назавжди» тут не про безкінечну терапію.',
        line2: 'Це про зміни, які з часом вбудовуються у спосіб життя і продовжують працювати поза терапією.',
      },
    },
    footer: {
      ctaCard: {
        line1: 'Одна розмова може дати більше ясності.',
        line2: 'А може стати початком більш глибокої роботи.',
      },
      emailCard: {
        title: 'Обговорити свій запит',
        description: 'Напишіть мені, щоб ми могли підібрати зручний час для знайомства.',
        button: 'Відправити email',
      },
      messengerCard: {
        title: 'Написати в WhatsApp / Telegram',
        description: 'Швидкий спосіб отримати відповідь у зручному для вас месенджері.',
        button: 'Написати зараз',
      },
      marqueePill: ['психоаналітичний підхід', 'професійна етика', 'конфіденційність'],
      contactsTitle: 'Контакти',
      practiceTitle: 'Кабінет психоаналізу',
      hoursLabel: 'Прийом',
      hoursDays: 'Пн-Сб',
      hoursTime: '08:00 - 21:00',
      phoneLabel: 'Телефон',
      emailLabel: 'Email',
      instagramLabel: 'Instagram',
      facebookLabel: 'Facebook',
      facebookName: 'Наталія Кондратенко',
      copyrightName: '2026 Наталія Кондратенко.',
      copyrightSubtitle: 'Психоаналітична терапія.',
      allRightsReserved: 'Всі права захищені',
    },
    modal: {
      emailTitle: 'Надіслати запит на email',
      messengerTitle: 'Написати в WhatsApp / Telegram',
      allTitle: 'Оберіть зручний спосіб зв\'язку',
      or: 'АБО',
      namePlaceholder: "Ваше ім'я",
      contactPlaceholder: 'Телефон або email',
      messagePlaceholder: 'Коротко про запит',
      submitEmail: 'Відправити email',
      submitGeneral: 'Відправити',
      submitting: 'Надсилання...',
      successTitle: 'Надіслано успішно!',
      successDescription: "Дякую за звернення! Ваше повідомлення прийнято. Я отримаю його на адресу nataliia.v.kondratenko@gmail.com та зв'яжуся з вами найближчим часом для узгодження часу зустрічі.",
      successButton: 'Зрозуміло',
      errorName: "Будь ласка, вкажіть ваше ім'я",
      errorContact: 'Будь ласка, вкажіть телефон або email',
      closeAria: 'Закрити модальне вікно',
    },
  },

  en: {
    header: {
      name: 'Nataliia Kondratenko',
      role: 'CLINICAL PSYCHOLOGIST · PSYCHOTHERAPIST',
      nav: {
        about: 'ABOUT ME',
        areas: 'AREAS OF WORK',
        process: 'PROCESS',
        method: 'APPROACH',
        contacts: 'CONTACT',
      },
      contactButton: 'DISCUSS STARTING THERAPY',
      mobileContactsTitle: 'CONTACT',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    hero: {
      title: {
        line1: 'When what used to work',
        line2: 'no longer does',
      },
      insight: 'Insight is no longer enough.',
      control: 'Control no longer works.',
      start: 'This is where our work begins.',
      description: {
        line1: 'Individual psychotherapy and consultations',
        line2: 'within a psychoanalytic approach',
      },
      cta: 'DISCUSS STARTING THERAPY',
      marquee: ['PSYCHOANALYTIC APPROACH', 'PROFESSIONAL ETHICS', 'CONFIDENTIALITY'],
    },
    about: {
      badge: 'ABOUT ME',
      name: {
        first: 'Nataliia',
        last: 'Kondratenko',
      },
      tags: ['MASTER’S DEGREE IN CLINICAL PSYCHOLOGY', 'REGULAR SUPERVISION', 'PERSONAL PSYCHOANALYSIS'],
      lead: 'I am a clinical psychologist and psychotherapist working within a psychoanalytic approach',
      paragraphs: [
        'I work with adults, adolescents, and parents. People come to me for different reasons. When the same situations keep repeating. When it becomes difficult to influence what is happening. When their own emotional state becomes unbearable - anxiety, exhaustion, feeling drained.',
        'Or when something involving a child or someone close to you feels beyond control: illness, addiction, or behaviour you cannot change or understand.',
        'In our work, we do not rely on quick solutions. We look at what is actually happening and how it has become possible.',
        'I do not offer reassurance, advice, or easy answers. This creates the possibility for change.',
      ],
      standardsTitle: 'PROFESSIONAL PRACTICE',
      standardsText: 'I have completed over 800 hours of personal analysis and receive regular supervision.',
      languagesTitle: 'LANGUAGES',
      languagesText: 'I work in Ukrainian, Russian, and English.',
    },
    areas: {
      badge: 'AREAS OF WORK',
      title: 'What people come to me with',
      description:
        'The reasons people seek therapy may sound very different, but one pattern often repeats: they carry a great deal, try to keep the situation under control - and find themselves going through the same cycle again and again.',
      categories: [
        {
          title: 'Responsibility and exhaustion',
          items: ['the burden of responsibility', 'difficult decisions', 'illness of a child or other loved one', 'reduced ability to function at work'],
        },
        {
          title: 'Relationships',
          items: ['emotional exhaustion', 'conflict', 'jealousy', 'feeling like “everything is on my shoulders”'],
        },
        {
          title: 'Parenting and difficult situations with children',
          items: ['bullying', 'self-harm', 'loss of connection', 'outbursts, aggression, conflicts with teachers'],
        },
        {
          title: 'Expectant and new parents',
          items: ['developing a healthy family structure', 'fear of repeating patterns from their own childhood', 'difficulties with boundaries and rules', 'distinguishing love from child-centredness'],
        },
      ],
    },
    process: {
      badge: 'PROCESS',
      title: {
        line1: 'The first',
        line2: 'few',
        line3: 'sessions',
      },
      intro1: 'You may have been thinking about psychotherapy, but feel unsure how to start or whether it is right for you.',
      intro2: 'We can begin with a few initial conversations to look at your situation and for you to decide whether you would like to continue.',
      ctaButton: 'WE CAN START WITH ONE CONVERSATION',
      steps: [
        {
          label: 'FORMAT',
          title: '3-4 initial sessions',
          description: 'The number and frequency of sessions are discussed individually. A standard session lasts 50 minutes.',
        },
        {
          label: 'WHAT HAPPENS',
          title: 'A conversation about your situation',
          description: 'You tell me what is happening, and together we look at what is troubling you and how it is embedded in your life.',
        },
        {
          label: 'WHAT BECOMES CLEARER',
          title: 'Clarifying the themes',
          description: 'We begin to understand what led you to seek therapy, which themes keep recurring, and whether this way of working feels right for you.',
        },
        {
          label: 'WHAT COMES NEXT',
          title: 'Deciding whether to continue',
          description: 'It becomes clearer whether to begin regular therapy, take a pause, or stop at this stage.',
        },
      ],
      forWhomLabel: 'WHO THIS IS FOR',
      forWhomText: 'This format may suit you if you are unsure whether to begin therapy, but would like to understand what is happening and give yourself a chance to try.',
      marquee: ['PSYCHOANALYTIC APPROACH', 'PROFESSIONAL ETHICS', 'CONFIDENTIALITY'],
      logistics: {
        title: {
          line1: 'WITHOUT MAKING THINGS',
          line2: 'MORE COMPLICATED',
        },
        subtitle: 'I pay attention to the work itself as well as to keeping the process clear, predictable and reliable.',
        cards: [
          'We agree on a regular time and keep the work consistent and structured.',
          'Scheduling, payment and the format of our work are agreed in advance, so they do not create additional strain during the process.',
          'I work with clients from different countries, so I offer convenient payment options without unnecessary technical complications.',
        ],
        bottomNote: 'This allows you to focus on the work itself.',
        ctaButton: 'WE CAN START WITH ONE CONVERSATION',
      },
    },
    method: {
      badge: 'APPROACH',
      title: 'WHY A PSYCHOANALYTIC APPROACH',
      subtitle: {
        line1: 'Psychoanalytic psychotherapy works not only with symptoms,',
        line2: 'but with what lies behind them.',
      },
      points: [
        {
          title: 'EFFORT',
          text: 'People often try to change a situation through control, effort, rationalisation, or by turning to exercises, checklists and techniques.',
        },
        {
          title: 'REPETITION',
          text: 'Psychoanalytic therapy makes it possible to see what exactly keeps repeating in these situations.',
        },
        {
          title: 'TRANSFORMATION',
          text: 'It is not only the situation that psychoanalytic work can change, but also the way a person lives with it.',
        },
      ],
      quote: {
        title: '“Long, expensive and forever”',
        caption: 'as psychoanalysis is sometimes described',
        line1: 'But “forever” here is not about endless therapy.',
        line2: 'It is about changes that, over time, become part of the way you live and continue to work beyond therapy.',
      },
    },
    footer: {
      ctaCard: {
        line1: 'One conversation can bring more clarity.',
        line2: 'Or it can become the beginning of deeper work.',
      },
      emailCard: {
        title: 'Discuss starting therapy',
        description: 'Write to me so we can find a convenient time for an initial conversation.',
        button: 'SEND AN EMAIL',
      },
      messengerCard: {
        title: 'Contact me via WhatsApp / Telegram',
        description: 'A quick way to get a response in the messenger that works best for you.',
        button: 'MESSAGE ME',
      },
      marqueePill: ['PSYCHOANALYTIC APPROACH', 'PROFESSIONAL ETHICS', 'CONFIDENTIALITY'],
      contactsTitle: 'Contact',
      practiceTitle: 'Psychoanalytic practice',
      hoursLabel: 'HOURS',
      hoursDays: 'Mon-Sat',
      hoursTime: '08:00 - 21:00',
      phoneLabel: 'PHONE',
      emailLabel: 'EMAIL',
      instagramLabel: 'INSTAGRAM',
      facebookLabel: 'FACEBOOK',
      facebookName: 'Nataliia Kondratenko',
      copyrightName: '2026 NATALIIA KONDRATENKO.',
      copyrightSubtitle: 'PSYCHOANALYTIC THERAPY.',
      allRightsReserved: 'ALL RIGHTS RESERVED',
    },
    modal: {
      emailTitle: 'Send a request via email',
      messengerTitle: 'Contact via WhatsApp / Telegram',
      allTitle: 'Choose a convenient way to connect',
      or: 'OR',
      namePlaceholder: 'Your name',
      contactPlaceholder: 'Phone or email',
      messagePlaceholder: 'Brief description of your request',
      submitEmail: 'Send email',
      submitGeneral: 'Send',
      submitting: 'Sending...',
      successTitle: 'Sent successfully!',
      successDescription: 'Thank you for getting in touch! Your message has been received. I will receive it at nataliia.v.kondratenko@gmail.com and reach out to you shortly to schedule an initial conversation.',
      successButton: 'Got it',
      errorName: 'Please enter your name',
      errorContact: 'Please enter your phone or email',
      closeAria: 'Close modal window',
    },
  },

  ru: {
    header: {
      name: 'Наталия Кондратенко',
      role: 'КЛИНИЧЕСКИЙ ПСИХОЛОГ · ПСИХОТЕРАПЕВТ',
      nav: {
        about: 'ОБО МНЕ',
        areas: 'НАПРАВЛЕНИЯ',
        process: 'ПРОЦЕСС',
        method: 'МЕТОД',
        contacts: 'КОНТАКТЫ',
      },
      contactButton: 'ОБСУДИТЬ СВОЙ ЗАПРОС',
      mobileContactsTitle: 'КОНТАКТЫ',
      menuOpen: 'Открыть меню',
      menuClose: 'Закрыть меню',
    },
    hero: {
      title: {
        line1: 'Когда привычные способы',
        line2: 'не срабатывают',
      },
      insight: 'Интеллект не спасает.',
      control: 'Контроль больше не дает результата.',
      start: 'С этого мы и начинаем работу.',
      description: {
        line1: 'Индивидуальная психотерапия и консультации',
        line2: 'в психоаналитическом подходе',
      },
      cta: 'ОБСУДИТЬ СВОЙ ЗАПРОС',
      marquee: ['ПСИХОАНАЛИТИЧЕСКИЙ ПОДХОД', 'ПРОФЕССИОНАЛЬНАЯ ЭТИКА', 'КОНФИДЕНЦИАЛЬНОСТЬ'],
    },
    about: {
      badge: 'ОБО МНЕ',
      name: {
        first: 'Наталия',
        last: 'Кондратенко',
      },
      tags: ['МАГИСТР КЛИНИЧЕСКОЙ ПСИХОЛОГИИ', 'РЕГУЛЯРНАЯ СУПЕРВИЗИЯ', 'СОБСТВЕННЫЙ ПСИХОАНАЛИЗ'],
      lead: 'Я - клинический психолог и психотерапевт в психоаналитическом подходе',
      paragraphs: [
        'Работаю со взрослыми, с подростками, с родителями. Ко мне обращаются с разным. Когда ситуации повторяются. Когда сложно повлиять на то, что происходит. Когда собственное состояние становится невыносимым - тревога, растерянность, нет сил.',
        'Или когда с ребёнком или близким взрослым происходит то, что выходит из-под контроля: болезнь, зависимость или поведение, которое вы не можете изменить или понять.',
        'В работе мы не ищем быстрых решений. Смотрим, что на самом деле происходит, и как это становится возможным.',
        'Я не успокаиваю, не даю советов или простых решений. И это создаёт возможность для изменений.',
      ],
      standardsTitle: 'СТАНДАРТЫ И ПРАКТИКА',
      standardsText: 'У меня более 800 часов собственного анализа и регулярная супервизия.',
      languagesTitle: 'ЯЗЫКИ РАБОТЫ',
      languagesText: 'Работаю на украинском, русском и английском языках.',
    },
    areas: {
      badge: 'НАПРАВЛЕНИЯ',
      title: 'С какими ситуациями ко мне обращаются',
      description:
        'Запросы могут звучать по-разному, но в них повторяется одно: человек многое выдерживает, пытается контролировать ситуацию - и так раз за разом по кругу.',
      categories: [
        {
          title: 'Ответственность и истощение',
          items: ['груз ответственности', 'трудные решения', 'болезнь ребенка или других близких', 'снижение функциональности в работе'],
        },
        {
          title: 'Отношения',
          items: ['эмоциональное истощение', 'конфликты', 'ревность', 'ощущение, что «всё держится на мне»'],
        },
        {
          title: 'Родительство и сложные ситуации с детьми',
          items: ['буллинг', 'самоповреждение', 'потеря контакта', 'истерики, агрессия, конфликты с учителями'],
        },
        {
          title: 'Будущие и молодые родители',
          items: ['поиск здоровой структуры семьи', 'страх повторения опыта собственного детства', 'трудности с границами и правилами', 'как отличить любовь от детоцентричности'],
        },
      ],
    },
    process: {
      badge: 'ПРОЦЕСС',
      title: {
        line1: 'Несколько',
        line2: 'первых',
        line3: 'встреч',
      },
      intro1: 'Мысль о психотерапии появляется. Но непонятно, с чего начать, и стоит ли.',
      intro2: 'Можно начать с нескольких первых разговоров, чтобы проанализировать свою ситуацию и решить, хотите ли вы продолжать работу.',
      ctaButton: 'МОЖЕМ НАЧАТЬ С ОДНОГО РАЗГОВОРА',
      steps: [
        {
          label: 'ФОРМАТ',
          title: '3-4 индивидуальные встречи',
          description: 'Количество и частота встреч обсуждаются индивидуально. Стандартная продолжительность - 50 минут.',
        },
        {
          label: 'ЧТО ПРОИСХОДИТ',
          title: 'Разговор о вашей ситуации',
          description: 'Вы рассказываете о том, что вас привело, и мы вместе смотрим, что именно беспокоит и как это встроено в вашу жизнь.',
        },
        {
          label: 'ЧТО СТАНОВИТСЯ ПОНЯТНЕЕ',
          title: 'Прояснение тем и запроса',
          description: 'Понимаем, что именно привело к обращению, какие темы повторяются и подходит ли вам такая форма работы.',
        },
        {
          label: 'ЧТО ДАЛЬШЕ',
          title: 'Решение о продолжении',
          description: 'Становится понятнее, начать ли регулярную терапию, сделать паузу или завершить на этом этапе.',
        },
      ],
      forWhomLabel: 'ДЛЯ КОГО ЭТО',
      forWhomText: 'Этот формат подходит, если вы сомневаетесь, стоит ли начинать терапию, но хотите разобраться с тем, что происходит, и дать себе возможность попробовать.',
      marquee: ['ПСИХОАНАЛИТИЧЕСКИЙ ПОДХОД', 'ПРОФЕССИОНАЛЬНАЯ ЭТИКА', 'КОНФИДЕНЦИАЛЬНОСТЬ'],
      logistics: {
        title: {
          line1: 'ЧТОБЫ НЕ УСЛОЖНЯТЬ ТО,',
          line2: 'ЧТО И ТАК СЛОЖНО',
        },
        subtitle: 'Я уделяю внимание не только самой работе, но и тому, чтобы она была организована предсказуемо и надежно.',
        cards: [
          'Мы договариваемся о стабильном времени и выстраиваем работу последовательно.',
          'Запись, оплату и формат согласовываем заранее, и это не создает дополнительной нагрузки в процессе.',
          'Я работаю с клиентами из разных стран, поэтому предлагаю удобные способы оплаты без лишних технических сложностей.',
        ],
        bottomNote: 'Это позволяет сосредоточиться на том, ради чего вы приходите.',
        ctaButton: 'МОЖЕМ НАЧАТЬ С ОДНОГО РАЗГОВОРА',
      },
    },
    method: {
      badge: 'МЕТОД',
      title: 'ПОЧЕМУ ПСИХОАНАЛИТИЧЕСКИЙ ПОДХОД',
      subtitle: {
        line1: 'Психоаналитическая психотерапия работает не только с симптомами,',
        line2: 'а с причинами.',
      },
      points: [
        {
          title: 'УСИЛИЯ',
          text: 'Люди часто пытаются изменить ситуацию через контроль, усилия, рационализацию; нередко - через упражнения, чек-листы или техники.',
        },
        {
          title: 'ПОВТОРЕНИЕ',
          text: 'Психоаналитическая терапия позволяет увидеть, что именно в этих ситуациях повторяется.',
        },
        {
          title: 'ТРАНСФОРМАЦИЯ',
          text: 'Психоаналитическая работа помогает человеку изменить не только ситуацию, но и свой собственный способ жить с ней.',
        },
      ],
      quote: {
        title: '«Долго, дорого и навсегда»',
        caption: 'так иногда говорят о психоанализе',
        line1: 'Но «навсегда» здесь не о бесконечной терапии.',
        line2: 'Речь об изменениях, которые со временем встраиваются в образ жизни и продолжают работать вне терапии.',
      },
    },
    footer: {
      ctaCard: {
        line1: 'Один разговор может дать больше ясности.',
        line2: 'А может стать началом глубокой работы.',
      },
      emailCard: {
        title: 'Обсудить свой запрос',
        description: 'Напишите мне, чтобы мы могли подобрать удобное время для знакомства.',
        button: 'Отправить email',
      },
      messengerCard: {
        title: 'Написать в WhatsApp / Telegram',
        description: 'Быстрый способ получить ответ в удобном для вас мессенджере.',
        button: 'Написать сейчас',
      },
      marqueePill: ['ПСИХОАНАЛИТИЧЕСКИЙ ПОДХОД', 'ПРОФЕССИОНАЛЬНАЯ ЭТИКА', 'КОНФИДЕНЦИАЛЬНОСТЬ'],
      contactsTitle: 'Контакты',
      practiceTitle: 'Кабинет психоанализа',
      hoursLabel: 'ПРИЁМ',
      hoursDays: 'Пн-Сб',
      hoursTime: '08:00 - 21:00',
      phoneLabel: 'ТЕЛЕФОН',
      emailLabel: 'EMAIL',
      instagramLabel: 'INSTAGRAM',
      facebookLabel: 'FACEBOOK',
      facebookName: 'Наталия Кондратенко',
      copyrightName: '2026 НАТАЛИЯ КОНДРАТЕНКО.',
      copyrightSubtitle: 'ПСИХОАНАЛИТИЧЕСКАЯ ТЕРАПИЯ.',
      allRightsReserved: 'ВСЕ ПРАВА ЗАЩИЩЕНЫ',
    },
    modal: {
      emailTitle: 'Отправить запрос на email',
      messengerTitle: 'Написать в WhatsApp / Telegram',
      allTitle: 'Выберите удобный способ связи',
      or: 'ИЛИ',
      namePlaceholder: 'Ваше имя',
      contactPlaceholder: 'Телефон или email',
      messagePlaceholder: 'Коротко о запросе',
      submitEmail: 'Отправить email',
      submitGeneral: 'Отправить',
      submitting: 'Отправка...',
      successTitle: 'Успешно отправлено!',
      successDescription: 'Спасибо за обращение! Ваше сообщение принято. Я получу его на адрес nataliia.v.kondratenko@gmail.com и свяжусь с вами в ближайшее время для согласования времени встречи.',
      successButton: 'Понятно',
      errorName: 'Пожалуйста, укажите ваше имя',
      errorContact: 'Пожалуйста, укажите телефон или email',
      closeAria: 'Закрыть модальное окно',
    },
  },
};
