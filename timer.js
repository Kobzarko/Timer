// function will be done only after full load index.html
window.addEventListener('DOMContentLoaded', () => {
    'use strict'
    // конечная дата
    let deadline = new Date(2020, 3, 12);
    // считает разницу между датами
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor(((t / 1000) / 60) % 60),
            hours = Math.floor((t / 1000 / 60 / 60) % 24),
            days = Math.floor((t / (1000 * 60 * 60 * 24)));

        // hours = Math.floor((t / 1000) / 3600),


        //возвращаем в виде объекта
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
            'days': days
        };

    }

    // функция будет изменять статическую верстку на динмаическую
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            days = timer.querySelector('.days'),
            word = timer.querySelector('.word'),
            timeInterval = setInterval(updateClock, 1000); // обновляет данные каждую секунду




        // обновляет данные в выбранных полях
        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if (num <= 9) {
                    return "0" + num;
                } else {
                    return num;
                }
            }

            function updateDay(days) {
                if (t.days <= 0) {
                    t.days = '';
                } else {
                    return t.days;
                }
            }

            function changeWord(word) {
                if (t.days == 4 || t.days == 3 || t.days == 2) {
                    return word.textContent = "дня";
                } else if (t.days == 1) {
                    return word.textContent = "день";
                } else if (t.days < 1) {
                    return word.textContent = '';
                } else {
                    return word.textContent = "дней";
                }
            }


            hours.textContent = addZero(t.hours); //  поле часы
            minutes.textContent = addZero(t.minutes); // field minutes
            seconds.textContent = addZero(t.seconds); // field seconds
            days.textContent = updateDay(t.days); // field days
            word.textContent = changeWord(word);

            // 
            //
            //если дата прошла выводим нули
            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                days.textContent = '';
                word.textContent = '';

            }

        }
    }
    // вызываем 
    setClock('timer', deadline);

});