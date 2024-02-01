<template>
    <div class="magnifique">
        <div class="sept">
   
   <div class="douze"> 
       <p>Voulez-vous vraiment supprimer ce contenue</p>
   </div>
   <button id="super">supprimer</button>
   <button id="intello">annuler</button>
 </div>
    </div>
  
</template>

<script>
export default {

}
</script>

<style>

.magnifique
{
 position: fixed;
}
.sept {
    width: 70vh;
    height: 20vh;
    background-color: aliceblue;
    display: block;
    
    
}
.douze{
    display: flex;
    width: 70vh;
    height: 60%;
    justify-content: center;
   align-items: center;
}
.douze p{
   
   margin-top: 5vh;
}
.sept button{
    width: 20%;
    height: 20%;
    margin-top: 2vh;
}
#super{
    margin-left: 23%;
    background-color: blue;
    color: aliceblue;
    border-radius: 4px;
    border: 2px solid blue;
}
#intello{
    margin-left: 15%;
    background-color: blue;
    color: aliceblue;
    border-radius: 4px;
    border: 2px solid blue;
}
#super:active{
    background-color: aliceblue;
color: blue;
}
#intello:active{
    background-color: aliceblue;
color: blue;
}
</style>