const answers = [
    '',
    '',
    '',
    '',
    ''
]

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function (e) {
    setDisplay(1, 1, 1);
})

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function (e) {
    setDisplay(2,2,2);
})

const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', function (e) {
    setDisplay(3,3,3);
})

const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', function (e) {
    setDisplay(4,4,4);
})

const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', function (e) {
    setDisplay(5,5,5);
})


function setDisplay(answerId, btnId, questionId) {
    const answer = document.getElementById(`ans${answerId}`);
    const btn = document.getElementById(`btn${btnId}`);
    const question = document.getElementById(`question-${questionId}`);

    
    if (answer.style.display == 'block') {
        answer.style.display = 'none';
        btn.classList.remove('up-arrow')
        question.classList.remove('question-active')
    } else {
        answer.style.display = 'block';
        btn.classList.add('up-arrow')
        question.classList.add('question-active')
    }
}