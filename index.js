const items = [
  {
    id: "1",
    text: "купити хліб",
    isDone: false,
    created: "2022-11-01",
  },
  {
    id: "2",
    text: "купити молоко",
    isDone: true,
    created: "2022-11-02",
  },
  {
    id: "3",
    text: "поповнити телефон",
    isDone: true,
    created: "2022-11-03",
  },
];

const getItemTamplate = ({ text }) =>
  `<li class="item" >
  <div>
    <input type="checkbox"/>
    <span>${text}</span>
  </div>
  <div class="buttons">x</div>
</li>`;

const refs = {
  list: document.querySelector(".list"),
  form: document.querySelector(".form"),

};


const render = () => {
  const lis = items.map((item) => getItemTamplate(item));
  refs.list.innerHTML = "";
  refs.list.insertAdjacentHTML("beforeend", lis.join(""));
};
 render();

refs.form.addEventListener('submit', e => {
    e.preventDefault();
    const { value } = e.target.elements.text;
    const payload = {
        text: value,
        isDone: false,
    };
    refs.form.reset();
    items.push(payload);
    render();
    
} );