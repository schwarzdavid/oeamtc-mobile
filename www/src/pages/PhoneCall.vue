<template>
	<div>
		<h1>{{tel}}</h1>
		<v-btn @click="doCall()" :disabled="callInProgress">Anrufen</v-btn>

		<v-snackbar v-model="callError" bottom right>
			<span>Anruf kann nicht gestartet werden</span>
			<v-btn color="primary" flat @click="callError = false">Schließen</v-btn>
		</v-snackbar>
	</div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {
                tel: '',
                callInProgress: false,
                callError: false
            };
        },

        created() {
            this.tel = this.$route.query.tel;
        },

        methods: {
            doCall() {
                this.callInProgress = true;

                return window.plugins.CallNumber.callNumber(result => {
                    // TODO: success
                    console.log('SUCCESS', result);
                }, result => {
                    // TODO: failure
                    console.log('ERROR', result);

                    this.callError = true;
                    this.callInProgress = false;
                }, this.tel);
            }
        }
    });
</script>