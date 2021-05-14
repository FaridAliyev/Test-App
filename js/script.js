$(document).ready(function () {
    $('.nav-res-btn').click(function () {
        if ($(this).hasClass("unclickable")) {
            return;
        }
        else {
            if ($('.collapse-icon').is(':visible')) {
                $('.collapse-icon').hide();
                $('.decollapse-icon').css('display', 'inline-block');
            }
            else {
                $('.collapse-icon').show();
                $('.decollapse-icon').hide();
            }
            $('.nav-res-btn').addClass("unclickable");
            $('.navigation').stop(true, true).slideToggle();
            $('.navigation').css("display", "flex");
            setTimeout(function () {
                $('.nav-res-btn').removeClass("unclickable");
            }, 500);
        }
    });

    $(window).on('resize', function () {
        var win = $(this);
        if (win.width() > 767) {
            $('.navigation').css("display", "flex");
        }
        else {
            $('.navigation').css("display", "none");
        }
        $('.collapse-icon').show();
        $('.decollapse-icon').hide();
    });

    // equations test start

    const equationsQuestions = [
        {
            question: "5x - 11 = 3x + 9",
            answers: {
                a: "11",
                b: "10",
                c: "8",
                d: "9"
            },
            correctAnswer: "b"
        },
        {
            question: "3y + 4 = 7 - 2y",
            answers: {
                a: "1",
                b: "3/4",
                c: "2/5",
                d: "3/5"
            },
            correctAnswer: "d"
        },
        {
            question: "9 - 2(x - 5) = x + 10",
            answers: {
                a: "1",
                b: "5",
                c: "4",
                d: "3"
            },
            correctAnswer: "d"
        },
        {
            question: "5(y - 1) = 3(2y - 5) - (1 - 3y)",
            answers: {
                a: "11/5",
                b: "12/5",
                c: "11/4",
                d: "12/4"
            },
            correctAnswer: "c"
        },
        {
            question: "x/3 - (x - 2)/2 = 7/3",
            answers: {
                a: "-8",
                b: "-12",
                c: "-7",
                d: "5"
            },
            correctAnswer: "a"
        },
        {
            question: "2n^2-11n-21 = 0",
            answers: {
                a: "-7, -3",
                b: "7, 3",
                c: "7, 3/2",
                d: "7, -3/2"
            },
            correctAnswer: "d"
        },
        {
            question: "x^2 + x - 12 = 0",
            answers: {
                a: "-3, -4",
                b: "-4, 3",
                c: "6, 2",
                d: "3, 4"
            },
            correctAnswer: "b"
        }
    ];

    currentEquationQuestion = 0;
    currentEquationStep = 25;
    eqUserCorrectAnswers = 0;

    $('.eq-question-count').text(equationsQuestions.length)

    $('.eq-test-body .question').text(equationsQuestions[currentEquationQuestion].question)

    function updateEqAnswers() {
        let i = 0;
        for (letter in equationsQuestions[currentEquationQuestion].answers) {
            $('.eq-test-body .answer').eq(i++).text(equationsQuestions[currentEquationQuestion].answers[letter]);
        }
    }

    updateEqAnswers();

    $('.eq-next').click(function (e) {
        e.preventDefault();
        let answer = $('input[name=choice]:checked').val();
        if (answer == equationsQuestions[currentEquationQuestion].correctAnswer) {
            eqUserCorrectAnswers++;
        }
        if (currentEquationQuestion + 1 >= equationsQuestions.length) {
            $('.eq-correct-count').text(eqUserCorrectAnswers);
            $('.test-wrapper').hide();
            $('.result-wrapper').show();
        }
        else {
            currentEquationQuestion++;
            if (currentEquationQuestion + 1 >= equationsQuestions.length) {
                $('.eq-next').text("See your result");
            }
            $('.eq-current-step').text(currentEquationQuestion + 1);
            $('.eq-test-body .question').text(equationsQuestions[currentEquationQuestion].question);
            let str = currentEquationStep + 25 + " 200";
            currentEquationStep += 25;
            $('.eq-step-circle').css("stroke-dasharray", str);
            updateEqAnswers();
        }
    })

    $('.eq-save').click(function (e) {
        e.preventDefault();
        let name = $('.eq-name').val().trim();
        if (name == "") {
            return;
        }
        if (localStorage.getItem('equations') == null) {
            localStorage.setItem('equations', JSON.stringify([]));
        }
        let equations = JSON.parse(localStorage.getItem('equations'));
        equations.push({
            name: name,
            score: eqUserCorrectAnswers
        });
        localStorage.setItem('equations', JSON.stringify(equations));
        $('.result-wrapper').hide();
        $('.final-wrapper').show();
    });

    // equations test end

    // math problems start

    const problemsQuestions = [
        {
            question: "Sophia finished 2/3 of a book. She calculated that she finished 90 more pages than she has yet to read. How long is her book?",
            answers: {
                a: "260",
                b: "250",
                c: "270",
                d: "280"
            },
            correctAnswer: "c"
        },
        {
            question: "A salesman sold twice as much pears in the afternoon than in the morning. If he sold 360 kilograms of pears that day, how many kilograms did he sell in the morning?",
            answers: {
                a: "120",
                b: "115",
                c: "110",
                d: "100"
            },
            correctAnswer: "a"
        },
        {
            question: "A farming field can be ploughed by 6 tractors in 4 days. When 6 tractors work together, each of them ploughs 120 hectares a day. If two of the tractors were moved to another field, then the remaining 4 tractors could plough the same field in 5 days. How many hectares a day would one tractor plough then?",
            answers: {
                a: "143",
                b: "145",
                c: "146",
                d: "144"
            },
            correctAnswer: "d"
        },
        {
            question: "A student chose a number, multiplied it by 2, then subtracted 138 from the result and got 102. What was the number he chose?",
            answers: {
                a: "120",
                b: "130",
                c: "140",
                d: "150"
            },
            correctAnswer: "a"
        },
        {
            question: "The distance between two towns is 380 km. At the same moment, a passenger car and a truck start moving towards each other from different towns. They meet 4 hours later. If the car drives 5 km/hr faster than the truck, what is the truck's speed?",
            answers: {
                a: "40",
                b: "45",
                c: "35",
                d: "30"
            },
            correctAnswer: "b"
        },
        {
            question: "To deliver an order on time, a company has to make 25 parts a day. After making 25 parts per day for 3 days, the company started to produce 5 more parts per day, and by the last day of work 100 more parts than planned were produced. Find how many parts the company made.",
            answers: {
                a: "630",
                b: "670",
                c: "675",
                d: "720"
            },
            correctAnswer: "c"
        },
        {
            question: "I chose a number and divide it by 5. Then I subtracted 154 from the result and got 6. What was the number I chose?",
            answers: {
                a: "800",
                b: "700",
                c: "900",
                d: "1000"
            },
            correctAnswer: "a"
        }
    ];

    currentProblemQuestion = 0;
    currentProblemStep = 25;
    pbUserCorrectAnswers = 0;

    $('.pb-question-count').text(problemsQuestions.length)

    $('.pb-test-body .question').text(problemsQuestions[currentProblemQuestion].question)

    function updatePbAnswers() {
        let i = 0;
        for (letter in problemsQuestions[currentProblemQuestion].answers) {
            $('.pb-test-body .answer').eq(i++).text(problemsQuestions[currentProblemQuestion].answers[letter]);
        }
    }

    updatePbAnswers();

    $('.pb-next').click(function (e) {
        e.preventDefault();
        let answer = $('input[name=choice]:checked').val();
        if (answer == problemsQuestions[currentProblemQuestion].correctAnswer) {
            pbUserCorrectAnswers++;
        }
        if (currentProblemQuestion + 1 >= problemsQuestions.length) {
            $('.pb-correct-count').text(pbUserCorrectAnswers);
            $('.test-wrapper').hide();
            $('.result-wrapper').show();
        }
        else {
            currentProblemQuestion++;
            if (currentProblemQuestion + 1 >= problemsQuestions.length) {
                $('.pb-next').text("See your result");
            }
            $('.pb-current-step').text(currentProblemQuestion + 1);
            $('.pb-test-body .question').text(problemsQuestions[currentProblemQuestion].question);
            let str = currentProblemStep + 25 + " 200";
            currentProblemStep += 25;
            $('.pb-step-circle').css("stroke-dasharray", str);
            updatePbAnswers();
        }
    })

    $('.pb-save').click(function (e) {
        e.preventDefault();
        let name = $('.pb-name').val().trim();
        if (name == "") {
            return;
        }
        if (localStorage.getItem('problems') == null) {
            localStorage.setItem('problems', JSON.stringify([]));
        }
        let problems = JSON.parse(localStorage.getItem('problems'));
        problems.push({
            name: name,
            score: pbUserCorrectAnswers
        });
        localStorage.setItem('problems', JSON.stringify(problems));
        $('.result-wrapper').hide();
        $('.final-wrapper').show();
    });

    // math problems end

    // geometry test start

    const geometryQuestions = [
        {
            question: "If a circle has the diameter of 8, what is the circumference?",
            answers: {
                a: "6.28",
                b: "12.56",
                c: "25.13",
                d: "50.24"
            },
            correctAnswer: "c"
        },
        {
            question: "One side of a rectangle is 3 cm shorter than the other side. If we increase the length of each side by 1 cm, then the area of the rectangle will increase by 18 cm^2. Find the lengths of all sides.",
            answers: {
                a: "8,11",
                b: "8,10",
                c: "7,10",
                d: "7,11"
            },
            correctAnswer: "c"
        },
        {
            question: "The perimeter of a square is 24 cm. Find the area of the square",
            answers: {
                a: "32",
                b: "36",
                c: "30",
                d: "35"
            },
            correctAnswer: "b"
        },
        {
            question: "A rectangle has a length of 6 inches and a width of 4 inches. Find the area",
            answers: {
                a: "22",
                b: "27",
                c: "24",
                d: "26"
            },
            correctAnswer: "c"
        },
        {
            question: "The area of a rectangle is 45 cm^2. If its length is 9 cm, find its width",
            answers: {
                a: "5",
                b: "10",
                c: "15",
                d: "None of the above"
            },
            correctAnswer: "a"
        },
        {
            question: "How many squares with the side of 2 cm cover the surface of a rectangle with a length of 24 cm and a width of 8 cm?",
            answers: {
                a: "46",
                b: "47",
                c: "49",
                d: "48"
            },
            correctAnswer: "d"
        },
        {
            question: "A triangle with one angle greater than 90 degrees is called",
            answers: {
                a: "Obtuse triangle",
                b: "Equilateral triangle",
                c: "Acute triangle",
                d: "Isosceles triangle"
            },
            correctAnswer: "a"
        }
    ];

    currentGeometryQuestion = 0;
    currentGeometryStep = 25;
    geoUserCorrectAnswers = 0;

    $('.geo-question-count').text(geometryQuestions.length)

    $('.geo-test-body .question').text(geometryQuestions[currentGeometryQuestion].question)

    function updateGeoAnswers() {
        let i = 0;
        for (letter in geometryQuestions[currentGeometryQuestion].answers) {
            $('.geo-test-body .answer').eq(i++).text(geometryQuestions[currentGeometryQuestion].answers[letter]);
        }
    }

    updateGeoAnswers();

    $('.geo-next').click(function (e) {
        e.preventDefault();
        let answer = $('input[name=choice]:checked').val();
        if (answer == geometryQuestions[currentGeometryQuestion].correctAnswer) {
            geoUserCorrectAnswers++;
        }
        if (currentGeometryQuestion + 1 >= geometryQuestions.length) {
            $('.geo-correct-count').text(geoUserCorrectAnswers);
            $('.test-wrapper').hide();
            $('.result-wrapper').show();
        }
        else {
            currentGeometryQuestion++;
            if (currentGeometryQuestion + 1 >= geometryQuestions.length) {
                $('.geo-next').text("See your result");
            }
            $('.geo-current-step').text(currentGeometryQuestion + 1);
            $('.geo-test-body .question').text(geometryQuestions[currentGeometryQuestion].question);
            let str = currentGeometryStep + 25 + " 200";
            currentGeometryStep += 25;
            $('.geo-step-circle').css("stroke-dasharray", str);
            updateGeoAnswers();
        }
    })

    $('.geo-save').click(function (e) {
        e.preventDefault();
        let name = $('.geo-name').val().trim();
        if (name == "") {
            return;
        }
        if (localStorage.getItem('geometry') == null) {
            localStorage.setItem('geometry', JSON.stringify([]));
        }
        let geometry = JSON.parse(localStorage.getItem('geometry'));
        geometry.push({
            name: name,
            score: geoUserCorrectAnswers
        });
        localStorage.setItem('geometry', JSON.stringify(geometry));
        $('.result-wrapper').hide();
        $('.final-wrapper').show();
    });

    // geometry test end

    // speedmath start

    let timer = 60;
    let timeTickInterval = null;
    smUserCorrectAnswers = 0;

    function getRandomNumber(min = 1, max = 50) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function timeTick() {
        $('.time').text(timer--);
        if (timer == -1) {
            clearInterval(timeTickInterval);
            $('.sm-correct-count').text(smUserCorrectAnswers);
            $('.test-wrapper').hide();
            $('.result-wrapper').show();
        }
    }

    $('.sm-start').click(function (e) {
        e.preventDefault();
        $('.start-wrapper').hide();
        $('.sm-test-wrapper').show();
        $('.sm-test-body .question').text(getRandomNumber() + '+' + getRandomNumber());
        $('.sm-answer').focus();
        $('.time').text(timer);
        timeTickInterval = setInterval(timeTick, 1000);
    });

    $('.sm-next').click(function (e) {
        e.preventDefault();
        let answer = $('.sm-answer').val();
        let current = $('.sm-test-body .question').text();
        if (answer == eval(current)) {
            smUserCorrectAnswers++;
        }
        $('.sm-test-body .question').text(getRandomNumber() + '+' + getRandomNumber());
        $('.sm-answer').val("");
        $('.sm-answer').focus();
    });

    $('.sm-save').click(function (e) {
        e.preventDefault();
        let name = $('.sm-name').val().trim();
        if (name == "") {
            return;
        }
        if (localStorage.getItem('speedmath') == null) {
            localStorage.setItem('speedmath', JSON.stringify([]));
        }
        let speedmath = JSON.parse(localStorage.getItem('speedmath'));
        speedmath.push({
            name: name,
            score: smUserCorrectAnswers
        });
        localStorage.setItem('speedmath', JSON.stringify(speedmath));
        $('.result-wrapper').hide();
        $('.final-wrapper').show();
    });

    // speedmath end

    // scoreboard

    let equationsScoreList = $('.equations')
    let problemsScoreList = $('.problems')
    let geometryScoreList = $('.geometry')
    let speedMathScoreList = $('.speedmath')



    if (localStorage.getItem('equations') != null) {
        let equationsScores = JSON.parse(localStorage.getItem('equations'));
        let sortedEquationsScores = equationsScores.sort((a, b) => (a.score > b.score) ? 1 : -1).reverse();
        let counter = 1;
        for (ses of sortedEquationsScores) {
            equationsScoreList.append(`<li>${counter++}. ${ses.name} - ${ses.score}</li>`)
            if (counter == 11) {
                break;
            }
        }
    }
    else {
        equationsScoreList.append(`<li>There are no entries to display!</li>`);
    }

    if (localStorage.getItem('problems') != null) {
        let problemsScores = JSON.parse(localStorage.getItem('problems'));
        let sortedProblemsScores = problemsScores.sort((a, b) => (a.score > b.score) ? 1 : -1).reverse();
        let counter = 1;
        for (sps of sortedProblemsScores) {
            problemsScoreList.append(`<li>${counter++}. ${sps.name} - ${sps.score}</li>`)
            if (counter == 11) {
                break;
            }
        }
    }
    else {
        problemsScoreList.append(`<li>There are no entries to display!</li>`);
    }

    if (localStorage.getItem('geometry') != null) {
        let geometryScores = JSON.parse(localStorage.getItem('geometry'));
        let sortedGeometryScores = geometryScores.sort((a, b) => (a.score > b.score) ? 1 : -1).reverse();
        let counter = 1;
        for (sgs of sortedGeometryScores) {
            geometryScoreList.append(`<li>${counter++}. ${sgs.name} - ${sgs.score}</li>`)
            if (counter == 11) {
                break;
            }
        }
    }
    else {
        geometryScoreList.append(`<li>There are no entries to display!</li>`);
    }

    if (localStorage.getItem('speedmath') != null) {
        let speedMathScores = JSON.parse(localStorage.getItem('speedmath'));
        let sortedspeedMathScores = speedMathScores.sort((a, b) => (a.score > b.score) ? 1 : -1).reverse();
        let counter = 1;
        for (sss of sortedspeedMathScores) {
            speedMathScoreList.append(`<li>${counter++}. ${sss.name} - ${sss.score}</li>`)
            if (counter == 11) {
                break;
            }
        }
    }
    else {
        speedMathScoreList.append(`<li>There are no entries to display!</li>`);
    }

    let maxHeight = 0;
    $('.list-wrapper').each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).outerHeight();
        }
    });
    $('.list-wrapper').height(maxHeight);
});