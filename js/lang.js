// Language detection and switching
const translations = {
    en: {
        title: "Swings - Mood Tracking App",
        tagline: "Track your daily mood and emotions to better understand your mental well-being",
        download: "Download on the App Store",
        dailyMood: "Daily Mood Tracking",
        dailyMoodDesc: "Simply tap on any date in the calendar to record how you felt that day. Choose from 5 mood levels and add notes about what went well or poorly.",
        express: "Express Your Feelings",
        expressDesc: "Add detailed notes about your day. Track what made you happy, what challenged you, and notice patterns over time.",
        visualProgress: "Visual Progress",
        visualProgressDesc: "View your emotional journey with mood indicators displayed directly on the calendar. See your trends and patterns at a glance.",
        premiumFeatures: "✨ Premium Features",
        premiumSubtitle: "Unlock unlimited access to your complete mood history",
        unlimitedNav: "📅 Unlimited Calendar Navigation",
        unlimitedNavDesc: "Navigate to any month in your history without restrictions",
        fullHistory: "🗂️ Full History Access",
        fullHistoryDesc: "View all your mood entries from any time period",
        moodAnalytics: "📊 Mood Analytics",
        moodAnalyticsDesc: "Visualize your mood trends over time with beautiful graphs",
        freeTrial: "7-Day Free Trial included with yearly subscription",
        terms: "Terms of Service",
        privacy: "Privacy Policy",
        copyright: "© 2025 Swings. All rights reserved.",
        backHome: "← Back to Home"
    },
    es: {
        title: "Swings - Aplicación de Seguimiento del Estado de Ánimo",
        tagline: "Rastrea tu estado de ánimo y emociones diarias para comprender mejor tu bienestar mental",
        download: "Descargar en el App Store",
        dailyMood: "Seguimiento Diario del Estado de Ánimo",
        dailyMoodDesc: "Simplemente toca cualquier fecha en el calendario para registrar cómo te sentiste ese día. Elige entre 5 niveles de estado de ánimo y agrega notas sobre lo que fue bien o mal.",
        express: "Expresa Tus Sentimientos",
        expressDesc: "Agrega notas detalladas sobre tu día. Rastrea lo que te hizo feliz, lo que te desafió y nota patrones con el tiempo.",
        visualProgress: "Progreso Visual",
        visualProgressDesc: "Ve tu viaje emocional con indicadores de estado de ánimo mostrados directamente en el calendario. Ve tus tendencias y patrones de un vistazo.",
        premiumFeatures: "✨ Características Premium",
        premiumSubtitle: "Desbloquea acceso ilimitado a tu historial completo de estados de ánimo",
        unlimitedNav: "📅 Navegación de Calendario Ilimitada",
        unlimitedNavDesc: "Navega a cualquier mes en tu historial sin restricciones",
        fullHistory: "🗂️ Acceso al Historial Completo",
        fullHistoryDesc: "Ve todas tus entradas de estado de ánimo de cualquier período de tiempo",
        moodAnalytics: "📊 Análisis del Estado de Ánimo",
        moodAnalyticsDesc: "Visualiza las tendencias de tu estado de ánimo con hermosos gráficos",
        freeTrial: "Prueba gratuita de 7 días incluida con la suscripción anual",
        terms: "Términos de Servicio",
        privacy: "Política de Privacidad",
        copyright: "© 2025 Swings. Todos los derechos reservados.",
        backHome: "← Volver al Inicio"
    },
    fr: {
        title: "Swings - Application de Suivi de l'Humeur",
        tagline: "Suivez votre humeur et vos émotions quotidiennes pour mieux comprendre votre bien-être mental",
        download: "Télécharger sur l'App Store",
        dailyMood: "Suivi Quotidien de l'Humeur",
        dailyMoodDesc: "Appuyez simplement sur n'importe quelle date du calendrier pour enregistrer comment vous vous êtes senti ce jour-là. Choisissez parmi 5 niveaux d'humeur et ajoutez des notes sur ce qui s'est bien ou mal passé.",
        express: "Exprimez Vos Sentiments",
        expressDesc: "Ajoutez des notes détaillées sur votre journée. Suivez ce qui vous a rendu heureux, ce qui vous a défié et remarquez les tendances au fil du temps.",
        visualProgress: "Progrès Visuel",
        visualProgressDesc: "Visualisez votre parcours émotionnel avec des indicateurs d'humeur affichés directement sur le calendrier. Voyez vos tendances et modèles en un coup d'œil.",
        premiumFeatures: "✨ Fonctionnalités Premium",
        premiumSubtitle: "Débloquez un accès illimité à votre historique d'humeur complet",
        unlimitedNav: "📅 Navigation Calendrier Illimitée",
        unlimitedNavDesc: "Naviguez vers n'importe quel mois de votre historique sans restrictions",
        fullHistory: "🗂️ Accès à l'Historique Complet",
        fullHistoryDesc: "Consultez toutes vos entrées d'humeur de n'importe quelle période",
        moodAnalytics: "📊 Analyses d'Humeur",
        moodAnalyticsDesc: "Visualisez les tendances de votre humeur avec de beaux graphiques",
        freeTrial: "Essai gratuit de 7 jours inclus avec l'abonnement annuel",
        terms: "Conditions d'Utilisation",
        privacy: "Politique de Confidentialité",
        copyright: "© 2025 Swings. Tous droits réservés.",
        backHome: "← Retour à l'Accueil"
    },
    de: {
        title: "Swings - Stimmungstracking-App",
        tagline: "Verfolgen Sie Ihre tägliche Stimmung und Emotionen, um Ihr mentales Wohlbefinden besser zu verstehen",
        download: "Im App Store herunterladen",
        dailyMood: "Tägliches Stimmungstracking",
        dailyMoodDesc: "Tippen Sie einfach auf ein beliebiges Datum im Kalender, um zu erfassen, wie Sie sich an diesem Tag gefühlt haben. Wählen Sie aus 5 Stimmungsstufen und fügen Sie Notizen darüber hinzu, was gut oder schlecht lief.",
        express: "Drücken Sie Ihre Gefühle Aus",
        expressDesc: "Fügen Sie detaillierte Notizen über Ihren Tag hinzu. Verfolgen Sie, was Sie glücklich gemacht hat, was Sie herausgefordert hat, und bemerken Sie Muster im Laufe der Zeit.",
        visualProgress: "Visueller Fortschritt",
        visualProgressDesc: "Sehen Sie Ihre emotionale Reise mit Stimmungsindikatoren, die direkt im Kalender angezeigt werden. Sehen Sie Ihre Trends und Muster auf einen Blick.",
        premiumFeatures: "✨ Premium-Funktionen",
        premiumSubtitle: "Schalten Sie unbegrenzten Zugriff auf Ihre vollständige Stimmungshistorie frei",
        unlimitedNav: "📅 Unbegrenzte Kalendernavigation",
        unlimitedNavDesc: "Navigieren Sie zu jedem Monat in Ihrer Historie ohne Einschränkungen",
        fullHistory: "🗂️ Vollständiger Historienzugriff",
        fullHistoryDesc: "Sehen Sie alle Ihre Stimmungseinträge aus jedem Zeitraum",
        moodAnalytics: "📊 Stimmungsanalysen",
        moodAnalyticsDesc: "Visualisieren Sie Ihre Stimmungstrends mit schönen Grafiken",
        freeTrial: "7-tägige kostenlose Testversion im Jahresabonnement enthalten",
        terms: "Nutzungsbedingungen",
        privacy: "Datenschutzerklärung",
        copyright: "© 2025 Swings. Alle Rechte vorbehalten.",
        backHome: "← Zurück zur Startseite"
    },
    it: {
        title: "Swings - App per il Monitoraggio dell'Umore",
        tagline: "Monitora il tuo umore e le tue emozioni quotidiane per comprendere meglio il tuo benessere mentale",
        download: "Scarica sull'App Store",
        dailyMood: "Monitoraggio Quotidiano dell'Umore",
        dailyMoodDesc: "Tocca semplicemente qualsiasi data nel calendario per registrare come ti sei sentito quel giorno. Scegli tra 5 livelli di umore e aggiungi note su cosa è andato bene o male.",
        express: "Esprimi i Tuoi Sentimenti",
        expressDesc: "Aggiungi note dettagliate sulla tua giornata. Tieni traccia di ciò che ti ha reso felice, di ciò che ti ha sfidato e nota i pattern nel tempo.",
        visualProgress: "Progresso Visivo",
        visualProgressDesc: "Visualizza il tuo viaggio emotivo con indicatori dell'umore mostrati direttamente sul calendario. Vedi le tue tendenze e pattern a colpo d'occhio.",
        premiumFeatures: "✨ Funzionalità Premium",
        premiumSubtitle: "Sblocca l'accesso illimitato alla tua cronologia completa dell'umore",
        unlimitedNav: "📅 Navigazione Calendario Illimitata",
        unlimitedNavDesc: "Naviga verso qualsiasi mese nella tua cronologia senza restrizioni",
        fullHistory: "🗂️ Accesso alla Cronologia Completa",
        fullHistoryDesc: "Visualizza tutte le tue voci dell'umore da qualsiasi periodo di tempo",
        moodAnalytics: "📊 Analisi dell'Umore",
        moodAnalyticsDesc: "Visualizza le tendenze del tuo umore con bellissimi grafici",
        freeTrial: "Prova gratuita di 7 giorni inclusa con l'abbonamento annuale",
        terms: "Termini di Servizio",
        privacy: "Informativa sulla Privacy",
        copyright: "© 2025 Swings. Tutti i diritti riservati.",
        backHome: "← Torna alla Home"
    },
    pt: {
        title: "Swings - Aplicativo de Rastreamento de Humor",
        tagline: "Rastreie seu humor e emoções diárias para entender melhor seu bem-estar mental",
        download: "Baixar na App Store",
        dailyMood: "Rastreamento Diário de Humor",
        dailyMoodDesc: "Simplesmente toque em qualquer data no calendário para registrar como você se sentiu naquele dia. Escolha entre 5 níveis de humor e adicione notas sobre o que foi bem ou mal.",
        express: "Expresse Seus Sentimentos",
        expressDesc: "Adicione notas detalhadas sobre seu dia. Rastreie o que te fez feliz, o que te desafiou e note padrões ao longo do tempo.",
        visualProgress: "Progresso Visual",
        visualProgressDesc: "Visualize sua jornada emocional com indicadores de humor exibidos diretamente no calendário. Veja suas tendências e padrões rapidamente.",
        premiumFeatures: "✨ Recursos Premium",
        premiumSubtitle: "Desbloqueie acesso ilimitado ao seu histórico completo de humor",
        unlimitedNav: "📅 Navegação de Calendário Ilimitada",
        unlimitedNavDesc: "Navegue para qualquer mês no seu histórico sem restrições",
        fullHistory: "🗂️ Acesso ao Histórico Completo",
        fullHistoryDesc: "Visualize todas as suas entradas de humor de qualquer período de tempo",
        moodAnalytics: "📊 Análise de Humor",
        moodAnalyticsDesc: "Visualize as tendências do seu humor com belos gráficos",
        freeTrial: "Teste gratuito de 7 dias incluído na assinatura anual",
        terms: "Termos de Serviço",
        privacy: "Política de Privacidade",
        copyright: "© 2025 Swings. Todos os direitos reservados.",
        backHome: "← Voltar ao Início"
    },
    ja: {
        title: "Swings - 気分追跡アプリ",
        tagline: "毎日の気分と感情を記録して、心の健康をより深く理解しましょう",
        download: "App Storeでダウンロード",
        dailyMood: "毎日の気分追跡",
        dailyMoodDesc: "カレンダーの任意の日付をタップするだけで、その日の気分を記録できます。5つの気分レベルから選び、うまくいったことや悪かったことについてメモを追加してください。",
        express: "気持ちを表現",
        expressDesc: "一日について詳細なメモを追加します。何があなたを幸せにしたか、何があなたに挑戦させたかを追跡し、時間とともにパターンに気づきます。",
        visualProgress: "視覚的な進捗",
        visualProgressDesc: "カレンダーに直接表示される気分インジケーターで感情の旅を見ることができます。一目でトレンドとパターンを確認できます。",
        premiumFeatures: "✨ プレミアム機能",
        premiumSubtitle: "完全な気分履歴への無制限アクセスをアンロック",
        unlimitedNav: "📅 無制限カレンダーナビゲーション",
        unlimitedNavDesc: "制限なしで履歴の任意の月に移動",
        fullHistory: "🗂️ 完全な履歴アクセス",
        fullHistoryDesc: "任意の期間からすべての気分エントリを表示",
        moodAnalytics: "📊 気分分析",
        moodAnalyticsDesc: "美しいグラフで気分のトレンドを視覚化",
        freeTrial: "年間サブスクリプションに7日間の無料トライアルが含まれています",
        terms: "利用規約",
        privacy: "プライバシーポリシー",
        copyright: "© 2025 Swings. 無断転載を禁じます。",
        backHome: "← ホームに戻る"
    },
    ko: {
        title: "Swings - 무드 트래킹 앱",
        tagline: "일상의 기분과 감정을 추적하여 정신 건강을 더 잘 이해하세요",
        download: "App Store에서 다운로드",
        dailyMood: "일일 기분 추적",
        dailyMoodDesc: "캘린더의 날짜를 탭하기만 하면 그날 기분을 기록할 수 있습니다. 5가지 기분 레벨 중에서 선택하고 잘된 일이나 잘못된 일에 대한 메모를 추가하세요.",
        express: "감정 표현하기",
        expressDesc: "하루에 대한 상세한 메모를 추가하세요. 무엇이 당신을 행복하게 했는지, 무엇이 도전이 되었는지 추적하고 시간이 지남에 따라 패턴을 발견하세요.",
        visualProgress: "시각적 진행 상황",
        visualProgressDesc: "캘린더에 직접 표시되는 기분 지표로 감정 여정을 확인하세요. 트렌드와 패턴을 한눈에 볼 수 있습니다.",
        premiumFeatures: "✨ 프리미엄 기능",
        premiumSubtitle: "전체 기분 기록에 대한 무제한 액세스를 잠금 해제하세요",
        unlimitedNav: "📅 무제한 캘린더 탐색",
        unlimitedNavDesc: "제한 없이 기록의 모든 월로 이동",
        fullHistory: "🗂️ 전체 기록 액세스",
        fullHistoryDesc: "모든 기간의 모든 기분 항목 보기",
        moodAnalytics: "📊 기분 분석",
        moodAnalyticsDesc: "아름다운 그래프로 기분 추세 시각화",
        freeTrial: "연간 구독에 7일 무료 체험 포함",
        terms: "서비스 약관",
        privacy: "개인정보 처리방침",
        copyright: "© 2025 Swings. 모든 권리 보유.",
        backHome: "← 홈으로 돌아가기"
    },
    zh: {
        title: "Swings - 情绪追踪应用",
        tagline: "追踪您的日常情绪和感受，更好地了解您的心理健康",
        download: "在App Store下载",
        dailyMood: "每日情绪追踪",
        dailyMoodDesc: "只需点击日历上的任意日期即可记录当天的感受。从5个情绪级别中选择，并添加关于进展顺利或不顺利的笔记。",
        express: "表达您的感受",
        expressDesc: "添加有关您一天的详细笔记。追踪什么让您快乐，什么挑战了您，并随着时间的推移注意到模式。",
        visualProgress: "视觉进度",
        visualProgressDesc: "通过直接显示在日历上的情绪指标查看您的情感旅程。一目了然地查看您的趋势和模式。",
        premiumFeatures: "✨ 高级功能",
        premiumSubtitle: "解锁对完整情绪历史的无限访问",
        unlimitedNav: "📅 无限日历导航",
        unlimitedNavDesc: "无限制地导航到历史记录中的任何月份",
        fullHistory: "🗂️ 完整历史访问",
        fullHistoryDesc: "查看任何时间段的所有情绪条目",
        moodAnalytics: "📊 情绪分析",
        moodAnalyticsDesc: "使用精美的图表可视化您的情绪趋势",
        freeTrial: "年度订阅包含7天免费试用",
        terms: "服务条款",
        privacy: "隐私政策",
        copyright: "© 2025 Swings. 版权所有。",
        backHome: "← 返回首页"
    },
    "zh-TW": {
        title: "Swings - 情緒追蹤應用程式",
        tagline: "追蹤您的日常情緒和感受，更好地了解您的心理健康",
        download: "在App Store下載",
        dailyMood: "每日情緒追蹤",
        dailyMoodDesc: "只需點擊日曆上的任意日期即可記錄當天的感受。從5個情緒級別中選擇，並添加關於進展順利或不順利的筆記。",
        express: "表達您的感受",
        expressDesc: "添加有關您一天的詳細筆記。追蹤什麼讓您快樂，什麼挑戰了您，並隨著時間的推移注意到模式。",
        visualProgress: "視覺進度",
        visualProgressDesc: "通過直接顯示在日曆上的情緒指標查看您的情感旅程。一目了然地查看您的趨勢和模式。",
        premiumFeatures: "✨ 高級功能",
        premiumSubtitle: "解鎖對完整情緒歷史的無限訪問",
        unlimitedNav: "📅 無限日曆導航",
        unlimitedNavDesc: "無限制地導航到歷史記錄中的任何月份",
        fullHistory: "🗂️ 完整歷史訪問",
        fullHistoryDesc: "查看任何時間段的所有情緒條目",
        moodAnalytics: "📊 情緒分析",
        moodAnalyticsDesc: "使用精美的圖表可視化您的情緒趨勢",
        freeTrial: "年度訂閱包含7天免費試用",
        terms: "服務條款",
        privacy: "隱私政策",
        copyright: "© 2025 Swings. 版權所有。",
        backHome: "← 返回首頁"
    },
    ar: {
        title: "Swings - تطبيق تتبع المزاج",
        tagline: "تتبع مزاجك ومشاعرك اليومية لفهم أفضل لصحتك النفسية",
        download: "التنزيل من App Store",
        dailyMood: "تتبع المزاج اليومي",
        dailyMoodDesc: "ما عليك سوى النقر على أي تاريخ في التقويم لتسجيل ما شعرت به في ذلك اليوم. اختر من بين 5 مستويات مزاجية وأضف ملاحظات حول ما سار بشكل جيد أو سيئ.",
        express: "عبّر عن مشاعرك",
        expressDesc: "أضف ملاحظات مفصلة عن يومك. تتبع ما جعلك سعيدًا وما تحداك ولاحظ الأنماط بمرور الوقت.",
        visualProgress: "تقدم بصري",
        visualProgressDesc: "شاهد رحلتك العاطفية مع مؤشرات المزاج المعروضة مباشرة على التقويم. انظر إلى اتجاهاتك وأنماطك في لمحة.",
        premiumFeatures: "✨ الميزات المميزة",
        premiumSubtitle: "افتح وصولاً غير محدود إلى سجل مزاجك الكامل",
        unlimitedNav: "📅 تنقل غير محدود في التقويم",
        unlimitedNavDesc: "انتقل إلى أي شهر في سجلك دون قيود",
        fullHistory: "🗂️ الوصول إلى السجل الكامل",
        fullHistoryDesc: "شاهد جميع إدخالات المزاج من أي فترة زمنية",
        moodAnalytics: "📊 تحليلات المزاج",
        moodAnalyticsDesc: "تصور اتجاهات مزاجك مع رسوم بيانية جميلة",
        freeTrial: "تجربة مجانية لمدة 7 أيام مشمولة في الاشتراك السنوي",
        terms: "شروط الخدمة",
        privacy: "سياسة الخصوصية",
        copyright: "© 2025 Swings. جميع الحقوق محفوظة.",
        backHome: "← العودة إلى الصفحة الرئيسية"
    },
    hi: {
        title: "Swings - मूड ट्रैकिंग ऐप",
        tagline: "अपने मानसिक स्वास्थ्य को बेहतर ढंग से समझने के लिए अपने दैनिक मूड और भावनाओं को ट्रैक करें",
        download: "App Store पर डाउनलोड करें",
        dailyMood: "दैनिक मूड ट्रैकिंग",
        dailyMoodDesc: "उस दिन आपने कैसा महसूस किया यह रिकॉर्ड करने के लिए कैलेंडर में किसी भी तारीख पर टैप करें। 5 मूड स्तरों में से चुनें और क्या अच्छा या बुरा हुआ इसके बारे में नोट्स जोड़ें।",
        express: "अपनी भावनाओं को व्यक्त करें",
        expressDesc: "अपने दिन के बारे में विस्तृत नोट्स जोड़ें। ट्रैक करें कि आपको क्या खुश करता है, क्या आपको चुनौती देता है, और समय के साथ पैटर्न देखें।",
        visualProgress: "दृश्य प्रगति",
        visualProgressDesc: "कैलेंडर पर सीधे प्रदर्शित मूड संकेतकों के साथ अपनी भावनात्मक यात्रा देखें। एक नज़र में अपने रुझान और पैटर्न देखें।",
        premiumFeatures: "✨ प्रीमियम सुविधाएँ",
        premiumSubtitle: "अपने पूर्ण मूड इतिहास तक असीमित पहुंच अनलॉक करें",
        unlimitedNav: "📅 असीमित कैलेंडर नेविगेशन",
        unlimitedNavDesc: "बिना किसी प्रतिबंध के अपने इतिहास में किसी भी महीने पर नेविगेट करें",
        fullHistory: "🗂️ पूर्ण इतिहास पहुंच",
        fullHistoryDesc: "किसी भी समय अवधि से अपनी सभी मूड प्रविष्टियां देखें",
        moodAnalytics: "📊 मूड विश्लेषण",
        moodAnalyticsDesc: "सुंदर ग्राफ़ के साथ अपने मूड रुझानों को दृश्यमान करें",
        freeTrial: "वार्षिक सदस्यता के साथ 7-दिन का निःशुल्क परीक्षण शामिल",
        terms: "सेवा की शर्तें",
        privacy: "गोपनीयता नीति",
        copyright: "© 2025 Swings. सर्वाधिकार सुरक्षित।",
        backHome: "← होम पर वापस जाएं"
    },
    ru: {
        title: "Swings - Приложение для отслеживания настроения",
        tagline: "Отслеживайте свое ежедневное настроение и эмоции, чтобы лучше понимать свое психическое благополучие",
        download: "Загрузить в App Store",
        dailyMood: "Ежедневное отслеживание настроения",
        dailyMoodDesc: "Просто коснитесь любой даты в календаре, чтобы записать, как вы себя чувствовали в этот день. Выберите один из 5 уровней настроения и добавьте заметки о том, что прошло хорошо или плохо.",
        express: "Выражайте свои чувства",
        expressDesc: "Добавляйте подробные заметки о своем дне. Отслеживайте, что сделало вас счастливыми, что бросило вызов, и замечайте закономерности со временем.",
        visualProgress: "Визуальный прогресс",
        visualProgressDesc: "Просматривайте свое эмоциональное путешествие с индикаторами настроения, отображаемыми прямо в календаре. Увидьте свои тенденции и закономерности с первого взгляда.",
        premiumFeatures: "✨ Премиум-функции",
        premiumSubtitle: "Разблокируйте неограниченный доступ к полной истории настроения",
        unlimitedNav: "📅 Неограниченная навигация по календарю",
        unlimitedNavDesc: "Переходите к любому месяцу в вашей истории без ограничений",
        fullHistory: "🗂️ Доступ к полной истории",
        fullHistoryDesc: "Просматривайте все ваши записи настроения за любой период времени",
        moodAnalytics: "📊 Аналитика настроения",
        moodAnalyticsDesc: "Визуализируйте тенденции вашего настроения с красивыми графиками",
        freeTrial: "7-дневная бесплатная пробная версия включена в годовую подписку",
        terms: "Условия использования",
        privacy: "Политика конфиденциальности",
        copyright: "© 2025 Swings. Все права защищены.",
        backHome: "← Вернуться на главную"
    },
    tr: {
        title: "Swings - Ruh Hali İzleme Uygulaması",
        tagline: "Zihinsel sağlığınızı daha iyi anlamak için günlük ruh halinizi ve duygularınızı takip edin",
        download: "App Store'dan İndirin",
        dailyMood: "Günlük Ruh Hali İzleme",
        dailyMoodDesc: "O gün nasıl hissettiğinizi kaydetmek için takvimdeki herhangi bir tarihe dokunun. 5 ruh hali seviyesinden birini seçin ve neyin iyi veya kötü gittiği hakkında notlar ekleyin.",
        express: "Duygularınızı İfade Edin",
        expressDesc: "Gününüz hakkında ayrıntılı notlar ekleyin. Sizi neyin mutlu ettiğini, sizi neyin zorladığını takip edin ve zaman içinde kalıpları fark edin.",
        visualProgress: "Görsel İlerleme",
        visualProgressDesc: "Doğrudan takvimde görüntülenen ruh hali göstergeleriyle duygusal yolculuğunuzu görüntüleyin. Trendlerinizi ve kalıplarınızı bir bakışta görün.",
        premiumFeatures: "✨ Premium Özellikler",
        premiumSubtitle: "Tam ruh hali geçmişinize sınırsız erişimin kilidini açın",
        unlimitedNav: "📅 Sınırsız Takvim Gezintisi",
        unlimitedNavDesc: "Geçmişinizdeki herhangi bir aya kısıtlama olmadan gidin",
        fullHistory: "🗂️ Tam Geçmiş Erişimi",
        fullHistoryDesc: "Herhangi bir zaman diliminden tüm ruh hali girişlerinizi görüntüleyin",
        moodAnalytics: "📊 Ruh Hali Analitiği",
        moodAnalyticsDesc: "Ruh hali trendlerinizi güzel grafiklerle görselleştirin",
        freeTrial: "Yıllık aboneliğe 7 günlük ücretsiz deneme dahildir",
        terms: "Hizmet Şartları",
        privacy: "Gizlilik Politikası",
        copyright: "© 2025 Swings. Tüm hakları saklıdır.",
        backHome: "← Ana Sayfaya Dön"
    },
    id: {
        title: "Swings - Aplikasi Pelacakan Suasana Hati",
        tagline: "Lacak suasana hati dan emosi harian Anda untuk lebih memahami kesejahteraan mental Anda",
        download: "Unduh di App Store",
        dailyMood: "Pelacakan Suasana Hati Harian",
        dailyMoodDesc: "Cukup ketuk tanggal mana pun di kalender untuk merekam perasaan Anda pada hari itu. Pilih dari 5 level suasana hati dan tambahkan catatan tentang apa yang berjalan baik atau buruk.",
        express: "Ekspresikan Perasaan Anda",
        expressDesc: "Tambahkan catatan rinci tentang hari Anda. Lacak apa yang membuat Anda bahagia, apa yang menantang Anda, dan perhatikan pola dari waktu ke waktu.",
        visualProgress: "Kemajuan Visual",
        visualProgressDesc: "Lihat perjalanan emosional Anda dengan indikator suasana hati yang ditampilkan langsung di kalender. Lihat tren dan pola Anda sekilas.",
        premiumFeatures: "✨ Fitur Premium",
        premiumSubtitle: "Buka akses tak terbatas ke riwayat suasana hati lengkap Anda",
        unlimitedNav: "📅 Navigasi Kalender Tak Terbatas",
        unlimitedNavDesc: "Navigasi ke bulan mana pun dalam riwayat Anda tanpa batasan",
        fullHistory: "🗂️ Akses Riwayat Lengkap",
        fullHistoryDesc: "Lihat semua entri suasana hati Anda dari periode waktu mana pun",
        moodAnalytics: "📊 Analitik Suasana Hati",
        moodAnalyticsDesc: "Visualisasikan tren suasana hati Anda dengan grafik yang indah",
        freeTrial: "Uji coba gratis 7 hari termasuk dalam langganan tahunan",
        terms: "Ketentuan Layanan",
        privacy: "Kebijakan Privasi",
        copyright: "© 2025 Swings. Hak cipta dilindungi.",
        backHome: "← Kembali ke Beranda"
    },
    th: {
        title: "Swings - แอปติดตามอารมณ์",
        tagline: "ติดตามอารมณ์และความรู้สึกประจำวันของคุณเพื่อเข้าใจสุขภาพจิตของคุณให้ดีขึ้น",
        download: "ดาวน์โหลดที่ App Store",
        dailyMood: "การติดตามอารมณ์ประจำวัน",
        dailyMoodDesc: "เพียงแตะวันที่ใดก็ได้ในปฏิทินเพื่อบันทึกความรู้สึกของคุณในวันนั้น เลือกจาก 5 ระดับอารมณ์และเพิ่มบันทึกเกี่ยวกับสิ่งที่ดีหรือไม่ดี",
        express: "แสดงความรู้สึกของคุณ",
        expressDesc: "เพิ่มบันทึกรายละเอียดเกี่ยวกับวันของคุณ ติดตามสิ่งที่ทำให้คุณมีความสุข สิ่งที่ท้าทายคุณ และสังเกตรูปแบบตามเวลา",
        visualProgress: "ความคืบหน้าด้วยภาพ",
        visualProgressDesc: "ดูการเดินทางทางอารมณ์ของคุณด้วยตัวบ่งชี้อารมณ์ที่แสดงโดยตรงบนปฏิทิน ดูแนวโน้มและรูปแบบของคุณได้อย่างรวดเร็ว",
        premiumFeatures: "✨ คุณสมบัติพรีเมียม",
        premiumSubtitle: "ปลดล็อกการเข้าถึงไม่จำกัดไปยังประวัติอารมณ์ทั้งหมดของคุณ",
        unlimitedNav: "📅 การนำทางปฏิทินไม่จำกัด",
        unlimitedNavDesc: "นำทางไปยังเดือนใดก็ได้ในประวัติของคุณโดยไม่มีข้อจำกัด",
        fullHistory: "🗂️ การเข้าถึงประวัติทั้งหมด",
        fullHistoryDesc: "ดูรายการอารมณ์ทั้งหมดของคุณจากช่วงเวลาใดก็ได้",
        moodAnalytics: "📊 การวิเคราะห์อารมณ์",
        moodAnalyticsDesc: "แสดงแนวโน้มอารมณ์ของคุณด้วยกราฟที่สวยงาม",
        freeTrial: "รวมทดลองใช้ฟรี 7 วันกับการสมัครสมาชิกรายปี",
        terms: "เงื่อนไขการให้บริการ",
        privacy: "นโยบายความเป็นส่วนตัว",
        copyright: "© 2025 Swings. สงวนลิขสิทธิ์",
        backHome: "← กลับหน้าหลัก"
    },
    nl: {
        title: "Swings - Stemmingstracking App",
        tagline: "Volg uw dagelijkse stemming en emoties om uw mentale welzijn beter te begrijpen",
        download: "Download op de App Store",
        dailyMood: "Dagelijkse Stemmingstracking",
        dailyMoodDesc: "Tik gewoon op een willekeurige datum in de kalender om vast te leggen hoe u zich die dag voelde. Kies uit 5 stemmingsniveaus en voeg notities toe over wat goed of slecht ging.",
        express: "Druk Uw Gevoelens Uit",
        expressDesc: "Voeg gedetailleerde notities toe over uw dag. Houd bij wat u gelukkig maakte, wat u uitdaagde en merk patronen op in de loop van de tijd.",
        visualProgress: "Visuele Voortgang",
        visualProgressDesc: "Bekijk uw emotionele reis met stemmingsindicatoren die direct in de kalender worden weergegeven. Zie uw trends en patronen in één oogopslag.",
        premiumFeatures: "✨ Premium Functies",
        premiumSubtitle: "Ontgrendel onbeperkte toegang tot uw volledige stemmingsgeschiedenis",
        unlimitedNav: "📅 Onbeperkte Kalendernavigatie",
        unlimitedNavDesc: "Navigeer naar elke maand in uw geschiedenis zonder beperkingen",
        fullHistory: "🗂️ Volledige Geschiedenistoegang",
        fullHistoryDesc: "Bekijk al uw stemmingsinvoer van elke tijdsperiode",
        moodAnalytics: "📊 Stemmingsanalyse",
        moodAnalyticsDesc: "Visualiseer uw stemmingstrends met prachtige grafieken",
        freeTrial: "7-daagse gratis proefperiode inbegrepen bij jaarabonnement",
        terms: "Servicevoorwaarden",
        privacy: "Privacybeleid",
        copyright: "© 2025 Swings. Alle rechten voorbehouden.",
        backHome: "← Terug naar Home"
    }
};

// Language names in their native script
const languageNames = {
    en: "English",
    es: "Español",
    fr: "Français",
    de: "Deutsch",
    it: "Italiano",
    pt: "Português",
    ja: "日本語",
    ko: "한국어",
    zh: "简体中文",
    "zh-TW": "繁體中文",
    ar: "العربية",
    hi: "हिन्दी",
    ru: "Русский",
    tr: "Türkçe",
    id: "Bahasa Indonesia",
    th: "ไทย",
    nl: "Nederlands"
};

// Detect user's preferred language
function detectLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    if (urlLang && translations[urlLang]) {
        return urlLang;
    }
    
    const savedLang = localStorage.getItem('swings_lang');
    if (savedLang && translations[savedLang]) {
        return savedLang;
    }
    
    const browserLang = navigator.language || navigator.userLanguage;
    
    // Exact match
    if (translations[browserLang]) {
        return browserLang;
    }
    
    // Language prefix match (e.g., 'en-US' -> 'en')
    const langPrefix = browserLang.split('-')[0];
    if (translations[langPrefix]) {
        return langPrefix;
    }
    
    // Special case for Chinese
    if (browserLang.includes('zh')) {
        return browserLang.includes('TW') || browserLang.includes('HK') || browserLang.includes('Hant') ? 'zh-TW' : 'zh';
    }
    
    return 'en'; // Default to English
}

// Apply translations to the page
function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;
    
    document.title = t.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', t.tagline);
    }
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.textContent = t[key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update direction for RTL languages
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.body.style.direction = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
        document.body.style.direction = 'ltr';
    }
    
    // Save preference
    localStorage.setItem('swings_lang', lang);
}

// Create language selector
function createLanguageSelector() {
    const currentLang = detectLanguage();
    
    const selector = document.createElement('div');
    selector.className = 'language-selector';
    selector.innerHTML = `
        <button class="lang-button" id="langButton" aria-label="Select language">
            🌐 ${languageNames[currentLang]}
        </button>
        <div class="lang-dropdown" id="langDropdown">
            ${Object.keys(translations).map(lang => `
                <a href="?lang=${lang}" class="lang-option ${lang === currentLang ? 'active' : ''}" data-lang="${lang}">
                    ${languageNames[lang]}
                </a>
            `).join('')}
        </div>
    `;
    
    document.body.insertBefore(selector, document.body.firstChild);
    
    // Toggle dropdown
    const langButton = document.getElementById('langButton');
    const langDropdown = document.getElementById('langDropdown');
    
    langButton.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        langDropdown.classList.remove('show');
    });
    
    // Prevent dropdown from closing when clicking inside it
    langDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    // Change language
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = option.getAttribute('data-lang');
            const url = new URL(window.location);
            url.searchParams.set('lang', lang);
            window.location.href = url.toString();
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const lang = detectLanguage();
    applyTranslations(lang);
    createLanguageSelector();
});
