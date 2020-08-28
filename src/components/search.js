import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import axios from "axios";

const Search = (props) => {
  const searchProduct = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${modele}&search_simple=1&action=process&json=1`
      )
      .then((data) => {
        console.log(data);
      });
  };
  const [modele, setModel] = useState("");
  return (
    <View>
      <TextInput
        style={styles.textinput}
        placeholder="Search Product"
        value={modele}
        onChangeText={(e) => {
          setModel(e);
          props.searchProduct(e);
        }}
      />
    </View>
  );
};

/*const url = 'https://world.openfoodfacts.org/cgi/search.pl?search_terms='+data+'&search_simple=1&action=process&json=1';



        fetch(url)
          .then((response) => response.json())
          .then((json) => {

            navigation.navigate('Product',
            {
              item: json.products
            })

          })
          .catch((error) => {
            console.error(error);
          });

*/

const styles = StyleSheet.create({
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5,
  },
});

export default Search;
