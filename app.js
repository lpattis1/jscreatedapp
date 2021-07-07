let data = {
  fullName: "John Doe",
  position: "UX/UI Developer",
  socials: [
    {
      id: "fb",
      service: "Facebook",
      url: `https://www.facebook.com/johndoe25`,
      icon: "fab fa-facebook-f",
    },

    {
      id: "ig",
      service: "Instagram",
      url: `https://www.instagram.com/johndoe25`,
      icon: "fab fa-instagram",
    },

    {
      id: "db",
      service: "Dribbble",
      url: `https://www.dribbble.com/johndoe25`,
      icon: "fab fa-dribbble",
    },

    {
      id: "gl",
      service: "Google",
      url: `https://www.google.com/johndoe25`,
      icon: "fab fa-google",
    },
  ],
};
const root = document.createElement("div");
const card = document.createElement("section");
const style = document.createElement("style");
const html = `
<div class="card__wrapper">
          <img src="/img/1.jpeg" alt="" class="card__user-img" />
          <div class="card__info">
            <span class="card__name">${data.fullName}</span>
            <span class="card__title">${data.position}</span>
          </div>
          <div class="card__socials">
          
          </div>
</div>
`;
const cssStyles = `

/* global styles */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  height: 100%;
}

body {
  font-family: "Noto Sans JP", sans-serif;
  line-height: 1.7;
  background: #fafafa;
  height: 100%;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

*:focus {
  outline: none;
}

/* content area */

.content-area {
  height: 100vh;
}

.card {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5rem);
}

.card__wrapper {
  height: 48rem;
  padding: 2rem;
  max-width: 35rem;
  width: 100%;
  background: white;
  box-shadow: 0rem 0rem 6.2rem 0rem rgba(0, 0, 0, 0.22);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card__user-img {
  border: 0.2rem solid #2c5dff50;
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  margin: 2rem 0 1.5rem;
  object-fit: cover;
}

.card-info {
  margin-bottom: 2rem;
}

.card__name {
  text-align: center;
  display: block;
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.card__title {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.card__icon {
  width: 20rem;
  padding: 1rem;
  font-size: 1.8rem;
  border: 0.1rem solid #000;
  margin-bottom: 1rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-left: 2rem;
  align-items: center;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 0.5rem;
}

.card__icon-box {
  width: 2.5rem;
  display: inline-block;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card__icon--title {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 1rem;
}

.card__icon--fb {
  color: #2c5eff;
  border: 0.1rem solid #2c5eff;
}

.card__icon--fb:hover {
  background: #2c5eff;
  color: white;
}

.card__icon--ig {
  color: #773fe7;
  border: 0.1rem solid #773fe7;
}

.card__icon--ig:hover {
  background: #773fe7;
  color: white;
}

.card__icon--db {
  color: #f962b1;
  border: 0.1rem solid #f962b1;
}

.card__icon--db:hover {
  background: #f962b1;
  color: white;
}

.card__icon--gl {
    color: green;
    border: 0.1rem solid green;
  }
  
  .card__icon--gl:hover {
    background: green;
    color: white;
  }
`;

document.head.append(style);
document.body.prepend(root); // prepend places an element at the very top of the body
root.prepend(card);

root.classList.add("root");
card.classList.add("card");
root.style.cssText = `
background: url('https://wallpaperaccess.com/full/636909.jpg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
height: 100vh;
`;

card.innerHTML = html;
style.innerHTML = cssStyles;

const cardSocials = document.querySelector(".card__socials");

data.socials.forEach((social, i) => {
  let socialIconArea = document.createElement("div");
  socialIconArea.classList.add("card__icon");
  socialIconArea.classList.add(`card__icon--${social.id}`);
  socialIconArea.innerHTML = `
  <span class="card__icon-box">
  <i class="${social.icon}"></i>
  <span class="card__icon--title">${social.service}</span>
 </span>
  `;
  cardSocials.append(socialIconArea);
});
