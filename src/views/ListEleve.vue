<script>
</script>

<template>

<body>
    <div class="sauce">


        <div class="un">
            <p><strong>Liste des utilisateur</strong></p>
            <div class="un_un">
                <input type="text" placeholder="Chercher...">
                <button @click="ajouterEmploye">Ajouter Emploiyer</button>

            </div>
        </div>

        <div class="deux">
            <table>
                <thead>
                    <tr>    
                        <td>NOM</td>
                        <td>PRENOM</td>
                        <td>AGE</td>
                        <td>GENRE</td>
                        <td>STATUS</td>
                        <td id="tresor">ACTIONS</td>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Artecal'ol</td>
                        <td>Lone Wolf</td>
                        <td>45</td>
                        <td>F</td>
                        <td>pas en coger</td>
                        <td>
                            <button id="sortillege" @click="ajouterConge">Ajouter un conger</button>
                            <button id="invocation" @click="modifier">Modifier</button>
                            <button id="multitude" @click="supprimer">Supprimer</button>
                        </td>

                    </tr>
                    <tr>
                        <td>TWL</td>
                        <td>wolverine</td>
                        <td>45</td>
                        <td>F</td>
                        <td>pas en coger</td>
                        <td>
                            <button id="sortillege" @click="ajouterConge">Ajouter un conger</button>
                            <button id="invocation" @click="modifier">Modifier</button>
                            <button id="multitude" @click="supprimer">Supprimer</button>
                        </td>

                    </tr>
                </tbody>
            </table>
            <div class="trois">
                <div class="trois_un">
                    <div class="trois_un_un">
                        <div class="trouble">
                            <p>Ajouter conger</p>
                        </div>

                    </div>
                    <div class="trois_un_deux">
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
        </div>
      </div>
</body>


</template>

<style scoped>
body {
  
    display: block;


}

.sauce {
    width: 94%;
    height: 100%;
    position: absolute;
}

.un {
    display: flex;
    margin-top: 2vh;
}

.un p {
    margin-left: 3%;
    margin-top: 2px;
}

.un_un {
    display: flex;
    margin-left: 57.6%;
    gap: 2vh;
    margin-top: 1vh;

}

.un_un input {
    width: 25vh;
    height: 4vh;
    border: 2px solid black;
    border-radius: 4px;
}

.un_un button {
    width: 20vh;
    height: 4.5vh;
    border-radius: 4px;
    background-color: rgb(21, 21, 63);
    color: aliceblue;
}

.un_un:active button {
    background-color: aliceblue;
    color: rgb(21, 21, 63);
    border: 2px solid rgb(21, 21, 63);
}


.deux {
    width: 100%;
    height: 80vh;
    margin-top: 1%;
    margin-left: 3%;

}

table thead {
    background-color: rgb(21, 21, 63);
    color: aliceblue;

}

thead td {
    border-radius: 4px;
    padding: 11px;
    width: 20vh;
}

#tresor {
    width: 70vh;
}

tbody td {
    padding: 11px;
    border-collapse: collapse;
    border-bottom: 1px solid black;
    
}

td button {
    padding: 8px;
    width: 18vh;
    height: 4vh;
    color: aliceblue;
    border: none;
    border-radius: 4px;
   
}

#invocation {
    width: 10vh;
    margin-right: 6px;
    background-color: blue;
}

#multitude {
    width: 13vh;
    margin-right: 6px;
    background-color: brown;
}

#sortillege {
    width: 18vh;
    margin-right: 6px;
    
    background-color: blue;
}

#invocation:active {
    background-color: aliceblue;
    color: blue;

}#sortillege:active {
    background-color: aliceblue;
    color: blue;

}
#multitude:active {
    background-color: aliceblue;
    color: brown;

}

.trois {
    width: 230%;
    height: 10vh;
    background-color:transparent;
    color: aliceblue;
    height: 100%;
    position: relative;
    align-items: center;
    justify-content: center;
    display: none;
    transform: translate(-50%, -50%);
}

.trois_un{
    width: 72vh;
    height: 59vh;
    background-color: aliceblue;
    margin-left: 190vh;
    margin-top: 20vh;
    display: block;
}
.trois_un_un
{
    width: 100%;
    height: 7vh;
    margin-top: -16px;
    margin-bottom: 2vh;
    background-color: rgb(21, 21, 63);
    color: aliceblue;
    position: relative;
}
.trouble{
   position: absolute;
   margin-left: 3vh;
}
.trois_un_deux p{
color: black;
margin-bottom: 0px;
margin-left: 2vh;
}
.trois_un_deux input{
    width: 68vh;
    height: 3vh;
    margin-left: 2vh;
}
.trois_un button{
    width: 10vh;
    height: 34px;
    background-color: blue;
    color: aliceblue;
    border-radius: 4px;
    margin-top: 2vh;
    margin-left: 2vh;
    border: 2px solid blue;
    
}
.trois_un:active button{
    background-color: aliceblue;
color: blue;
}
</style>
