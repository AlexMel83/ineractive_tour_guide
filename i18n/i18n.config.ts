export default defineI18nConfig(() => ({
  fallbackLocale: 'uk',
  legacy: false,
  messages: {
    en: {
      header: {
        enter: 'Enter',
        title: 'Interactive tourist guide of Khmelnytskyi',
        subtitle:
          'This project is created to popularize tourist objects and cultural heritage of Khmelnytskyi region and integrate them with local services and transport infrastructure.',
        autorization_close: 'Close autorization form',
      },
      menu: {
        home: 'Home',
        about: 'About',
        mission: 'Mission and Vision',
        history: 'History of the project',
        team: 'Team',
        partners: 'Partners',
        contacts: 'Contacts',
        blog: 'Blog',
        objects: 'Tourist objects',
        routes: 'Tourist routes',
        heritage: 'Cultural heritage',
        industry: 'Creative industry',
        nature: 'Natural attractions',
        transport: 'Public transport',
        join: 'Join',
        services: 'Create a page for your services',
        feedback: 'Leave feedback and suggestions',
        donate: 'Make a donation',
        events: 'Visit our events',
        volunteer: 'Be a volunteer',
        newsletter: 'Subscribe',
        collaboration: 'Collaboration with us',
      },
      UserName: {
        cabinet: 'Cabinet',
        exit: 'Exit',
      },
      SearchInput: {
        placeholder: 'Search by name',
      },
      Map: {
        expandMap: 'Expand map',
        collapseMap: 'Collapse map',
        searchPlaceholder: 'Search',
        geoErrorTitle: 'Geolocation error',
        geoErrorClose: 'Close',
        panoramas: 'Panoramas',
        memories: 'Memories',
        coordinates: 'Coordinates:',
        latitude: 'Latitude:',
        longitude: 'Longitude:',
        inputTitle: 'Input title',
        inputAddress: 'Input address',
        address: 'Address:',
        createPlace: 'Define place',
      },
      ShareButtons: {
        sharedSocial: 'Sharing throug social media',
      },
      Panoramas: {
        collapse: 'Collapse panoramas',
        expand: 'Expand panoramas',
        created: 'Created:',
        updated: 'Updated:',
        shootingDate: 'Date of shooting:',
        see: 'See',
        address: 'Address:',
        addressNotAvailable: 'Address not available',
        description: 'Description:',
        back: 'Back',
        forward: 'Forward',
        loading: 'Loading panoramas...',
      },
      Footer: {
        contacts: 'Contact Information',
        social: 'Our social networks:',
        address: 'Avdiivka city, Molodijna street, 3A',
        terms: 'Terms of use',
        policy: 'Privacy policy',
        howToHelp: 'How to help',
        developer: 'Developed by Alexander Meleshko',
        copyright: '© 2025. All rights reserved.',
      },
      DonationServiceTerms: {
        title: 'Platform Terms of Use',
        contractTitle: 'CONTRACT of a public offer to provide a charitable donation',
        description:
          'This public offer to provide a charitable donation (hereinafter - the Offer) is addressed to an unspecified circle of individuals - natural and legal entities (hereinafter - the Benefactor), who are visitors to the website on the Internet: https://memory.pp.ua (hereinafter - the Site), and is an official and public offer of the Charitable Organization "Charitable Fund of Social Reforms and Support "Nadia" (Identification code of legal entity 26220897), in the person of the Director Oleksandr Mykolayovych Meleshko, acting on the basis of the Statute (hereinafter - the Foundation), to conclude a contract on the provision of a charitable donation (hereinafter - the Agreement), the subject and essential conditions of which are indicated below:',
        definitionTitle: '1. Terms and Definitions',
        definition1: [
          'Public offer (and/or Offer)',
          ' – a valid offer of the Foundation, posted on the Site, to provide a charitable donation, addressed to an unlimited number of persons, including the Benefactor.',
        ],
        definition2: [
          'Acceptance',
          " - full and unconditional acceptance of the Public Offer by making a money transfer using the payment forms and means posted on the Site, as well as by transferring funds to the Fund's current account through bank institutions. The moment of Acceptance is the date of transfer of funds to the Fund's bank account.",
        ],
        definition3: [
          'Charitable donation',
          ' – free transfer of funds by the Benefactor to the property of the Foundation for further use to achieve the goals of the Foundation, provided for by the Statute or programs of the Foundation, in accordance with the Law of Ukraine "On Charitable Activities and Charitable Organizations", the Statute of the Foundation and this Agreement .',
        ],
        definition4: [
          'Benefactor',
          ' is an able-bodied natural or legal person who voluntarily carries out one or more types of charitable activities. For the purposes of this Agreement, the Benefactor is a natural and/or legal entity that accepted the Offer.',
        ],
        subjectTitle: '2. The subject of the contract',
        subjectDescription1:
          "2.1. The subject of this Agreement is the free and voluntary transfer by the Benefactor to the property of the Fund by making a charitable donation for the implementation of the Foundation's statutory activities, including (but not exclusively) the provision of charitable assistance to gifted children, children with disabilities, orphans and deprived of parental care, children of the participants of the operation of the joint forces (USO / ATO) and forced migrants, children living in the military conflict zone in the east of Ukraine, within the framework of the Fund's programs and projects in the fields of culture, education, health care, spiritual and physical development of the individual in accordance with the Law of Ukraine 'On Charitable Activities and Charitable Organizations'",
        subjectDescription2: '2.2. The benefactor independently determines the size of the charitable donation.',
        subjectDescription3:
          '2.3. The subject of this Agreement is not directly or indirectly receiving profit by any of the parties to this Agreement.',
        contactsTitle: '11. Location and bank details',
        fondName: 'Charitable fund of social reforms and support "Nadia"',
        edrpou: 'EDRPOU 26220897',
        address: '86065, Donetsk region, Avdiivka, 16 Nechaeva St',
        bankName: 'JSC "Privatbank"',
        bankAccount: 'account number UA813354960000026007051602289',
        director: 'Oleksandr Meleshko, director ',
      },
      error: {
        button: 'Return to the main page',
      },
      Activate: {
        title: 'Account activation',
        process: 'Activation...',
        graduate: 'Congratulations! Your account has been successfully activated!',
        askForData: 'Fill in the data to complete the registration',
        name: 'Name:',
        surname: 'Surname:',
        phone: 'Phone:',
        photo: 'Photo profile (URL):',
        save: 'Save',
        return: 'Return to the main page',
      },
      Callback: {
        title: 'Authentication',
        process: 'Authentication...',
        graduate: 'Congratulations! Your authentication has been successfully!',
        askForData1: 'But your profile data are incomplete.',
        askForData2: 'Add information about yourself, in order to be able to use the platform.',
        name: 'Name',
        surname: 'Surname:',
        phone: 'Phone:',
        photo: 'Photo profile (URL):',
        save: 'Save',
        return: 'Return to the main page',
      },
      HowToHelp: {
        title: 'How to help',
        volonters: 'We are looking for volunteers!',
        volontersDescription:
          'To develop our geoportal, we are looking for volunteers who will help make it more useful for society. In particular, we need:',
        designers: ['Designers', ' — to improve the user interface and overall visual design.'],
        QA: ['Testers', ' — to ensure the quality of the portal and identify errors.'],
        lawyers: [
          'Lawyers',
          ' — to fill the thematic sections and reference books of the platform with useful information and help in the development of document templates aimed at making it easier for IDPs to receive compensation for lost or damaged property.',
        ],
        ngos: [
          'Representatives of public and charitable organizations',
          ' — to fill the content of the platform and develop technical tasks for the implementation of useful services for IDPs and charitable organizations.',
        ],
        ifYouStarterText:
          'If you are a beginner, but have interesting ideas and a desire to develop in a team - contact us:',
        ifYouStarterAfterLink:
          ', this is a good opportunity to develop your own portfolio. A functional site with a strong social purpose will be a good reason for your future employers to pay attention to you and your abilities, values ​​and motivation.',
        supportTitle: 'Financial support',
        supportDescription:
          'Your donations will help pay for the services and infrastructure we need to keep the project going. Any financial support and sharing would be greatly appreciated!',
        joinTitle: 'Join our project!',
        joinDescriptionText: 'If you want to become part of our team or provide financial support, please contact us ',
        joinDescriptionAfterLink: '. We welcome any input, regardless of your experience or capabilities!',
        aboutCompany: [
          'If you want to know more about our team: ',
          "Charitable fund of social reforms and support 'Hope'",
        ],
      },
      PrivacyPolicy: {
        title: 'Privacy Policy',
        subTitle: 'Memory Map: Preserving History and Restoring Justice',
        fundName: 'Charitable fund of social reforms "Hope"',
        ourSite: 'Our main website:',
        collectInfoTitle: 'Collection and use of information',
        collectInfoDescription:
          'We collect only the information that is necessary for the functioning of our site and the provision of services. This may include your name, email address and information you voluntarily provide when using our site.',
        cookieTitle: 'Cookies',
        cookieDescription:
          'We use HttpOnly cookies to improve your site experience. You can disable cookies in your browser settings, but this may affect the functionality of the site.',
        anotherTitle: 'Third-party content',
        anotherDescription:
          'Our site may contain links to other websites. We are not responsible for the privacy policies or content of these sites.',
        dataTitle: 'Data protection',
        dataDescription:
          'We take all necessary measures to protect your personal data from unauthorized access, alteration, disclosure or destruction.',
        rightsTitle: 'Your rights',
        rightsDescription:
          'You have the right to request access, correction or deletion of your personal data. For this, please contact us by e-mail.',
        changeTitle: 'Changes to the privacy policy',
        changeDescription:
          'We may update our privacy policy from time to time. All changes will be posted on this page.',
        contactsTitle: 'Contact information',
        contactsDescription: 'If you have any questions about our privacy policy, please contact us by email:',
      },
      LoginRegistration: {
        title: 'Log in or register',
        orInputEmail: 'Or enter your email',
        email: 'Email',
        password: 'Password',
        repeat: 'Repeat password',
        graduate: 'Congratulations on successful registration!',
        sendEmail: 'Activation letter sent to',
        via: 'Via',
      },
      Index: {
        title: 'IDP Councils',
        description1:
          'People who moved to another city or region due to the war in Ukraine can become full participants in the economic and social life of their new community. An effective mechanism for this is the councils of internally displaced persons at local and regional authorities (IDP councils), which are created within the framework of the “Unity for Action” program.',
        description2:
          'The IDP COUNCIL is a consultative and advisory body that brings together internally displaced persons with a proactive civic stance, relevant experience and knowledge to more effectively protect the rights and interests of IDPs in the region. Such a council operates on a voluntary, non-partisan and volunteer basis.',
        videoTitle: 'What are IDP councils and how to join them?',
        videoNotSuppported: 'TYour browser does not support video.',
        concil: {
          title: 'What are IDP Councils and how do they help displaced people?',
          idpTitle: 'Internally Displaced Persons (IDPs)',
          idpDescription:
            'or displaced persons are people who were forcibly relocated from occupied territories, combat zones, or frontline areas to other settlements or regions of Ukraine. Before the full-scale invasion, there were one and a half million displaced persons in Ukraine. After February 24, 2022, their number reached seven to eight million, but some later returned home.',
          idpConcilTitle: 'What are IDP Councils?',
          idpConcilDescription:
            'It is a consultative, representative and intermediary body. IDP councils are involved in the development and implementation of regional and local policies, and take an active part in local self-government. They operate on the principles of legality, transparency, collegiality, election, democracy, accountability and responsibility to communities.',
          whyTitle: 'Why do IDPs need a Council?',
          whyDescription:
            'РIDP councils are a tool for dialogue and interaction with the authorities. They seek systemic solutions to overcome IDP problems, propose them to local authorities, and participate in developing joint solutions. They suggest how the authorities can help IDPs integrate into the community, effectively provide them with housing and the necessities of life. They advise international organizations that help Ukraine in general and IDPs in particular. Thanks to the councils, IDPs receive information about settlement and employment opportunities, access to social services, ways to get involved in community life, etc.',
          stuffTitle: 'What is the structure of the council?',
          stuffDescription:
            'Usually the council at the regional level has 10-15 members. But the meetings of the council are open, so those who are not permanent members can join them',
          mustIdpTitle: 'Do all members of the IDP Council have to be IDPs?',
          mustIdpDescription:
            'Not everyone on the council has to be IDPs: councils often include lawyers, volunteers, representatives of NGOs that care for IDPs, experts, representatives of local governments, etc. For example, in Chernivtsi, approximately half of the members of the IDP council are IDPs, and half are local residents.',
          whoCareTitle: 'Who takes care of IDP councils?',
          whoCareDescription:
            'The team of the United for Action program, which is implemented by IREX in Ukraine together with the Stabilization Support Services charity fund and with the support of the US State Department, helps to create such councils. The main goal of the program is to unite IDPs, members of host communities, representatives of state authorities and media representatives in order to integrate IDPs and create a democratic and cohesive society and contribute to the stabilization of the situation in Ukraine. The United for Action program team recommends that in the future an all-Ukrainian council be created, to which IDP councils from all regions delegate their representatives. It will cooperate with the authorities at the level of ministries and parliamentary committees',
        },
      },
    },
    uk: {
      header: {
        enter: 'Увійти',
        title: 'Інтерактивний туристичний гід Хмельниччини',
        subtitle:
          "Цей проєкт створено для популяризації туристичних об'єктів і культурної спадщини Хмельницької області та їх інтеграції з місцевими сервісами та транспортною інфраструктурою.",
        autorization_close: 'Закрити форму авторизації',
      },
      menu: {
        home: 'Головна',
        about: 'Про нас',
        mission: 'Місія та візія',
        history: 'Історія проєкту',
        team: 'Команда',
        partners: 'Партнери',
        contacts: 'Контакти',
        blog: 'Блог',
        objects: 'Туристичні об’єкти',
        routes: 'Туристичні маршрути',
        heritage: 'Культурна спадщина',
        industry: 'Креативна індустрія',
        nature: 'Природні пам’ятки',
        transport: 'Громадський транспорт',
        join: 'Долучитись',
        services: 'Створити сторінку своїх сервісів',
        feedback: 'Залишити відгуки та пропозиції',
        donate: 'Зробити пожертву',
        volunteer: 'Стати волонтером',
        newsletter: 'Підписатись',
        collaboration: 'Співпраця з нами',
      },
      UserName: {
        cabinet: 'Кабінет',
        exit: 'Вихід',
      },
      SearchInput: {
        placeholder: 'Пошук по назві',
      },
      Map: {
        expandMap: 'Розгорнути мапу',
        collapseMap: 'Згорнути мапу',
        searchPlaceholder: 'Пошук',
        geoErrorTitle: 'Помилка геолокації',
        geoErrorClose: 'Закрити',
        panoramas: 'Панорами',
        memories: 'Спогади',
        coordinates: 'Координати:',
        latitude: 'Широта:',
        longitude: 'Довгота:',
        inputTitle: 'Введіть назву',
        inputAddress: 'Введіть адресу',
        address: 'Адреса:',
        createPlace: 'Визначити місце',
      },
      ShareButtons: {
        sharedSocial: 'Поділитись через соціальні мережі',
      },
      Panoramas: {
        collapse: 'Згорнути панорами',
        expand: 'Розгорнути панорами',
        created: 'Створено:',
        updated: 'Оновлено:',
        shootingDate: 'Дата зйомки:',
        see: 'Переглянути',
        address: 'Адреса:',
        addressNotAvailable: 'Адрес не указан',
        description: 'Опис:',
        back: 'Назад',
        forward: 'Вперед',
        loading: 'Завантаження панорами...',
      },
      Footer: {
        contacts: 'Контактна інформація',
        social: 'Наші соціальні мережі:',
        address: 'м. Авдіївка, вул. Молодіжна, 3А',
        terms: 'Умови використання',
        policy: 'Політика конфіденційності',
        howToHelp: 'Як допомогти',
        developer: 'Розроблено Олександром Мелешко',
        copyright: '© 2025. Всі права захищено.',
      },
      DonationServiceTerms: {
        title: 'Умови використання платформи',
        contractTitle: 'ДОГОВІР публічної оферти про надання благодійної пожертви',
        description:
          'Ця публічна оферта про надання благодійної пожертви (надалі – Оферта) адресована невизначеному колу осіб – фізичним та юридичним особам (надалі – Благодійник), що є відвідувачами сайту в мережі Інтернет: https://memory.pp.ua (надалі – Сайт), і є офіційною і публічною пропозицією Благодійної організації "Благодійний фонд соціальних реформ та підтримки "Надія" (Ідентифікаційний код юридичної особи 26220897), в особі Директора Мелешка Олександра Миколайовича, який діє на підставі Статуту (надалі – Фонд), укласти договір про надання благодійної пожертви (надалі – Договір), предмет та істотні умови якого вказані нижче:',
        definitionTitle: '1. Терміни та визначення',
        definition1: [
          'Публічна оферта (та/або Оферта)',
          ' – дійсна пропозиція Фонду, розміщена на Сайті, про надання благодійної пожертви, адресована необмеженому колу осіб, у тому числі Благодійнику.',
        ],
        definition2: [
          'Акцепт',
          ' – повне і безумовне прийняття Публічної оферти шляхом вчинення дій із здійснення грошового переказу за допомогою платіжних форм та засобів, розміщених на Сайті, а також шляхом перерахування грошових коштів на розрахунковий рахунок Фонду через установи банків. Моментом Акцепту є дата зарахування грошових коштів на банківський розрахунковий рахунок Фонду.',
        ],
        definition3: [
          'Благодійна пожертва',
          ' – безоплатна передача Благодійником коштів у власність Фонду для наступного використання для досягнення цілей Фонду, передбачених Статутом або програмами Фонду, відповідно до Закону України «Про благодійну діяльність та благодійні організації», Статуту Фонду та цього Договору.',
        ],
        definition4: [
          'Благодійник',
          ' – дієздатна фізична чи юридична особа, яка добровільно здійснює один чи декілька видів благодійної діяльності. Для цілей цього Договору Благодійником є фізична та/або юридична особа, яка акцептувала Оферту.',
        ],
        subjectTitle: '2. Предмет договору',
        subjectDescription1:
          "2.1. Предметом цього Договору є безоплатна та добровільна передача Благодійником у власність Фонду грошових коштів шляхом здійснення благодійної пожертви на здійснення статутної діяльності Фонду, в тому числі (але не виключно) з надання благодійної допомоги обдарованим дітям, дітям з інвалідністю, дітям-сиротам та позбавленим батьківського піклування, дітям учасників операції об'єднаних сил (ООС / АТО) та вимушених переселенців, дітям, які проживають у зоні військового конфлікту на сході України, в рамках програм Фонду та проектів у сфері культури, освіти, охорони здоров'я, духовного і фізичного розвитку особистості відповідно до Закону України «Про благодійну діяльність та благодійні організації».",
        subjectDescription2: '2.2. Благодійник самостійно визначає розмір благодійної пожертви.',
        subjectDescription3:
          '2.3. Предметом цього Договору не є отримання прямо чи опосередковано прибутку жодною зі сторін цього Договору.',
        contactsTitle: '11. Місцезнаходження та банківські реквізити',
        fondName: 'Благодійний фонд соціальних реформ та підтримки "Надія"',
        edrpou: 'ЄДРПОУ 26220897',
        address: '86065, Донецька область, м.Авдіївка, вул.Нечаєва, 16',
        bankName: 'АТ "Приватбанк"',
        bankAccount: 'р/р UA813354960000026007051602289',
        director: 'Директор Мелешко Олександр Миколайович',
      },
      error: {
        button: 'Повернутися на головну',
      },
      Activate: {
        title: 'Активація аккаунту',
        process: 'Активація...',
        graduate: 'Вітаємо Ваш аккаунт успішно активовано!',
        askForData: 'Заповніть дані для завершення реєстрації',
        name: 'Ім’я:',
        surname: 'Прізвище:',
        phone: 'Телефон:',
        photo: 'Фото профілю (URL):',
        save: 'Зберегти',
        return: 'Повернутися на головну',
      },
      Callback: {
        title: 'Аутентифікація',
        process: 'Аутентифікація...',
        graduate: ' Вітаємо аутентифікація пройшла успішно!',
        askForData1: 'Але дані Вашого профілю неповні.',
        askForData2: 'Додайте інформації про себе, щоб можна було користуватись платформою.',
        name: 'Ім’я:',
        surname: 'Прізвище:',
        phone: 'Телефон:',
        photo: 'Фото профілю (URL):',
        save: 'Зберегти',
        return: 'Повернутися на головну',
      },
      HowToHelp: {
        title: 'Як допомогти',
        volonters: 'Ми шукаємо волонтерів!',
        volontersDescription:
          'Для розвитку нашого геопорталу ми шукаємо волонтерів, які допоможуть зробити його кориснішим для суспільства. Особливо нам потрібні:',
        designers: [
          'Дизайнери',
          ' — для покращення користувальницького інтерфейсу та загального візуального оформлення.',
        ],
        QA: ['Тестувальники', ' — для забезпечення якості роботи порталу та виявлення помилок.'],
        lawyers: [
          'Юристи',
          ' — для наповнення тематичних розділів та довідників платформи, корисною інформацією та допомоги розроблення шаблонів документів націлених спростити ВПО отримання компенсації за втрачене або пошкоджене майно.',
        ],
        ngos: [
          'Представники громадських та благодійних організацій',
          ' — для наповнення контенту платформи та розроблення технічних завдань впровадження корисних послуг для ВПО та благодійних організацій.',
        ],
        ifYouStarterText:
          'Якщо ви початківець, але маєте цікаві ідеї та бажання розвиватись в команді - звертайтесь до нас: ',
        ifYouStarterAfterLink:
          ', це гарна можливість напрацювати власне портфоліо. Функціональний сайт з потужною соціальною метою стане гарним приводом для ваших майбутніх роботодавців звернути увагу на вас і ваші здібності, цінності та мотивацію.',
        supportTitle: 'Фінансова підтримка',
        supportDescription:
          'Ваші пожертвування допоможуть сплачувати нам за послуги та інфраструктуру, необхідні для подальшого розвитку проекту. Ми будемо вдячні за будь-яку фінансову підтримку та поширення!',
        joinTitle: 'Приєднуйтесь до нашого проекту!',
        joinDescriptionText:
          "Якщо ви хочете стати частиною нашої команди або надати фінансову підтримки, зв'яжіться з нами ",
        joinDescriptionAfterLink: '. Ми будемо раді будь-якому внеску, незалежно від вашого досвіду чи можливостей!',
        aboutCompany: [
          'Якщо ви хочете дізнатись більше про нашу команду: ',
          'Благодійний фонд соціальних реформ та підтримки "Надія".',
        ],
      },
      PrivacyPolicy: {
        title: 'Політика конфіденційності',
        subTitle: "Мапа пам'яті: збереження історії та відновлення справедливості",
        fundName: 'Благодійний фонд соціальних реформ "Надія"',
        ourSite: 'Наш основний веб-сайт:',
        collectInfoTitle: 'Збір та використання інформації',
        collectInfoDescription:
          "Ми збираємо лише ту інформацію, яка необхідна для функціонування нашого сайту та надання послуг. Це може включати ваше ім'я, електронну пошту та інформацію, яку ви добровільно надаєте під час використання нашого сайту.",
        cookieTitle: 'Файли cookie',
        cookieDescription:
          'Ми використовуємо файли cookie HttpOnly для покращення вашого досвіду використання сайту. Ви можете вимкнути файли cookie у налаштуваннях вашого браузера, але це може вплинути на функціональність сайту.',
        anotherTitle: 'Сторонній контент',
        anotherDescription:
          'Наш сайт може містити посилання на інші веб-сайти. Ми не несемо відповідальності за політику конфіденційності або зміст цих сайтів.',
        dataTitle: 'Захист даних',
        dataDescription:
          'Ми вживаємо всіх необхідних заходів для захисту ваших особистих даних від несанкціонованого доступу, зміни, розкриття чи знищення.',
        rightsTitle: 'Ваші права',
        rightsDescription:
          "Ви маєте право запросити доступ до своїх особистих даних, їх виправлення або видалення. Для цього, будь ласка, зв'яжіться з нами електронною поштою.",
        changeTitle: 'Зміни у політиці конфіденційності',
        changeDescription:
          'Ми можемо оновлювати нашу політику конфіденційності час від часу. Усі зміни будуть опубліковані на цій сторінці.',
        contactsTitle: ' Контакти',
        contactsDescription:
          "Якщо у вас є питання щодо нашої політики конфіденційності, будь ласка, зв'яжіться з нами електронною поштою:",
      },
      GeoError: {
        title: 'Помилка:',
        description: 'Для отримання доступу до мапи пам’яті необхідно увімкнути служби мапи',
        close: 'Закрити',
      },
      LoginRegistration: {
        title: 'Увійти або зареєструватись',
        orInputEmail: 'Або введіть вашу електронну пошту',
        email: 'Електронна пошта',
        password: 'Пароль',
        repeat: 'Повторіть пароль',
        graduate: 'Вітаємо з успішною реєстрацією!',
        sendEmail: 'Лист активації надіслано на',
        via: 'Через',
      },
      Index: {
        title: 'Ради ВПО',
        description1:
          'Люди, які через війну в Україні переїхали в інше місто чи регіон, можуть стати повноцінними учасниками економічного та громадського життя у своїй новій громаді. Для цього діє ефективний механізм — ради внутрішньо переміщених осіб при місцевих та обласних органах влади (ради ВПО), які створюються в межах програми «Єднання заради дії»',
        description2:
          'РАДА ВПО — це консультативно-дорадчий орган, який об’єднує між собою внутрішньо переміщених осіб з проактивною громадянською позицією, відповідними досвідом і знаннями, щоб ефективніше захищати права та інтереси ВПО в регіоні. Така рада діє на добровільних, позапартійних і волонтерських засадах.',
        videoTitle: 'Що таке ради ВПО і як до них доєднатися?',
        videoNotSuppported: 'Ваш браузер не підтримує відео.',
        concil: {
          title: 'Що таке Ради ВПО і як вони допомагають переселенцям?',
          idpTitle: 'Внутрішньо переміщені особи (ВПО)',
          idpDescription:
            'або переселенці — це люди, які вимушено переїхали з окупованих територій, зони бойових дій, прифронтової зони в інші населені пункти чи регіони України. До повномасштабного вторгнення в Україні було півтора мільйона переселенців. Після 24 лютого 2022 року їхня кількість сягнула семи-восьми мільйонів, але частина згодом повернулася додому.',
          idpConcilTitle: 'Що таке Ради ВПО?',
          idpConcilDescription:
            'Це консультативно-дорадчий, репрезентативний і посередницький орган. Ради ВПО залучаються до розробки та реалізації регіональних і місцевих політик, беруть активну участь у місцевому самоврядуванні. Вони діють на принципах законності, гласності, колегіальності, виборності, народовладдя, підзвітності та відповідальності перед громадами.',
          whyTitle: 'Навіщо переселенцям Ради?',
          whyDescription:
            'Ради ВПО — це інструмент діалогу та взаємодії з владою. Вони шукають системні рішення для подолання проблем ВПО, пропонують їх місцевій владі, беруть участь у розробці спільних рішень. Вони підказують, як влада може допомогти переселенцям інтегруватися у громаду, ефективно забезпечити їх житлом і необхідним для життя. Вони консультують міжнародні організації, які допомагають Україні загалом і переселенцям зокрема. ВПО завдяки радам отримують інформацію про можливості поселення і працевлаштування, про доступ до соціальних послуг, способи залучення до життя громади тощо.',
          stuffTitle: 'Який склад ради?',
          stuffDescription:
            'Зазвичай у раді обласного рівня — 10-15 членів. Але засідання ради проходять відкрито, тому до них можуть доєднатися охочі, які не є постійними членами',
          mustIdpTitle: 'Чи обов’язково всі члени Ради ВПО повинні бути ВПО?',
          mustIdpDescription:
            ' Не всі в раді мають бути переселенцями: часто до рад долучаються юристи, волонтери, представники громадських організацій, які опікуються переселенцями, експерти, представники органів місцевого самоврядування та інші. Наприклад, у Чернівцях приблизно половина членів ради ВПО — переселенці, а половина — місцеві мешканці.',
          whoCareTitle: 'Хто опікується радами ВПО?',
          whoCareDescription:
            ' Такі ради допомагає створювати команда програми «Єднання заради дії», яку реалізує IREX в Україні разом із благодійним фондом «Стабілізейшен Суппорт Сервісез» та за підтримки Державного департаменту США. Головна ціль програми — об’єднувати ВПО, членів приймаючих громад, представників органів державної влади та представників ЗМІ, щоб інтегрувати ВПО та створити демократичне та згуртоване суспільство та сприяти стабілізації ситуації в Україні. Команда програми «Єднання заради дії» рекомендує в майбутньому створити всеукраїнську раду, до скл якої ради ВПО усіх регіонів делегують своїх представників. В співпрацюватиме з владою на рівні міністерств і парламентських комітетів',
        },
      },
    },
  },
}));
