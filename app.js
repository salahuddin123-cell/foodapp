const menu = [
  {
    id: 1,
    title: "donut",
    catagory: "launch",
    img: "img/donut.jpg",
    desc: "A doughnut or donut is a type of leavened fried dough. It is popular in many countries and is prepared in various forms as a sweet snack that can be homemade or purchased in bakeries, supermarkets, food stalls, and franchised specialty vendors.",
  },
  {
    id: 2,
    title: "butter milkshake",
    catagory: "breakfast",
    img: "img/butterilkshake.jpg",
    desc: "Peanut butter, coconut milk, maple syrup, cinnamon, frozen",
  },

  {
    id: 3,
    title: "mutton chap",
    catagory: "dinner",
    img: "img/mutton.jpg",
    desc: "Mutton Chaap is a Bengali dish that involves cooking mutton rib chops in a host of spices such as cinnamon, mace and saffron. The meat is cooked until it is slightly charred and tender. Juices dripping from the bones, these rib chops are coated with ghee and served with delectable biryani.",
  },
  {
    id: 4,
    title: "egg parotha",
    catagory: "breakfast",
    img: "img/Eggparotha.jpg",
    desc: "Egg paratha recipe | Anda paratha recipe | How to make egg paratha. Anda paratha or egg paratha are Indian flat bread made with whole wheat flour and topped with egg",
  },
  {
    id: 5,
    title: "green tea",
    catagory: "breakfast",
    img: "img/tea.jpg",
    desc: "Green tea is a type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process used to make oolong teas and black teas",
  },
  {
    id: 6,
    title: "kachori",
    catagory: "dinner",
    img: "img/kachuri.jpg",
    desc: "Kachori is a spicy deep-fried snack, originating from the Indian subcontinent, and common in places with Indian diaspora and other South Asian diaspora",
  },
  {
    id: 7,
    title: "biryani",
    catagory: "launch",
    img: "img/byriani.jpg",
    desc: "Biryani is a mixed rice dish originating among the Indian subcontinent. It is made with Indian spices, rice, and meat usually that of chicken, goat, lamb, prawn, fish, and sometimes, in addition, eggs or vegetables such as potatoes in certain regional varieties",
  },
  {
    id: 8,
    title: "bekari biscuit",
    catagory: "breakfast",
    img: "img/Biscuit.jpg",
    desc: "recipe :2 tablespoon cumin seeds3 cup flour as required1 cup butter2 tablespoon milk4 tablespoon caster sugar",
  },
  {
    id: 9,
    title: "alu paratha",
    catagory: "launch",
    img: "img/aluparatha.jpg",
    desc: "Aloo Paratha is a bread dish originating from the Indian subcontinent. It is a breakfast dish originated from the Punjab region",
  },
  {
    id: 10,
    title: "kabab paratha",
    catagory: "dinner",
    img: "img/kababparatha.jpg",
    desc: "kabab parantha is a famous indian street food. it is very cheap and delicious in taste.everyone loves to eat these rolls.",
  },
];
const content = document.querySelector(".cont");
const filterbn = document.querySelectorAll(".s");
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItem(menu);
});
function displayMenuItem(menuItem) {
  let displayMenu = menuItem.map(function (item) {
    return `
            
               <div class="item" >
                 <img src="${item.img}"  alt="..."> 
                 <div class="card-body">
                   <h5 >${item.title}</h5>
                   <p >${item.desc}</p>
                   
                 </div>
               </div>
           `;
  });
  content.innerHTML = displayMenu;
}
filterbn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let btnid = e.target.id;
    const menuCategory = menu.filter(function (menuItem) {
      if (menuItem.catagory == btnid) {
        return menuItem;
      }
    });
    if (btnid === "all") {
      displayMenuItem(menu);
    } else {
      displayMenuItem(menuCategory);
    }
  });
});
