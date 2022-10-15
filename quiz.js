const quizData = [
    {
        question:"Which language runs in Web browser",
        a:"Java",
        b:"C",
        c:"Python",
        d:"Javascript",
        correct:"d",
    },
    {
        question:"What does css stand for ?",
        a:"Central Style Sheets",
        b:"Cascading Style Sheets ",
        c:"Cascasding Simple Sheets",
        d:"Cars Suvs Sailboats", 
        correct:"b" ,
    },
    {
        question:"What does HTML stand for ?",
        a:"Hypertext Markup Language",
        b:"Hypertext Markdown Language",
        c:"Hyperloop Machine Language",
        d:"Helicopter Terminals Motorboats Lamborginis",
        correct:"a" , 
    },
    {
        question:"what year was Javascript launched ?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"none of the above",
        correct:"b" , 
    },
    {
        question:"Welcome to _______ institute ?",
        a:"Aruval",
        b:"kuruval",
        c:"Aruvi",
        d:"python",
        correct:"c",  
    },
];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitBtn=document.getElementById('submit')

let currentQuiz=0
let score=0

loadQuiz()
function loadQuiz(){
    deselectAnswers()

    const currentQuizData=quizData[currentQuiz]

    questionEl.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innertext=currentQuizData.b
    c_text.innertext=currentQuizData.c
    d_text.innertext=currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML =`                
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})