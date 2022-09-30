import React,{useState}  from'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
		const [alcool,setAlcool]  = useState("2.19");
		const [gaso, setGaso]     = useState("3.35");
		const [resultado,setResultado] = useState("");
	
		function dividir(){
		let r = parseFloat(alcool) / parseFloat(gaso);
			
			
			if(r >= 0.7){
				setResultado('gasolina' +r.toFixed(2)) 
			}else {
				setResultado('alcool' +r.toFixed(2))
			}		
	}
	
  return (
    <View style={styles.container}>
     <View style={styles.bloco}>
	 <Text style={styles.titulo}>gasolinha</Text>	  
		  </View>
		  <View style={styles.bloco}>
		  <Text> gasolinha:</Text>
		  <TextInput
			  style={styles.Input}
			  onChangeText={(valor)=>setGaso(valor)}
			  value={gaso}
			  KeyboardType="numeric"
			  />
		  </View>
		   <View style={styles.bloco}>
	 <Text style={styles.titulo}>alcool</Text>	  
		  </View>
		  <View style={styles.bloco}>
		  <Text> alcool:</Text>
		  <TextInput
			  style={styles.Input}
			  onChangeText={(valor)=>setAlcool(valor)}
			  value={alcool}
			  KeyboardType="numeric"
			   />
		  </View>
		  
		  
		  <View style={styles.bloco}>
		  <TouchableOpacity
			  style={styles.botao}
			  onPress={dividir}
			  >
			  <Text style={styles.textbotao}>calcular</Text>
			  </TouchableOpacity>
		  </View>
		  
		  <View style={styles.bloco}>
		  <Text style={styles.titulo}>
			 Resultado:{resultado}
			  </Text>
		  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
	
 bloco:{
	  marginTop:20,
	  width:'80%',
	  marginLeft:'10%',
		 color:'#7000000'
  },
  titulo:{
	  fontSize:30,
	  textAlign:'center',
	  backgroundColorColor:'#000000'
  },
  Input:{
	borderWidth:2,
	fontSize:20,
	borderRadius:10,
	  cursor: 'pointe',
	  backgroundColor:'#fff',
	  borderRadius:10,
	  fontfamily: 'cursive'
  },
  botao:{
	  backgroundColor:'#696969',
	  borderRadius:10,
	  fontSize:20,
	  fontfamily: 'cursive'
	  
  },
  textoBotao:{
	  color:'#696969',
	  textAlign:'center',
	  fontSize:20,
  }		
});
