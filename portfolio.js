const imgDiv = document.getElementById("img-div");
const image = document.createElement("img");
image.setAttribute("src", "images/mylogo.jpg");
image.setAttribute("alt", "logo image");
image.setAttribute("id", "my-logo");
image.setAttribute("class", "img-fluid");
imgDiv.appendChild(image);

const introText = document.createElement("p");
introText.setAttribute('id', "para-1");
introText.innerHTML = "My name is Richard Obaseki, I am a curious minded person who is always fascinated with technology. I am a programmer and I hope to be a full stack developer soon. I have a high school degree and I will be continuing my higher education for my Bachelors and so on. I love traveling and I haven't done much in that area but I still have chances to do so. Contact me if you are looking for a developer who is always eager to learn.";
imgDiv.appendChild(introText);

const connectDiv = document.getElementById("connect-div");
const connectText = document.createElement("h3");
connectText.setAttribute("id", "connect-text");
connectText.innerHTML = "Connect with me";
// connectText.toUpperCase();
connectDiv.appendChild(connectText);

const connectImgDiv = document.getElementById("connect-img");
const connectSource_1 = document.createElement("a");
connectSource_1.setAttribute("href", "https://github.com/ririob");
const connectImg_1 = document.createElement("img");
connectImg_1.setAttribute("src", "images/github.png");
connectImg_1.setAttribute("alt", "Responsive image");
connectImg_1.setAttribute("class", "img-thumbnail_1");
connectSource_1.append(connectImg_1);
connectImgDiv.appendChild(connectSource_1);

const connectSource_2 = document.createElement("a");
connectSource_2.setAttribute("href", "https://www.linkedin.com/in/richard-obaseki-812588165/");
const connectImg_2 = document.createElement("img");
connectImg_2.setAttribute("src", "images/linkedin.png");
connectImg_2.setAttribute("alt", "Responsive image");
connectImg_2.setAttribute("class", "img-thumbnail_2");
connectSource_2.append(connectImg_2);
connectImgDiv.appendChild(connectSource_2);

const connectSource_3 = document.createElement("a");
connectSource_3.setAttribute("href", "https://stackoverflow.com/users/10089955/richard-obaseki");
const connectImg_3 = document.createElement("img");
connectImg_3.setAttribute("src", "images/stackoverflow.png");
connectImg_3.setAttribute("alt", "Responsive image");
connectImg_3.setAttribute("class", "img-thumbnail_3");
connectSource_3.append(connectImg_3);
connectImgDiv.appendChild(connectSource_3);

const footerDiv = document.createElement("div");
footerDiv.setAttribute("class", "container-fluid");
footerDiv.setAttribute("id", "section-baz");
const footerInnerDiv = document.createElement("div");
footerInnerDiv.setAttribute("class", "row");
footerDiv.append(footerInnerDiv);
const footerColDiv = document.createElement("div");
footerColDiv.setAttribute("class", "col-md-12 xs-12");
footerInnerDiv.append(footerColDiv);
const footerMainDiv = document.createElement("div");
footerMainDiv.setAttribute("class", "wrapper");
footerMainDiv.setAttribute("id", "main-wrapper");
footerColDiv.append(footerMainDiv);
const footerSelfDiv = document.createElement("footer");
footerSelfDiv.setAttribute("class", "footer");
footerMainDiv.append(footerSelfDiv);
const footerContents = "Created by RICHARD OBASEKI. All Rights Reserved!";
footerSelfDiv.append(footerContents);
// document.body.innerHTML += footerDiv;
document.getElementById("body").appendChild(footerDiv);
console.log(footerDiv);