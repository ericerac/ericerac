<template>
    <div class="bloc_nmaster">
      <h1 class="title_page">Create Post</h1>
      <div class="bloc_img">
        <div class="form-group_foto">
          <template v-if="preview">
  
            <img :src="preview" class="" width="200" height="160" />
  
          </template>
          <!-- <label>image 1</label> -->
          <img v-else class="" src="../assets/icon/user-48.png" alt="image" width="200" height="160" />
          <!-- <div class=" group_btn_img"> -->
  
  
          <label for="image" class="btn_upload">
            <figure>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
                <path
                  d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z">
                </path>
              </svg>
            </figure>
            <input class="btn_upload_file" type="file" name="image" id="image" ref="file" @change="FileUpload"
              accept="image/png, image/jpeg, image/jpg, image/gif, image/webp" />
            <p class="fileName" v-if="fileName">{{ fileName }}</p>
            <!-- <span class>{{ fileName }}</span> -->
          </label>
          <!-- </div> -->
        </div>
        <button class="btn btn_cancel btn_cancel_img" @click="FileCancel()">
          Cancel
        </button>
      </div>
      <div class="bloc_master_input">
  
        <div class="bloc_input_grup">
          <div class="bloc_tilte">
            <div class="bloc_title_input ">
              <label class=" input" for="theme">Theme:
                <select name="theme" id="theme">
                 
                  <option value="societe">Société</option>
                  <option value="humour">Humour</option>
                  <option value="i.a">I.A</option>
                  <option value="cultureArt">Culture/Art</option>
                </select>
              </label>
              <label for="theme">New Theme
                <input class=" input" name="theme" type="text" v-model="data.theme">
              </label>
  
            </div>
          </div>
          <div class="bloc_tilte">
            <div class="bloc_title_input ">
              <label for="title_P">Titre Principal<input class="title input" name="title_P" type="text"
                  v-model="data.title_P"></label>
              <label for="sub_title_P">Sous-titre Principal<input class="sub_title input" name="sub_title_P" type="text"
                  v-model="data.sub_title_P"></label>
            </div>
          </div>
          <div class="bloc_tilte">
            <div class="bloc_title_input ">
              <label for="title_1">Titre paragraphe 1<input class="title input" name="title_1" type="text"
                  v-model="data.title_1"></label>
              <label for="sub_title_1">Sous-titre paragraphe 1<input class="sub_title input" name="sub_title_1" type="text"
                  v-model="data.sub_title_1"></label>
            </div>
            <label v-if="data.title_1" for="p_1" class="label_text_area">Paragraphe 1<textarea class="text_area" name="p_1"
                id="ta1" cols="50" rows="10" v-model="data.p_1"></textarea></label>
          </div>
  
          <div class="bloc_tilte" v-if="data.title_1">
            <div class="bloc_title_input ">
              <label for="title_2">Titre paragraphe 2<input class="title input" name="title_2" type="text"
                  v-model="data.title_2"></label>
              <label for="data.sub_title_2">Sous-titre paragraphe 2<input class="sub_title input" name="sub_title_2"
                  type="text" v-model="data.sub_title_2"></label>
            </div>
            <label v-if="data.title_2" for="p_2" class="label_text_area">Paragraphe 2<textarea class="text_area" name="p_2"
                id="ta2" cols="50" rows="10" v-model="data.p_2"></textarea></label>
          </div>
  
          <div class="bloc_tilte" v-if="data.title_1 && data.title_2">
            <div class="bloc_title_input ">
              <label for="title_3">Titre paragraphe 3<input class="title input" name="title_3" type="text"
                  v-model="data.title_3"></label>
              <label for="sub_title_3">Sous-titre paragraphe 3<input class="sub_title input" name="sub_title_3" type="text"
                  v-model="data.sub_title_3"></label>
            </div>
            <label v-if="data.title_1 && data.title_2 && data.title_3" for="p_3" class="label_text_area">Paragraphe
              3<textarea class="text_area" name="p_3" id="ta3" cols="50" rows="10" v-model="data.p_3"></textarea></label>
          </div>
  
          <div class="bloc_tilte" v-if="data.title_1 && data.title_2 && data.title_3">
            <div class="bloc_title_input ">
              <label for="title_4">Titre paragraphe 4<input class="title input" name="title_4" type="text"
                  v-model="data.title_4"></label>
              <label for="sub_title_4">Sous-titre paragraphe 4<input class="sub_title input" name="sub_title_4" type="text"
                  v-model="data.sub_title_4"></label>
            </div>
            <label v-if="data.title_1 && data.title_2 && data.title_3 && data.title_4" for="p_4"
              class="label_text_area">Paragraphe 4<textarea class="text_area" name="p_4" id="ta4" cols="50" rows="10"
                v-model="data.p_4"></textarea></label>
          </div>
  
          <div class="bloc_tilte" v-if="data.title_1 && data.title_2 && data.title_3 && data.title_4">
            <div class="bloc_title_input ">
              <label for="title_5">Titre paragraphe 5<input class="title input" name="title_5" type="text"
                  v-model="data.title_5"></label>
              <label for="sub_title_5">Sous-titre paragraphe 5<input class="sub_title input" name="sub_title_5" type="text"
                  v-model="data.sub_title_5"></label>
            </div>
            <label v-if="data.title_1 && data.title_2 && data.title_3 && data.title_4 && data.title_5" for="p_5"
              class="label_text_area">Paragraphe 5<textarea class="text_area" name="p_5" id="ta5" cols="50" rows="10"
                v-model="data.p_5"></textarea></label>
          </div>
  
          <div class="bloc_tilte" v-if="data.title_1 && data.title_2 && data.title_3 && data.title_4 && data.title_5">
            <div class="bloc_title_input ">
              <label for="title_6">Titre paragraphe 6<input class="title input" name="title_6" type="text"
                  v-model="data.title_6"></label>
              <label for="sub_title_6">Sous-titre paragraphe 6<input class="sub_title input" name="sub_title_6" type="text"
                  v-model="data.sub_title_6"></label>
            </div>
            <label v-if="data.title_1 && data.title_2 && data.title_3 && data.title_4 && data.title_5 && data.title_6"
              for="p_6" class="label_text_area">Paragraphe 6<textarea class="text_area" name="p_6" id="ta6" cols="50"
                rows="10" v-model="data.p_6"></textarea></label>
          </div>
  
          <div class="bloc_tilte"
            v-if="data.title_1 && data.title_2 && data.title_3 && data.title_4 && data.title_5 && data.title_6">
            <div class="bloc_title_input ">
              <label for="title_7">Titre paragraphe 7<input class="title input" name="title_7" type="text"
                  v-model="data.title_7"></label>
              <label for="sub_title_7">Sous-titre paragraphe 7<input class="sub_title input" name="sub_title_7" type="text"
                  v-model="data.sub_title_7"></label>
            </div>
            <label
              v-if="data.title_1 && data.title_2 && data.title_3 && data.title_4 && data.title_5 && data.title_6 && data.title_7"
              for="p_7" class="label_text_area">Paragraphe 7<textarea class="text_area" name="p_7" id="ta7" cols="50"
                rows="10" v-model="data.p_7"></textarea></label>
          </div>
        </div>
      </div>
  
      <div class="bloc_btn">
        <button class="btn btn_update" @click="createPost()">
          Create
        </button>
        <button class="btn btn_cancel">
          Cancel
        </button>
      </div>
<div class="modalSuccess" v-if="modalPostOk" @click="modalPostOk = false">
    <div class="content">
        <p>
           {{modalMessage}}
        </p>
    </div>
</div>
    </div>
  </template>
  
  <script setup>
  import { usePostPage } from "../store/postPost"
  import Compressor from "compressorjs"
  import { reactive } from "vue"
  

  definePageMeta({
  middleware: 'auth'
})
  const pageStore = usePostPage()
  let data = reactive({
    title_P: "",
    title_1: "",
    title_2: "",
    title_3: "",
    title_4: "",
    title_5: "",
    title_6: "",
    title_7: "",
  
    sub_title_P: "",
    sub_title_1: "",
    sub_title_2: "",
    sub_title_3: "",
    sub_title_4: "",
    sub_title_5: "",
    sub_title_6: "",
    sub_title_7: "",
  
    p_1: "",
    p_2: "",
    p_3: "",
    p_4: "",
    p_5: "",
    p_6: "",
    p_7: "",
  
    theme: "",
    // fileName :ref(""),
    // fileSelected : ref(""),
  })
  
  
  let modalPostOk = ref("")
  let modalMessage = ref("")
  let preview = ref("")
  let fileName = ref("")
  let fileSelected = ref("")
  let newFile = ref("")
  let inputSelected = ref("")
  let image = ref("")
  
  // --------- FUNCTION FILE UPLOAD -----------//
  
  
  const FileUpload = ((event) => {
  
    inputSelected.value = "";
    console.log("INPUT DESELECTED-->", inputSelected.value);
    let inp = document.querySelectorAll('input[type=file]');
  
    let File = event.target.files[0];
    fileName = File.name
    console.log("FILE NAME----->", fileName);
    // let inp1 = document.querySelector('input[type=file]').files[0];
  
    let tabInput = []
    
    var input = event.target;
    // console.log("EVENT TARGET----->",event.target);
    if (input.files) {
      // console.log("INPUT FILES----->",input.files);
  
      var reader = new FileReader();
      reader.onload = (e) => {
        preview.value = e.target.result;
        // console.log("e.target.result----->", e.target.result);
      }
      image.value = input.files[0];
      reader.readAsDataURL(input.files[0]);
    }
    // ************ DONE **********************************
    new Compressor(File, {
      quality: 0.6,
      success(result) {
         console.log("SUCCESS COMPRESSOR", result);
        fileSelected = result
      },
      error(err) {
        console.log(err.message);
      },
    });
  })
  const FileCancel = ((event) => {
  
    
    fileSelected = "";
    fileName = "";
    data.fileName = "";
    preview.value = "";
  
    console.log("FILECANCEL");
  })
  
  const createPost = async () => {
    const formData = new FormData()
    if (fileSelected) {
      formData.append('file', fileSelected, fileName)
    }
    for (const [key, value] of Object.entries(data)) {
      formData.append(`${key}`, `${value}`)
    }
    await useFetch('/api/post', {
      method: 'POST',
      body: formData
    }).then((res)=>{
  if (res) {
    console.log("RESPONSE TO CEATE POST",res.status);
   if (res.status.value == "success") {
    openModal()
    modalMessage.value = "Post Enregistré !"
   } else {
    openModal()
    modalMessage.value = "Erreur d'enregistrement"
   }
  }
    })
  }

  // fonction Modal

  const openModal = (()=>{
    modalPostOk.value = true
    setTimeout(() => {
        modalPostOk.value = false
    }, 1500);
  })
  </script>
  
  <style lang="css" scoped>
  @import url("../assets/style/reset.css");
  @import url("../assets/style/btn.css");

  /* MODAL SUCCESS */
.modalSuccess{
position:fixed;
top: 0;
left:0;
bottom:0;
right:0;
border: 1px solid red;
}
  .content{
width:250px;
height: 150px;
background-color: green;

border-radius: 10px;
display: flex;
text-align: center;
align-items: center;
position:absolute;
top:50%;
left: 50%;
transform: translate(-50%, -50%);
  }
  .content > p {
    color:white;
    width:auto;
    margin:auto;
    font-size: 20px;
  }
  /* FIN MODAL */
  .bloc_nmaster {
    position:relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .title_page {
    font-size: calc(30px + 2vw);
    margin-bottom: 20px;
  }
  
  .bloc_img {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    padding: 20px;
    max-width: 300px;
    border: 1px solid rgb(9, 203, 2);
    max-height: 500px;
    margin-bottom: 30px;
    gap: 20px
  }
  
  .btn_upload_file {
    display: none
  }
  
  .bloc_master_input {
    display: flex;
    /* flex-direction: column; */
    width: 300px;
    align-items: center;
    justify-content: space-evenly;
  }
  
  .bloc_title_input {
    display: flex;
    flex-direction: row;
    width: 350px;
    padding: 20px;
    /* border: 1px solid blue; */
  
  }
  
  .bloc_tilte {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 350px;
    height: auto;
    margin: 20px auto;
    border-radius: 10px;
    box-shadow: 3px 3px 8px rgba(0, 0, 0.3);
    /* border:2px solid rgb(26, 81, 1) */
  }
  
  .bloc_input_grup {
    width: 350px;
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: auto;
  }
  
  .input {
    margin: 10px;
    width: 80%
  }
  
  .bloc_text_area {
    display: flex;
    flex-direction: column;
    border: 1px solid green;
    padding: 20px;
    margin: 20px auto
  }
  
  .label_text_area {
    margin-top: 10px;
  
  }
  
  textarea {
    width: 340px;
  
  }
  
  
  @media screen and (min-width:1024px) {
    .bloc_master_input {
      /* flex-direction: column; */
      justify-content: space-evenly;
      width: 700px;
      border: 1px solid rgb(255, 0, 195);
    }
  
    .bloc_title_input {
      /* border: 1px solid blue; */
    }
  }
  </style>