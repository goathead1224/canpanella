
/** 画面内に入ったどうかを監視しておきたい要素をここで取得　*/
const monitored = document.querySelectorAll('.swiper');

/**監視範囲の細かい設定。詳しい説明は https://ics.media/entry/190902/ がわかりやすいです */
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1
};

/**IntersectionObserverを起動 */
const observer = new IntersectionObserver(slideStart);

// monitoredが画面内に入ったら発動。forEachを使っているので、複数のスライダーがあっても全部monitoredできる
monitored.forEach(monitor => {
    observer.observe(monitor);
});

/**  要素が表示されたら実行する動作 */
function slideStart(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            /** swiperのautoplayを開始させる */
            swiper.autoplay.start();
        }
    });
};

const swiper = new Swiper(".swiper", {
    loop: true, // ループ
    effect: 'fade',
    autoplay: {
        // 自動再生
        effect: 'flip',
        delay: 2000, // 1.5秒後に次のスライド（初期値：3000）
        disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
});

swiper.autoplay.stop();
