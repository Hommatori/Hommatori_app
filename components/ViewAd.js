import {React} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function ViewAd({ad}) {

   // console.log(publisher)

    return (
    
    <View style={styles.container}>
        <Text>kuhan jotain</Text>


     <View style={{alignItems: 'center'}}>
                    <Image 
                    style ={styles.image}
                    source={ ad.image && ad.image != '' ? { uri: ad.image } : null }        
                    /> 
                  </View> 
        <Text style={styles.AdHeaderTextStyle}>{} </Text>

        <View style={styles.descriptionContainer3}>
        <Text style={styles.textStyle}>Nimi</Text>   
        <Text style={styles.textStyle}>Puhelinumero</Text>  
        <Text style={styles.textStyle}>Sähköposti</Text>    
        </View>
        <View style={styles.descriptionContainer3}>
        <Text style={styles.textStyle}>{}</Text>
        <Text style={styles.textStyle}>{} </Text>
        </View>
        <View style={styles.descriptionContainer3}>
        <Text style={styles.textStyle}>{}€</Text>
        <Text style={styles.textStyle}>Hinta {}€</Text>
        </View>
        <View style={styles.descriptionContainer3}>
        <Text>{}</Text>
        </View> 
    </View>
     
      );
  }

  const styles = StyleSheet.create({
    container:{
        flex: 1,
       
    },
    header:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    row:{
        flexDirection: 'row',
        
    },

    text: {
        marginRight: 5,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    text2: {
        marginRight: 5,
        marginBottom: 10,
        fontSize: 20,
    },
  });