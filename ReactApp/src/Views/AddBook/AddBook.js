import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, Image, StyleSheet } from 'react-native';

const categories = ['Drama', 'Ciencia Ficción', 'Comedia', 'Historia', 'Romance', 'Otros'];

const AddBook = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [isDigital, setIsDigital] = useState(false);
  const [isRead, setIsRead] = useState(false);
  const [coverImage, setCoverImage] = useState(null);

  const handleAuthorChange = (value) => {
    setAuthor(value);
  };

  const handleTitleChange = (value) => {
    setTitle(value);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  const handleDigitalChange = () => {
    setIsDigital((prevValue) => !prevValue);
  };

  const handleReadChange = () => {
    setIsRead((prevValue) => !prevValue);
  };

  const handleCoverImageSelect = () => {
    // Implementar lógica para seleccionar imagen de la galería
  };

  const handleSubmit = () => {
    // Implementar lógica para enviar el formulario
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Autor:</Text>
      <TextInput
        style={styles.input}
        value={author}
        onChangeText={handleAuthorChange}
        placeholder="Escribe el nombre del autor"
      />
      <Text style={styles.label}>Título:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={handleTitleChange}
        placeholder="Escribe el título del libro"
      />
      <Text style={styles.label}>Categoría:</Text>
      <View style={styles.pickerContainer}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.categoryButton, category === cat && styles.categoryButtonActive]}
            onPress={() => handleCategoryChange(cat)}
          >
            <Text style={[styles.categoryButtonText, category === cat && styles.categoryButtonTextActive]}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Formato:</Text>
        <Switch value={isDigital} onValueChange={handleDigitalChange} />
        <Text>{isDigital ? 'Digital' : 'Físico'}</Text>
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Estado:</Text>
        <Switch value={isRead} onValueChange={handleReadChange} />
        <Text>{isRead ? 'Leído' : 'No leído'}</Text>
      </View>
      <TouchableOpacity style={styles.coverImageButton} onPress={handleCoverImageSelect}>
        <Text style={styles.coverImageButtonText}>Seleccionar portada</Text>
      </TouchableOpacity>
      {coverImage && (
        <Image source={{ uri: coverImage }} style={styles.coverImage} />
      )}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Agregar libro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      padding: 8,
      marginBottom: 16,
    },
    pickerContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 16,
    },
    categoryButton: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      padding: 8,
      marginRight: 8,
      marginBottom: 8,
    },
    categoryButtonActive: {
      backgroundColor: '#007AFF',
    },
    categoryButtonText: {
      color: '#333',
    },
    categoryButtonTextActive: {
      color: '#fff',
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    coverImageButton: {
      borderWidth: 1,
      borderColor: '#007AFF',
      borderRadius: 4,
      padding: 8,
      alignItems: 'center',
      marginBottom: 16,
    },
    coverImageButtonText: {
      color: '#007AFF',
    },
    coverImage: {
      width: '100%',
      height: 200,
      resizeMode: 'contain',
      marginBottom: 16,
    },
    submitButton: {
      backgroundColor: '#007AFF',
      borderRadius: 4,
      padding: 16,
      alignItems: 'center',
    },
    submitButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });
  

export default AddBook;
