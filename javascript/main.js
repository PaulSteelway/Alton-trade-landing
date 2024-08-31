const nerxinit = (function () {
    "use strict";
    var header = document.querySelector('#mainheader');
    var body = document.querySelector('body');
    var mobilenav = document.querySelector('.navicon');
    var burger = document.querySelector('.mobilenav');
    var linkmobile = document.querySelector(".mobilenav__wrap-list");
    var markettrend = document.getElementById("markettrendslide");
    var testimoinial = document.getElementById("testimonialslide");
    var counter = document.querySelectorAll(".counterwrap__counter");
    var counters = document.querySelectorAll(".counterwrap__counter");
    var rellaxele = document.querySelector(".rellax");
    var tabs = document.querySelectorAll('.tab');
    var buttonsubmit = document.getElementById('submitbutton');
    var formcontact = document.getElementById('formcontact');
    var information = document.querySelector('.contactform__loader');
    var inputelement = document.querySelector('.contactform__inputtext');
    var textareaelement = document.querySelector('.contactform__comentarea');
    var goup = document.querySelector('.scroll-top');
    var yearele = document.querySelector('.years');
    var year = new Date().getFullYear();
    var interval = 0;
    var rellax;

    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    const glight = function (e) {
        GLightbox({
            selector: 'glightboxvideo',
        });
    };
    const trendmarketslider = function (e) {
        function autoplay(run) {
            clearInterval(interval);
            interval = setInterval(() => {
                if (run && slider) {
                    slider.next();
                }
            }, 5000);
        };
        var slider = new KeenSlider(markettrend, {
            loop: true,
            mode: "free-snap",
            breakpoints: {
                "(min-width: 400px)": {
                    slides: {
                        perView: 1,
                        spacing: 0
                    },
                },
                "(min-width: 550px)": {
                    slides: {
                        perView: 2,
                        spacing: 30
                    },
                },
                "(min-width: 1000px)": {
                    slides: {
                        perView: 3,
                        spacing: 50
                    },
                },
            },
            slides: {
                perView: 1,
                spacing: 0,
            },
            duration: 5000,
            drag: false,
            dragStart: () => {},
            dragEnd: () => {}
        });
        autoplay(true);
    };
    const testimonialsslider = function (e) {
        function autoplay(run) {
            clearInterval(interval);
            interval = setInterval(() => {
                if (run && slider) {
                    slider.next();
                }
            }, 5000);
        };
        var slider = new KeenSlider(testimoinial, {
            loop: true,
            mode: "free-snap",
            slides: {
                perView: 1,
                spacing: 50,
            },
            defaultAnimation: {
                duration: 1000,
            },
            detailsChanged: (s) => {
                s.slides.forEach((element, idx) => {
                    element.style.opacity = s.track.details.slides[idx].portion
                })
            },
        });
        document.querySelector('.testimonial__next').addEventListener('click', function (e) {
            slider.next();
        });
        document.querySelector('.testimonial__prev').addEventListener('click', function (e) {
            slider.prev();
        });
    };
    const loadpage = function () {
        document.getElementById("preloader").style.display = "none";
        document.body.className = document.body.className.replace(/\bnoscroll\b/, '');
    };
    const particles = function (e) {
        var canvas, ctx, circ, nodes, mouse, SENSITIVITY, SIBLINGS_LIMIT, DENSITY, NODES_QTY, ANCHOR_LENGTH, MOUSE_RADIUS;
        SENSITIVITY = 100;
        SIBLINGS_LIMIT = 10;
        DENSITY = 40;
        NODES_QTY = 0;
        ANCHOR_LENGTH = 10;
        MOUSE_RADIUS = 300;
        circ = 2 * Math.PI;
        nodes = [];
        canvas = document.querySelector('canvas');
        resizeWindow();
        mouse = {
            x: canvas.width / 1,
            y: canvas.height / 1
        };
        ctx = canvas.getContext('2d');
        if (!ctx) {
            console.log("Ooops! Your browser does not support canvas animation :'(");
        }

        function Node(x, y) {
            this.anchorX = x;
            this.anchorY = y;
            this.x = Math.random() * (x - (x - ANCHOR_LENGTH)) + (x - ANCHOR_LENGTH);
            this.y = Math.random() * (y - (y - ANCHOR_LENGTH)) + (y - ANCHOR_LENGTH);
            this.vx = Math.random() * 2 - 1;
            this.vy = Math.random() * 2 - 1;
            this.energy = Math.random() * 100;
            this.radius = Math.random();
            this.siblings = [];
            this.brightness = 1;
        }
        Node.prototype.drawNode = function () {
            var color = "rgba(230, 33, 89, " + this.brightness + ")";
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2 * this.radius + 2 * this.siblings.length / SIBLINGS_LIMIT, 0, circ);
            ctx.fillStyle = color;
            ctx.fill();
        };
        Node.prototype.drawConnections = function () {
            for (var i = 0; i < this.siblings.length; i++) {
                var color = "rgba(230, 33, 89, " + this.brightness + ")";
                // var color = "#E62159";
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.siblings[i].x, this.siblings[i].y);
                ctx.lineWidth = 1 - calcDistance(this, this.siblings[i]) / SENSITIVITY;
                ctx.strokeStyle = color;
                ctx.stroke();
            }
        };
        Node.prototype.moveNode = function () {
            this.energy -= 2;
            if (this.energy < 1) {
                this.energy = Math.random() * 100;
                if (this.x - this.anchorX < -ANCHOR_LENGTH) {
                    this.vx = Math.random() * 2;
                } else if (this.x - this.anchorX > ANCHOR_LENGTH) {
                    this.vx = Math.random() * -2;
                } else {
                    this.vx = Math.random() * 4 - 2;
                }
                if (this.y - this.anchorY < -ANCHOR_LENGTH) {
                    this.vy = Math.random() * 2;
                } else if (this.y - this.anchorY > ANCHOR_LENGTH) {
                    this.vy = Math.random() * -2;
                } else {
                    this.vy = Math.random() * 4 - 2;
                }
            }
            this.x += this.vx * this.energy / 100;
            this.y += this.vy * this.energy / 100;
        };

        function initNodes() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            nodes = [];
            for (var i = DENSITY; i < canvas.width; i += DENSITY) {
                for (var j = DENSITY; j < canvas.height; j += DENSITY) {
                    nodes.push(new Node(i, j));
                    NODES_QTY++;
                }
            }
        }

        function calcDistance(node1, node2) {
            return Math.sqrt(Math.pow(node1.x - node2.x, 2) + (Math.pow(node1.y - node2.y, 2)));
        }

        function findSiblings() {
            var node1, node2, distance;
            for (var i = 0; i < NODES_QTY; i++) {
                node1 = nodes[i];
                node1.siblings = [];
                for (var j = 0; j < NODES_QTY; j++) {
                    node2 = nodes[j];
                    if (node1 !== node2) {
                        distance = calcDistance(node1, node2);
                        if (distance < SENSITIVITY) {
                            if (node1.siblings.length < SIBLINGS_LIMIT) {
                                node1.siblings.push(node2);
                            } else {
                                var node_sibling_distance = 0;
                                var max_distance = 0;
                                var s;
                                for (var k = 0; k < SIBLINGS_LIMIT; k++) {
                                    node_sibling_distance = calcDistance(node1, node1.siblings[k]);
                                    if (node_sibling_distance > max_distance) {
                                        max_distance = node_sibling_distance;
                                        s = k;
                                    }
                                }
                                if (distance < max_distance) {
                                    node1.siblings.splice(s, 1);
                                    node1.siblings.push(node2);
                                }
                            }
                        }
                    }
                }
            }
        };

        function redrawScene() {
            resizeWindow();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            findSiblings();
            var i, node, distance;
            for (i = 0; i < NODES_QTY; i++) {
                node = nodes[i];
                distance = calcDistance({
                    x: mouse.x,
                    y: mouse.y
                }, node);
                if (distance < MOUSE_RADIUS) {
                    node.brightness = 1 - distance / MOUSE_RADIUS;
                } else {
                    node.brightness = 0;
                }
            };
            for (i = 0; i < NODES_QTY; i++) {
                node = nodes[i];
                if (node.brightness) {
                    node.drawNode();
                    node.drawConnections();
                }
                node.moveNode();
            };
            requestAnimationFrame(redrawScene);
        };

        function initHandlers() {
            document.addEventListener('resize', resizeWindow, false);
            document.addEventListener('mousemove', mousemoveHandler, false);
        };

        function resizeWindow() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        function mousemoveHandler(e) {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        initHandlers();
        initNodes();
        redrawScene();
    };
    const buttonclick = function (e) {
        mobilenav.addEventListener("click", function (e) {
            this.classList.toggle('active');
            burger.classList.toggle('active');
            body.classList.toggle('active');
        }, false);
        linkmobile.addEventListener('click', function (e) {
            mobilenav.classList.toggle('active');
            burger.classList.toggle('active');
            body.classList.toggle('active');
        }, false);
    };
    const accordion = function (e) {
        const openTab = tab => {
            const content = tab.childNodes[3];
            content.style.height = 'auto';
            tab.classList.add('open');
        };
        const closeOthersTabs = (tabs, openTab) => {
            tabs.forEach(tab => {
                if (tab !== openTab) {
                    const content = tab.childNodes[3];
                    content.style.height = 0;
                    tab.classList.remove('open');
                }
            });
        };
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                openTab(tab);
                closeOthersTabs(tabs, tab);
            });
        });
    };
    const countdown = function (dateEnd) {
        var timer, days, hours, minutes, seconds;
        dateEnd = new Date(dateEnd);
        dateEnd = dateEnd.getTime();
        if (isNaN(dateEnd)) {
            return;
        };
        timer = setInterval(calculate, 1000);

        function calculate() {
            var dateStart = new Date();
            var dateStart = new Date(dateStart.getUTCFullYear(), dateStart.getUTCMonth(), dateStart.getUTCDate(), dateStart.getUTCHours(), dateStart.getUTCMinutes(), dateStart.getUTCSeconds());
            var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)
            if (timeRemaining >= 0) {
                days = parseInt(timeRemaining / 86400);
                timeRemaining = (timeRemaining % 86400);
                hours = parseInt(timeRemaining / 3600);
                timeRemaining = (timeRemaining % 3600);
                minutes = parseInt(timeRemaining / 60);
                timeRemaining = (timeRemaining % 60);
                seconds = parseInt(timeRemaining);
                document.getElementById("days").innerHTML = parseInt(days, 10);
                document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
                document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
                document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
            } else {
                return;
            };
        };

        function display(days, hours, minutes, seconds) {};
    };
    const fixid = function () {
        if (window.pageYOffset > 10) {
            header.classList.add('fixi');
            goup.classList.add('show');
        } else {
            header.classList.remove('fixi');
            goup.classList.remove('show');
        };
    };
    counters.forEach(function (item) {
        item.counterAlreadyFired = false
        item.counterSpeed = item.getAttribute("data-Speed") / 45
        item.counterTarget = +item.innerText
        item.counterCount = 0
        item.counterStep = item.counterTarget / item.counterSpeed
        item.updateCounter = function () {
            item.counterCount = item.counterCount + item.counterStep
            item.innerText = Math.ceil(item.counterCount)
            if (item.counterCount < item.counterTarget) {
                setTimeout(item.updateCounter, item.counterSpeed)
            } else {
                item.innerText = item.counterTarget
            }
        }
    });
    const counternumber = function () {
        const isScrolledIntoView = function (el) {
            var rect = el.getBoundingClientRect();
            var elemTop = rect.top;
            var elemBottom = rect.bottom;
            var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
            return isVisible;
        };
        counter.forEach(function (item, id) {
            if (!isScrolledIntoView(item)) return
            item.updateCounter()
            item.counterAlreadyFired = true
        });
    };
    const posttheform = function (e) {
        formcontact.onsubmit = async (e) => {
            e.preventDefault();
            var valid = [];
            information.innerHTML = ``;
            allinputs.forEach(function (i, j) {
                if (i.getAttribute('data-name')) {
                    var checkAttr = i.getAttribute('data-name');
                } else {
                    var checkAttr = i.tagName;
                }
                var thisvalue = i.value;
                switch (checkAttr) {
                    case 'name':
                        if (thisvalue == '') {
                            i.classList.add("error");
                            valid.push('<li>Please check your input name</li>');
                        } else if (thisvalue.length < 3) {
                            valid.push('<li>Sorry your name char is to short</li>');
                        } else {
                            i.classList.remove("error");
                        }
                        break;
                    case 'email':
                        var regEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                        if (i.value == '' || !regEmail.test(i.value)) {
                            i.classList.add("error");
                            valid.push('<li>Please check your mail address input</li>');
                        } else {
                            i.classList.remove("error");
                        }
                        break;
                    case 'comment':
                        if (thisvalue == '') {
                            i.classList.add("error");
                            valid.push('<li>Please write something</li>');
                        } else {
                            i.classList.remove("error");
                        }
                        break;
                    default:
                        if (i.value == '') {
                            valid.push('<li>Something was wrong</li>');
                            i.classList.add("error");
                        } else {
                            i.classList.remove("error");
                        }
                        break;
                };
            });
            if (valid.length) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops... Something went wrong!',
                    text: '',
                    showConfirmButton: false,
                    confirmButtonColor: '#E25B0F',
                    focusConfirm: false,
                    confirmButtonText: 'Fix the wrong input',
                    footer: '<p class="mb-0"><ul class="errorlist">' + valid.join('') + '</ul></p>'
                });
            } else {
                information.innerHTML = `<div class="d-flex align-items-center"><strong class="font-weight-normal">Send message please wait...</strong><div class="spinner-border spinner-border-sm ml-auto" role="status" aria-hidden="true"></div></div>`;
                inputelement.setAttribute("readonly", "true");
                textareaelement.setAttribute("readonly", "true");
                buttonsubmit.setAttribute("disable", "true");
                let response = await fetch('https://mail-sage.vercel.app/mail', {
                    method: 'POST',
                    body: new FormData(formcontact)
                }).then((response) => response.text()).then((data) => {
                    if (data === 'your message send') {
                        formcontact.reset();
                        inputelement.removeAttribute("readonly");
                        textareaelement.removeAttribute("readonly");
                        buttonsubmit.removeAttribute("disable");
                        information.innerHTML = ``;
                        Swal.fire({
                            icon: 'success',
                            title: 'Message send successful !',
                            text: '',
                            showConfirmButton: false,
                            confirmButtonColor: '#E25B0F',
                            focusConfirm: false,
                            confirmButtonText: '',
                            footer: '<p class="mb-0">We will reply to your message soon thank you</p>'
                        });
                    }
                }).catch((error) => {
                    formcontact.reset();
                    inputelement.removeAttribute("readonly");
                    textareaelement.removeAttribute("readonly");
                    buttonsubmit.removeAttribute("disable");
                    information.innerHTML = ``;
                    Swal.fire({
                        icon: 'error',
                        title: 'Sorry, your message failed to be sent due to an unknown error',
                        text: '',
                        showConfirmButton: false,
                        confirmButtonColor: '#E25B0F',
                        focusConfirm: false,
                        confirmButtonText: '',
                        footer: ''
                    });
                });
            }
            return false;
        };
    };
    const bindEvents = function (e) {
        window.onbeforeunload = function (e) {
            window.scrollTo(0, 0);
        };
        window.addEventListener('load', (e) => {
            setTimeout(loadpage, 100);
        });
        window.addEventListener('DOMContentLoaded', (e) => {
            new bootstrap.ScrollSpy(document.body, {
                target: '*',
                offset: 1
            });
            // Функция для обновления информации в блоке

            const marketTrendElements = document.querySelectorAll('.markettrend__item');

            marketTrendElements.forEach((element) => {
                const title = element.querySelector('.markettrend__detail-title').textContent;
                let instId = '';

                if (title === 'BTC') {
                    instId = 'BTC-USDT';
                } else if (title === 'TON') {
                    instId = 'TON-USDT';
                } else if (title === 'NOT') {
                    instId = 'NOT-USDT';
                } else if (title === 'DOGS') {
                    instId = 'DOGS-USDT';
                }

                if (instId) {
                    fetch(`https://www.okx.com/api/v5/market/index-tickers?instId=${instId}`)
                        .then(response => response.json())
                        .then(data => {
                            const tickerData = data.data[0];
                            const currentPrice = parseFloat(tickerData.idxPx);
                            const price24hAgo = parseFloat(tickerData.open24h);
                            const changePercent = ((currentPrice - price24hAgo) / price24hAgo) * 100;

                            // Обновление цены и процента изменения
                            element.querySelector('.markettrend__moneybig').textContent = `$${currentPrice}`;
                            element.querySelector('.markettrend__moneypercen').textContent = `${changePercent.toFixed(2)}%`;

                            // Обновление иконки тренда
                            const trendIcon = element.querySelector('.markettrend__indicator i');
                            if (changePercent >= 0) {
                                trendIcon.className = "fa-solid fa-arrow-trend-up";
                            } else {
                                trendIcon.className = "fa-solid fa-arrow-trend-down";
                            }
                        })
                        .catch(error => console.error('Ошибка при получении данных:', error));
                }
            });

            particles();
            // countdown('03/19/2050 08:00:00 AM');
            AOS.init({
                disableMutationObserver: false,
                debounceDelay: 50,
                throttleDelay: 99,
                offset: 0,
                disable: function () {
                    var maxWidth = 999;
                    return window.innerWidth < maxWidth;
                }
            });
            if (isMobile) {
                rellaxele.style.visibility = 'hidden';
            };
            rellaxele.style.visibility = 'visible';
            rellax = new Rellax('.rellax', {
                speed: -2,
                center: false,
                wrapper: null,
                round: true,
                vertical: true,
                horizontal: false
            });
            trendmarketslider();
            // testimonialsslider();
            buttonclick();
            accordion();
            counternumber();
            // posttheform();
            glight();
            yearele.innerHTML = year;
        });
        window.addEventListener("scroll", (e) => {
            fixid();
        });
    };
    const AppInit = function (e) {
        bindEvents();
    };
    return {
        AppInit: AppInit
    };
}());
nerxinit.AppInit();