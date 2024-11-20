let isOpenDob =false
const iconCogEl =document.getElementById("icon")
const setting_contentEl =document.getElementById("settingContent")
const toggleDateOfBirthSelector =()=>{
       if(isOpenDob) {setting_contentEl.classList.add("hide")
} 
else{
 setting_contentEl.classList.remove("hide")                            
}
isOpenDob =!isOpenDob
     console.log('Toggle', isOpenDob )                                 
}
iconCogEl.addEventListener("click",toggleDateOfBirthSelector ) 