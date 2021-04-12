import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		students:'',
		groups: []
	},
	getters:{
		createArray(state){
			let tobeArr = state.students.split(',')
			for (let i = tobeArr.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[tobeArr[i], tobeArr[j]] = [tobeArr[j], tobeArr[i]];
			}
			//tobeArr.unshift(state.groups)
			return tobeArr
		},
	},
	mutations:{
		updateStudent(state, newVal){
			state.students = newVal
		},
	},
	actions:{

	}
})