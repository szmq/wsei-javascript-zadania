document.addEventListener('DOMContentLoaded', (event) => {
  const task1 = document.querySelector(".first :nth-child(1)").children[2];
  const task2 = document.querySelector('#second').parentElement.children[3];
  const task3firstChild = document.querySelector('[data-ex=third]').parentElement.parentElement.lastElementChild.children[0];
  const task3 = task3firstChild.children[Math.floor(task3firstChild.childElementCount / 2)];
  const task4 = document.querySelector('div.forth').parentElement.querySelectorAll('article:first-of-type p')[1];

  console.log(task1);
  console.log(task2);
  console.log(task3);
  console.log(task4);
});
