<template>
	<c-flex p="30px">
		<c-box w="50%" maxH="270px">
			<c-text fontSize="1.3em">Masukan Nama</c-text>
			<c-textarea h="40vh" v-model="anggota" placeholder="Masukan nama seluruh siswa" />
			<c-text>{{jadiArray}}</c-text>
			<c-text>{{arrayAnggota}}</c-text>
		</c-box >
		<c-flex direction="column" alignItems="flex-end" w="50%" >
			<c-image  :src=img alt="kerjasama"/>
			<c-stack :spacing="5" p="1em" is-inline align="flex-end" class="control">
				<c-form-control>
					<c-form-label for="kelompok">Jumlah Kelompok</c-form-label>
					<c-input type="Number" v-model="jumlahAnggota"  id="kelompok"  />
				</c-form-control>
				<c-button px="3em" variant-color="green" @click="buatKelompok()">Buat Kelompok</c-button>
			</c-stack>
			
		</c-flex>
	</c-flex>
</template>


<script>
import { CText, CTextarea, CFlex, CBox, CInput, CButton, CStack, CFormControl,  CFormLabel, CImage  } from '@chakra-ui/vue'
import img from '../assets/kerjasama.svg'
export default{
	name: 'Form',
	components:{CTextarea, CText, CFlex, CBox, CInput, CButton, CStack, CFormControl,  CFormLabel,  CImage},
	data(){
		return{
			anggota:'',
			arrayAnggota:[],
			jumlahAnggota:'',
			img: img
		}
	},
	computed:{
		jadiArray(){
			const newArray = this.anggota.split(',')
			for (let i = newArray.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
			}
			return newArray
		},
	},
	methods:{
		buatKelompok(){
			let result = this.arrayAnggota
			let jumlahKel = parseInt(this.jumlahAnggota)
			for (let i = 0; i < this.jadiArray.length; i += jumlahKel) {
				let chunk = this.jadiArray.slice(i, i + jumlahKel)
				result.push(chunk)
			}
			return result
		}
	}
};
</script>


<style scoped>
	.control{
		align-self: self-start;
	}
</style>
		