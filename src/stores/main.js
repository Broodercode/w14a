import { defineStore } from "pinia";
import axios from "axios";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      jokeResponse: undefined,
      jokeData: undefined,
    };
  },
  actions: {
    async getJoke() {
      axios
        .request({
          url: "https://geek-jokes.sameerkumar.website/api?format=json",
          method: "get",
        })
        .then((response) => {
          this.jokeResponse = response;
          this.jokeData = this.jokeResponse.data.joke;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCaps() {
      if (this.jokeData) {
        this.jokeData = this.jokeData.toUpperCase();
      }
    },
    getNormal() {
      if (this.jokeData) {
        this.jokeData = this.jokeResponse.data.joke;
      }
    },
    getSnake() {
      if (this.jokeData) {
        const str = this.jokeData;
        const toSnakeCase = (str = "") => {
          const strArr = str.split(" ");
          const snakeArr = strArr.reduce((acc, val) => {
            return acc.concat(val.toLowerCase());
          }, []);
          return snakeArr.join("_");
        };
        let snakeStr = toSnakeCase(str);
        this.jokeData = snakeStr;
      }
    },
  },
  getters: {
    jokeText: (state) => {
      if (state.jokeResponse) {
        return state.jokeResponse.data.joke;
      }
      return undefined;
    },
  },
});
