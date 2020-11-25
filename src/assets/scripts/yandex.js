window.addEventListener(
    "load",
    function () {
      if (navigator.geolocation) {
        //для начала надо проверить, доступна ли геолокация, а то еще у некоторых браузеры то древние. Там о таком и не слышали.
        var div = document.getElementById("location"); //получаем доступ к нашему элементу location в DOM
        div.innerHTML = YMaps.location.city; //Вставляем нужнные данные в DOM.
      } else {
        alert("Геолокация не поддерживается"); //выведем сообщение для старых браузеров.
      }
    },
    false
  );
  
  window.addEventListener(
    "load",
    function () {
      var div = document.getElementById("date");
      Data = new Date();
      Year = Data.getFullYear();
      Month = Data.getMonth();
      Day = Data.getDate();
      Week = Data.getDay();
      Hour = Data.getHours();
      Minutes = Data.getMinutes();
  
      function getWeekDay(date) {
        let days = [
          "воскресенте",
          "понедельник",
          "вторник",
          "среда",
          "четверг",
          "пятница",
          "суббота",
        ];
  
        return days[date];
      }
  
      // Преобразуем месяца
      switch (Month) {
        case 0:
          fMonth = "января";
          break;
        case 1:
          fMonth = "февраля";
          break;
        case 2:
          fMonth = "марта";
          break;
        case 3:
          fMonth = "апреля";
          break;
        case 4:
          fMonth = "мае";
          break;
        case 5:
          fMonth = "июня";
          break;
        case 6:
          fMonth = "июля";
          break;
        case 7:
          fMonth = "августа";
          break;
        case 8:
          fMonth = "сентября";
          break;
        case 9:
          fMonth = "октября";
          break;
        case 10:
          fMonth = "ноября";
          break;
        case 11:
          fMonth = "декабря";
          break;
      }
  
      div.innerHTML =
        Day + " " + fMonth + ", " + getWeekDay(Week) + " " + Hour + ":" + Minutes;
    },
    false
  );
  
  in_moscow.onclick = function () {
    var p = document.getElementById("target");
    p.innerHTML =
      '<span id="target"><a href="https://yandex.ru/news/story/V_Minzdrave_predupredili_ob_oslozhneniyakh_na_serdce_posle_koronavirusa--d40e8db15c5930404092df4d3f8bd276?fan=1&from=main_portal&lang=ru&lr=213&mlid=1605369081.glob_225.d40e8db1&msid=1605369915.24939.97784.4366&persistent_id=119264494&stid=rzaN1u-aJRbcop8XqHq6&t=1605369081&utm_medium=topnews_news&utm_source=morda_desktop" class="new1">В Минздраве предупредили об осложнениях на сердце после коронавируса</a><br><a href="https://yandex.ru/news/story/EHks-glavu_SNB_Armenii_zaderzhali_po_delu_o_podgotovke_ubijstva_Pashinyana--339450374b78f69c1c2186facceceece?fan=1&from=main_portal&lang=ru&lr=213&mlid=1605369081.glob_225.33945037&msid=1605369915.24939.97784.4366&persistent_id=119273842&stid=gDN7YI9DvVQ1uX1tk_A_&t=1605369081&utm_medium=topnews_news&utm_source=morda_desktop" class="new2">Экс-главу СНБ Армении задержали по делу о подготовке убийства Пашиняна</a><br><a href="https://yandex.ru/news/story/Obvinyaemogo_v_prevyshenii_polnomochij_mehra_Tomska_vzyali_pod_strazhu--f2ee7793249554643e20ed4a5492daf5?fan=1&from=main_portal&lang=ru&lr=213&mlid=1605369081.glob_225.f2ee7793&msid=1605369915.24939.97784.4366&persistent_id=119248827&stid=yL8wRZFioIp6RlcX2kAC&t=1605369081&utm_medium=topnews_news&utm_source=morda_desktop" class="new3">Обвиняемого в превышении полномочий мэра Томска взяли под стражу</a><br><a href="https://yandex.ru/news/story/Obvinyaemogo_v_prevyshenii_polnomochij_mehra_Tomska_vzyali_pod_strazhu--f2ee7793249554643e20ed4a5492daf5?fan=1&from=main_portal&lang=ru&lr=213&mlid=1605369081.glob_225.f2ee7793&msid=1605369915.24939.97784.4366&persistent_id=119248827&stid=yL8wRZFioIp6RlcX2kAC&t=1605369081&utm_medium=topnews_news&utm_source=morda_desktop" class="new4">Пригожин и Лоза высказались на тему бойкота новогодних концертов</a><br><a href="https://yandex.ru/news/story/SMI_uznali_o_gotovnosti_Trampa_pokinut_post_pri_zakonnoj_pobede_Bajdena--f6505b886f5484a40013222f53ce2e2d?fan=1&from=main_portal&lang=ru&lr=213&mlid=1605394067.glob_225.f6505b88&msid=1605394612.8556.98068.412776&persistent_id=119250204&stid=nj1IJiZMy1N1GvO0YMQ2&t=1605394067&utm_medium=topnews_news&utm_source=morda_desktop" class="new5">СМИ узнали о готовности Трампа покинуть пост при законной победе Байдена</a></span>';
  };
  
  in_moscow.onclick = function () {
    var p = document.getElementById("target");
    p.innerHTML =
      '<span id="target"><a href="https://yandex.ru/news/story/V_Minzdrave_predupredili_ob_oslozhneniyakh_na_serdce_posle_koronavirusa--d40e8db15c5930404092df4d3f8bd276?fan=1&from=main_portal&lang=ru&lr=213&mlid=1605369081.glob_225.d40e8db1&msid=1605369915.24939.97784.4366&persistent_id=119264494&stid=rzaN1u-aJRbcop8XqHq6&t=1605369081&utm_medium=topnews_news&utm_source=morda_desktop" class="new1">В Минздраве предупредили об осложнениях на сердце после коронавируса</a><br><a href="https://yandex.ru/news/story/EHks-glavu_SNB_Armenii_zaderzhali_po_delu_o_podgotovke_ubijstva_Pashinyana--339450374b78f69c1c2186facceceece?fan=1&from=main_portal&lang=ru&lr=213&mlid=1605369081.glob_225.33945037&msid=1605369915.24939.97784.4366&persistent_id=119273842&stid=gDN7YI9DvVQ1uX1tk_A_&t=1605369081&utm_medium=topnews_news&utm_source=morda_desktop" class="new2">Экс-главу СНБ Армении задержали по делу о подготовке убийства Пашиняна</a><br><a href="https://yandex.ru/news/story/Obvinyaemogo_v_prevyshenii_polnomochij_mehra_Tomska_vzyali_pod_strazhu--f2ee7793249554643e20ed4a5492daf5?fan=1&from=main_portal&lang=ru&lr=213&mlid=1605369081.glob_225.f2ee7793&msid=1605369915.24939.97784.4366&persistent_id=119248827&stid=yL8wRZFioIp6RlcX2kAC&t=1605369081&utm_medium=topnews_news&utm_source=morda_desktop" class="new3">Обвиняемого в превышении полномочий мэра Томска взяли под стражу</a><br><a href="https://yandex.ru/news/story/Obvinyaemogo_v_prevyshenii_polnomochij_mehra_Tomska_vzyali_pod_strazhu--f2ee7793249554643e20ed4a5492daf5?fan=1&from=main_portal&lang=ru&lr=213&mlid=1605369081.glob_225.f2ee7793&msid=1605369915.24939.97784.4366&persistent_id=119248827&stid=yL8wRZFioIp6RlcX2kAC&t=1605369081&utm_medium=topnews_news&utm_source=morda_desktop" class="new4">Пригожин и Лоза высказались на тему бойкота новогодних концертов</a><br><a href="https://yandex.ru/news/story/SMI_uznali_o_gotovnosti_Trampa_pokinut_post_pri_zakonnoj_pobede_Bajdena--f6505b886f5484a40013222f53ce2e2d?fan=1&from=main_portal&lang=ru&lr=213&mlid=1605394067.glob_225.f6505b88&msid=1605394612.8556.98068.412776&persistent_id=119250204&stid=nj1IJiZMy1N1GvO0YMQ2&t=1605394067&utm_medium=topnews_news&utm_source=morda_desktop" class="new5">СМИ узнали о готовности Трампа покинуть пост при законной победе Байдена</a></span>';
  };
  
  now_in_smi.onclick = function () {
    var p = document.getElementById("target");
    p.innerHTML =
      '<span id="target"><a href="https://yandex.ru/news/story/Moderna_zayavila_ob_ehffektivnosti_v_945_svoej_vakciny_ot_COVID-19--39ce19640317c1bb63a4fc4ff9566936?fan=1&from=main_portal&lang=ru&lr=213&mlid=1605533868.glob_225.39ce1964&msid=1605534501.54313.82840.814010&persistent_id=119400573&stid=V4luOaxUXEBYp5XS8-Wx&t=1605533868&utm_medium=topnews_news&utm_source=morda_desktop" class="new1">Moderna заявила об эффективности в 94,5% своей вакцины от COVID-19</a><br> <a href="https://yandex.ru/news/story/Zelenskij_pozdravil_Sandu_s_izbraniem_na_post_prezidenta_Moldavii--7fcbe2fc5b2868c351f2462b0a79fb8d?fan=1&from=main_portal&lang=ru&lr=213&mlid=1605533868.glob_225.7fcbe2fc&msid=1605534501.54313.82840.814010&persistent_id=119364236&stid=Yh4J2wXg32DiND5Jzadp&t=1605533868&utm_medium=topnews_news&utm_source=morda_desktop" class="new2">Зеленский поздравил Санду с избранием на пост президента Молдавии</a><br>  <a href="https://yandex.ru/news/story/Mishustin_obyavil_o_sokrashhenii_shtata_gossluzhashhikh_v_nachale_2021_goda--eca48264f6ae324bcef06a648bc140bd?fan=1&from=main_portal&lang=ru&lr=213&mlid=1605533868.glob_225.eca48264&msid=1605534501.54313.82840.814010&persistent_id=119378257&stid=hj9iueeujeWqW0YseY9t&t=1605533868&utm_medium=topnews_news&utm_source=morda_desktop" class="new3">Мишустин объявил о сокращении штата госслужащих в начале 2021 года</a><br>  <a href="https://yandex.ru/news/story/Morgi_v_Ivanovskoj_oblasti_ne_spravlyayutsya_s_khraneniem_umershikh_s_COVID-19--5fc44b44fd1d900ad0b74189790296af?fan=1&from=main_portal&lang=ru&lr=213&mlid=1605533868.glob_225.5fc44b44&msid=1605534501.54313.82840.814010&persistent_id=119385936&stid=Uo3_OThmji6si6o7A1Qs&t=1605533868&utm_medium=topnews_news&utm_source=morda_desktop" class="new4">Морги в Ивановской области не справляются с хранением умерших с COVID-19</a><br> <a href="https://yandex.ru/news/story/Putin_obsudil_s_Makronom_situaciyu_v_Karabakhe--5f1e4f5d0a47f27e83dc7d220e7847e9?fan=1&from=main_portal&lang=ru&lr=213&mlid=1605533868.glob_225.5f1e4f5d&msid=1605534501.54313.82840.814010&persistent_id=119346788&stid=hZGovoz8bqa2rGOpYclH&t=1605533868&utm_medium=topnews_news&utm_source=morda_desktop" class="new5">Путин обсудил с Макроном ситуацию в Карабахе</a></span>';
  };
  
  function populate() {
    while (true) {
      let windowRelativeBottom = document.documentElement.getBoundingClientRect()
        .bottom;
      if (windowRelativeBottom > document.documentElement.clientHeight + 100)
        break;
      document.body.insertAdjacentHTML(
        "beforeend",
        `<p class="dzen__content__test_scroll" slyle="margin-left: 19%;"> Новый блок </p>`
      );
    }
  }
  
  window.addEventListener("scroll", populate);
  
  populate();
  