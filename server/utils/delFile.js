const  delFileName = async (data) => {
    console.log("DAT DELETE FILE",data);
    const filename = data.split("/images/")[1];
    // console.log("filename DELETE FUNCTION", filename);
    await fs.unlink(`../../assets/img/${filename}`, (err) => {
      if (err) {
        // console.log("DELETE FILE ERROR",err);
        throw err;
      } else {
        // console.log(`Fichier : ${filename} éffaçé`);
        return true;
      }
    });
  };
export default delFileName