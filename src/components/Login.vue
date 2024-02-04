<script>
import ListEleve from "../views/ListEleve.vue"
import ListeEmployes from "../views/ListeEmployes.vue"
export default {
    data() {
        return {
            username: "",
            password: "",
            page:"listeleve",
        }
    
    },
    components:{
        ListeEmployes,
        ListEleve,
    },
    methods: {
        login() {
            let data = {
                "username": this.username,
                "password": this.password
            }
            if(this.username.trim()!="" || this.password.trim()!="")
                this.$store.state.user = data
            else
                alert("veille remplir")
             
           
            console.log(this.$store.state.user)
        },
        pagesecletif(){
            this.$router.app.$emit('selectionnairedepage', this.page)
        }
    }
};
</script>

<template>
    <body>
        <div class="un">
            <h1>GESTIONNAIRE <br>DE <br>BUREAU</h1>
        </div>
        <div class="deux">
            <div class="deux_un">
                <h1>Se Connecter</h1>
                <div class="deux_deux">
                    <p>Nom D'utilisateur</p>
                    <input type="text" placeholder="tech" v-model="username">
                </div>
                <div class="deux_trois">
                    <p>Mot De passe</p>
                    <input type="password" v-model="password">
                    <select id="choix" name="choix" v-model="page" @change="pagesecletif">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <!-- Ajoutez autant d'options que nécessaire -->
    </select>
                </div>
               
                <button @click="login">connexion</button>
            </div>
        </div>
    </body>
</template>

<style scoped>
body {
    width: 100vw;
    display: flex;

}

.un {
    width: 20vw;
    height: 100vh;
    background-color: rgb(7, 7, 57);
    display: flex;

    align-items: center;
}

.un h1 {
    color: aliceblue;
}

.deux {
    width: 80%;
    height: 100vh;
    background-color: rgb(222, 239, 255);
    display: flex;
    align-items: center;
    justify-content: center;
}

.deux_un {
    width: 40%;
    height: 50%;
    background-color: white;
    box-shadow: 0px 0px 5px rgb(72, 72, 72);

}

.deux_un h1 {
    color: rgb(7, 7, 57);
    margin-left: 5vh;
}

.deux_deux {
    margin-left: 5vh;
    margin-top: 2vh;

}

.deux_deux p {
    margin-bottom: 5px;
}

.deux_deux input {
    width: 40vh;
    height: 30px;
    border: 2px solid rgb(222, 239, 255);
    border-radius: 5px 5px;

}

.deux_trois h1 {
    color: rgb(7, 7, 57);
    margin-left: 5vh;
}

.deux_trois {
    margin-left: 5vh;
    margin-top: 2vh;

}

.deux_trois p {
    margin-bottom: 5px;
}

.deux_trois input {
    width: 40vh;
    height: 30px;
    border: 2px solid rgb(222, 239, 255);
    border-radius: 5px 5px;

}

.deux_un button {
    padding: 8px;
    width: 15vh;
    margin-top: 40px;
    margin-left: 5vh;
    background-color: rgb(9, 31, 228);
    color: aliceblue;
    border-radius: 4px;
    border-color: transparent;
}

button:active {
    background-color: transparent;
    color: rgb(9, 31, 228);
    border-color: rgb(9, 31, 228);
}

input:hover {
    background-color: rgb(222, 239, 255);
    border: 2px solid rgb(9, 31, 228);
}

input:focus {
    background-color: rgb(222, 239, 255);
    border: 2px solid rgb(224, 9, 228);


}
#choix{
    width: 40vh;
    height: 30px;
    border: 2px solid rgb(222, 239, 255);
    border-radius: 5px 5px;
    margin-top: 2vh;

}
</style>