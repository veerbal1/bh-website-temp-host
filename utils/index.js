export const showBodyBeforeElement = () => {
  let styleElem = document.head.appendChild(document.createElement("style"));

  styleElem.innerHTML = "body::before{opacity:1;pointer-events:all}";
};

export const hideBodyBeforeElement = () => {
  let styleElem = document.head.appendChild(document.createElement("style"));

  styleElem.innerHTML = "body::before{opacity:0;pointer-events:none}";
};
