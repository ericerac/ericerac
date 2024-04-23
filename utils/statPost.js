export const statPost = ((p)=>{

    // ******* ******** ******* ****** ****** //
    
    let postOpened = [];
    let postRead = [];
    let theme =[];
    
    
    for( let i of p){
        theme.push(i.theme)
         postOpened.push(i.postOpened)
         postRead.push(i.postRead)
    }
    
    // ******* ******** ******** ******* ******* ****** ****** //
    
     
    
    
    // ******* ******** ******** ******* ******* ****** ****** //
    
    let unicTheme = [...new Set(theme)];
    let newTheme = Object.values(theme);
    let newRead = Object.values(postRead); // total post lus
    let newOpened = Object.values(postOpened); // total post ouverts
    // let readCount  = sumArray(newRead)
    //  console.log("unicTheme--->",unicTheme, "newTheme--->",newTheme);
    
    
    // *_*_*_*_*_*_*__ TOTAL BY KEY *_*_*_*_*_*_*_*_*_//
        const total = 0;
    const  readCount = newRead.reduce(
      (a, c) => a + c,
      total,
    );
    const  openedCount = newOpened.reduce(
      (a, c) => a + c,
      total,
    );
    
    // *_*_*_*_*_*_*__ END TOTAL BY KEY *_*_*_*_*_*_*_*_*_//
    
    
    // *_*_*_*_*_*_*__ COUNT POST BY THEME *_*_*_*_*_*_*_*_*_//
    
    let PostByTheme = new Set();
    
    for (const key in unicTheme) {
      if (Object.hasOwnProperty.call(unicTheme, key)) {
        const element = unicTheme[key];
        let postByTheme = p.filter(t => t.theme == unicTheme[key])
        PostByTheme.add(postByTheme)
    
      }
    }
    
    // console.log("POST BY THEME",PostByTheme);
    // *_*_*_*_*_*_*__ END COUNT POST BY THEME *_*_*_*_*_*_*_*_*_//
    
    // *************    TEST  ************* //
    
    
    let counter = new Set()
    for (let key of PostByTheme) {
      // console.log("LOOP --->",key);
      // counter.add(key)
    for (let index = 0; index < key.length; index++) {
      // console.log("LOOP 2 --->",key[index].postOpened);
    let totalByTheme = key[index].postOpened
    
      counter.add(key[index].postOpened)
    }
    } 
    
    
    // *************  END  TEST  ************* //
    
      let themeCount = newTheme.reduce((obj, newTheme)=>{
        if (!obj[newTheme]) {
            obj[newTheme] = 1;
        } else {
            obj[newTheme]++;
        }
        return obj;
    }, {});
    
    
    // ******* ******** ******* ******* ******* ******* ****** //
    
      let count =""
    
    
    let totalStat = {
      themeCount : themeCount,
      readCount:readCount,
      openedCount:openedCount,
      postCount:p.length,
    
    }
      // console.log("THEME UNIQUE STAT",count);
     return totalStat
    
    })
    