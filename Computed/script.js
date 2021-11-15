var app = new Vue({
    el: '#app',
    data: {
        age: 17
    },
    created() {
        this.changeAge(67)
    },
    methods: {
        changeAge(value) {
            this.age = value;
        }
    },
    computed: {
        isUnderAge() {
            return this.age < 18;
        },
        isOld() {
            return this.age > 60;
        }
    }

});