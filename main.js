let App = Vue.createApp({
    data() {
        return {
            pokemon: [
                {
                    imgNum: Math.floor(Math.random() * 649) + 1,
                    imgURL: "",
                    imgFrontURL: "",
                    imgBackURL: "",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3,
                    startBoolean: true
                },
                {
                    imgNum: Math.floor(Math.random() * 649) + 1,
                    imgURL: "",
                    imgFrontURL: "",
                    imgBackURL: "",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3,
                    startBoolean: true
                },
                {
                    imgNum: Math.floor(Math.random() * 649) + 1,
                    imgURL: "",
                    imgFrontURL: "",
                    imgBackURL: "",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3,
                    startBoolean: true
                },
                {
                    imgNum: Math.floor(Math.random() * 649) + 1,
                    imgURL: "",
                    imgFrontURL: "",
                    imgBackURL: "",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3,
                    startBoolean: true
                },
                {
                    imgNum: Math.floor(Math.random() * 649) + 1,
                    imgURL: "",
                    imgFrontURL: "",
                    imgBackURL: "",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3,
                    startBoolean: true
                },
                {
                    imgNum: Math.floor(Math.random() * 649) + 1,
                    imgURL: "",
                    imgFrontURL: "",
                    imgBackURL: "",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3,
                    startBoolean: true
                },
                {
                    imgNum: Math.floor(Math.random() * 649) + 1,
                    imgURL: "",
                    imgFrontURL: "",
                    imgBackURL: "",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3,
                    startBoolean: true
                },
                {
                    imgNum: Math.floor(Math.random() * 649) + 1,
                    imgURL: "",
                    imgFrontURL: "",
                    imgBackURL: "",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3,
                    startBoolean: true
                },
                {
                    imgNum: Math.floor(Math.random() * 649) + 1,
                    imgURL: "",
                    imgFrontURL: "",
                    imgBackURL: "",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3,
                    startBoolean: true
                },
                {
                    imgNum: Math.floor(Math.random() * 649) + 1,
                    imgURL: "",
                    imgFrontURL: "",
                    imgBackURL: "",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3,
                    startBoolean: true
                },
                {
                    imgNum: Math.floor(Math.random() * 649) + 1,
                    imgURL: "",
                    imgFrontURL: "",
                    imgBackURL: "",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3,
                    startBoolean: true
                },
                {
                    imgNum: Math.floor(Math.random() * 649) + 1,
                    imgURL: "",
                    imgFrontURL: "",
                    imgBackURL: "",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3,
                    startBoolean: true
                },
                {
                    imgNum: Math.floor(Math.random() * 649) + 1,
                    imgURL: "",
                    imgFrontURL: "",
                    imgBackURL: "",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3,
                    startBoolean: true
                },
                {
                    imgNum: Math.floor(Math.random() * 649) + 1,
                    imgURL: "",
                    imgFrontURL: "",
                    imgBackURL: "",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3,
                    startBoolean: true
                },
                {
                    imgNum: Math.floor(Math.random() * 649) + 1,
                    imgURL: "",
                    imgFrontURL: "",
                    imgBackURL: "",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3,
                    startBoolean: true
                },
                {
                    imgNum: Math.floor(Math.random() * 649) + 1,
                    imgURL: "",
                    imgFrontURL: "",
                    imgBackURL: "",
                    state: "front",
                    timesClicked: 0,
                    clickLimit: 3,
                    startBoolean: true
                }    
            ]
        }
    }
  });

App.component("pokemon", {
    props: ["pokemondata"],
    data() {
        return {
            
        }
    },
    computed: {
        randomBackground() {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            return "background-color: rgb(" + r + ", " + g + ", " + b + ", 0.6)";
        },
        startImage() {
            console.log("startImage")
            this.pokemondata.startBoolean = false;

            this.pokemondata.imgURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.pokemondata.imgNum + ".png";
            this.pokemondata.imgFrontURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.pokemondata.imgNum + ".png";
            this.pokemondata.imgBackURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/" + this.pokemondata.imgNum + ".png";
            
            return this.pokemondata.imgURL;
        }
    },
    methods: {
        flip() {
            console.log("flip")
            this.pokemondata.timesClicked++;

            if (this.pokemondata.timesClicked == this.pokemondata.clickLimit + 1) {
                this.pokemondata.timesClicked = 0;

                this.pokemondata.imgNum = Math.floor(Math.random() * 649) + 1;
                this.pokemondata.imgURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.pokemondata.imgNum + ".png";
                this.pokemondata.imgFrontURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.pokemondata.imgNum + ".png";
                this.pokemondata.imgBackURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/" + this.pokemondata.imgNum + ".png";

                this.pokemondata.state = "front";
            }

            else {
                if (this.pokemondata.state == "front") {
                    this.pokemondata.state = "back";
                    this.pokemondata.imgURL = this.pokemondata.imgBackURL;
                }
                else {
                    this.pokemondata.state = "front";
                    this.pokemondata.imgURL = this.pokemondata.imgFrontURL;
                }
            }
        }
    },
    template: `<div class="pokemon_div" :style="randomBackground">
        <img v-if="pokemondata.startBoolean" :src="startImage">
        <img v-else :src="pokemondata.imgURL" @mouseover="flip">
    </div>`
});
  
App.mount("#app");