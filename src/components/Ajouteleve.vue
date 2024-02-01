<template>
    <div class="huit">
                <div class="huit_un">
                    <div class="huit_un_un">
                        <div class="urgent">
                            <p>Ajouter conger</p>
                        </div>

                    </div>
                    <div class="huit_un_deux">
                        <p>id</p>
                        <input></input>
                        <p>Nom</p>
                        <input></input>
                        <p>Prenom</p>
                        <input></input>
                        <p>Age</p>
                        <input></input>
                        <p>Genre</p>
                        <input></input>

                    </div>
                    <button>Ajouter</button>
                </div>

            </div>
</template>

<script>
export default {

}
</script>

<style>
.huit {
    width: 230%;
    height: 10vh;
    background-color:transparent;
    color: aliceblue;
    height: 100%;
    position: relative;
    align-items: center;
    justify-content: center;
    display: flex;
    transform: translate(-50%, -50%);
    margin-top: 40vh;
  
}

.huit_un{
    width: 72vh;
    height: 59vh;
    background-color: aliceblue;
    margin-left: 190vh;
    margin-top: 20vh;
    display: block;
    
}
.huit_un_un
{
    width: 100%;
    height: 7vh;
    margin-top: -16px;
    margin-bottom: 2vh;
    background-color: rgb(21, 21, 63);
    color: aliceblue;
    position: relative;
}
.urgent{
   position: absolute;
   margin-left: 3vh;
}
.huit_un_deux p{
color: black;
margin-bottom: 0px;
margin-left: 2vh;
}
.huit_un_deux input{
    width: 68vh;
    height: 3vh;
    margin-left: 2vh;
}
.huit_un button{
    width: 10vh;
    height: 34px;
    background-color: blue;
    color: aliceblue;
    border-radius: 4px;
    margin-top: 2vh;
    margin-left: 2vh;
    border: 2px solid blue;
    
}
.huit_un:active button{
    background-color: aliceblue;
color: blue;
}
</style>