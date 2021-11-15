Vue.component('user-profile', {
    props: {
        name: {
            type: String,
            default: 'user'
        },
        age: {
            type: [Number, String]
        },
    },
    template: '<span>{{name}} - {{age}}</span>'
});

var app = new Vue({
    el: "#app",
    data: {
        name: 'Patricia',
        age: 26
    }
});