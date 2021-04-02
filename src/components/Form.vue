<template>
	<c-flex direction="column">
		<c-flex p="30px" :direction="[ 'column', 'row', 'row']">
			<c-box :w="['100%', '50%']" maxH="270px">
				<c-text fontSize="1.3em">Masukan Nama</c-text>
				<c-textarea h="40vh" v-model="anggota" placeholder="Masukan nama seluruh siswa" />
				<c-text :fontSize="['0.7em', '0.9em']" color="gray.500">Masukan nama kemudian pisahkan dengan koma (,) misal: "Koko, Robert"</c-text>
			</c-box >
			<c-flex direction="column" alignItems="flex-end" w="50%" >
				<c-image :display="['none','block']"  :src=img alt="kerjasama"/>
				<c-stack :spacing="5" p="1em"  align="flex-end" class="control">
					<c-form-control :paddingTop="['1em', '0em']">
						<c-form-label for="kelompok">Jumlah Kelompok</c-form-label>
						<c-input type="Number" v-model="jumlahKelompok"  id="kelompok" keyup="buatKelompok()" />
					</c-form-control>
					<c-button px="3em" variant-color="green" @click="buatKelompok()">Buat Kelompok</c-button>
				</c-stack>
			</c-flex>
		</c-flex>

		<!-- result-->
		<c-box>
			<c-text fontSize="1.5em" fontWeight="700" textAlign="center">Kelompok Belajar</c-text>
			<c-flex flexWrap="wrap" justifyContent="center">
				<c-box p="3" v-for="(data, index) in arrayAnggota " :key="index">
					<c-text fontSize="1em" fontWeight="bold">Kelompok {{ index + 1}}</c-text>
					<c-box v-for="(d, index) in data" :key="index">
						<c-text>{{d}}</c-text>
					</c-box>			
				</c-box>
			</c-flex>
		</c-box>
	</c-flex>
</template>


<script>
import { CText, CTextarea, CFlex, CBox, CInput, CButton, CStack, CFormControl,  CFormLabel, CImage,   } from '@chakra-ui/vue'
import img from '../assets/kerjasama.svg'
export default{
	name: 'Form',
	components:{CTextarea, CText, CFlex, CBox, CInput, CButton, CStack, CFormControl,  CFormLabel,  CImage, },
	data(){
		return{
			anggota:'',
			arrayAnggota:[],
			jumlahKelompok:'',
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
		