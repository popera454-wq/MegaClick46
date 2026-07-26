"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Gamepad2, 
  Sparkles, 
  Globe, 
  FileText, 
  Phone, 
  HelpCircle, 
  Users, 
  Trophy, 
  ChevronDown, 
  BarChart3, 
  Image as ImageIcon, 
  CheckCircle2, 
  Zap,
  ArrowRight,
  ArrowLeft
} from "lucide-react";

export default function HomePage() {
  const [lang, setLang] = useState<"he" | "en">("he");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const isHebrew = lang === "he";

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 ${isHebrew ? "rtl" : "ltr"}`} dir={isHebrew ? "rtl" : "ltr"}>
      
      {/* 1. Header / Navbar */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-indigo-500 to-purple-500 p-2 rounded-xl text-white shadow-lg shadow-indigo-500/30">
              <Zap className="h-6 w-6" />
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              MegaClick
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#how-it-works" className="hover:text-indigo-400 transition-colors">
              {isHebrew ? "איך זה עובד?" : "How it Works"}
            </a>
            <a href="#slide-types" className="hover:text-indigo-400 transition-colors">
              {isHebrew ? "סוגי שאלות" : "Slide Types"}
            </a>
            <a href="#ivr" className="hover:text-indigo-400 transition-colors">
              {isHebrew ? "השתתפות בטלפון" : "Phone Participation"}
            </a>
            <a href="#faq" className="hover:text-indigo-400 transition-colors">
              {isHebrew ? "שאלות ותשובות" : "FAQ"}
            </a>
          </nav>

          {/* Actions & Lang Switcher */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(isHebrew ? "en" : "he")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold transition"
            >
              <Globe className="h-4 w-4 text-indigo-400" />
              <span>{isHebrew ? "EN" : "עברית"}</span>
            </button>

            <Link
              href="/certificate"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 transition"
            >
              <FileText className="h-4 w-4 text-emerald-400" />
              <span>{isHebrew ? "אחזור תעודה" : "Certificates"}</span>
            </Link>

            <Link
              href="/join"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xs font-bold shadow-md shadow-emerald-500/20 transition"
            >
              <Gamepad2 className="h-4 w-4" />
              <span>{isHebrew ? "הצטרף למשחק" : "Join Game"}</span>
            </Link>

            <Link
              href="/login"
              className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition shadow-md shadow-indigo-600/20"
            >
              <span>{isHebrew ? "התחברות / הרשמה" : "Login / Register"}</span>
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-slate-950 to-slate-950 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-6">
            <Sparkles className="h-4 w-4 text-indigo-400" />
            <span>{isHebrew ? "פלטפורמת הטריוויה והסקרים של הדור הבא" : "Next Generation Live Quiz & Poll Platform"}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {isHebrew ? (
              <>יוצרים. משחקים. <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">מנצחים!</span></>
            ) : (
              <>Create. Play. <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Win!</span></>
            )}
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed">
            {isHebrew
              ? "הפכו כל אירוע, שיעור או פגישה לניסיון חווייתי וסוחף בזמן אמת. תמיכה מלאה בהשתתפות דרך הטלפון הנייד, הנייד הכשר או חיוג קולי!"
              : "Turn any event, class or meeting into a real-time engaging experience. Full support for smartphone or dial-in phone participation!"}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link
              href="/login"
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-bold text-lg shadow-xl shadow-purple-500/25 transition transform hover:-translate-y-0.5"
            >
              <Sparkles className="h-5 w-5" />
              <span>{isHebrew ? "צור משחק בחינם" : "Create Free Game"}</span>
              {isHebrew ? <ArrowLeft className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
            </Link>

            <Link
              href="/join"
              className="flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-base transition"
            >
              <Gamepad2 className="h-5 w-5 text-emerald-400" />
              <span>{isHebrew ? "הצטרף למשחק פעיל" : "Join Game"}</span>
            </Link>

            <Link
              href="/certificate"
              className="flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-base transition"
            >
              <FileText className="h-5 w-5 text-amber-400" />
              <span>{isHebrew ? "אחזור תעודה משיחה קולית" : "Get Certificate"}</span>
            </Link>
          </div>

          {/* Hero Mockup Frame */}
          <div className="relative mx-auto max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-2xl backdrop-blur-md">
            <div className="aspect-video rounded-xl bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden border border-slate-800/80">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-pink-500/10"></div>
              <Trophy className="h-20 w-20 text-amber-400 mb-4 animate-bounce" />
              <h3 className="text-2xl font-black text-white mb-2">
                {isHebrew ? "פודיום המובילים בזמן אמת!" : "Live Leaderboard Podium!"}
              </h3>
              <p className="text-slate-400 text-sm max-w-md">
                {isHebrew 
                  ? "התשובות מעודכנות ב-0 דילוי בסנכרון מלא בין הטלפונים הכשרים והמסך הראשי!" 
                  : "Zero latency updates syncing web users and phone callers instantly!"}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. How It Works */}
      <section id="how-it-works" className="py-20 bg-slate-900/50 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {isHebrew ? "3 צעדים פשוטים למשחק מושלם" : "3 Simple Steps to Play"}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {isHebrew ? "כל אחד יכול להפעיל משחק סוחף תוך פחות מ-2 דקות" : "Anyone can run an engaging game in under 2 minutes"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center relative">
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-2xl font-black">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {isHebrew ? "יוצרים ומעצבים" : "Create & Design"}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {isHebrew 
                  ? "בונים חידון בקלות, מוסיפים שאלות, נעזרים ב-AI החינמי שלנו או מייבאים קובץ Excel מוכן בלחיצה."
                  : "Build a quiz, add questions, use free AI generator or import Excel files instantly."}
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center relative">
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-2xl font-black">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {isHebrew ? "משתפים ומחברים" : "Share & Join"}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {isHebrew 
                  ? "המשתתפים מצטרפים בסריקת קוד QR, קישור דפדפן, או בחיוג קולי מהטלפון הכשר!"
                  : "Players join via QR code, direct URL, or calling in via telephone!"}
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center relative">
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 text-2xl font-black">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {isHebrew ? "מפעילים וחוגגים" : "Play & Win"}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {isHebrew 
                  ? "מריצים את המשחק בלייב על המסך, צופים בתשובות בזמן אמת ומכריזים על הזוכים בפודיום חגיגי."
                  : "Host live on screen, watch answers updated in real-time and celebrate winners on the podium."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Slide Types */}
      <section id="slide-types" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {isHebrew ? "עולם שלם של סוגי שאלות" : "Versatile Question Types"}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {isHebrew ? "בחרו את סוג השקופית המתאים ביותר לחוויה שלכם" : "Choose the best slide layout for your experience"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <HelpCircle className="h-10 w-10 text-indigo-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{isHebrew ? "❓ טריוויה אמריקאית" : "❓ Trivia Quiz"}</h3>
              <p className="text-slate-400 text-sm">{isHebrew ? "שאלות אמריקאיות מרובות תשובות עם ניקוד מבוסס זמן ומהירות." : "Multiple choice questions with speed-based points system."}</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <BarChart3 className="h-10 w-10 text-emerald-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{isHebrew ? "📊 סקר והצבעה" : "📊 Live Poll"}</h3>
              <p className="text-slate-400 text-sm">{isHebrew ? "איסוף דעות, הצבעות ומשדרי עמדות בזמן אמת ללא ניקוד." : "Collect live opinions and votes displayed instantly on graph charts."}</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <ImageIcon className="h-10 w-10 text-purple-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{isHebrew ? "🖼️ תשובה בתמונה" : "🖼️ Image Choices"}</h3>
              <p className="text-slate-400 text-sm">{isHebrew ? "השחקנים בוחרים את התשובה הנכונה מתוך גלריית תמונות מרהיבה." : "Players select correct answers from visual photo options."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Phone / IVR Highlight */}
      <section id="ivr" className="py-20 bg-gradient-to-b from-indigo-950/40 to-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-900/60 to-purple-900/60 rounded-3xl p-8 sm:p-12 border border-indigo-500/30 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-4">
                <Phone className="h-3.5 w-3.5" />
                <span>{isHebrew ? "ייחודי ל-MegaClick!" : "Exclusive Feature!"}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                {isHebrew ? "אין אינטרנט? משחקים מהטלפון הכשר!" : "Play via Dial-In Phone Call!"}
              </h2>
              <p className="text-slate-300 text-base mb-6 leading-relaxed">
                {isHebrew 
                  ? "המערכת שלנו מחוברת ישירות לרשת הטלפוניה. מחייגים למספר המערכת 077-2250449, מקישים את קוד המשחק ועונים באמצעות מקשי הטלפון (1, 2, 3...)!"
                  : "Dial 077-2250449, enter Game PIN and answer using phone keypad in real-time!"}
              </p>
              <Link
                href="/certificate"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition"
              >
                <FileText className="h-5 w-5" />
                <span>{isHebrew ? "שיחקת מהטלפון? לחץ לאחזור תעודה" : "Get Phone Game Certificate"}</span>
              </Link>
            </div>
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-700 text-center w-full md:w-auto">
              <p className="text-xs text-slate-400 mb-2">{isHebrew ? "מספר מערכת קולית:" : "IVR Phone Number:"}</p>
              <p className="text-3xl font-black text-emerald-400 tracking-wider dir-ltr mb-4">077-2250449</p>
              <div className="text-xs text-slate-400 flex items-center justify-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>{isHebrew ? "סנכרון מלא עם השרת בלייב" : "Real-time Live Sync"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section id="faq" className="py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              {isHebrew ? "שאלות ותשובות נפוצות" : "Frequently Asked Questions"}
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: isHebrew ? "האם השימוש במערכת הוא בחינם?" : "Is MegaClick free to use?",
                a: isHebrew ? "כן! ניתן להירשם, ליצור חידונים, להשתמש במחולל ה-AI ולהפעיל משחקים בחינם." : "Yes! You can sign up, build quizzes, use AI generators, and host games for free."
              },
              {
                q: isHebrew ? "איך עובדת ההשתתפות דרך הטלפון הכשר?" : "How does kosher phone participation work?",
                a: isHebrew ? "המשתתפים מחייגים ל-077-2250449, מקישים את קוד המשחק ועונים במקשים. התשובות מסתנכרנות מיד במסך המנחה!" : "Players dial 077-2250449, enter Game PIN and answer with phone buttons. Results sync live!"
              },
              {
                q: isHebrew ? "איך משיגים תעודת השתתפות?" : "How to retrieve a game certificate?",
                a: isHebrew ? "בסיום המשחק הקולי המערכת מקריאה קוד אישי. נכנסים לעמוד 'אחזור תעודה' באתר ומורידים קובץ PDF מעוצב." : "At the end of a phone game, enter your personal code in our Certificate Retrieval page to download PDF."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-start font-bold text-white flex justify-between items-center hover:bg-slate-800/50 transition"
                >
                  <span>{item.q}</span>
                  <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-indigo-400" />
            <span className="font-bold text-white text-lg">MegaClick</span>
            <span>© 2026. {isHebrew ? "כל הזכויות שמורות." : "All rights reserved."}</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/join" className="hover:text-white transition">{isHebrew ? "הצטרף למשחק" : "Join Game"}</Link>
            <Link href="/certificate" className="hover:text-white transition">{isHebrew ? "אחזור תעודה" : "Certificates"}</Link>
            <Link href="/login" className="hover:text-white transition">{isHebrew ? "התחברות" : "Login"}</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}