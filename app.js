const inputValue= document.querySelector('#searchss');
const searchButton=document.querySelector(".searchButton");
const nameContainer=document.querySelector(".main__profile-name");
const unContainer=document.querySelector(".main__profile-username");
const reposContainer=document.querySelector(".main__profile-repos");
const urlContainer=document.querySelector(".main__profile-url");
const githubProfile = document.getElementById("github-profile"); 
const client_id="Iv1.59b004e8e82c91d0";
const client_secret="80c5e6ec6b2b1b1d8d69b65be4008151614dcb67";
console.log("helo");

const fetchUsers=async(user)=>{
  const api_call=await fetch(`https://api.github.com/users/${user}?client_id=${client_id}& client_secret=${client_secret}`);
  const data=await api_call.json();
  return {data} //isko object bna rkha tha
};
const showData=()=>{ // chutiya lovish
  fetchUsers(inputValue.value).then((res)=>{
    console.log(res);
    githubProfile.setAttribute('src',res.data.avatar_url);
    nameContainer.innerHTML=`Name:<span class="main__profile-key">${res.data.name}</span>`;
    unContainer.innerHTML=`Username:<span class="main__profile-key">${res.data.login}</span>`;
    reposContainer.innerHTML=`Repos:<span class="main__profile-key">${res.data.public_repos}</span>`;
    urlContainer.innerHTML=`URL:<span class="main__profile-key">${res.data.url}</span>`;
  })
}
searchButton.addEventListener("click",()=>{
  showData();
})
/*var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';sun image dalne k liye jo tu dom khe rha tha vo bhi toh bnana pdega i think mene image tag phle hi html ki file m dal dia h or use select kr lia ab ek bar response dekh lu ok

var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}*/