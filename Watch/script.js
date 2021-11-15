var app = new Vue({
    el: "#app",
    data: {
        name: '',
        emailAddress: ''
    },
    methods: {
        fillEmailAddress() {
            this.emailAddress = this.name + '@teste.com.br';
        }
    },
    watch: {
        name() {
            this.fillEmailAddress();
        }
    }
});