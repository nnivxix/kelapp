<template>
	<c-flex direction="column">
		<c-flex p="30px" :direction="[ 'column', 'row', 'row']">
			<c-box :w="['100%', '50%']" maxH="270px">
				<c-text fontSize="1.3em">Masukan Nama Peserta</c-text>
				<c-textarea h="14em" v-model="anggota"  placeholder="Masukan Nama Seluruh Peserta" />
				<c-text :fontSize="['0.7em', '0.9em']" color="gray.500">Masukan nama kemudian pisahkan dengan koma (,) misal: "Koko Kurniawan, Robertos Carlos"</c-text>
				<!-- <c-text>{{students}}</c-text> -->
				<!-- <c-text>this.$store.</c-text> -->
			</c-box >
			<c-flex direction="column" :alignItems="['center','flex-end']" :width="['100%','50%']" >
				<c-image :display="['none','block']"  :src=img alt="kerjasama"/>
				<c-flex :flexDirection="['column', 'row']" :alignItems="['center','flex-end']" p="1em"   >
					<c-form-control class="form-control" px="10px" :paddingTop="['1em', '0em']">
						<c-form-label fontWeight="bold" textAlign="['center', 'left']" for="kelompok">Jumlah Kelompok</c-form-label>
						<c-input type="Number" :my="['0.8em','0']"  id="kelompok" v-model="amount" v-on:keyup.enter="createGroup" />
					</c-form-control>
					<c-button px="3em" variant-color="green" @click="createGroup()" >Buat Kelompok</c-button>
				</c-flex>
			</c-flex>
		</c-flex>

		<!-- result-->

	</c-flex>
</template>


<script>
import { CText, CTextarea, CFlex, CBox, CInput, CButton, CFormControl,  CFormLabel, CImage,   } from '@chakra-ui/vue'
import img from '../assets/kerjasama.svg'
export default{
	name: 'Form',
	components:{CTextarea, CText, CFlex, CBox, CInput, CButton,  CFormControl,  CFormLabel,  CImage, },
	data(){
		return {
			img: img,
			amount: '',
		}
	},
	computed:{
		anggota: {
			get(){
				return this.$store.state.students
			},
			set(newVal){
				this.$store.commit('updateStudent', newVal)
			}
		},
		students(){
			return this.$store.getters.createArray
		}
	},
	methods:{
		createGroup(){
			let result = this.$store.state.groups
			let amount_group = parseInt(this.amount)
			const perGroup = Math.ceil(this.students.length / amount_group);
			new Array(amount_group)
			.fill('')
			.map((_, i) => {
				return result.push(this.students.slice(i * perGroup, (i + 1) * perGroup))
				
			});
		}
		// createGroup(){
		// 	let result = this.$store.state.groups
		// 	let amount_groups = parseInt(this.amount)
		// 	for (let i = 0; i < this.students.length; i += amount_groups) {
		// 		let chunk = this.students.slice(i, i + amount_groups)
		// 		result.push(chunk)
		// 	}
		// 	return result
		// }
	},
	mounted(){
	
	}
};
</script>


<style scoped>
	.control{
		align-self: self-start;
	}
	.form-control{
		margin-bottom: 0;
	}

</style>
		