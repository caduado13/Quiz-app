const quizData = [
    {
        question: "What is css universal selector",
        a: "color",
        b: "style",
        c: "*",
        d: "#",
        correct: "c",
    },{
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },{
        question: "Who is the president of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },{
        question: "What is HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats",
        correct: "a",
    },{
        question: "What year JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    }
];
const answerEls = document.querySelectorAll(".answers");
const questionEL = document.getElementById("question");
let main = document.getElementById("main");
const aText= document.getElementById("a_text");
const bText= document.getElementById("b_text");
const cText= document.getElementById("c_text");
const dText= document.getElementById("d_text");
const Submitbtn = document.getElementById("btnSubmit");
let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    
    questionEL.innerHTML = currentQuizData.question;
    aText.innerHTML = currentQuizData.a; 
    bText.innerHTML = currentQuizData.b; 
    cText.innerHTML = currentQuizData.c; 
    dText.innerHTML = currentQuizData.d; 
    
    
}

function getSelected(){
    
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) =>{
        answerEl.checked = false;
    })
}

Submitbtn.addEventListener("click", function(){
    const answer = getSelected();
    

    if(answer){
            if(answer === quizData[currentQuiz].correct){
                score++;
            }
            currentQuiz++;
            
        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
               
            main.innerHTML = `
            <div class = "finished-div">
                <h1> You finished! </h1>
                <p>You got ${score} of 5 questions</p>
                <button onclick = "location.reload()">Refresh page</button>
            </div>
            `    
        } 
    }
})


