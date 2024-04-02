const themePost = ((p)=>{
    console.log("THEME PAYLOAD",p);
let theme =[];
for(let i of p){
    // console.log("LOOP THEME",i.theme);
theme.push(i.theme)
}
let postTheme = [...new Set(theme)];
//  console.log("POST THEME UNIQUE",postTheme);
return postTheme
})
export default themePost