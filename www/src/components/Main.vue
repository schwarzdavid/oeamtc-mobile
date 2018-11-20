<template>
	<core>
		<v-snackbar v-model="registerSnack" bottom right>
			<span>Diese Funktion wird derzeit auf mobilen Geräten nicht unterstützt</span>
			<v-btn color="primary" flat @click.prevent="registerSnack = false">Schließen</v-btn>
		</v-snackbar>
	</core>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Core from '../core/Core.vue';
	import {events} from "../core/lib/Utils";

    export default Vue.extend({
		components: {
		    Core
		},

		data(){
		    return {
                registerSnack: false
            };
		},

		created(){
		    events.on('register-open', () => {
		        this.registerSnack = true;
		    });
		}
	});
</script>