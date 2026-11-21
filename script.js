// =========================================
// 1. العناصر الأساسية والتهيئة
// =========================================
const container = document.querySelector(".birthday-container"); //[span_2](start_span)[span_2](end_span)

// دالة مساعدة لرفع الصفحة لأعلى بسلاسة عند الانتقال بين الصفحات
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// =========================================
// 2. الصفحة الأولى: فتح الهدية
// =========================================
function openGift() {
    if (!container) return;

    container.innerHTML = `
        <div class="card letter-page" dir="rtl">

            <p class="small-title" dir="ltr">A LETTER FOR MY FAVORITE GIRL</p>

            <h1>حبيبتي مي ❤️</h1>

            <h2 dir="ltr">My person ♡</h2>

            <div class="birthday-cake">💌</div>

            <p class="message">
                من 9 سنين قابلت صاحبة...
                <br><br>
                ومن غير ما أحس بقيتي أختي.
                <br><br>
                والهدية الصغيرة دي جزء بسيط من حبي ليكي.
            </p>

            <button onclick="nextPage()">Next page ♡</button>

        </div>
    `;
    scrollToTop();
}

// =========================================
// 3. الصفحة الثانية: حكايتنا
// =========================================
function nextPage() {
    if (!container) return;

    container.innerHTML = `
        <div class="card" dir="rtl">

            <h1>حكايتنا ❤️</h1>

            <p>
                تسع سنين من الصداقة والضحك والذكريات،
                ولسه أجمل حكاياتنا جاية.
            </p>

            <button onclick="nextPage2()">كمّلي ♡</button>

        </div>
    `;
    scrollToTop();
}

// =========================================
// 4. الصفحة الثالثة
// =========================================
function nextPage2() {
    if (!container) return;

    container.innerHTML = `
        <div class="card" dir="rtl">

            <h1>حكايتنا الحلوة ❤️</h1>

            <p>
                تسع سنين من الضحك والمواقف اللي عمرنا ما هننساها.
                وكل يوم بيعدّي بيأكدلي إن وجودك في حياتي من أحلى الحاجات.
            </p>

            <button onclick="nextPage3()">One more thing ♡</button>

        </div>
    `;
    scrollToTop();
}

// =========================================
// 5. الصفحة الرابعة: الصور والذكريات
// =========================================
function nextPage3() {
    if (!container) return;

    container.innerHTML = `
        <div class="card" dir="rtl">

            <p class="small-title" dir="ltr">OUR LITTLE WORLD</p>

            <h1>ذكرياتنا ❤️</h1>

            <h2 dir="ltr">9 years ♡</h2>

            <div class="photo-gallery">
                <img src="memory1.jpg" alt="ذكرياتنا">
                <img src="memory2.jpg" alt="ذكرياتنا">
                <img src="memory3.jpg" alt="ذكرياتنا">
            </div>

            <p class="message">
                كل صورة وراها حكاية...
                <br><br>
                وكل حكاية فيها جزء مننا.
            </p>

            <button onclick="nextPageReasons()">اكتشفي ليه ♡</button>

        </div>
    `;
    scrollToTop();
}

// =========================================
// 6. الصفحة الخامسة: العشرة أسباب
// =========================================
function nextPageReasons() {
    if (!container) return;

    container.innerHTML = `
        <div class="card reasons-page" dir="rtl">

            <h1>10 أسباب بحبك عشانهم ❤️</h1>

            <p class="subtitle">
                تسع سنين من الضحك والذكريات، ولسه عندي كلام كتير أقولهولك.
            </p>

            <div class="reasons-list" dir="rtl">

                <div class="reason-card">
                    <img src="memory8.jpg" alt="سبب 1">
                    <h2>1. إنتِ أختي اللي مخلفتهاش أمي</h2>
                    <p>إنتِ جزء من عيلتي ومن كل تفاصيل أيامي.</p>
                </div>

                <div class="reason-card">
                    <img src="memory9.jpg" alt="سبب 2">
                    <h2>2. ضحكتنا ملهاش بديل</h2>
                    <p>معاكي أبسط المواقف بتتحول لذكريات حلوة.</p>
                </div>

                <div class="reason-card">
                    <img src="memory4.jpg" alt="سبب 3">
                    <h2>3. بتفهميني من غير كلام</h2>
                    <p>بتفهمي أنا حاسة بإيه من غير ما أشرح.</p>
                </div>

                <div class="reason-card">
                    <img src="memory6.jpg" alt="سبب 4">
                    <h2>4. بعرف أكون على طبيعتي معاكي</h2>
                    <p>معاكي مش محتاجة أكون حد غير نفسي.</p>
                </div>

                <div class="reason-card">
                    <img src="memory10.jpg" alt="سبب 5">
                    <h2>5. عشرة العمر</h2>
                    <p>تسع سنين عدوا ولسه عندنا حكايات كتير.</p>
                </div>

                <div class="reason-card">
                    <img src="memory7.jpg" alt="سبب 6">
                    <h2>6. وجودك بيهون عليا</h2>
                    <p>مجرد وجودك جنبي بيفرق معايا.</p>
                </div>

                <div class="reason-card">
                    <img src="memory5.jpg" alt="سبب 7">
                    <h2>7. كل تفصيلة معاكي ليها ذكرى</h2>
                    <p>حتى أبسط اللحظات بتفضل غالية عندي.</p>
                </div>

                <div class="reason-card">
                    <img src="memory1.jpg" alt="سبب 8">
                    <h2>8. إنتِ أماني وراحتي</h2>
                    <p>وجودك في حياتي نعمة كبيرة.</p>
                </div>

                <div class="reason-card">
                    <img src="memory3.jpg" alt="سبب 9">
                    <h2>9. شوفتي مني كل حاجة ولسه جنبي</h2>
                    <p>في كل حالاتي وجودك بيفرق معايا.</p>
                </div>

                <div class="reason-card">
                    <img src="memory2.jpg" alt="سبب 10">
                    <h2>10. ببساطة إنتِ مي ❤️</h2>
                    <p>ودي لوحدها كفاية عشان أحبك وأتمنى تفضلي في حياتي.</p>
                </div>

            </div>

            <button onclick="nextPage4()">جواب ليكي من قلبي ♡</button>

        </div>
    `;
    scrollToTop();
}

// =========================================
// 7. الصفحة السادسة: الجواب الأخير
// =========================================
function nextPage4() {
    if (!container) return;

    container.innerHTML = `
        <div class="card" dir="rtl">

            <p class="small-title" dir="ltr">A LETTER FROM MY HEART</p>

            <h1>إلى مي ❤️</h1>

            <p class="message">
                كل سنة وإنتِ طيبة يا أجمل صاحبة وأحن أخت.
                <br><br>
                مش عارفة أقولك قد إيه أنا ممتنة إنك في حياتي.
                تسع سنين عدو، وكل سنة فيهم ليها مكانة خاصة عندي.
                <br><br>
                أتمنى تفضلي دايمًا مبسوطة، وتحققي كل اللي بتحلمي بيه.
                <br><br>
                مكنتش مصدقه ان فعلا اللحظه دي جت الي مي فيها اجمل عروسه مش عارفه احساسي هيكون ايه في الفرح بس متاكده انو  ملوش وصف
                <br><br>
                وطبعا مش هتنسي جملتي المفضله مش بقولهالك غير مره في السنه (وجودك في حياتي اكتر حاجه بتطمني والله يا مي)
               <br>
               طيبه اوي من جواكي يا مي وتستاهلي كل الحلو الى في الدنيا يارب تفضلي ديما موجوده وضجكتك متفارقش وشك يا حبيبتيي
               <br><br>
               عاوزه اقولك مهما الدنيا خبطت بينا برضه مفيش حد هيقدر يحل محلك او ياخد المساحه دي في حياتي انتي غير الكل ديما يا مي
               <br><br>
               
                بحبك يا مي، وكل سنة وإحنا مع بعض.
                <br><br>
     حبيبتك جنه ❤️
            </p>

        </div>
    `;
    scrollToTop();
}