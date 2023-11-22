import React, { useState } from 'react';
import { View, Text, Picker, CheckBox, TouchableOpacity } from 'react-native';
const categories = ['Ficción', 'No ficción', 'Biografía', 'Historia', 'Ciencia ficción', 'Romance'];
const [digitalChecked, setDigitalChecked] = useState(false);
    const [physicalChecked, setPhysicalChecked] = useState(false);

    const [readChecked, setReadChecked] = useState(false);
        const [unreadChecked, setUnreadChecked] = useState(true);

const BookCategory = () => {
const [selectedCategory, setSelectedCategory] = useState('Ficción');
const onCategoryChange = (itemValue) => {
setSelectedCategory(itemValue);

const onDigitalChange = () => {
    setDigitalChecked(!digitalChecked);
    };
    const onPhysicalChange = () => {
    setPhysicalChecked(!physicalChecked);
    };

    const onReadPress = () => {
        setReadChecked(true);
        setUnreadChecked(false);
        };
        const onUnreadPress = () => {
        setReadChecked(false);
        setUnreadChecked(true);
        };
};           

return (  
<View>

<View>
<Text>Tipo de libro:</Text>
<View style={{ flexDirection: 'row', alignItems: 'center' }}>
<CheckBox value={digitalChecked} onValueChange={onDigitalChange} />
<Text style={{ marginLeft: 8 }}>Digital</Text>
</View>

<View style={{ flexDirection: 'row', alignItems: 'center' }}>
<CheckBox value={physicalChecked} onValueChange={onPhysicalChange} />
<Text style={{ marginLeft: 8 }}>Físico</Text>
</View>
</View>
<View>
<Text>Selecciona una categoría:</Text>
<Picker selectedValue={selectedCategory} onValueChange={onCategoryChange}>
{categories.map((category) => (
<Picker.Item key={category} label={category} value={category} />
))}
</Picker>
</View>

<View>
<Text>Estado del libro:</Text>
<View style={{ flexDirection: 'row' }}>
<TouchableOpacity style={{ marginRight: 16 }} onPress={onReadPress}>
<Text style={{ fontWeight: readChecked ? 'bold' : 'normal' }}>Leído</Text>
</TouchableOpacity>
<TouchableOpacity onPress={onUnreadPress}>
<Text style={{ fontWeight: unreadChecked ? 'bold' : 'normal' }}>No leído</Text>
</TouchableOpacity>
</View>
</View>

</View>
);
};
export default BookCategory;