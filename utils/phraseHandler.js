const handlerPhrase = ((p) => {
    
    let lengthData = p.length
    let theme = [];
    let auteur = [];
    let PhraseUnic = ""
let num = ""
    let PhraseNumber = ((max) => {
        let n = (Math.random() * max)-1;
        console.log("MATH RANDOM",n);
        if (n < 0) {
            n = n+1
        }
        num = Math.floor(n);
    })
    PhraseNumber(lengthData)

    // console.log("MATH RANDOM",num);

    for (let i of p) {
        theme.push(i.theme)
        auteur.push(i.auteur)
    }
    let phraseTheme = [...new Set(theme)];
    let phraseAuteur = [...new Set(auteur)];

// ***************************************************

for (const [key, value] of Object.entries(p)) {
    if (key == num) {
        PhraseUnic = value
    }
}
    let dataHandler = {
        themes:phraseTheme, 
        auteur:phraseAuteur,
        unicPhrase:PhraseUnic
    }
     console.log(" END HANDLER PHRASE FUNCTION DATA",dataHandler);
    return dataHandler
})
export default handlerPhrase