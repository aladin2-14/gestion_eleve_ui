<script>
export default {
    data() {
        return {
            username: "",
            password: "",

        }
    },
    methods: {
        login() {
            let data = {
                "username": this.username,
                "password": this.password
            }
            this.$store.state.user = data
        }
    }
};
</script>

<template>
    <body>
        <div class="un">
            <h1>GESTION <br>ETUDIANT</h1>
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
    margin-top: 15px;
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


}</style>