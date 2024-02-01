<template>
    <div class="dix">
                <div class="dix_un">
                    <div class="dix_un_un">
                        <div class="organisation">
                            <p>Modifier</p>
                        </div>

                    </div>
                    <div class="dix_un_deux">
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
                    <button>Modifier</button>
                </div>

            </div>
</template>

<script>
export default {

}
</script>

<style>
.dix {
  
    background-color:transparent;
    color: aliceblue;
  
    position: relative;
    align-items: center;
    justify-content: center;
    display: flex;
    transform: translate(-50%, -50%);
    margin-top: 40vh;
  
}

.dix_un{
    width: 72vh;
    height: 59vh;
    background-color: aliceblue;
    margin-left: 190vh;
    margin-top: 20vh;
    display: block;
    
}
.dix_un_un
{
    width: 100%;
    height: 7vh;
    margin-top: -16px;
    margin-bottom: 2vh;
    background-color: rgb(21, 21, 63);
    color: aliceblue;
    position: relative;
}
.organisation{
   position: absolute;
   margin-left: 3vh;
}
.dix_un_deux p{
color: black;
margin-bottom: 0px;
margin-left: 2vh;
}
.dix_un_deux input{
    width: 68vh;
    height: 3vh;
    margin-left: 2vh;
}
.dix_un button{
    width: 10vh;
    height: 34px;
    background-color: blue;
    color: aliceblue;
    border-radius: 4px;
    margin-top: 2vh;
    margin-left: 2vh;
    border: 2px solid blue;
    
}
.dix_un:active button{
    background-color: aliceblue;
color: blue;
}
</style>