/*
====================================================================================
Name:
  Get Collection Information
Authos:
  João Siqueira
  Carlos Souza Jr
 
Histórico de modificações:
13/06/2015 - primeira versão
====================================================================================
*/

var year = 2016;
var cloudCover = 100;                   //si usamos el 100% obtendremos toda la información disponible

var t0 = String(year) + '-01-01';
var t1 = String(year) + '-12-31';

var nome_pais = 'VENEZUELA';

var paises = ee.FeatureCollection("ft:1yYzFO6ijr6uROdtdSU4-QVdGBx9EiEqXMaMGmEtA");
var pais = paises.filterMetadata('name', "equals", nome_pais);

Map.centerObject(pais, 4);

var collection = ee.ImageCollection('LC8_L1T_TOA')
                .filterMetadata("CLOUD_COVER", "less_than", cloudCover)
                .filterBounds(pais)
                .filterDate(t0, t1);

var features = collection.getInfo().features;

var pathRowList = [];

for (var i = 0; i < features.length; ++i) {
    var path = features[i].properties.WRS_PATH;
    var row  = features[i].properties.WRS_ROW;
    
    pathRowList.push(path +'_'+ row);
}

/*
 * Get unique values for path/row list 
 */
var unique = function(values){
    var a = [];
    for(var i = 0; i < values.length; i++) {
        for(var j = i+1; j < values.length; j++)
            if (values[i] === values[j]){
                j = ++i;
            }
        a.push(values[i]);
    }
    return a;
};

var pathRows = unique(pathRowList);
/*
 * Star a report in json format
 */
var json = {'n_cenas': pathRows.length};

for (var i = 0; i < pathRows.length; ++i) {
    var split = pathRows[i].split("_");
    
    var subCollection = collection
                        .filterMetadata('WRS_PATH', 'equals', parseInt(split[0]))
                        .filterMetadata('WRS_ROW', 'equals', parseInt(split[1]));
    
    var featuresSub = subCollection.getInfo().features;
    
    var data = [];
    for (var j = 0; j < featuresSub.length; ++j) {
        var date = featuresSub[j].properties.DATE_ACQUIRED;
        var cloudCover = featuresSub[j].properties.CLOUD_COVER;
        var id = featuresSub[j].properties.LANDSAT_SCENE_ID;
        
        data.push(date +', '+ id + ', nuvem: '+ cloudCover +'%');
    }
    
    json[pathRows[i]] = data;
}

print(json);

// Make a feature without geometry and set the properties to the dictionary of means.
var feature = ee.Feature(null, json);

// Wrap the Feature in a FeatureCollection for export.
var featureCollection = ee.FeatureCollection([feature]);

// Export the FeatureCollection.
Export.table(featureCollection, 'Tabela_Info', {fileFormat: 'CSV'});

// var poly = ee.Geometry.Rectangle(120.49, 30.62,122.40,  31.92);
var nome_pais = 
    'VENEZUELA';

// Fusion table America do Sul
var paises = ee.FeatureCollection('ft:1yYzFO6ijr6uROdtdSU4-QVdGBx9EiEqXMaMGmEtA');

var pais = paises.filterMetadata('name', 'equals', nome_pais);
var collection = ee.ImageCollection('LANDSAT/LC8_L1T_TOA') 
    .filterBounds(pais)
    .filterDate('2015-01-01','2015-12-31')
    .filterMetadata('CLOUD_COVER', 'less_than', 100.0)
    .select(0);
    
// Centralizar
Map.centerObject(pais,5);

addToMap(collection.reduce('count'), {min:2, max:23,'palette':'FFB6C1,DC143C,DC143C,FF0000','opacity': 0.7 },"Numero de imagenes disponibles");
print(paises)
/*
 *
 */
 
 //Los resultados se pueden guardar en un archivo csv yendo a la pestaña Tasks y haciendo click en Run al lado de la tabla.
 //Los resultados pueden ser exportados a Drive, y luego hay que transponerlos