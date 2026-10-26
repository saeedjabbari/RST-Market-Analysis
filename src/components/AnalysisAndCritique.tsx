import React from 'react';

export const AnalysisAndCritique: React.FC = () => {
  const improvements = [
    {
      title: '۱. تجسم واقعی محصولات ۶گانه با رندرهای صنعتی سه‌بعدی',
      before: 'در طرح اولیه، برای نمایش قطعات حیاتی صرفاً از آیکون‌های فلت عمومی یا اشکال ساده استفاده شده بود که در جلسات مدیران فنی و هیئت‌مدیره اعتبار مهندسی کافی نداشت.',
      after: 'هر ۶ محصول ارسالی شما (بوستر ۱۶/۲۴، دبه بادی ۸۸۱، پایه توقف دو سرعته، کالیپر ۲۲.۵، مجموعه توپی و کاسه ۴۱۰۱ با آرم برجسته RST و محور کامل دیسکی DFZ) به شکل رندر باکیفیت با مشخصات کامل ابعادی، استانداردها و نقشه BOM پیاده‌سازی شدند.',
      impact: 'جلب اعتماد فوری مدیران فنی (Technical DMU) و اطمینان از اصالت تولید صنعتی اسپوتا.',
    },
    {
      title: '۲. اصلاح پالت رنگی و مهار اشباع نارنجی (Accent Discipline)',
      before: 'در طرح قبلی، رنگ نارنجی در بخش‌های زیادی از المان‌ها، پس‌زمینه‌ها و کادرها با شدت بالا تکرار شده بود که چشم را خسته می‌کرد و هویت صنعتی فلزی تریلر را تحت‌الشعاع قرار می‌داد.',
      after: 'مطابق دستور شما، رنگ نارنجی منحصراً به عنوان «لهجه و اکستنشن توجه» (کمتر از ۱۵٪ بودجه بصری) در کنار پالت سفید خالص، خاکستری روشن، ذغال‌سنگی تیره و مشکی متالورژی مستقر شد.',
      impact: 'ایجاد وقار بصری سازمانی (Corporate Prestige) متناسب با کلاس سرمایه‌گذاری سنگین.',
    },
    {
      title: '۳. تعاملی شدن و لینک مستقیم به وب‌سایت رسمی تمام ۵۰ کارخانه OEM',
      before: 'نام شرکت‌های تولیدکننده تریلر در ایران و خاورمیانه به صورت متن‌های مرده بدون امکان بررسی در دایرکتوری درج شده بود.',
      after: 'برای تک‌تک ۵۰ شرکت (از مارال و فیلپا و ماموت تا تیرسان، کزبورر، کرونه، المجدوعی و گوریکا) لینک مستقیم و معتبر وب‌سایت تعبیه شد تا مدیران بتوانند با یک کلیک کاتالوگ و محصولات رقیب/مشتری را بازبینی کنند.',
      impact: 'تبدیل پرزنت از یک فایل کاغذی به یک سامانه هوش تجاری (Market Intelligence System) فعال.',
    },
    {
      title: '۴. تجسم ضریب تکثیر قطعات در شاسی سه‌محوره (Parts Multiplier)',
      before: 'تنها به عبارت ۹۰,۰۰۰ تریلر و ۲۷۰,۰۰۰ محور اشاره شده بود و مدیران به سختی عمق تقاضای قطعات یدکی را درک می‌کردند.',
      after: 'طرح دیاگرام انفجاری شاسی تریلر سه‌محوره پیاده‌سازی شد که نشان می‌دهد هر ۱ تریلر نیازمند ۳ محور، ۶ توپی چرخ، ۶ دیسک یا کاسه، ۶ بوستر ترمز و ۶ کیسه باد است (۵۴۰,۰۰۰ قطعه چرخ‌انتهایی سالانه).',
      impact: 'توجیه اقتصادی سرمایه‌گذاری در خطوط توپی و ترمزسازان آذر اسپوتا.',
    },
    {
      title: '۵. شبیه‌ساز مالی درآمدی بلادرنگ بر حسب میلیارد تومان',
      before: 'محاسبات مالی محدود به درصد سهم بازار بود و اثر نهایی ریالی روی ترازنامه مشخص نمی‌شد.',
      after: 'ماشین‌حساب تعاملی با کنترل قیمت میانگین هر محور و سهم بازار طراحی شد که بلافاصله گردش مالی سالانه را بر حسب میلیارد تومان (مثلاً ۲,۷۰۰ میلیارد تومان در سهم ۲۰٪) محاسبه می‌کند.',
      impact: 'متقاعدسازی مدیران مالی (CFO) و اعضای هیئت‌مدیره در کمتر از ۲ دقیقه.',
    },
    {
      title: '۶. نقشه دوگانه تعاملی منطقه‌ای و خوشه‌های ۶گانه ایران',
      before: 'عدم درک پیوند جغرافیایی خوشه تریلرسازی ارومیه با هاب توزیع و خرید تهران.',
      after: 'دو نقشه برداری تعاملی SVG با قابلیت کلیک روی کشورها (ترکیه، عربستان، امارات و...) و خوشه‌های صنعتی ایران (ارومیه، تبریز، البرز، تهران، کاشان، اصفهان) طراحی شد.',
      impact: 'اثبات برتری لجستیکی کارخانه اسپوتا در مجاورت مرز ترکیه و قطب اول تریلرسازی کشور.',
    },
  ];

  return (
    <section className="space-y-6">
      {/* Intro Header */}
      <div className="rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
              گزارش تحلیلی و ممیزی فنی
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">تحلیل طرح پرزنت اولیه و تشریح ارتقای صورت‌گرفته</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-1.5 self-stretch rounded-full bg-orange-500 shrink-0 mt-1.5" />
            <div>
              <h1 className="ds-heading-hero text-zinc-900 dark:text-white">
                آنالیز ساختار ارائه مدیریتی و بهبودهای اعمال‌شده در سامانه نوین
              </h1>
              <p className="ds-body text-zinc-600 dark:text-zinc-400 mt-1.5 max-w-3xl leading-relaxed">
                پاسخ به درخواست تحلیلی شما: ارزیابی انتقادی نقاط قوت و ضعف فایل اولیه ارسالی و معرفی ۶ محور اصلی ارتقای صورت‌گرفته برای جلسه دفاع در برابر مدیران ارشد.
              </p>
            </div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-[#242a34] text-white border border-zinc-700/80 text-xs font-black shrink-0 shadow-xs">
          ممیزی هیئت‌مدیره: ۶ بهبود کلیدی
        </div>
      </div>

      {/* 6 Key Improvements Detailed Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {improvements.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-3 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2.5">
                <h3 className="text-sm font-black text-zinc-900 dark:text-white">{item.title}</h3>
                <span className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-600 text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
              </div>

              <div className="mt-3 space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
                  <strong className="text-zinc-900 dark:text-white block mb-0.5">وضعیت در طرح اولیه:</strong>
                  {item.before}
                </div>

                <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800/40 text-zinc-800 dark:text-zinc-200">
                  <strong className="text-orange-700 dark:text-orange-300 block mb-0.5">بهبود اعمال‌شده در سامانه نوین:</strong>
                  {item.after}
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs">
              <span className="text-zinc-500 font-medium">اثرگذاری در تصمیم مدیران:</span>
              <span className="font-bold text-orange-600 dark:text-orange-400">{item.impact}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Strategic Boardroom Recommendations */}
      <div className="rounded-2xl p-6 bg-[#1c2128] text-white border border-zinc-700/80 shadow-lg space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-700/80 pb-3">
          <div>
            <span className="text-xs text-orange-400 font-extrabold">راهنمای ارائه موفق در برابر هیئت‌مدیره</span>
            <h3 className="text-lg font-black text-white mt-0.5">۵ توصیه کلیدی به ارائه‌دهنده در جلسه با مدیران شرکت</h3>
          </div>
          <span className="text-xs px-2.5 py-1 rounded bg-orange-600 text-white font-bold">Boardroom Playbook</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-[#242a34] border border-zinc-600/70 space-y-1 shadow-xs">
            <div className="text-orange-400 font-black">۱. شروع با چرخ طیار</div>
            <p className="text-zinc-200 leading-relaxed text-[11px]">
              پرزنت را با مفهوم دارایی در جاده (Installed Base) آغاز کنید تا مدیران متوجه شوند فروش OEM صرفاً شروع یک رابطه مالی ۱۰ ساله است.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#242a34] border border-zinc-600/70 space-y-1 shadow-xs">
            <div className="text-orange-400 font-black">۲. نمایش محصولات واقعی</div>
            <p className="text-zinc-200 leading-relaxed text-[11px]">
              تب «محصولات RST» را باز کنید و روی کیفیت ریخته‌گری توپی ۴۱۰۱ و کالیپر مانور دهید تا اعتبار کارخانه اثبات شود.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#242a34] border border-zinc-600/70 space-y-1 shadow-xs">
            <div className="text-orange-400 font-black">۳. شبیه‌سازی مالی زنده</div>
            <p className="text-zinc-200 leading-relaxed text-[11px]">
              در برابر مدیر مالی، اسلایدر سهم بازار را روی ۲۰٪ قرار دهید تا گردش مالی ۲,۵۰۰ میلیارد تومانی را در صفحه سایزینگ ببیند.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#242a34] border border-zinc-600/70 space-y-1 shadow-xs">
            <div className="text-orange-400 font-black">۴. کلیک روی سایت‌های OEM</div>
            <p className="text-zinc-200 leading-relaxed text-[11px]">
              در تب دیتابیس ۵۰ شرکت، وب‌سایت فیلپا یا مارال را باز کنید تا تسلط شما بر سبد محصول مشتریان برای مدیران محرز گردد.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#242a34] border border-zinc-600/70 space-y-1 shadow-xs">
            <div className="text-orange-400 font-black">۵. پایان با برنامه ۹۰ روزه</div>
            <p className="text-zinc-200 leading-relaxed text-[11px]">
              جلسه را با اسپرینت‌های ۳۰ روزه و تارگت ۱۰ کارخانه نهایی کنید تا پرزنت به یک تصمیم اجرایی مشخص ختم شود.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
