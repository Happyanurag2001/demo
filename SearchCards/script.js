const users = [
  {
    name: "Anurag",
    pic: "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Web developer",
  },
  {
    name: "John",
    pic: "https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Graphic designer",
  },
  {
    name: "Alice",
    pic: "https://images.unsplash.com/photo-1602687096305-699204bf98f0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Content writer",
  },
  {
    name: "Alison",
    pic: "https://images.unsplash.com/photo-1716961311175-6067ef8bf699?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
    bio: "Digital marketer",
  },
];

function showUsers(arr) {
  const container = document.querySelector(".cards");
  container.innerHTML = "";

  
  arr.forEach(function (u) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = u.pic;
    img.className = "bg-img";

    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${u.pic})`;
    blurredLayer.className = "blurred-layer";

    const content = document.createElement("div");
    content.className = "content";

    const heading = document.createElement("h3");
    heading.textContent = u.name;

    const para = document.createElement("p");
    para.textContent = u.bio;

    content.appendChild(heading);
    content.appendChild(para);

    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);
    container.appendChild(card);

  });
}

showUsers(users);

let inp = document.querySelector(".inp");

inp.addEventListener("input", function (e) {
  const newUsers = users.filter((u) =>
    u.name.toLowerCase().includes(e.target.value.toLowerCase())
  );

  showUsers(newUsers);
});
