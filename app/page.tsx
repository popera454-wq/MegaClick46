// app/page.tsx
import React from 'react';

function IconSpark({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2l1.9 4.8L19 9l-4.8 1.9L12 16l-1.9-5.1L5 9l5.1-2.2L12 2z" fill="url(#g)"/>
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stopColor="#7c3aed"/>
          <stop offset="1" stopColor="#06b6d4"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl p-2 bg-gradient-to-br from-indigo-600 to-rose-500 shadow-xl">
                <IconSpark className="w-7 h-7" />
              </div>
              <div className="text-lg font-extrabold tracking-tight">MegaClick</div>
            </div>

            <nav className="hidden lg:flex items-center gap-6 text-sm" aria-label="ניווט ראשי">
              <a href="#how-it-works" className="nav-link">איך זה עובד?</a>
              <a href="#slide-types" className="nav-link">סוגי שאלות</a>
              <a href="#features" className="nav-link">יכולות מיוחדות</a>
              <a href="#ivr" className="nav-link">השתתפות בטלפון</a>
              <a href="#faq" className="nav-link">שאלות ותשובות</a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button className="lang-switch group" aria-label="החלפת שפה">
              <span className="text-sm">🇮🇱</span>
              <span className="mx-1 text-xs text-slate-400">/</span>
              <span className="text-sm">🇬🇧</span>
            </button>

            <a className="btn-solid hidden sm:inline-flex" href="/certificate-retrieve" aria-label="אחזור תעודה">
              <span className="text-lg">📄</span>
              <span className="mr-2">אחזור תעודה</span>
            </a>

            <a className="btn-primary" href="/join" aria-label="הצטרף למשחק">
              <span>🎮</span>
              <span className="mr-2">הצטרף למשחק</span>
            </a>

            <a className="btn-ghost hidden sm:inline-flex" href="/auth" aria-label="התחברות">
              התחברות / הרשמה
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-right space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              יוצרים. משחקים. מנצחים!
            </h1>
            <p className="text-slate-300 max-w-xl">
              פלטפורמת המשחקים, הטריוויה והסקרים האינטראקטיבית המתקדמת בעולם.
              הפכו כל אירוע, שיעור או פגישה לניסיון חווייתי וסוחף בזמן אמת.
              תמיכה מלאה בהשתתפות דרך הטלפון הנייד, הנייד הכשר או חיוג קולי.
            </p>

            <div className="flex flex-wrap justify-end gap-3">
              <a className="cta-main" href="/create">
                <span className="text-xl">🚀</span>
                <span className="mr-2">צור משחק בחינם</span>
              </a>

              <a className="cta-secondary" href="/join">
                <span>📱</span>
                <span className="mr-2">הצטרף למשחק פעיל</span>
              </a>

              <a className="cta-ghost" href="/certificate-retrieve">
                <span>📄</span>
                <span className="mr-2">אחזור תעודה משיחה קולית</span>
              </a>
            </div>

            <div className="flex justify-end">
              <div className="text-xs text-slate-400">Zero Latency • Supabase Realtime</div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl p-6 bg-gradient-to-br from-slate-800/80 to-slate-900 border border-slate-700 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs text-slate-400">Live • MegaClick</div>
                <div className="text-xs text-emerald-400 font-semibold">Realtime</div>
              </div>

              <div className="rounded-xl bg-gradient-to-b from-slate-900 to-slate-800 p-4 grid grid-cols-2 gap-4">
                <div className="col-span-2 flex items-center justify-between">
                  <div className="text-sm font-semibold">לוח מובילים</div>
                  <div className="text-xs text-slate-400">עדכון בזמן אמת</div>
                </div>

                <div className="col-span-2 grid grid-cols-3 gap-3">
                  <div className="podium first">
                    <div className="rank">1</div>
                    <div className="name">אור</div>
                    <div className="score">98</div>
                  </div>
                  <div className="podium second">
                    <div className="rank">2</div>
                    <div className="name">נועה</div>
                    <div className="score">92</div>
                  </div>
                  <div className="podium third">
                    <div className="rank">3</div>
                    <div className="name">דוד</div>
                    <div className="score">88</div>
                  </div>
                </div>

                <div className="col-span-2 mt-3">
                  <div className="phone-mock mx-auto w-56 h-96 rounded-2xl bg-slate-900 border border-slate-700 p-3 shadow-lg relative">
                    <div className="text-[10px] text-slate-400 text-center mb-2">Player View • חיוג קולי</div>
                    <div className="space-y-2">
                      <button className="answer-btn bg-emerald-500">תשובה 1</button>
                      <button className="answer-btn bg-sky-500">תשובה 2</button>
                      <button className="answer-btn bg-violet-500">תשובה 3</button>
                      <button className="answer-btn bg-rose-500">תשובה 4</button>
                    </div>
                    <div className="absolute bottom-3 left-0 right-0 text-[11px] text-center text-slate-400">
                      תמיכה בחיוג קולי וטלפונים כשרים
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-400">פודיום מנצחים עם אפקטים וחגיגות</div>
            </div>

            <div className="absolute -right-6 -bottom-6 animate-float hidden md:block">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500 to-rose-500 opacity-20 blur-2xl"></div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-right">3 צעדים פשוטים למשחק מושלם</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <article className="feature-card">
              <div className="feature-icon">🛠️</div>
              <h3 className="feature-title">יוצרים ומעצבים</h3>
              <p className="feature-desc">
                בונים חידון בתוך דקות. מוסיפים שאלות, סקרים ומדיה. מחולל AI וייבוא Excel בלחיצה.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">📲</div>
              <h3 className="feature-title">משתפים ומחברים</h3>
              <p className="feature-desc">
                הצטרפות דרך QR, קישור או חיוג טלפוני. מתאים לטלפונים כשרים.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3 className="feature-title">מפעילים וחוגגים</h3>
              <p className="feature-desc">
                ריצת המשחק בלייב, לוח מובילים דינמי ופודיום מנצחים.
              </p>
            </article>
          </div>
        </section>

        {/* SLIDE TYPES */}
        <section id="slide-types" className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-right">עולם שלם של אפשרויות תוכן</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="slide-type">❓ טריוויה<div className="text-xs text-slate-400">ניקוד מהירות, מדיה</div></div>
            <div className="slide-type">📊 סקר<div className="text-xs text-slate-400">גרפים חיים</div></div>
            <div className="slide-type">🖼️ תשובה בתמונה<div className="text-xs text-slate-400">גלריה מעוצבת</div></div>
            <div className="slide-type">📝 שקופית טקסט<div className="text-xs text-slate-400">הסברים והנחיות</div></div>
            <div className="slide-type">🎬 שקופית מדיה<div className="text-xs text-slate-400">YouTube, תמונות, מוזיקה</div></div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-right">מה הופך את MegaClick לבלתי נצחית?</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="card-feature">🤖 מחולל AI חכם וחינמי</div>
            <div className="card-feature">📞 השתתפות טלפונית קולית (IVR)</div>
            <div className="card-feature">📊 ייבוא וייצוא מ-Excel</div>
            <div className="card-feature">🎨 מותג ועיצוב אישי</div>
            <div className="card-feature">⚡ סנכרון בזמן אמת</div>
            <div className="card-feature">📄 הפקת תעודות PDF אישיות</div>
          </div>
        </section>

        {/* IVR */}
        <section id="ivr" className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-right">אין לכם אינטרנט? אין בעיה! משחקים מהטלפון</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="text-sm text-slate-300">
              <p>מחייגים למספר המערכת: <strong>077-2250449</strong></p>
              <p>מקישים את קוד המשחק. עונים באמצעות מקשי הטלפון.</p>
              <p>בסיום המשחק, המערכת מקריאה קוד אחזור אישי.</p>
            </div>
            <div className="flex items-center">
              <a className="btn-solid w-full justify-center" href="/certificate-retrieve">
                <span>📄</span>
                <span className="mr-2">מעבר לדף אחזור תעודה</span>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-right">כל מה שרציתם לדעת על MegaClick</h2>
          <div className="mt-6 space-y-3">
            <details className="faq-item">
              <summary>האם השימוש במערכת הוא בחינם?</summary>
              <p>כן. ניתן להירשם, ליצור חידונים ולהשתמש במחולל ה‑AI בחינם.</p>
            </details>

            <details className="faq-item">
              <summary>כמה משתתפים יכולים לשחק בו-זמנית?</summary>
              <p>תמיכה במאות ועד אלפי משתתפים בהתאם לתוכנית ותשתית הענן.</p>
            </details>

            <details className="faq-item">
              <summary>איך עובד מנגנון אחזור התעודות?</summary>
              <p>בסיום המשחק הקולי המערכת מקריאה קוד אישי. מזינים את הקוד באתר ומורידים PDF מעוצב.</p>
            </details>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-4 gap-6 text-sm text-slate-300">
          <div className="text-right">
            <div className="flex items-center justify-end gap-2">
              <div className="font-bold">MegaClick</div>
              <div>⚡</div>
            </div>
            <p className="mt-2">פלטפורמת המשחקים והטריוויה המובילה ליצירת חוויה אינטראקטיבית בכל מקום.</p>
          </div>

          <div className="text-right">
            <h4 className="font-semibold">ניווט מהיר</h4>
            <ul className="mt-2 space-y-1">
              <li>דף הבית</li>
              <li>הצטרפות למשחק</li>
              <li>אחזור תעודה</li>
              <li>צור משחק</li>
              <li>אזור אישי</li>
            </ul>
          </div>

          <div className="text-right">
            <h4 className="font-semibold">טלפוניה ויצירת קשר</h4>
            <p className="mt-2">מספר מערכת IVR: 077-2250449</p>
            <p>אימייל תמיכה: support@megaclick.com</p>
          </div>

          <div className="text-right">
            <h4 className="font-semibold">משפטי ומערכת</h4>
            <p className="mt-2">תנאי שימוש</p>
            <p>מדיניות פרטיות</p>
            <p>נגישות</p>
          </div>
        </div>

        <div className="text-center text-xs text-slate-500 py-4">© 2026 MegaClick. כל הזכויות שמורות.</div>
      </footer>
    </div>
  );
}
