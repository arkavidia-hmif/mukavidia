const NativeUI = require('NativeUI')
const Textures = require('Textures'); 
const Patches = require('Patches'); 

const texture1 = Textures.get('option-a'); 
const texture2 = Textures.get('option-b'); 
const texture3 = Textures.get('option-c'); 
const texture4 = Textures.get('option-d'); 
const texture5 = Textures.get('option-e'); 

const picker = NativeUI.picker; 

const index = 0; 

const configuration = { 
  selectedIndex: index, 
  items: [ 
    {image_texture: texture1}, 
    {image_texture: texture2}, 
    {image_texture: texture3}, 
    {image_texture: texture4}, 
    {image_texture: texture5}
  ]
};

picker.configure(configuration);
picker.visible = true;

picker.selectedIndex.monitor().subscribe(function(index) {
    Patches.setScalarValue('PickerIndex', index.newValue);
}); 