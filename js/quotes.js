const quotes = [
  {
    quotes: "중요한건 꺾이지 않는 마음",
    author: "Deft",
  },
  {
    quotes: "살좀빼!",
    author: "BJ Ralo",
  },
  {
    quotes:
      "불편해? 불편하면 TLqkf 자세를 고쳐앉아 보는 자세가 잘못된거 아니에요",
    author: "BJ Ralo",
  },
  {
    quotes: "다 달에 가고 싶어하면 누가 지구에 남아서 버튼을 눌러주냐고",
    author: "BJ Ralo",
  },
  {
    quotes:
      "내가 누군가를 좋아한다는 사실이 그 사람에게는 상처가 될수도 있잖아요",
    author: "BJ Ralo",
  },
  {
    quotes: "오늘 서폿 왜이래 아 오늘 왜이래!!",
    author: "BJ Ralo",
  },
  {
    quotes: "서폿은 도구다",
    author: "Monster Rat",
  },
  {
    quotes: "서폿을 탓한게 아니야. 탓하고 보니 서포터였던거지",
    author: "APDO",
  },
  {
    quotes: "못생긴X이 담배피는거만큼 꼴보기 싫은게 없어",
    author: "BJ Ralo",
  },
  {
    quotes: "자 드가자",
    author: "BJ Ralo",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
