import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

import styles from './styles';


function Item({ item }) {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("InfoProduct")}
    >
      <Image style={styles.picture} source={{ uri: item.picture }} />
      <View style={styles.title}>
        <Text style={styles.item_title}>
        {item.name}
        </Text>
        <Text style={styles.item_price}>
          R$ {item.price.toFixed(2)}
        </Text>
          <Text style={styles.item_subdivision}>
            Parcelado em 12 x 
            <Text style={styles.item_subdivision_detach}>
            R${(item.price / 12).toFixed(2)}
            </Text>
          </Text>
        <Text>
          {item.condition}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default function List() {
  const listProduct = [
    {
      id: '2',
      name: 'Macbook',
      price: 12098.27,
      condition: 'Novo',
      picture: "https://www.casasbahia-imagens.com.br/Informatica/Notebook/55006647/1312426042/macbook-air-apple-core-i5-8gb-512gb-ssd-tela-retina-13-3-macos-mvh22bz-a-cinza-espacial-55006647.jpg"
    },
    {
      id: '1',
      name: 'TV LG 4K 50"',
      price: 2099.00,
      condition: 'Novo',
      picture: "https://www.casasbahia-imagens.com.br/tv-video/Televisores/TV4K/55000477/1212970868/smart-tv-led-50-4k-tcl-50p8m-com-android-tv-controle-remoto-comando-de-voz-hdr-micro-dimming-google-assistant-bluetooth-hdmi-e-usb-55000477.jpg"
    },
    {
      id: '3',
      name: 'TV Samsung 4K 65"',
      price: 4399.99,
      condition: 'Novo',
      picture: "https://www.casasbahia-imagens.com.br/tv-video/Televisores/TV4K/15341367/1116699112/smart-tv-led-65-uhd-4k-samsung-65ru7100-com-controle-remoto-unico-visual-livre-de-cabos-bluetooth-hdr-premium-hdmi-e-usb-15341367.jpg://www.https://a-static.mlcdn.com.br/618x463/iphone-11-apple-preto-64gb-desbloqueado-mwlt2br-a/lojaiplace/212670/1a5b409881d3c0af1aa752d521045137.jpg-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1175175679://www.casasbahia-imagens.com.br/Informatica/Notebook/55006647/1312426042/macbook-air-apple-core-i5-8gb-512gb-ssd-tela-retina-13-3-macos-mvh22bz-a-cinza-espacial-55006647.jpg"
    },
    {
      id: '4',
      name: 'TV Sony 4K 55"',
      price: 3899.90,
      condition: 'Novo',
      picture: "https://www.casasbahia-imagens.com.br/tv-video/Televisores/TV4K/11799818/862777372/smart-tv-led-55-hdr-ultra-hd-4k-sony-kd-55x705e-br6-com-youtube-integrado-hdmi-e-usb-11799818.jpg"
    }
  ]

  return (
    <>
      <Text style={styles.text_results}>
        Produtos encontrados: {listProduct.length}
      </Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={listProduct}
          renderItem={({ item }) => (
            <Item
            item={item}
            />
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </>
  );
}