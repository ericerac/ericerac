<template>
    <div>
      <modal_success v-if="modalSuccess" />
      <div class="bloc_total">
        <div class="postData">
          <table>
            <thead>
              <tr>
                <th class="txtDay">Titre Post </th>
                <!-- <th>lien Post</th> -->
                <th class="txtDay">Date Publication
                  <button v-if="!dateUp" class="btnUp btnOpen btnChoise txtDay" @click="openFunction('upDate')">&#8679;
                  </button><button v-else class="btnUp btnOpen btnChoise txtDay"
                    @click="openFunction('downDate')">&#8681;</button>
                </th>
                <!-- <th class="txtDay">Date Mise à jour</th> -->
                <th class="optionBtn txtDay">Ouvert
                  <button v-if="!openUp" class="btnUp btnOpen btnChoise txtDay" @click="openFunction('upOpen')">&#8679;
                  </button><button v-else class="btnUp btnOpen btnChoise txtDay"
                    @click="openFunction('downOpen')">&#8681;</button>
                </th>
                <th class="optionBtn txtDay">Lus
                  <button v-if="readUp" class="btnDown btnRead btnChoise txtDay"
                    @click="openFunction('upRead')">&#8681;</button>
                  <button v-else class="btnDown btnRead btnChoise txtDay" @click="openFunction('downRead')">&#8679;</button>
                </th>
                <th class="columnVisteur txtDay">Themes</th>
                <th class="columnVisteur txtDay">% ouverts / lus</th>
              </tr>
            </thead>
  
            <tbody v-for="item in post" :key=item._id>
              <tr>
                <td class="cp text" @click="postSelected(item._id)" :class="[dark ? 'txtDark' : 'txtDay']">{{ item.title_P }}
                </td>
                <!-- <td class="cp" @click="postSelected(item._id)">{{ item._id }}</td> -->
                <td :class="[dark ? 'txtDark' : 'txtDay']" class="text">{{ datePosted(item.createdAt) }}</td>
                <!-- <td v-if='datePosted(item.createdAt) != datePosted(item.updatedAt)' class="text" :class="[dark ? 'txtDark' : 'txtDay']">
                  {{ datePosted(item.updatedAt) }}</td>
                <td v-else class="text"> 
                  -</td>-->
                <td class="text" :class="[dark ? 'txtDark' : 'txtDay']">{{ item.postOpened }}</td>
                <td class="text" :class="[dark ? 'txtDark' : 'txtDay']">{{ item.postRead }}</td>
                <td class="columnVisteur text" :class="[dark ? 'txtDark' : 'txtDay']">{{ item.theme }}</td>
                <td class="columnVisteur text" :class="classFunction(item)">
                  {{ pourcent({ a: item.postOpened, b: item.postRead }) }} %</td>
                <!-- <td class="columnVisteur text" :class="[ item.postOpened == 0  ? 'red' : '' ]">
                  {{ pourcent({ a: item.postOpened, b: item.postRead }) }} %</td> -->
              </tr>
  
            </tbody>
          </table>
          <div class="tables2"></div>
          <table>
            <thead>
              <tr>
                <th class="txtDay text">Theme </th>
                <th class="txtDay text">Publication </th>
                <th class="txtDay text" colspan="2">Ouverts </th>
                <th class="txtDay text" colspan="2">Lus </th>
                <th class="txtDay text">Nombre </th>
              </tr>
            </thead>
            <tbody v-for="(d, index) in statistic.themeCount" :key="d.index">
              <tr>
                <td class="text" :class="[dark ? 'txtDark' : 'txtDay']">{{ index }}</td>
                <td class="text" :class="[dark ? 'txtDark' : 'txtDay']">{{ d }}</td>
                <td class="text" :class="[dark ? 'txtDark' : 'txtDay']">{{ }}</td>
                <td class="text" :class="[dark ? 'txtDark' : 'txtDay']">{{ }}</td>
                <td class="text" :class="[dark ? 'txtDark' : 'txtDay']">{{ }}</td>
                <td class="text" :class="[dark ? 'txtDark' : 'txtDay']">{{ }}</td>
                <td class="text" :class="[dark ? 'txtDark' : 'txtDay']">{{ }}</td>
              </tr>
            </tbody>
            <tbody class="totalLine">
              <tr>
                <td class="text" :class="[dark ? 'txtDark' : 'txtDay']">Total</td>
                <td class="text" :class="[dark ? 'txtDark' : 'txtDay']">{{ statistic.postCount }}</td>
                <td class="text" :class="[dark ? 'txtDark' : 'txtDay']">{{ statistic.openedCount }}</td>
                <td class="text" :class="[dark ? 'txtDark' : 'txtDay']">{{ }}</td>
                <td class="text" :class="[dark ? 'txtDark' : 'txtDay']">{{ statistic.readCount }}</td>
                <td class="text" :class="[dark ? 'txtDark' : 'txtDay']">{{ }}</td>
                <td class="text" :class="[dark ? 'txtDark' : 'txtDay']">{{ }}</td>
              </tr>
            </tbody>
          </table>
  
        </div>
        <!-- <div class="postSelectedBloc">
  
          <PostSelected v-if="postAdminComp" :data="postSelectedData" :user="user" @close="close" @del="deletePost"
            class="component" />
        </div> -->
      </div>
    </div>
  </template>
  
  <script setup >
  
  import { getPageUseStore } from "../store/postGet"
  import { handPost } from "../utils/handlePost"
  import { statPost } from "../utils/statPost"
  
  definePageMeta({
    middleware:"auth"
  })
  const classFunction = ((item)=>{
    // console.log("CLASS FUNCTION PAYLOAD",item);
if (item.postOpened > 0 && item.postRead == 0) {
    return "red"
}
  })
  const pageStore = getPageUseStore()
  const { dataPage, dataPostSelected } = pageStore
  let dark = useState('dark')
  let openUp = ref(false)
  let dateUp = ref(false)
  let readUp = ref(false)
  
  let user = ref(true)
  let post = ref("")
  let postSelectedData = ref("")
  let postAdminComp = ref("")
  let postComp = ref(false)
  
  let postDataPage =
  {
    d: "post",
    l: "fr"
  }
  
  if (pageStore.dataP.length === 0) {
    const pst = async () => {
      await dataPage(postDataPage)
    post.value = pageStore.dataP.reverse()
    }
    pst()
  
  } else {
    post.value = pageStore.dataP.reverse()
  
  }
  const postSelected = (async (id) => {
    // console.log("EMIT REÇUT", id);
    await dataPostSelected(id)
   
postAdminComp.value = true
    postSelectedData.value = pageStore.postSelect
  })
  
  const datePosted = ((d) => {
    if (d == undefined) {
      return
    }
  
    let dat = d.split("T")[0].split("-")
    let year = dat[0]
    let month = dat[1]
    let day = dat[2]
    return day + "/" + month + "/" + year
  })
  
  // ************* UTILS DATA FUNCTION *************//
  const pourcent = ((d) => {
    // console.log("POURCENTAGE FUNCTION",d);
    if (d.a == 0 && d.b == 0) {
      return 0
    }
    return Math.round((100 / (d.a / d.b)))
  })
  
  
  // ************* UTILS DATA FUNCTION *************//
  
  const close = () => {
    // console.log("CLOSE EMIT");

    postAdminComp.value = false
    // console.log("CLOSE COMPONENT");
  }
  const openFunction = ((d) => {
    let choise = {
      to: d,
      post: post.value
    }
    if (d === 'upOpen' || d === 'downOpen') {
      let upDownBtn = {
        'upOpen': true,
        'downOpen': false,
      }
      openUp.value = upDownBtn[d]
    }
    if (d === 'upRead' || d === 'downRead') {
      let upDownRead = {
        'upRead': false,
        'downRead': true
      }
  
      readUp.value = upDownRead[d]
    }
    if (d === 'upDate' || d === 'downDate') {
      let upDownDate = {
        'upDate': true,
        'downDate': false
      }
      dateUp.value = upDownDate[d]
    }
    let dataReturn = handPost(choise)
    // console.log("DARA RETURN",dataReturn.choise);
    // console.log("DARA RETURN",dataReturn);
    post.value = dataReturn
  
  })
  
  let statistic = ref("")
  let ThemeCount = statistic.themeCount
  // -------- WATCH POST -----------
  watchEffect((ap, pp) => { 
    if (pageStore.dataP) {
      statistic.value = statPost(pageStore.dataP)
    //   console.log("RESPONSE THEME STAT", statistic.value);
    } else {
    }
  });
  // UPDATE VALUE POST LIST *********//*css*/`
  const updateValueList = (id) => {
    console.log("EMIT REÇUT", id);
    let np = post.value
    post.value = np.filter(d => d._id != id)
    // console.log("NEW LIST POST", post.value);
    close()
  }
  const deletePost = (async (id) => {
  
    let text = "Effacer ce Post ?";
    if (confirm(text) == true) {
      await useFetch('/api/page', {
        method: 'delete',
        body: { id: id }
      }).then((res) => {
        // console.log("RESPONSE TO DELETE POST", res);
        if (res.status.value == "success") {
          filterNewList(id)
        }
      })
    } else {
      text = "You canceled!";
    }
  })
  const filterNewList = ((id) => {
    let np = post.value
    let newList = np.filter(x => x._id != id)
    post.value = newList
  })
  let modalSuccess = ref(false)
  const openModal = () => modalSuccess = true
  
  </script>
  
  <style lang="css" scoped>
  @import url(../assets/style/reset.css);
  @import url(../assets/style/font.css);
  
  /* OPTION BUTTON TEST */
  .optionBtn::after {
    content: ""
  }
  .text{
    color:var(--textColor);
    color:hsl(230, 8%, 75%);
  }
  .btnChoise {
    border: none;
    margin-right: 0;
  }
  
  /* OPTION BUTTON TEST */
  .bloc_total {
    position: relative;
  }
  
  .postSelectedBloc {
    position: absolute;
    max-width: 100%;
    height: auto;
    top: 80%;
    left: 50%;
    margin-top: 100px;
    transform: translate(-50%, -50%);
    overflow: hidden;
  }
  
  .component {
    max-width: 90vw;
  }
  
  .postData {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 20px
  }
  
  table {
    display: inline;
    /* width: 100%; */
    border-collapse: collapse;
    margin-bottom: 20px;
    margin-inline: auto;
  
  } 

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;   
  }
  
  th {
    background-color: #f2f2f2;
  }
  
   tr:hover td{
    background-color: #0057c1;
    color:rgb(0, 0, 0,.7);  
  }
  
  .columnVisteur {
    display: none;
  }
  
  @media screen and (min-width: 756px) {
  
    .component {
      max-width: 70vw;
    }
  
    .columnVisteur {
      display: table-cell;
    }
  }
  /* CONDITION CLASS */
  .red{
    color:red;
  }
  </style>