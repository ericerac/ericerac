<template>
    <div>
        <div class="menuNav">

            <menuNav :routPage="paging"/>
        </div>
<slot @namePage="currentPage"></slot>
<footerA />
    </div>
</template>

<script setup>
import { ref } from 'vue'

let paging = ref("")
let nameRoute = useState('routingTo')

let currentPage = ((p)=>{
    console.log("EMIT VALUE NAME PAGE",p);
paging.value = p
})



watchEffect(() => {

if (nameRoute) {
    console.log("WATCHER LOGIN ROUTE default",nameRoute);
//   const rout = emit('namePage',params)

} else {
}
});
</script>

<style lang="css" scoped>

.menuNav{
    animation: navAnim .5s ease-in-out 2.5s forwards;
    opacity: 0;
    
}
@keyframes navAnim {
    from{
        transform: translateY(-100px);
        filter: blur(10px);
opacity: 0;
    }
    to{
        transform: translateY(0px);
        filter: blur(0px);
opacity: 1;
    }
}
</style>