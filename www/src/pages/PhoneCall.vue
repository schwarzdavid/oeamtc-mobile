<template>
	<v-layout align-center justify-center fill-height>

		<v-btn fab color="warning" fixed top right @click="goBack()">
			<v-icon>mdi-close</v-icon>
		</v-btn>

		<!-- BEFORE CALL -->
		<div v-if="!callFinished">
			<span class="sectionCaption d-block pb-1 text-xs-center">Tel. Nummer Anrufen</span>
			<h1 class="display-2 mb-4">{{tel}}</h1>
			<v-btn @click="doCall()" class="mx-auto" block color="success" large>Anrufen</v-btn>
		</div>
		<!-- / BEFORE CALL -->

		<!-- AFTER CALL -->
		<div v-if="callFinished">
			<v-btn @click="goBack()" block large color="success">Anruf erfolgreich</v-btn>
			<v-btn @click="goBack()" block large color="primary" style="color: rgba(0,0,0,.87)" class="my-3">Nicht abgehoben</v-btn>
			<v-btn @click="goBack()" block large color="error">Nummer ungültig</v-btn>
		</div>
		<!-- / AFTER CALL -->

		<v-snackbar v-model="callError" bottom right>
			<span>Anruf kann nicht gestartet werden</span>
			<v-btn color="primary" flat @click="callError = false">Schließen</v-btn>
		</v-snackbar>
	</v-layout>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {
                tel: '',
                callFinished: false,
                callError: false
            };
        },

        created() {
            this.tel = this.$route.query.tel;
        },

        methods: {
            doCall() {
                this.callInProgress = true;

                return window.plugins.CallNumber.callNumber(() => {
                    this.callFinished = true;
                }, result => {
                    console.log('ERROR', result);

                    this.callError = true;
                    this.callFinished = true;
                }, this.tel);
            },

	        goBack(){
                this.$router.go(-1);
	        }
        }
    });
</script>

<style lang="scss" scoped>
	.sectionCaption {
		text-transform: uppercase;
		opacity: .7;
		font-size: .95rem;
		font-style: italic;
	}
</style>