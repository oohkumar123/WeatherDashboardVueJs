export const myMixins = {
    data () {
        return {
            test:'kumar'
        }
    },
    methods: {
        logMessage() {
            console.log("hello");
        },

        getTimeConverter(UNIX_timestamp) {
            let a = new Date(UNIX_timestamp);
            let hour = a.getHours();
            let min = a.getMinutes();
            let time = hour + "." + min;
            return time;
        },
        formatTime(formattedSunrise) {
            var date = new Date((formattedSunrise) * 1000);
            var options = {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            };
            return date.toLocaleString('en-US', options);
        }

    },
};
