$(function () {

    let vm = new Vue({
        el: '#app',
        data: {
            ppt: 60.50,
            attendees: [
                { name: '', email: '' }
            ]
        },
        methods: {
            removeAttendee(attendee) {
                let index = this.attendees.indexOf(attendee)
                this.attendees.splice(index, 1)
            },
            addAttendee() {
                this.attendees.push({
                    name: '', email: ''
                })
            }
        },
        computed: {
            quantity() {
                return this.attendees.length
            },
            total() {
                return this.ppt * this.quantity
            }
        },
        filters: {
            currency(floatVar) {
                return `$${floatVar.tofixed(2)}`
            }
        }
    });
});