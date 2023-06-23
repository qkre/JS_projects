const quotes = [
    {
        quote:"성공은 끝이 아니며 실패는 치명직이지 않다. 중요한 것은 계속하는 용기다.",
        author:"윈스턴 처칠"
    },
    {
        quote:"나는 실패하지 않았다. 나는 성공하지 못한 10,000가지 방법을 발견했을 뿐이다.",
        author:"토마스 에디슨"
    },
    {
        quote:"성공은 내가 얼마나 높이 올라왔는지가 아닌, 어떻게 세상에 긍정적인 변화를 가져오는 가이다.",
        author:"로이.T.베넷"
    },
    {
        quote:"성공이란 열정을 잃지 않고 실패에서 실패로 걸어가는 것이다.",
        author:"윈스턴 처칠"
    },
    {
        quote:"하룻밤 사이의 성공은 대부분 오랜 시간이 걸렸다.",
        author:"스티브 잡스"
    },
    {
        quote:"성공이 행복의 열쇠가 이나다. 행복이 성공의 열쇠이다. 내가 하는 일을 사랑한다면 성공할 것이다.",
        author:"알버트 슈바이처"
    },
    {
        quote:"성공한 전사는 레이저와 같은 집중력을 가진 평범한 사람이다.",
        author:"브루스 리"
    },
    {
        quote:"성공은 행동과 연결되는 것이다. 성공한 사람들은 계속 움직인다. 그들도 실수 하지만 포기하지 않는다.",
        author:"콘래드 힐튼"
    },
    {
        quote:"할 수 있다고 믿어라, 그러면 절반은 온 것이다.",
        author:"시어도어 루스벨트"
    },
    {
        quote:"성공은 얼마나 부를 쌓았느냐가 아니라, 사람들의 삶에 어떤 변화를 가져오는가에 달려있다.",
        author:"미셸 오바마"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;