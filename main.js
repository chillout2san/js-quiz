const quiz = [
  {
    question: 'この世で最も大切なものは？',
    answers: [
      'お金', 
      '名誉', 
      'プライド', 
      '愛'
    ],
    correct: '愛'
  }, 
  {
    question: 'あなたの風邪はどこから？',
    answers:  [
      '頭から', 
      '喉から', 
      '西から', 
      '元から'
    ],
    correct: '元から'
  }, 
  {
    question: 'でもやっぱり？',
    answers:  [
      'ママが好き', 
      'ムー○ーマン', 
      'ドギー○ン', 
      'トミーガン'
    ],
    correct: 'トミーガン'
  }];

const $button = document.getElementsByTagName('button')
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let i = 0;
  while(i < buttonLength){
    $button[i].textContent = quiz[quizIndex].answers[i];
    i++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    alert('正解！');
    score++;
  } else {
    alert('不正解・・・');
 };

 quizIndex++;

 if(quizIndex < quizLength){
   setupQuiz();
 } else{
   window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
 };
}

let hI = 0;
while(hI < buttonLength){
  $button[hI].addEventListener('click',(e) => {
     clickHandler(e);
  });
  hI++;
}

