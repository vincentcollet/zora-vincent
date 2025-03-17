/*!
 * Project : simply-countdown
 * File : simplyCountdown
 * Date : 06/09/2025
 * License : MIT
 * Version : 1.3.2
 * Author : Vincent Loy <vincent.loy1@gmail.com>
 * Contributors : 
 *  - Justin Beasley <JustinB@harvest.org>
 *  - Nathan Smith <NathanS@harvest.org>
 */
(function (exports) {
    'use strict';

    var extend, createElements, createCountdownElt, simplyCountdown;

    extend = function (out) {
        var i, obj, key;
        out = out || {};
        for (i = 1; i < arguments.length; i++) {
            obj = arguments[i];
            if (obj) {
                for (key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        if (typeof obj[key] === 'object') {
                            out[key] = extend({}, obj[key]);
                        } else {
                            out[key] = obj[key];
                        }
                    }
                }
            }
        }
        return out;
    };

    createCountdownElt = function (countdown, parameters, typeClass) {
        var sectionTag = document.createElement('div'),
            amountTag = document.createElement('span'),
            wordTag = document.createElement('span'),
            innerSectionTag = document.createElement('div');

        innerSectionTag.appendChild(amountTag);
        innerSectionTag.appendChild(wordTag);
        sectionTag.appendChild(innerSectionTag);
        sectionTag.classList.add(parameters.sectionClass, typeClass);
        amountTag.classList.add(parameters.amountClass);
        wordTag.classList.add(parameters.wordClass);
        countdown.appendChild(sectionTag);

        return { full: sectionTag, amount: amountTag, word: wordTag };
    };

    createElements = function (parameters, countdown) {
        if (!parameters.inline) {
            return {
                days: createCountdownElt(countdown, parameters, 'simply-days-section'),
                hours: createCountdownElt(countdown, parameters, 'simply-hours-section'),
                minutes: createCountdownElt(countdown, parameters, 'simply-minutes-section'),
                seconds: createCountdownElt(countdown, parameters, 'simply-seconds-section')
            };
        }
        var spanTag = document.createElement('span');
        spanTag.classList.add(parameters.inlineClass);
        return spanTag;
    };

    simplyCountdown = function (elt, args) {
        var parameters = extend({
                year: 2025,
                month: 9,
                day: 6,
                hours: 0,
                minutes: 0,
                seconds: 0,
                words: { days: 'day', hours: 'hour', minutes: 'minute', seconds: 'second', pluralLetter: 's' },
                plural: true,
                inline: false,
                enableUtc: true,
                onEnd: function () {},
                refresh: 1000,
                inlineClass: 'simply-countdown-inline',
                sectionClass: 'simply-section',
                amountClass: 'simply-amount',
                wordClass: 'simply-word',
                zeroPad: false
            }, args),
            interval, targetDate, now, secondsLeft, days, hours, minutes, seconds;

        targetDate = parameters.enableUtc ? new Date(Date.UTC(
            parameters.year,
            parameters.month - 1,
            parameters.day,
            parameters.hours,
            parameters.minutes,
            parameters.seconds
        )) : new Date(
            parameters.year,
            parameters.month - 1,
            parameters.day,
            parameters.hours,
            parameters.minutes,
            parameters.seconds
        );

        document.querySelectorAll(elt).forEach(function (countdown) {
            var fullCountDown = createElements(parameters, countdown);
            var refresh = function () {
                now = new Date();
                secondsLeft = Math.floor((targetDate.getTime() - now.getTime()) / 1000);
                
                if (secondsLeft > 0) {
                    days = Math.floor(secondsLeft / 86400);
                    secondsLeft %= 86400;
                    hours = Math.floor(secondsLeft / 3600);
                    secondsLeft %= 3600;
                    minutes = Math.floor(secondsLeft / 60);
                    seconds = secondsLeft % 60;
                } else {
                    days = hours = minutes = seconds = 0;
                    clearInterval(interval);
                    parameters.onEnd();
                }
                
                if (parameters.inline) {
                    countdown.innerHTML = `${days} ${parameters.words.days}${days > 1 ? parameters.words.pluralLetter : ''}, ` +
                        `${hours} ${parameters.words.hours}${hours > 1 ? parameters.words.pluralLetter : ''}, ` +
                        `${minutes} ${parameters.words.minutes}${minutes > 1 ? parameters.words.pluralLetter : ''}, ` +
                        `${seconds} ${parameters.words.seconds}${seconds > 1 ? parameters.words.pluralLetter : ''}.`;
                } else {
                    fullCountDown.days.amount.textContent = days.toString().padStart(2, '0');
                    fullCountDown.days.word.textContent = parameters.words.days + (days > 1 ? parameters.words.pluralLetter : '');
                    fullCountDown.hours.amount.textContent = hours.toString().padStart(2, '0');
                    fullCountDown.hours.word.textContent = parameters.words.hours + (hours > 1 ? parameters.words.pluralLetter : '');
                    fullCountDown.minutes.amount.textContent = minutes.toString().padStart(2, '0');
                    fullCountDown.minutes.word.textContent = parameters.words.minutes + (minutes > 1 ? parameters.words.pluralLetter : '');
                    fullCountDown.seconds.amount.textContent = seconds.toString().padStart(2, '0');
                    fullCountDown.seconds.word.textContent = parameters.words.seconds + (seconds > 1 ? parameters.words.pluralLetter : '');
                }
            };
            refresh();
            interval = setInterval(refresh, parameters.refresh);
        });
    };

    exports.simplyCountdown = simplyCountdown;
}(window));

if (window.jQuery) {
    (function ($, simplyCountdown) {
        'use strict';
        $.fn.simplyCountdown = function (options) {
            return simplyCountdown(this.selector, options);
        };
    }(jQuery, simplyCountdown));
}
