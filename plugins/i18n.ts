import { createI18n } from "vue-i18n";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    messages: {
      en: {
        header: {
          about: "About",
          experience: "Experience",
          projects: "My Projects",
        },
        hero: {
          titleName: "Hi, I'm <span class='accent'>Valery Meshkov</span>.",
          description:
            "Creative web developer specializing in <span class='accent'>UI/UX</span>.",
        },
        about: {
          about: "About",
          aboutMe: "About me",
          text1:
            "За первые 5 лет моей карьеры в качестве <span class='accent'>Frontend Engineer</span> я имел огромное удовольствие внести значительный вклад в создание интерфейса более чем 15 веб-сайтов, включая платформы маркетинга и электронной коммерции.",
          text2:
            "<span class='accent'>Внешняя разработка</span> удовлетворяет перетягивание каната между левым и правым полушариями моего мозга. Это действительно стало моей <span class='accent'>страстью</span> - решать проблемы с <span class='accent'>кодом</span> и одновременно создавать произведение <span class='accent'>искусства</span>!",
          skills: "Skills",
          skillsDescription:
            "The main technologies that I <span class='accent'>used</span> while working on projects:",
          experience: "See Experience",
        },
        experience: {
          experience: "Experience",
          projects: "See Projects",
          sendnow: {
            name: "<span class='accent'>Sendnow</span>",
            time: "( July-2024 - March-2025 )",
            linkMain: "<span class='accent'>https://sendnow.money</span>",
            linkApp: "<span class='accent'>https://sendnow.money/app</span>",
            title1: "Sites where development took place:",
            text1: "<span class='accent'>Landing</span>",
            text2: "(company page to attract users);",
            text3: "<span class='accent'>Platform</span>",
            text4:
              "(development and project from scratch, auth, creating transactions for various providers, display of transaction history, user settings); <br /> <br />",
            technologies:
              "Technologies used: <span class='accent'>React, Typescript, Vite</span>",
          },
          citronus: {
            name: "<span class='accent'>Citronus</span>",
            time: "( January-2024 - July-2024 )",
            linkMain: "<span class='accent'>https://citronus.com</span>",
            title1: "The site where the development was carried out ",
            text1:
              "<br /> Sections:<br/> <span class='accent'>Spot-trading</span> (Chart, Order book, Buy, Sell, Open orders, Order history, Trade history, Funds); <br/> <span class='accent'>Wallet</span> (Overview, Spot, Funding, Transactions History); <br /> <br />",
            technologies:
              "Technologies used: <span class='accent'>React, Typescript, Ant Design</span>",
          },
          letit: {
            name: "<span class='accent'>Letit</span>",
            time: "( January-2024 - July-2024 )",
            title1: "The site where the development was carried out ",
            linkMain: "<span class='accent'>https://kit.letit.app</span>",
            text1:
              "<br/>Sections:<br/> <span class='accent'>Admin</span> (information about users, transactions, referral bonuses); <br/><span class='accent'>Dashboard </span>(calendar with history of trades and charts); <br/><span class='accent'>Trader's diary </span> (display of position history, display of open positions); <br/><span class='accent'>Positions</span> (display of transactions, fundings on the chart); <br/><span class='accent'>Trading terminal </span> purchase and sale of assets, displaying charts (drawing entry and exit points for trades); <br/><span class='accent'>Wallets, balances</span> (spots, futures) from the exchanges; <br/><span class='accent'>Referral system</span> <br/><br/>",
            technologies:
              "Technologies used: <span class='accent'>React, Typescript, Ant Design</span>",
          },
          bsl: {
            name: "<span class='accent'>Bsl</span>",
            time: "( September-2019 - December-2022 )",
            text1:
              "Worked with <span class='accent'>large</span> projects ( Worldskills, Pike, Netfi, Delta, МОК линзы, Hoff, Магнит, Много лосося, Eyefood) <br/> Gained <span class='accent'>extensive</span> experience working with different <span class='accent'>teams</span>, different <span class='accent'>technologies</span> and <span class='accent'>libraries</span>",
          },
          verv: {
            name: "<span class='accent'>Verv</span>",
            time: "( August-2018 - August-2019 )",
            text1:
              "Actively participated in the <span class='accent'>development</span> of content for website and the Running, Walking, Meditate, Sleep applications",
          },
        },
        projects: {
          someWork: "Some Work",
          description:
            "While most of my signifcant work has been done for employers and is not displayed here, here are some projects that live in my Github.",
        },
        footer: {
          ps: "Designed & built by <span class='accent'>Valery Meshkov</span>",
        },
      },
      ru: {
        header: {
          about: "Обо мне",
          experience: "Опыт",
          projects: "Мои проекты",
        },
        hero: {
          titleName: "Привет, я <span class='accent'>Валерий Мешков</span>.",
          description:
            "Креативный веб-разработчик, специализирующийся на <span class='accent'>UI/UX</span>.",
        },
        about: {
          about: "Обо мне",
          aboutMe: "О себе",
          text1:
            "За первые 5 лет моей карьеры в качестве <span class='accent'>Frontend Engineer</span> я имел огромное удовольствие внести значительный вклад в создание интерфейса более чем 15 веб-сайтов, включая платформы маркетинга и электронной коммерции.",
          text2:
            "<span class='accent'>Frontend-разработка</span> удовлетворяет противостояние между левым и правым полушариями моего мозга. Это действительно стало моей <span class='accent'>страстью</span> - решать задачи с помощью <span class='accent'>кода</span> и одновременно создавать произведение <span class='accent'>искусства</span>!",
          skills: "Навыки",
          skillsDescription:
            "Основные технологии, которые я <span class='accent'>использовал</span> при работе над проектами:",
          experience: "Смотреть опыт работы",
        },
        experience: {
          experience: "Опыт работы",
          projects: "Смотреть проекты",
          sendnow: {
            name: "<span class='accent'>Sendnow</span>",
            time: "( Июль 2024 - Март 2025 )",
            linkMain: "<span class='accent'>https://sendnow.money</span>",
            linkApp: "<span class='accent'>https://sendnow.money/app</span>",
            title1: "Сайты, над которыми велась разработка:",
            text1: "<span class='accent'>Лендинг</span>",
            text2: "(корпоративная страница для привлечения пользователей);",
            text3: "<span class='accent'>Платформа</span>",
            text4:
              "(разработка проекта с нуля, авторизация, создание транзакций для различных провайдеров, отображение истории транзакций, настройки пользователя); <br /><br />",
            technologies:
              "Использованные технологии: <span class='accent'>React, Typescript, Vite</span>",
          },
          citronus: {
            name: "<span class='accent'>Citronus</span>",
            time: "( Январь 2024 - Июль 2024 )",
            linkMain: "<span class='accent'>https://citronus.com</span>",
            title1: "Сайт, над которым велась разработка ",
            text1:
              "<br /> Разделы:<br/> <span class='accent'>Спот-трейдинг</span> (График, Книга ордеров, Покупка, Продажа, Открытые ордера, История ордеров, История сделок, Средства); <br/> <span class='accent'>Кошелек</span> (Обзор, Спот, Финансирование, История транзакций); <br /> <br />",
            technologies:
              "Использованные технологии: <span class='accent'>React, Typescript, Ant Design</span>",
          },
          letit: {
            name: "<span class='accent'>Letit</span>",
            time: "( Январь 2024 - Июль 2024 )",
            title1: "Сайт, над которым велась разработка ",
            linkMain: "<span class='accent'>https://kit.letit.app</span>",
            text1:
              "<br/>Разделы:<br/> <span class='accent'>Админ-панель</span> (информация о пользователях, транзакциях, реферальных бонусах); <br/><span class='accent'>Дашборд</span> (календарь с историей сделок и графиками); <br/><span class='accent'>Дневник трейдера</span> (отображение истории позиций, отображение открытых позиций); <br/><span class='accent'>Позиции</span> (отображение транзакций, финансирования на графике); <br/><span class='accent'>Торговый терминал</span> покупка и продажа активов, отображение графиков (отрисовка точек входа и выхода для сделок); <br/><span class='accent'>Кошельки, балансы</span> (спот, фьючерсы) с бирж; <br/><span class='accent'>Реферальная система</span> <br/><br/>",
            technologies:
              "Использованные технологии: <span class='accent'>React, Typescript, Ant Design</span>",
          },
          bsl: {
            name: "<span class='accent'>Bsl</span>",
            time: "( Сентябрь 2019 - Декабрь 2022 )",
            text1:
              "Работал с <span class='accent'>крупными</span> проектами (Worldskills, Pike, Netfi, Delta, МОК линзы, Hoff, Магнит, Много лосося, Eyefood) <br/> Получил <span class='accent'>обширный</span> опыт работы с разными <span class='accent'>командами</span>, различными <span class='accent'>технологиями</span> и <span class='accent'>библиотеками</span>",
          },
          verv: {
            name: "<span class='accent'>Verv</span>",
            time: "( Август 2018 - Август 2019 )",
            text1:
              "Активно участвовал в <span class='accent'>разработке</span> контента для веб-сайта и приложений Running, Walking, Meditate, Sleep",
          },
        },
        projects: {
          someWork: "Некоторые работы",
          description:
            "Хотя большая часть моих значимых работ была выполнена для работодателей и не представлена здесь, вот несколько проектов, которые живут в моем Github.",
        },
        footer: {
          ps: "Разработано и создано <span class='accent'>Валерием Мешковым</span>",
        },
      },
    },
  });

  vueApp.use(i18n);
});
