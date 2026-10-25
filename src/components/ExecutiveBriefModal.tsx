import React from 'react';

interface ExecutiveBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveBriefModal: React.FC<ExecutiveBriefModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#13161c]/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#1c2128] max-w-2xl w-full rounded-2xl p-6 space-y-4 border border-zinc-200 dark:border-zinc-700/80 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <div>
            <span className="text-xs text-orange-600 font-black">خلاصه تصمیم‌گیری یک‌صفحه‌ای هیئت‌مدیره</span>
            <h3 className="text-lg font-black text-zinc-900 dark:text-white mt-0.5">
              ۱۰ تصمیم استراتژیک برای مدیران ارشد گروه صنعتی اسپوتا (RST)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-black text-xs flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        <ol className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 space-y-3 list-decimal list-inside leading-relaxed">
          <li>
            <strong>تثبیت مرز استراتژیک هویت برند:</strong> تمرکز قاطعانه بر جایگاه <strong>Semi-Trailer Axle &amp; Running Gear Specialist</strong> با تکیه بر ۶ شرکت تخصصی گروه صنعتی اسپوتا و عدم ورود به ساخت قطعات عمومی اتاق یا بدنه تریلر.
          </li>
          <li>
            <strong>فعال‌سازی چرخ طیار درآمدی (Flywheel):</strong> نگاه به فروش OEM به عنوان «موتور ایجاد دارایی فعال در جاده (Installed Base)» و برداشت جریان نقدینگی با حاشیه سود بالا در بازار قطعات یدکی (Aftermarket).
          </li>
          <li>
            <strong>محاسبه ظرفیت بازار کشور (۲۷۰,۰۰۰ محور سالانه):</strong> نیاز سالانه ۹۰,۰۰۰ دستگاه تریلر در ایران، تقاضای تضمین‌شده <strong>۲۷۰,۰۰۰ محور</strong> و <strong>۵۴۰,۰۰۰ توپی، دیسک، کاسه و کیسه باد</strong> را رقم می‌زند.
          </li>
          <li>
            <strong>هدف‌گذاری سهم بازار ۲۰ درصدی:</strong> تسخیر سهم ۲۰٪ از این بازار، معادل فروش سالانه <strong>۵۴,۰۰۰ محور</strong> و بیش از ۲,۵۰۰ میلیارد تومان گردش مالی برای شرکت است.
          </li>
          <li>
            <strong>تمرکز فوری بر ۷ تریلرساز موج اول (Wave 1):</strong> شروع مذاکرات فنی با کارخانجات مستقل دارای خطوط مکانیزه شامل <strong>فیلپا (FILPA)، اروم تریلر، یاقوت تبریز، دنیای ماموت، وزین پرشیا، ایران کاوه و پویا خودرو ماهان</strong>.
          </li>
          <li>
            <strong>اجرای راهبرد نفوذ Land &amp; Expand:</strong> ورود از تک‌قطعه‌های بدون ریسک (دیسک ترمز، بوستر ۱۶/۲۴ و توپی چرخ) تا تغییر تدریجی کل محور در فاز طراحی مدل‌های نوساز (Design-in).
          </li>
          <li>
            <strong>تجهیز تیم فروش سازمانی به Engineering Pack:</strong> ارائه فایل‌های سه‌بعدی CAD، نقشه‌های ابعادی دقیق و گواهینامه رسمی EMARK (ECE R13) صادره از TÜV AUSTRIA برای متقاعدسازی کمیته ۶ نفره خرید (DMU).
          </li>
          <li>
            <strong>بهره‌برداری حداکثری از خوشه ارومیه:</strong> استقرار کارخانه در کیلومتر ۱۲ جاده ارومیه–مهاباد در قلب قطب اول تریلرسازی کشور (تأمین‌کننده ۱۷٪ تریلرهای ایران) در هماهنگی با هاب تجاری و ترانزیتی تهران.
          </li>
          <li>
            <strong>تسخیر نقطه تشخیص با آکادمی Running Gear:</strong> راه‌اندازی مرجع آموزشی آنلاین و راهنمای نصب QR Code روی بسته‌بندی هوشمند قطعات در <strong>rstaxles.com</strong> برای جذب اعتماد مکانیک‌ها و استادکاران زیربندی.
          </li>
          <li>
            <strong>تکمیل دیتابیس Bottom-Up در اسپرینت اول:</strong> ثبت دقیق تیراژ سالانه و برند فعلی محور در BOM برای تک‌تک ۵۰ کارخانه شناسایی‌شده جهت جلوگیری از جنگ قیمتی کور.
          </li>
        </ol>

        <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center text-xs">
          <span className="text-zinc-500">منبع: گزارش هوش تجاری گروه صنعتی اسپوتا (RST Axles)</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold transition-colors shadow-sm"
          >
            تأیید و بازگشت به سامانه
          </button>
        </div>
      </div>
    </div>
  );
};
