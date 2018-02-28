var agua = /* color: #0b4a8b */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-62.896728515625, 6.507209729872998],
                  [-62.889862060546875, 6.509597500724239],
                  [-62.89243698120117, 6.5128380287173835]]]),
            {
              "system:index": "agua"
            })]),
    bosque = /* color: #ffc82d */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-62.8692626953125, 6.511644152416812],
                  [-62.865142822265625, 6.512155814036203],
                  [-62.86754608154297, 6.515907983305362]]]),
            {
              "system:index": "bosque"
            })]);

//============================================================================
var params = {
    'gridName': 'NB-20-X-C',
    'pais': 'VENEZUELA',
    'sensor': 'LX',
    'cloudcover': 100,
    't0': '2008-01-01',
    't1': '2008-12-31',
    'geometry': null
};
//============================================================================
//
var options = {
    'L5': {
        'sr': {
            'id': 'LT5_L1T_SR',
            'bandNames': ['B1', 'B2', 'B3', 'B4', 'B5', 'B7'],
            'newNames': ['blue', 'green', 'red', 'nir', 'swir1', 'swir2'],
        },
        'toa': {
            'id': 'LANDSAT/LT5_L1T_TOA_FMASK',
            'bandNames': ['B6', 'fmask'],
            'newNames': ['thermal', 'fmask'],
        }
    },
    'L7': {
        'sr': {
            'id': 'LE7_L1T_SR',
            'bandNames': ['B1', 'B2', 'B3', 'B4', 'B5', 'B7'],
            'newNames': ['blue', 'green', 'red', 'nir', 'swir1', 'swir2'],
        },
        'toa': {
            'id': 'LANDSAT/LE7_L1T_TOA_FMASK',
            'bandNames': ['B6_VCID_1', 'fmask'],
            'newNames': ['thermal', 'fmask'],
        }
    },
    'L8': {
        'sr': {
            'id': 'LC8_SR',
            'bandNames': ['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B10'],
            'newNames': ['blue', 'green', 'red', 'nir', 'swir1', 'swir2', 'thermal'],
        },
        'toa': {
            'id': 'LANDSAT/LC8_L1T_TOA_FMASK',
            'bandNames': ['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B10', 'fmask'],
            'newNames': ['blue', 'green', 'red', 'nir', 'swir1', 'swir2', 'thermal',
                    'fmask'
                ],
        }
    },
};

var joined2imgCol = function(feature) {

    var primary = feature.get('primary');
    var secondary = feature.get('secondary');
    var image = ee.Image.cat(primary, secondary);

    return ee.Image(image);
};

var joinCollections = function(collection1, collection2) {

    // Faz o join entre as duas coleções
    var filterTimeEq = ee.Filter.equals({
        "leftField": 'system:index',
        "rightField": 'system:index'
    });

    // Aplica o join e retorna uma FeatureCollection.
    var joinedCollection = ee.Join.inner().apply(
        collection1, collection2, filterTimeEq);

    // Converte joinedCollection para imageCollection
    var imageCollection = ee.ImageCollection(
        joinedCollection.map(joined2imgCol));

    return imageCollection;
};

var imageCollection = function(collectionID, params) {

    var collection = ee.ImageCollection(collectionID)
        .filterMetadata("CLOUD_COVER", "less_than", params.cloudcover)
        .filterDate(params.t0, params.t1)
        .filterBounds(params.geometry);

    return collection;
};

var filterBySensor = function(params) {

    var collection = null;

    switch (params.sensor) {
        case "L5":
            collection = joinCollections(
                imageCollection(options.L5.sr.id, params).select(
                    options.L5.sr.bandNames,
                    options.L5.sr.newNames),
                imageCollection(options.L5.toa.id, params).select(
                    options.L5.toa.bandNames,
                    options.L5.toa.newNames)
            );
            break;
        case "L7":
            collection = joinCollections(
                imageCollection(options.L7.sr.id, params).select(
                    options.L7.sr.bandNames,
                    options.L7.sr.newNames),
                imageCollection(options.L7.toa.id, params).select(
                    options.L7.toa.bandNames,
                    options.L7.toa.newNames)
            );
            break;
        case "LX":
            var L5 = joinCollections(
                imageCollection(options.L5.sr.id, params).select(
                    options.L5.sr.bandNames,
                    options.L5.sr.newNames),
                imageCollection(options.L5.toa.id, params).select(
                    options.L5.toa.bandNames,
                    options.L5.toa.newNames));

            var L7 = joinCollections(
                imageCollection(options.L7.sr.id, params).select(
                    options.L7.sr.bandNames,
                    options.L7.sr.newNames),
                imageCollection(options.L7.toa.id, params).select(
                    options.L7.toa.bandNames,
                    options.L7.toa.newNames));

            collection = ee.ImageCollection(L5.merge(L7)).sort('DATE_ACQUIRED');
            break;
        case "L8":
            collection = imageCollection(options.L8.toa.id, params).select(
                options.L8.toa.bandNames,
                options.L8.toa.newNames);
    }

    return collection;
};

var edgeRemoval = function(image) {

    var edgeSize = -5500.0;

    image = image.clip(
        image.geometry()
        .buffer(edgeSize)
        .simplify(1)
    );

    return image;
};

var applyCoef = function(image) {

    var bands = ['blue', 'green', 'red', 'nir', 'swir1', 'swir2'];

    for (var i = 0; i < bands.length; i++) {
        image = image.addBands({
            "srcImg": image.select([bands[i]]).multiply(10000),
            "names": [bands[i]],
            "overwrite": true
        });
    }

    return image;
};

var getCollection = function(params) {

    var collection = filterBySensor(params)
        .map(edgeRemoval);

    if (params.sensor === "L8") {
        collection = collection.map(applyCoef);
    }

    return collection;
};

var cloudFree = function(image) {

    var cloudMask = image.select('fmask').eq(4);
    var shadeMask = image.select('fmask').eq(2);

    var csm = cloudMask.add(shadeMask).gte(1);

    return image.mask(csm.neq(1));

};

var waterMask = function(image) {

    return image.select('fmask').eq(2).rename('water_mask');
};

var waterAdjust = function(collection) {

    collection = collection.map(waterMask);

    return collection.median()
        .gt(0)
        .multiply(255)
        .byte();
};

/*
 * SMA
 */
var calcFractions = function(image) {

    var endmembers = [
            [119.0, 475.0, 169.0, 6250.0, 2399.0, 675.0], /*gv*/
            [1514.0, 1597.0, 1421.0, 3053.0, 7707.0, 1975.0], /*npv*/
            [1799.0, 2479.0, 3158.0, 5437.0, 7707.0, 6646.0], /*soil*/
            [4031.0, 8714.0, 7900.0, 8989.0, 7002.0, 6607.0] /*cloud*/
        ];

    var bandNames = ['blue', 'green', 'red', 'nir', 'swir1', 'swir2'];
    var outBandNames = ['gv', 'npv', 'soil', 'cloud'];

    // Uminxing data
    var fractions = ee.Image(image)
        .select(bandNames)
        .unmix(endmembers)
        .max(0)
        .multiply(100)
        .byte();

    fractions = fractions.select([0, 1, 2, 3], outBandNames);

    var summed = fractions.select(['gv', 'npv', 'soil'])
        .reduce(ee.Reducer.sum());

    var shd = summed.subtract(100).abs().byte();
    var gvs = fractions.select(["gv"])
        .divide(summed)
        .multiply(100)
        .byte();

    gvs = gvs.rename("gvs");
    shd = shd.rename("shade");

    return fractions.addBands(gvs).addBands(shd);

};

/*
 * Indexes
 */
var NDFI = function(image) {

    var gvs = image.select("gvs");

    var npvSoil = image.select("npv")
        .add(image.select("soil"));

    var ndfi = ee.Image.cat(gvs, npvSoil).normalizedDifference();

    // rescale NDFI from 0 until 200
    ndfi = ndfi.multiply(100).add(100).byte();

    return ndfi.rename("ndfi");
};

var NDVI = function(image) {

    var ndvi = image.expression('float(nir - red)/(nir + red)', {
        'nir': image.select('nir'),
        'red': image.select('red')
    }).multiply(200).byte(); // rescale NDVI from 0-200

    return ndvi.rename("ndvi");

};

var NDWI = function(image) {

    var ndwi = image.expression('float(nir - swir1)/(nir + swir1)', {
        'nir': image.select('nir'),
        'swir1': image.select('swir1')
    }).multiply(200).byte();

    return ndwi.rename("ndwi");

};

var SAVI = function(image) {

    var savi = image.expression('(1 + L) * float(nir - red)/(nir + red + L)', {
        'nir': image.select('nir'),
        'red': image.select('red'),
        'L': 0.9
    }).multiply(100).byte();

    return savi.rename("savi");

};

var EVI2 = function(image) {

    var evi2 = image.expression('(2.5 * float(nir - red)/(nir + 2.4 * red + 1))', {
        'nir': image.select('nir'),
        'red': image.select('red'),
    }).multiply(100).byte();

    // valor da multiplicação por 100 gera valores maiores que 200... vai até uns 210.

    return evi2.rename("evi2");

};

var FCI = function(image) {

    var fci = image.expression('(float(gv - shade)/(gv + shade))', {
        'gv': image.select('gv'),
        'shade': image.select('shade'),
    }).multiply(100).add(100).byte();

    return fci.rename(["fci"]);

};

var NPVSOIL = function(image) {

    var npvsoil = image.expression('npv + soil', {
        'npv': image.select('npv'),
        'soil': image.select('soil'),
    }).byte();

    return npvsoil.rename("npvsoil");

};

var GVNPVS = function(image) {

    var gvnpvs = image.expression('100 * float(gv + npv) / float(100 - shade)', {
        'gv': image.select('gv'),
        'npv': image.select('npv'),
        'shade': image.select('shade'),
    }).byte();

    return gvnpvs.rename('gvnpvs');

};

var NDFI3 = function(image) {

    var gvnpvs = GVNPVS(image).select('gvnpvs');
    var soilcloud = image.expression('soil + cloud', {
        'soil': image.select('soil'),
        'cloud': image.select('cloud'),
    }).byte();

    var ndfi3 = ee.Image.cat(gvnpvs, soilcloud).normalizedDifference()
        .multiply(100).add(100).byte();

    return ndfi3.rename('ndfi3');
};

var NDFI4 = function(image) {

    var gvnpv = image.expression('gv + npv', {
        'gv': image.select('gv'),
        'npv': image.select('npv'),
    }).byte();

    var soilshade = image.expression('soil + shade', {
        'soil': image.select('soil'),
        'shade': image.select('shade'),
    }).byte();

    var ndfi4 = ee.Image.cat(gvnpv, soilshade).normalizedDifference()
        .multiply(100).add(100).byte();

    return ndfi4.rename('ndfi4');

};

var getComposite = function(collection) {

    var composite = collection.median().select(['blue', 'green', 'red', 'nir', 'swir1', 'swir2', 'thermal']);

    var fractions = calcFractions(composite);

    composite = composite
        .addBands({
            "srcImg": fractions,
            "names": ['gv', 'npv', 'soil', 'cloud', 'gvs', 'shade'],
            "overwrite": true
        }).addBands({
            "srcImg": NDFI(fractions),
            "names": ['ndfi'],
            "overwrite": true
        }).addBands({
            "srcImg": waterAdjust(collection),
            "names": ['water_mask'],
            "overwrite": true
        }).addBands({
            "srcImg": NDVI(composite),
            "names": ['ndvi'],
            "overwrite": true
        }).addBands({
            "srcImg": NDWI(composite),
            "names": ['ndwi'],
            "overwrite": true
        }).addBands({
            "srcImg": SAVI(composite),
            "names": ['savi'],
            "overwrite": true
        }).addBands({
            "srcImg": EVI2(composite),
            "names": ['evi2'],
            "overwrite": true
        }).addBands({
            "srcImg": FCI(fractions),
            "names": ['fci'],
            "overwrite": true
        }).addBands({
            "srcImg": NDFI3(fractions),
            "names": ['ndfi3'],
            "overwrite": true
        }).addBands({
            "srcImg": NDFI4(fractions),
            "names": ['ndfi4'],
            "overwrite": true
        }).addBands({
            "srcImg": NPVSOIL(fractions),
            "names": ['npvsoil'],
            "overwrite": true
        }).addBands({
            "srcImg": GVNPVS(fractions),
            "names": ['gvnpvs'],
            "overwrite": true
        });

    return composite;
};

/**
 * Decision tree recursive
 * 
 * @author João Siqueira
 *         Environmental Engineer
 *         Remote sensing analyst
 *         Image processing developer
 *         
 * @param {eeImage} image 
 * @param {object} dtree
 */
var DecisionTree = function(image, dtree) {

    this.init = function(image, dtree) {

        this.image = image;
        this.dtree = dtree;

        this._setVariables();
        this._classify();
    };

    /**
     * [_setVariables description]
     */

    this._setVariables = function() {

        if (this.image !== null) {
            this.variables = {
                "red": this.image.select(["red"]),
                "green": this.image.select(["green"]),
                "blue": this.image.select(["blue"]),
                "nir": this.image.select(["nir"]),
                "swir1": this.image.select(["swir1"]),
                "swir2": this.image.select(["swir2"]),
                "thermal": this.image.select(["thermal"]),
                "gv": this.image.select(["gv"]),
                "gvs": this.image.select(["gvs"]),
                "npv": this.image.select(["npv"]),
                "soil": this.image.select(["soil"]),
                "cloud": this.image.select(["cloud"]),
                "shade": this.image.select(["shade"]),
                "ndfi": this.image.select(["ndfi"]),
                "ndfi3": this.image.select(["ndfi3"]),
                "ndfi4": this.image.select(["ndfi4"]),
                "ndvi": this.image.select(["ndvi"]),
                "ndwi": this.image.select(["ndwi"]),
                "evi2": this.image.select(["evi2"]),
                "savi": this.image.select(["savi"]),
                "fci": this.image.select(["fci"]),
                "wvi": this.image.select(["wvi"]),
                "npvsoil": this.image.select(["npvsoil"]),
                "gvnpvs": this.image.select(["gvnpvs"]),
                "slope": this.image.select(["slope"]),
                "ndfi_amplitude": this.image.select(["ndfi_amplitude"]),
                "water_mask": this.image.select(["water_mask"]),
                "cloud_mask": this.image.select(["cloud_mask"]),
                "shade_mask": this.image.select(["shade_mask"]),
            };
        }
    };

    /**
     * [_applyRule description]
     * @param  {[type]} rule [description]
     * @return {[type]}      [description]
     */

    this._applyRule = function(rule) {

        var variable = this.variables[rule.variable];
        var result;

        if (rule.operator === ">") {
            result = variable.gt(rule.thresh);

        } else if (rule.operator === ">=") {
            result = variable.gte(rule.thresh);

        } else if (rule.operator === "<") {
            result = variable.lt(rule.thresh);

        } else if (rule.operator === "<=") {
            result = variable.lte(rule.thresh);

        } else if (rule.operator === "=") {
            result = variable.eq(rule.thresh);

        } else if (rule.operator === "!=") {
            result = variable.neq(rule.thresh);

        } else {
            result = null;
        }

        return result;
    };

    /**
     * [_recursion description]
     * @param  {[type]} node           [description]
     * @param  {[type]} mask           [description]
     * @param  {[type]} classification [description]
     * @return {[type]}                [description]
     */

    this._recursion = function(node, mask, classification) {

        var result;

        if (this.dtree[node].kind === "decision") {

            // apply rule
            result = this._applyRule(this.dtree[node].rule);

            // not agree
            var node1 = String(this.dtree[node].children[0].level) + "-" +
                String(this.dtree[node].children[0].position);

            // agree
            var node2 = String(this.dtree[node].children[1].level) + "-" +
                String(this.dtree[node].children[1].position);

            var result1 = this._recursion(node1, result.eq(
                0).multiply(mask), classification); // not agree

            var result2 = this._recursion(node2, result.eq(
                1).multiply(mask), classification); // agree

            classification = result1.add(result2);
        } else {
            classification = classification.where(mask.eq(1).and(
                classification.eq(0)), this.dtree[node].class.value);
        }

        return classification;
    };

    /**
     * [_classify description]
     * @return {[type]} [description]
     */

    this._classify = function() {

        this.classification = this._recursion("1-1", ee.Image(1), ee.Image(0))
            .select([0], ["classification"]);

    };

    /**
     * [getData description]
     * @return {[type]} [description]
     */
    this.getData = function() {

        return this.classification;
    };

    this.init(image, dtree);
};


var dtree = {
    "1-1": {
        "kind": "decision",
        "rule": {
            "variable": "water_mask",
            "operator": "=",
            "thresh": 255
        },
        "class": {
            "value": null,
            "name": null,
            "color": null
        },
        "node": {
            "level": 1,
            "position": 1
        },
        "children": [{
            "level": 2,
            "position": 1
        }, {
            "level": 2,
            "position": 2
        }],
        "jstreeId": "dtree_1"
    },
    "2-1": {
        "kind": "decision",
        "rule": {
            "variable": "fci",
            "operator": ">=",
            "thresh": 60
        },
        "class": null,
        "node": {
            "level": 2,
            "position": 1
        },
        "children": [{
            "level": 3,
            "position": 1
        }, {
            "level": 3,
            "position": 2
        }],
        "jstreeId": "dtree_2"
    },
    "2-2": {
        "kind": "class",
        "rule": {
            "variable": "ndfi",
            "operator": ">=",
            "thresh": 125
        },
        "class": {
            "value": 26,
            "name": "Water Bodies",
            "color": "#0000ff"
        },
        "node": {
            "level": 2,
            "position": 2
        },
        "children": [],
        "jstreeId": "dtree_3"
    },
    "3-1": {
        "kind": "decision",
        "rule": {
            "variable": "savi",
            "operator": ">=",
            "thresh": 70
        },
        "class": null,
        "node": {
            "level": 3,
            "position": 1
        },
        "children": [{
            "level": 4,
            "position": 1
        }, {
            "level": 4,
            "position": 2
        }],
        "jstreeId": "dtree_4"
    },
    "3-2": {
        "kind": "class",
        "rule": {
            "variable": null,
            "operator": null,
            "thresh": null
        },
        "class": {
            "value": 1,
            "name": "Forest Formations",
            "color": "#129912"
        },
        "node": {
            "level": 3,
            "position": 2
        },
        "children": [],
        "jstreeId": "dtree_5"
    },
    "4-1": {
        "kind": "class",
        "rule": {
            "variable": "fci",
            "operator": ">=",
            "thresh": 10
        },
        "class": {
            "value": 25,
            "name": "Other Non-Vegetated Areas",
            "color": "#FF99FF"
        },
        "node": {
            "level": 4,
            "position": 1
        },
        "children": [],
        "jstreeId": "dtree_6"
    },
    "4-2": {
        "kind": "decision",
        "rule": {
            "variable": "fci",
            "operator": "<=",
            "thresh": 5
        },
        "class": null,
        "node": {
            "level": 4,
            "position": 2
        },
        "children": [{
            "level": 5,
            "position": 3
        }, {
            "level": 5,
            "position": 4
        }],
        "jstreeId": "dtree_7"
    },
    "5-3": {
        "kind": "decision",
        "rule": {
            "variable": "ndwi",
            "operator": "<=",
            "thresh": 50
        },
        "class": null,
        "node": {
            "level": 5,
            "position": 3
        },
        "children": [{
            "level": 6,
            "position": 5
        }, {
            "level": 6,
            "position": 6
        }],
        "jstreeId": "dtree_8"
    },
    "5-4": {
        "kind": "class",
        "rule": {
            "variable": null,
            "operator": null,
            "thresh": null
        },
        "class": {
            "value": 26,
            "name": "Water Bodies",
            "color": "#0000ff"
        },
        "node": {
            "level": 5,
            "position": 4
        },
        "children": [],
        "jstreeId": "dtree_9"
    },
    "6-5": {
        "kind": "decision",
        "rule": {
            "variable": "gv",
            "operator": ">=",
            "thresh": 20
        },
        "class": null,
        "node": {
            "level": 6,
            "position": 5
        },
        "children": [{
            "level": 7,
            "position": 9
        }, {
            "level": 7,
            "position": 10
        }],
        "jstreeId": "dtree_10"
    },
    "6-6": {
        "kind": "class",
        "rule": {
            "variable": null,
            "operator": null,
            "thresh": null
        },
        "class": {
            "value": 22,
            "name": "Non-Vegetated Areas",
            "color": "#ea9999"
        },
        "node": {
            "level": 6,
            "position": 6
        },
        "children": [],
        "jstreeId": "dtree_11"
    },
    "7-9": {
        "kind": "class",
        "rule": {
            "variable": null,
            "operator": null,
            "thresh": null
        },
        "class": {
            "value": 26,
            "name": "Water Bodies",
            "color": "#0000ff"
        },
        "node": {
            "level": 7,
            "position": 9
        },
        "children": [],
        "jstreeId": "dtree_12"
    },
    "7-10": {
        "kind": "class",
        "rule": {
            "variable": null,
            "operator": null,
            "thresh": null
        },
        "class": {
            "value": 1,
            "name": "Forest Formations",
            "color": "#129912"
        },
        "node": {
            "level": 7,
            "position": 10
        },
        "children": [],
        "jstreeId": "dtree_13"
    }
};

/*
 * Main script
 */
params.geometry = ee.FeatureCollection("users/joaovsiqueira1/vector/cartas-raisg")
    .filterMetadata('name', 'equals', params.gridName);

var collection = getCollection(params).map(cloudFree);

var composite = getComposite(collection).clip(params.geometry);

var dt = new DecisionTree(composite, dtree);

var classification = dt.getData().clip(params.geometry);

/*
 * Layers
 */
Map.addLayer(composite, {
    "bands": 'swir1,nir,red',
    "gain": '0.08,0.06,0.2',
    "gamma": '0.5',
    "format": "png"
}, 'Mosaic');

/*
Map.addLayer(composite, {
    "bands": 'ndfi',
    "min": 0,
    "max": 200,
    "palette": "ffffff,fffcff,fff9ff,fff7ff,fff4ff,fff2ff,ffefff,ffecff,ffeaff,ffe7ff," +
        "ffe5ff,ffe2ff,ffe0ff,ffddff,ffdaff,ffd8ff,ffd5ff,ffd3ff,ffd0ff,ffceff," +
        "ffcbff,ffc8ff,ffc6ff,ffc3ff,ffc1ff,ffbeff,ffbcff,ffb9ff,ffb6ff,ffb4ff," +
        "ffb1ff,ffafff,ffacff,ffaaff,ffa7ff,ffa4ff,ffa2ff,ff9fff,ff9dff,ff9aff," +
        "ff97ff,ff95ff,ff92ff,ff90ff,ff8dff,ff8bff,ff88ff,ff85ff,ff83ff,ff80ff," +
        "ff7eff,ff7bff,ff79ff,ff76ff,ff73ff,ff71ff,ff6eff,ff6cff,ff69ff,ff67ff," +
        "ff64ff,ff61ff,ff5fff,ff5cff,ff5aff,ff57ff,ff55ff,ff52ff,ff4fff,ff4dff," +
        "ff4aff,ff48ff,ff45ff,ff42ff,ff40ff,ff3dff,ff3bff,ff38ff,ff36ff,ff33ff," +
        "ff30ff,ff2eff,ff2bff,ff29ff,ff26ff,ff24ff,ff21ff,ff1eff,ff1cff,ff19ff," +
        "ff17ff,ff14ff,ff12ff,ff0fff,ff0cff,ff0aff,ff07ff,ff05ff,ff02ff,ff00ff," +
        "ff00ff,ff0af4,ff15e9,ff1fdf,ff2ad4,ff35c9,ff3fbf,ff4ab4,ff55aa,ff5f9f," +
        "ff6a94,ff748a,ff7f7f,ff8a74,ff946a,ff9f5f,ffaa55,ffb44a,ffbf3f,ffc935," +
        "ffd42a,ffdf1f,ffe915,fff40a,ffff00,ffff00,fffb00,fff700,fff300,fff000," +
        "ffec00,ffe800,ffe400,ffe100,ffdd00,ffd900,ffd500,ffd200,ffce00,ffca00," +
        "ffc600,ffc300,ffbf00,ffbb00,ffb700,ffb400,ffb000,ffac00,ffa800,ffa500," +
        "ffa500,f7a400,f0a300,e8a200,e1a200,d9a100,d2a000,ca9f00,c39f00,bb9e00," +
        "b49d00,ac9c00,a59c00,9d9b00,969a00,8e9900,879900,7f9800,789700,709700," +
        "699600,619500,5a9400,529400,4b9300,439200,349100,2d9000,258f00,1e8e00," +
        "168e00,0f8d00,078c00,008c00,008c00,008700,008300,007f00,007a00,007600," +
        "007200,006e00,006900,006500,006100,005c00,005800,005400,005000,004c00",
    "format": "png"
}, 'NDFI');

Map.addLayer(classification, {
    "bands": 'classification',
    "min": 0,
    "max": 28,
    "palette": "d5d5e5,129912,1f4423,006400,00ff00," +
        "687537,76a5af,29eee4,77a605,935132,ff9966,45c2a5," +
        "b8af4f,f1c232,ffffb2,ffd966,f6b26b,a0d0de," +
        "e974ed,d5a6bd,c27ba0,FBF3C7,ea9999," +
        "dd7e6b,b7b7b7,ff99ff," +
        "0000ff,d5d5e5,ce3d3d",
    "format": "png"
}, 'Classification');
*/

Map.centerObject(params.geometry, 10);


var imageName = params.pais + "_" + params.gridName + "_" + params.t0.split('-')[0] + "_0";

print(imageName);


classification = classification.set('year', params.t0.split('-')[0])
    .set('grid_name', params.gridName)
    .set('pais', params.pais.toUpperCase())
    .set('t0', params.t0)
    .set('t1', params.t1)
    .set('cloud_cover', params.cloudcover)
    .set('sensor', params.sensor);

//print(classification);

Export.image.toAsset({
    "image": classification,
    "description": imageName,
    "assetId": "users/joaovsiqueira1/capacitacion-raisg/" + imageName,
    "region": params.geometry,
    "scale": 30,
    "maxPixels": 1e13,
    "pyramidingPolicy": {
        ".default": "mode"
    },
});

// Running classifications and getting stats
var lista_amostra = [agua, bosque];

var amostraTotal = lista_amostra[0]
for (var i_amostra=1;i_amostra < lista_amostra.length; i_amostra++){
  amostraTotal = amostraTotal.merge(lista_amostra[i_amostra]);
}

var training = composite.sampleRegions({
    'collection': amostraTotal,
    'properties': ['class'],
    'scale': 30
});

Export.table.toDrive({
  'collection': training, 
  'description': 'stats_' + params.gridName + "_" + params.t0.split('-')[0], 
  'fileNamePrefix': 'stats_' + params.gridName + "_" + params.t0.split('-')[0], 
  'fileFormat': 'CSV'}
);