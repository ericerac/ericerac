<template>
  <div class="bloc">
   
    <NuxtLayout :dark="dark">
      <NuxtPage />
    </NuxtLayout>
    
  </div>
</template>
<script setup>

let dark = useState('dark',() => false)

const dataConnect = await useFetch(`/api/data`)
  .then((res) => {
      console.log ("DARK--->",res.data.value)
      dark.value = res.data.value
    // getTheme(res.data.value)
    
  })

</script>
<style >
.html, body{
  margin:0;
}
.bloc{
  display: flex;
  flex-direction: column;
  gap:20px;
  background: rgb(17,1,177);
background: radial-gradient(circle, rgba(17,1,177,1) 0%, rgba(13,3,112,1) 50%, rgba(1,0,9,1) 99%);
background-attachment: fixed;
}

</style>