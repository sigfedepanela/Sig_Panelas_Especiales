var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_LimiteDepartamental_1 = new ol.format.GeoJSON();
var features_LimiteDepartamental_1 = format_LimiteDepartamental_1.readFeatures(json_LimiteDepartamental_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_LimiteDepartamental_1.addFeatures(features_LimiteDepartamental_1);var lyr_LimiteDepartamental_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_1, 
                style: style_LimiteDepartamental_1,
                title: '<img src="styles/legend/LimiteDepartamental_1.png" /> Limite Departamental'
            });var format_PreciosPanelasEspeciales_2 = new ol.format.GeoJSON();
var features_PreciosPanelasEspeciales_2 = format_PreciosPanelasEspeciales_2.readFeatures(json_PreciosPanelasEspeciales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PreciosPanelasEspeciales_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_PreciosPanelasEspeciales_2.addFeatures(features_PreciosPanelasEspeciales_2);var lyr_PreciosPanelasEspeciales_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PreciosPanelasEspeciales_2, 
                style: style_PreciosPanelasEspeciales_2,
    title: 'Precios Panelas Especiales<br />\
    <img src="styles/legend/PreciosPanelasEspeciales_2_0.png" />  0 - 427 <br />\
    <img src="styles/legend/PreciosPanelasEspeciales_2_1.png" />  427 - 853 <br />\
    <img src="styles/legend/PreciosPanelasEspeciales_2_2.png" />  853 - 1280 <br />\
    <img src="styles/legend/PreciosPanelasEspeciales_2_3.png" />  1280 - 1706 <br />\
    <img src="styles/legend/PreciosPanelasEspeciales_2_4.png" />  1706 - 2133 <br />'
        });var format_MunicipiosTomadePrecios_3 = new ol.format.GeoJSON();
var features_MunicipiosTomadePrecios_3 = format_MunicipiosTomadePrecios_3.readFeatures(json_MunicipiosTomadePrecios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosTomadePrecios_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_MunicipiosTomadePrecios_3.addFeatures(features_MunicipiosTomadePrecios_3);var lyr_MunicipiosTomadePrecios_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosTomadePrecios_3, 
                style: style_MunicipiosTomadePrecios_3,
                title: '<img src="styles/legend/MunicipiosTomadePrecios_3.png" /> Municipios Toma de Precios'
            });var format_PreciosTerceraSemanadeAbrilde2019_4 = new ol.format.GeoJSON();
var features_PreciosTerceraSemanadeAbrilde2019_4 = format_PreciosTerceraSemanadeAbrilde2019_4.readFeatures(json_PreciosTerceraSemanadeAbrilde2019_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PreciosTerceraSemanadeAbrilde2019_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_PreciosTerceraSemanadeAbrilde2019_4.addFeatures(features_PreciosTerceraSemanadeAbrilde2019_4);var lyr_PreciosTerceraSemanadeAbrilde2019_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PreciosTerceraSemanadeAbrilde2019_4, 
                style: style_PreciosTerceraSemanadeAbrilde2019_4,
                title: '<img src="styles/legend/PreciosTerceraSemanadeAbrilde2019_4.png" /> Precios Tercera Semana de Abril de 2019'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_LimiteDepartamental_1.setVisible(true);lyr_PreciosPanelasEspeciales_2.setVisible(true);lyr_MunicipiosTomadePrecios_3.setVisible(true);lyr_PreciosTerceraSemanadeAbrilde2019_4.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_LimiteDepartamental_1,lyr_PreciosPanelasEspeciales_2,lyr_MunicipiosTomadePrecios_3,lyr_PreciosTerceraSemanadeAbrilde2019_4];
lyr_LimiteDepartamental_1.set('fieldAliases', {'DEPT': 'DEPT', });
lyr_PreciosPanelasEspeciales_2.set('fieldAliases', {'Departamen': 'Departamen', 'Año': 'Año', 'MES': 'MES', 'SEMANA': 'SEMANA', '$ por Kg': '$ por Kg', '$ Prom Añ': '$ Prom Añ', 'Prom_ Pais': 'Prom_ Pais', 'PANELA': 'PANELA', });
lyr_MunicipiosTomadePrecios_3.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', });
lyr_PreciosTerceraSemanadeAbrilde2019_4.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', });
lyr_LimiteDepartamental_1.set('fieldImages', {'DEPT': 'TextEdit', });
lyr_PreciosPanelasEspeciales_2.set('fieldImages', {'Departamen': 'TextEdit', 'Año': 'TextEdit', 'MES': 'TextEdit', 'SEMANA': 'TextEdit', '$ por Kg': 'TextEdit', '$ Prom Añ': 'TextEdit', 'Prom_ Pais': 'TextEdit', 'PANELA': 'TextEdit', });
lyr_MunicipiosTomadePrecios_3.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', });
lyr_PreciosTerceraSemanadeAbrilde2019_4.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', });
lyr_LimiteDepartamental_1.set('fieldLabels', {'DEPT': 'inline label', });
lyr_PreciosPanelasEspeciales_2.set('fieldLabels', {'Departamen': 'inline label', 'Año': 'inline label', 'MES': 'inline label', 'SEMANA': 'inline label', '$ por Kg': 'inline label', '$ Prom Añ': 'inline label', 'Prom_ Pais': 'inline label', 'PANELA': 'inline label', });
lyr_MunicipiosTomadePrecios_3.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', });
lyr_PreciosTerceraSemanadeAbrilde2019_4.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', });
lyr_PreciosTerceraSemanadeAbrilde2019_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});