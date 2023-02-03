import { createStore } from "vuex";

export default createStore({
    state: {
        direction: "asc",
        name: "Kumar D",
    },
    getters: {
        myName: (state) => {
            return state.name;
        },
        getSortDirection: (state) => {
            return state.direction;
        },
        getWeatherData: () => {
            return fetch("https://api.openweathermap.org/data/3.0/onecall?lat=37.9060&lon=122.5450&appid=8362d7576fff036a08554d81480c7689")
            .then((response) => response.json())
        },
    },
    mutations: {
        changeSortDirectionMut: (state) => {
            state.direction = (state.direction==='desc') ? 'asc':'desc';
        }
    },
    actions: {
        changeSortDirection: (context) => {
            context.commit('changeSortDirectionMut');
        }
    },
    modules: {},
});
