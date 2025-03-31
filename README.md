# SelectInput

**SelectInput** est un composant React réutilisable pour les menus déroulants, offrant une gestion facile des options et une personnalisation via des styles CSS.

#####  Installation

Installez la bibliothèque avec npm :
 npm install my-input-select-library@1.0.4

Ou avec Yarn :
yarn add my-input-select-library@1.0.4

#### Utilisation
import React, { useState } from 'react';
import SelectInput from '@votre-nom/select-input';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];

const MyComponent = () => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <SelectInput
      label="Choisissez une option"
      name="mySelect"
      value={selectedValue}
      options={options}
      onChange={(e) => setSelectedValue(e.target.value)}
      isRequired={true}
      className="custom-select-container"
    />
  );
};

export default MyComponent;


###### Styles

Le fichier CSS inclus permet une personnalisation facile grâce à la classe `.custom-select-container`. Vous pouvez l’écraser dans votre propre feuille de styles.

### Exemple de style personnalisé :

```css
.custom-select-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 15px;
}

.custom-select-container label {
    font-size: 14px;
    font-weight: bold;
    color: #333;
    text-align: left;
}

.custom-select-container select {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    color: #333;
    cursor: pointer;
    transition: all 0.3s ease;
}

.custom-select-container select:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
}
```

## Licence

Ce projet est sous licence **MIT**.

---

 **N'hésitez pas à contribuer et à proposer des améliorations !**
