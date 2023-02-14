import { createStore } from "vuex";

export default createStore({
    state: {
        direction: "asc",
        name: "Kumar D",
        time: "9.50",
    },
    getters: {
        myName: (state) => {
            return state.name;
        },
        getSortDirection: (state) => {
            return state.direction;
        },
        getWeatherData: async () => {
            return fetch("https://api.openweathermap.org/data/3.0/onecall?lat=37.9060&lon=-122.5450&units=imperial&exclude=minutely&appid=8362d7576fff036a08554d81480c7689")
            .then((response) => {response.json(); console.info('%cresponse.json(): %o', 'color: red;font-size:12px', response.json());})
        },
        getTimeConverter: (state) => {
            return state.time;
        }
    },
    mutations: {
        changeSortDirectionMut: (state) => {
            state.direction = (state.direction==='desc') ? 'asc':'desc';
        },
        timeConverterMut: (state, UNIX_timestamp) => {
            let a = new Date(UNIX_timestamp);
            let hour = a.getHours();
            let min = a.getMinutes();
            let time = hour + '.' + min;
            state.time = time;
        }
    },
    actions: {
        changeSortDirection: (context) => {
            context.commit('changeSortDirectionMut');
        },
        timeConverter: (context, UNIX_timestamp) => {
            context.commit('timeConverterMut', UNIX_timestamp);
        }
    },
    modules: {},
});
