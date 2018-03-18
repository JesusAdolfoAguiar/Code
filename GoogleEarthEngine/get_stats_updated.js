//
//============================================================================
var params = {
    'gridName': 'NA-19-X-B',
    'pais': 'VENEZUELA',
    'sensor': 'L7',
    'cloudcover': 75,
    'year': 2012,
    't0': '2012-06-01',
    't1': '2012-09-30',
    'geometry': null
};
var assetOutput = "users/joaovsiqueira1/capacitacion-raisg/";

// NB-19-X-B
var poly = ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-66.98776245117188, 3.433916511825677],
                  [-66.961669921875, 3.4572202575059006],
                  [-66.97402954101562, 3.487377195492688],
                  [-67.00149536132812, 3.4722988468887537]]]),
            {
              "system:index": "0",
              "class" : "dense forest",
              "class_id": 3
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-66.20361328125, 3.479152671619888],
                  [-66.16378784179688, 3.4928601714481537],
                  [-66.18438720703125, 3.5490588195926307],
                  [-66.214599609375, 3.5202745698330737]]]),
            {
              "system:index": "1",
              "class" : "dense forest",
              "class_id": 3
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-66.09649658203125, 3.794373142650989],
                  [-66.05255126953125, 3.783410827380492],
                  [-66.04156494140625, 3.854663379502149],
                  [-66.08413696289062, 3.845072035101843]]]),
            {
              "system:index": "2",
              "class" : "dense forest",
              "class_id": 3
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-66.65130615234375, 3.931390217715008],
                  [-66.62796020507812, 3.946460735586759],
                  [-66.632080078125, 3.9793409148595758],
                  [-66.66366577148438, 3.9752309640095986]]]),
            {
              "system:index": "3",
              "class" : "dense forest",
              "class_id": 3
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-66.79515838623047, 3.4459111580835327],
                  [-66.78794860839844, 3.4517370745999605],
                  [-66.78279876708984, 3.4572202575059006],
                  [-66.7862319946289, 3.4633888003800726],
                  [-66.79309844970703, 3.4603045339626335],
                  [-66.79584503173828, 3.4527651738072436]]]),
            {
              "system:index": "4",
              "class": "wetland",
              "class_id": 11
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-66.5390396118164, 3.5634506086056628],
                  [-66.53251647949219, 3.5644785849316936],
                  [-66.52427673339844, 3.5641359262839925],
                  [-66.52496337890625, 3.5703037624016756],
                  [-66.5328598022461, 3.5716743870266465],
                  [-66.54075622558594, 3.56961844932197]]]),
            {
              "system:index": "5",
              "class": "wetland",
              "class_id": 11
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-67.12268829345703, 3.79779883766527],
                  [-67.12268829345703, 3.7906048624461435],
                  [-67.11376190185547, 3.786151419216956],
                  [-67.10243225097656, 3.792317719121283],
                  [-67.1048355102539, 3.803279921402868],
                  [-67.11788177490234, 3.803279921402868]]]),
            {
              "system:index": "6",
              "class": "wetland",
              "class_id": 11
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-66.9997787475586, 3.807733276276272],
                  [-66.99222564697266, 3.806705581041557],
                  [-66.98844909667969, 3.811844044943394],
                  [-66.9942855834961, 3.818010161092637],
                  [-67.00321197509766, 3.816982478141199],
                  [-67.0059585571289, 3.8121866081122686]]]),
            {
              "system:index": "7",
              "class": "wetland",
              "class_id": 11
            }),

        ee.Feature(
            ee.Geometry.Polygon(
                [[[-67.07479476928711, 3.9154631243570006],
                  [-67.07221984863281, 3.9140930376375898],
                  [-67.07033157348633, 3.915976906298703],
                  [-67.06758499145508, 3.915976906298703],
                  [-67.06586837768555, 3.918717071327108],
                  [-67.06878662109375, 3.920772189207633],
                  [-67.07170486450195, 3.91940211118181],
                  [-67.07616806030273, 3.9176895104931178]]]),
            {
              "system:index": "8",
              "class": "non vegetated",
              "class_id": 22
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-67.10552215576172, 3.949372054145591],
                  [-67.10226058959961, 3.9488582927888713],
                  [-67.09693908691406, 3.9507420828751316],
                  [-67.09659576416016, 3.953139627707329],
                  [-67.0993423461914, 3.9524546156053963],
                  [-67.1015739440918, 3.954167144799049],
                  [-67.1041488647461, 3.954680902867279],
                  [-67.10552215576172, 3.9527971217271047]]]),
            {
              "system:index": "9",
              "class": "non vegetated",
              "class_id": 22
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-67.09479331970215, 3.904502367880462],
                  [-67.093505859375, 3.904673630802047],
                  [-67.09213256835938, 3.9057012075977524],
                  [-67.09136009216309, 3.9070713080347557],
                  [-67.09264755249023, 3.907585095121794],
                  [-67.09402084350586, 3.9069000456024803],
                  [-67.0946216583252, 3.905615576246168],
                  [-67.09573745727539, 3.9055299448858425]]]),
            {
              "system:index": "10",
              "class": "non vegetated",
              "class_id": 22
            })

        ]);

var lista_amostra = [poly];
var imageName = "stats_" + params.gridName + "_" + params.t0 + "_" + params.t1;

//
//============================================================================

/**
 * [Collection description]
 * @param {[type]} params [description]
 */
var Collection = function (params) {

    this.options = {
        'L5': {
            'sr': {
                'id': 'LANDSAT/LT05/C01/T1_SR',
                'bandNames': ['B1', 'B2', 'B3', 'B4', 'B5', 'B7', 'B6', 'pixel_qa'],
                'newNames': ['blue', 'green', 'red', 'nir', 'swir1', 'swir2', 'thermal', 'pixel_qa'],
                'coefficient': 1
            },
        },
        'L7': {
            'sr': {
                'id': 'LANDSAT/LE07/C01/T1_SR',
                'bandNames': ['B1', 'B2', 'B3', 'B4', 'B5', 'B7', 'B6', 'pixel_qa'],
                'newNames': ['blue', 'green', 'red', 'nir', 'swir1', 'swir2', 'thermal', 'pixel_qa'],
                'coefficient': 1
            },
        },
        'L8': {
            'sr': {
                'id': 'LANDSAT/LC08/C01/T1_SR',
                'bandNames': ['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B10', 'pixel_qa'],
                'newNames': ['blue', 'green', 'red', 'nir', 'swir1', 'swir2', 'thermal', 'pixel_qa'],
                'coefficient': 1
            },
        },
    };

    /**
     * [init description]
     * @param  {[type]} params [description]
     * @return {[type]}        [description]
     */
    this.init = function (params) {

        this.params = params;
        this.filterParams();

    };

    /**
     * [imageCollection description]
     * @param  {[type]} collectionID [description]
     * @return {[type]}              [description]
     */
    this.imageCollection = function (collectionID) {

        var cc = "CLOUD_COVER";

        var collection = ee.ImageCollection(collectionID)
            .filterMetadata(cc, "less_than", this.params.cloudcover)
            .filterDate(this.params.t0, this.params.t1)
            .filterBounds(this.params.geometry);

        return collection;
    };

    /**
     * [filterBySensor description]
     * @return {[type]} [description]
     */
    this.filterBySensor = function () {

        var collection = null;

        switch (this.params.sensor) {
            case "L5":
                collection = this.imageCollection(this.options.L5.sr.id)
                    .select(
                        this.options.L5.sr.bandNames,
                        this.options.L5.sr.newNames
                    );
                break;
            case "L7":
                collection = this.imageCollection(this.options.L7.sr.id)
                    .select(
                        this.options.L7.sr.bandNames,
                        this.options.L7.sr.newNames
                    );
                break;
            case "LX":
                var L5 = this.imageCollection(this.options.L5.sr.id)
                    .select(
                        this.options.L5.sr.bandNames,
                        this.options.L5.sr.newNames
                    );

                var L7 = this.imageCollection(this.options.L7.sr.id)
                    .select(
                        this.options.L7.sr.bandNames,
                        this.options.L7.sr.newNames
                    );

                collection = ee.ImageCollection(L5.merge(L7)).sort('DATE_ACQUIRED');
                break;

            case "L8":
                collection = this.imageCollection(this.options.L8.sr.id)
                    .select(
                        this.options.L8.sr.bandNames,
                        this.options.L8.sr.newNames
                    );
        }

        return collection;
    };

    /**
     * [edgeRemoval description]
     * @param  {[type]} image [description]
     * @return {[type]}       [description]
     */
    this.edgeRemoval = function (image) {

        var edgeSize = -5500.0;

        image = image.clip(
            image.geometry()
                .buffer(edgeSize)
                .simplify(1)
        );

        return image;
    };

    /**
     * [filterParams description]
     * @return {[type]} [description]
     */
    this.filterParams = function () {

        this.collection = this.filterBySensor()
            .map(this.edgeRemoval);

    };

    /**
     * [getCollection description]
     * @return {[type]} [description]
     */
    this.getCollection = function () {

        return this.collection;
    };

    this.init(params);
};

/**
 * [SMA description]
 */
var SMA = function (collection, params) {

    this.bandNames = ['blue', 'green', 'red', 'nir', 'swir1', 'swir2'];
    this.outBandNames = ['gv', 'npv', 'soil', 'cloud'];

    this.spectralLib = {
        'LX': [
            [119.0, 475.0, 169.0, 6250.0, 2399.0, 675.0], /*gv*/
            [1514.0, 1597.0, 1421.0, 3053.0, 7707.0, 1975.0], /*npv*/
            [1799.0, 2479.0, 3158.0, 5437.0, 7707.0, 6646.0], /*soil*/
            [4031.0, 8714.0, 7900.0, 8989.0, 7002.0, 6607.0] /*cloud*/
        ],
        'L8': [
            [119.0, 475.0, 169.0, 6250.0, 2399.0, 675.0], /*gv*/
            [1514.0, 1597.0, 1421.0, 3053.0, 7707.0, 1975.0], /*npv*/
            [1799.0, 2479.0, 3158.0, 5437.0, 7707.0, 6646.0], /*soil*/
            [4031.0, 8714.0, 7900.0, 8989.0, 7002.0, 6607.0] /*cloud*/
        ]
    };

    /**
     * [init description]
     * @param  {[type]} col [description]
     * @return {[type]}     [description]
     */
    this.init = function (collection, params) {

        this.collection = collection;
        this.params = params;
        this.calculate();

    };

    /**
     * [setSpectralLib description]
     */
    this.setSpectralLib = function () {

        if (this.params.sensor === "L8") {
            this.endmembers = this.spectralLib.L8;
        } else {
            this.endmembers = this.spectralLib.LX;
        }

    };

    /**
     * [calcFractions description]
     * @param  {[type]} image [description]
     * @return {[type]}       [description]
     */
    var _this = this;
    this.calcFractions = function (image) {

        // Uminxing data
        var fractions = ee.Image(image)
            .select(_this.bandNames)
            // .multiply(coef)
            .unmix(_this.endmembers)
            .max(0)
            .multiply(100)
            .byte();

        fractions = fractions.rename(_this.outBandNames);

        return image.addBands(fractions);

    };

    /**
     * [calcGVS description]
     * @param  {[type]} image [description]
     * @return {[type]}       [description]
     */
    this.calcGVS = function (image) {

        var summed = image.select(['gv', 'npv', 'soil']) //, 'cloud'])
            .reduce(ee.Reducer.sum());

        var shd = summed.subtract(100).abs().byte();
        var gvs = image.select(["gv"])
            .divide(summed)
            .multiply(100)
            .byte();

        image = image.addBands(gvs.select([0], ["gvs"]));
        image = image.addBands(shd.select([0], ["shade"]));

        return image;

    };

    /**
     * [calculate description]
     * @return {[type]} [description]
     */
    this.calculate = function () {

        this.setSpectralLib();

        this.collection = this.collection.map(this.calcFractions)
            .map(this.calcGVS);
    };

    /**
     * [getCollection description]
     * @return {[type]} [description]
     */
    this.getCollection = function () {

        return this.collection;
    };

    this.init(collection, params);
};

/**
 * [NDFI description]
 * @param {[type]} col [description]
 */
var NDFI = function (collection, params) {

    this.palette =
        "FFFFFF,FFFCFF,FFF9FF,FFF7FF,FFF4FF,FFF2FF,FFEFFF,FFECFF,FFEAFF,FFE7FF," +
        "FFE5FF,FFE2FF,FFE0FF,FFDDFF,FFDAFF,FFD8FF,FFD5FF,FFD3FF,FFD0FF,FFCEFF," +
        "FFCBFF,FFC8FF,FFC6FF,FFC3FF,FFC1FF,FFBEFF,FFBCFF,FFB9FF,FFB6FF,FFB4FF," +
        "FFB1FF,FFAFFF,FFACFF,FFAAFF,FFA7FF,FFA4FF,FFA2FF,FF9FFF,FF9DFF,FF9AFF," +
        "FF97FF,FF95FF,FF92FF,FF90FF,FF8DFF,FF8BFF,FF88FF,FF85FF,FF83FF,FF80FF," +
        "FF7EFF,FF7BFF,FF79FF,FF76FF,FF73FF,FF71FF,FF6EFF,FF6CFF,FF69FF,FF67FF," +
        "FF64FF,FF61FF,FF5FFF,FF5CFF,FF5AFF,FF57FF,FF55FF,FF52FF,FF4FFF,FF4DFF," +
        "FF4AFF,FF48FF,FF45FF,FF42FF,FF40FF,FF3DFF,FF3BFF,FF38FF,FF36FF,FF33FF," +
        "FF30FF,FF2EFF,FF2BFF,FF29FF,FF26FF,FF24FF,FF21FF,FF1EFF,FF1CFF,FF19FF," +
        "FF17FF,FF14FF,FF12FF,FF0FFF,FF0CFF,FF0AFF,FF07FF,FF05FF,FF02FF,FF00FF," +
        "FF00FF,FF0AF4,FF15E9,FF1FDF,FF2AD4,FF35C9,FF3FBF,FF4AB4,FF55AA,FF5F9F," +
        "FF6A94,FF748A,FF7F7F,FF8A74,FF946A,FF9F5F,FFAA55,FFB44A,FFBF3F,FFC935," +
        "FFD42A,FFDF1F,FFE915,FFF40A,FFFF00,FFFF00,FFFB00,FFF700,FFF300,FFF000," +
        "FFEC00,FFE800,FFE400,FFE100,FFDD00,FFD900,FFD500,FFD200,FFCE00,FFCA00," +
        "FFC600,FFC300,FFBF00,FFBB00,FFB700,FFB400,FFB000,FFAC00,FFA800,FFA500," +
        "FFA500,F7A400,F0A300,E8A200,E1A200,D9A100,D2A000,CA9F00,C39F00,BB9E00," +
        "B49D00,AC9C00,A59C00,9D9B00,969A00,8E9900,879900,7F9800,789700,709700," +
        "699600,619500,5A9400,529400,4B9300,439200,349100,2D9000,258F00,1E8E00," +
        "168E00,0F8D00,078C00,008C00,008C00,008700,008300,007F00,007A00,007600," +
        "007200,006E00,006900,006500,006100,005C00,005800,005400,005000,004C00";

    /**
     * [init description]
     * @param  {[type]} col [description]
     * @return {[type]}     [description]
     */
    this.init = function (collection, params) {

        this.collection = collection;
        this.params = params;
        this.calculate();

    };

    /**
     * [calcNDFI description]
     * @param  {[type]} image [description]
     * @return {[type]}       [description]
     */
    this.calcNDFI = function (image) {

        var gvs = image.select("gvs");

        var npvSoil = image.select("npv")
            .add(image.select("soil"));
        // .add(image.select("cloud"));

        var ndfi = ee.Image.cat(gvs, npvSoil).normalizedDifference();

        // rescale NDFI from 0 until 200
        ndfi = ndfi.multiply(100).add(100).byte();

        return image.addBands(ndfi.select([0], ["ndfi"]));

    };

    /**
     * [calculate description]
     * @return {[type]} [description]
     */
    this.calculate = function () {
        console.log(ee.Image(this.collection.first()).bandNames().getInfo())
        this.collection = this.collection.map(this.calcNDFI);

    };

    /**
     * [getCollection description]
     * @return {[type]} [description]
     */
    this.getCollection = function () {

        return this.collection;
    };

    this.init(collection, params);

};

/**
 * [Mask description]
 * @param {[type]} col [description]
 */
var Mask = function (collection, params) {

    this.options = {
        /**
         * pixel QA bit values
         */
        'bitValue': {
            /*bit 0*/ "fill": 1,
            /*bit 1*/ "clear": 2,
            /*bit 2*/ "water": 4,
            /*bit 3*/ "cloudShadow": 8,
            /*bit 4*/ "snow": 16,
            /*bit 5*/ "cloud": 32
        },
        "shade": {
            "cloudAltitude": 1000,
            "bufferSize": 5,
            "thresh": {
                "s1": 70,
                "s2": 65
            }
        },
        "cloud": {
            "bufferSize": 10,
            "temperature": 22,
            "thresh": {
                "c1": 10,
                "c2": 7
            }
        },
        "water": {
            "thresh": {
                "shade": 75,
                "gv": 10,
                "soil": 5
            }
        },
    };

    /**
     * [init description]
     * @param  {[type]} col [description]
     * @return {[type]}     [description]
     */
    this.init = function (collection, params) {

        this.terrain = ee.call('Terrain', ee.Image('USGS/SRTMGL1_003'));

        this.collection = collection;
        this.params = params;
        this._make();

    };

    /**
     * [_hillShadow description]
     * @param  {[type]} terrain      [description]
     * @param  {[type]} sunAzimuth   [description]
     * @param  {[type]} sunElevation [description]
     * @return {[type]}              [description]
     */
    this._hillShadow = function (terrain, sunAzimuth, sunElevation) {

        var zenithElevation = ee.Number(90.0).subtract(sunElevation);

        // Terrain
        var elevation = terrain.select(['elevation']);

        // Hill Shadow mask
        var hillShadowMask = ee.Algorithms.HillShadow(
            elevation, sunAzimuth, zenithElevation, 300, true);

        return hillShadowMask.eq(0);

    };

    /**
     * [hillShadeMask description]
     * @param  {[type]} image [description]
     * @return {[type]}       [description]
     */
    var _this = this;
    this.hillShadeMask = function (image) {

        var sunAzimuth = image.get('SOLAR_AZIMUTH_ANGLE');
        var sunElevation = ee.Number(90).subtract(image.get('SOLAR_ZENITH_ANGLE'));

        var hillshadow = _this._hillShadow(_this.terrain, sunAzimuth, sunElevation);

        return image.addBands(hillshadow.select([0], ['hillshade_mask']));

    };

    /**
     * [cloudMask description]
     * @param  {[type]} image [description]
     * @return {[type]}       [description]
     */
    this.cloudMask = function (image) {

        var cloud = image.select(['cloud']);
        var thermal = image.select(['thermal']).subtract(273.15);

        var cloudMask = cloud.gte(_this.options.cloud.thresh.c1).and(
            thermal.lte(_this.options.cloud.temperature));

        var kernel = ee.Kernel.circle(
            _this.options.cloud.bufferSize, 'pixels');

        var buffered = cloudMask.convolve(kernel);
        buffered = (buffered.add(cloudMask)).gt(0);

        cloudMask = buffered.eq(1).and(
            cloud.gte(_this.options.cloud.thresh.c2)
        ).multiply(255)
            .byte();

        return image.addBands(cloudMask.select([0], ['cloud_mask']));

    };

    /**
     * [shadeMask description]
     * @param  {[type]} image [description]
     * @return {[type]}       [description]
     */
    this.shadeMask = function (image) {

        var sunAzimuth = image.get('SOLAR_AZIMUTH_ANGLE');
        var sunElevation = ee.Number(90).subtract(image.get('SOLAR_ZENITH_ANGLE'));
        var cloudMask = image.select('cloud_mask');

        var simulTerrain = cloudMask.multiply(_this.options.shade.cloudAltitude)
            .select([0], ['elevation']);

        var hillshadow = _this._hillShadow(simulTerrain, sunAzimuth, sunElevation);

        var shade = image.select('shade');
        var shadeMask = hillshadow.eq(1).and(shade.gte(
            _this.options.shade.thresh.s1));

        var kernel = ee.Kernel.circle(_this.options.shade.bufferSize, 'pixels');
        var buffered = shadeMask.convolve(kernel);
        buffered = (buffered.add(shadeMask)).gt(0);

        shadeMask = buffered.eq(1).and(shade.gte(
            _this.options.shade.thresh.s2)).multiply(255).byte();

        return image.addBands(shadeMask.select([0], ['shade_mask']));

    };

    /**
     * [waterMask description]
     * @param  {[type]} image [description]
     * @return {[type]}       [description]
     */
    this.waterMask = function (image) {

        var shade = image.select('shade');
        var gv = image.select('gv');
        var soil = image.select('soil');

        var shadeMask = image.select('shade_mask');
        var cloudMask = image.select('cloud_mask');
        var hillShadeMask = image.select('hillshade_mask');

        var waterMask = shade.gte(_this.options.water.thresh.shade)
            .and(gv.lte(_this.options.water.thresh.gv))
            .and(soil.lte(_this.options.water.thresh.soil))
            .and(shadeMask.eq(0))
            .and(cloudMask.eq(0))
            .and(hillShadeMask.eq(0))
            .multiply(255)
            .byte();

        return image.addBands(waterMask.select([0], ['water_mask']));

    };

    var _this = this;
    this.cfmask = function (image) {

        var pixelQA = image.select(['pixel_qa']);
        var srCloudQA = image.select(['sr_cloud_qa']);

        var cloudMask = pixelQA.bitwiseAnd(_this.options.bitValue.cloud).neq(0);
        var waterMask = pixelQA.bitwiseAnd(_this.options.bitValue.water).neq(0);
        var shadeMask = pixelQA.bitwiseAnd(_this.options.bitValue.cloudShadow).neq(0);

        return image
            .addBands(cloudMask.rename(['cloud_mask']))
            .addBands(shadeMask.rename(['shade_mask']))
            .addBands(waterMask.rename(['water_mask']));
    };

    /**
     * [_make description]
     * @return {[type]} [description]
     */
    this._make = function () {

        this.collection = this.collection.map(this.hillShadeMask)
            .map(this.cfmask);
        // .map(this.cloudMask)
        // .map(this.shadeMask)
        // .map(this.hillShadeMask)
        // .map(this.waterMask);

    };

    /**
     * [getCollection description]
     * @return {[type]} [description]
     */
    this.getCollection = function () {

        return this.collection;
    };

    this.init(collection, params);

};

/**
 * [Composite description]
 * @param {[type]} collection [description]
 */
var Composite = function (collection) {

    this.composite = null;

    /**
     * [init description]
     * @param  {[type]} collection [description]
     * @return {[type]}            [description]
     */
    this.init = function (collection) {

        if (collection !== null) {

            this.collection = collection.map(this.cloudFree);

        }

    };

    /**
     * [cloudFree description]
     * @param  {[type]} image [description]
     * @return {[type]}       [description]
     */
    this.cloudFree = function (image) {

        var cloudMask = image.select(['cloud_mask']);
        var shadeMask = image.select(['shade_mask']);

        var csm = cloudMask.add(shadeMask).gte(1);

        return image.mask(csm.neq(1));

    };

    /**
     * [median description]
     * @return {[type]} [description]
     */
    this.Median = function () {

        this.composite = this.collection.median()
            .addBands(this.waterAdjust(), ['water_mask'], true);

        return this.composite;

    };

    /**
     * [waterAdjust description]
     * @return {[type]} [description]
     */
    this.waterAdjust = function () {

        return this.collection.select(['water_mask'])
            .median()
            .gt(0)
            .multiply(255)
            .byte();
    };

    this.init(collection);

};

/**
 * [Indexes description]
 */
var Indexes = function (collection, params) {

    /**
     * [init description]
     * @param  {[type]} col [description]
     * @return {[type]}     [description]
     */
    this.init = function (collection, params) {

        this.collection = collection;
        this.params = params;
        this.calculate();

    };

    /**
     * [ndvi description]
     * @param  {[type]} image [description]
     * @return {[type]}       [description]
     */
    this.ndvi = function (image) {

        var ndvi = image.expression('float(nir - red)/(nir + red)', {
            'nir': image.select('nir'),
            'red': image.select('red')
        }).multiply(200).byte(); // rescale NDVI from 0-200

        return image.addBands(ndvi.select([0], ["ndvi"]));

    };

    /**
     * [ndwi description]
     * @param  {[type]} image [description]
     * @return {[type]}       [description]
     */
    this.ndwi = function (image) {

        var ndwi = image.expression('float(nir - swir1)/(nir + swir1)', {
            'nir': image.select('nir'),
            'swir1': image.select('swir1')
        }).multiply(200).byte();

        return image.addBands(ndwi.select([0], ["ndwi"]));

    };

    /**
     * [savi description]
     * @param  {[type]} image [description]
     * @return {[type]}       [description]
     */
    this.savi = function (image) {

        var savi = image.expression('(1 + L) * float(nir - red)/(nir + red + L)', {
            'nir': image.select('nir'),
            'red': image.select('red'),
            'L': 0.9
        }).multiply(100).byte();

        return image.addBands(savi.select([0], ["savi"]));

    };

    /**
     * [evi2 description]
     * @param  {[type]} image [description]
     * @return {[type]}       [description]
     */
    this.evi2 = function (image) {

        var evi2 = image.expression('(2.5 * float(nir - red)/(nir + 2.4 * red + 1))', {
            'nir': image.select('nir'),
            'red': image.select('red'),
        }).multiply(100).byte();

        // valor da multiplicação por 100 gera valores maiores que 200... vai até uns 210.

        return image.addBands(evi2.select([0], ["evi2"]));

    };

    /**
     * [fci description]
     * @param  {[type]} image [description]
     * @return {[type]}       [description]
     */
    this.fci = function (image) {

        var fci = image.expression('(float(gv - shade)/(gv + shade))', {
            'gv': image.select('gv'),
            'shade': image.select('shade'),
        }).multiply(100).add(100).byte();

        return image.addBands(fci.select([0], ["fci"]));

    };

    /**
     * [npv+soil description]
     * @param  {[type]} image [description]
     * @return {[type]}       [description]
     */
    this.npvsoil = function (image) {

        var npvsoil = image.expression('npv + soil', {
            'npv': image.select('npv'),
            'soil': image.select('soil'),
        }).byte();

        return image.addBands(npvsoil.select([0], ["npvsoil"]));

    };

    /**
     * [gv+npvs description]
     * @param  {[type]} image [description]
     * @return {[type]}       [description]
     */
    this.gvnpvs = function (image) {

        var gvnpvs = image.expression('100 * float(gv + npv) / float(100 - shade)', {
            'gv': image.select('gv'),
            'npv': image.select('npv'),
            'shade': image.select('shade'),
        }).byte();

        return image.addBands(gvnpvs.select([0], ["gvnpvs"]));

    };

    /**
     * [ndfi3 description]
     * @param  {[type]} image [description]
     * @return {[type]}       [description]
     */
    var _this = this;
    this.ndfi3 = function (image) {

        var gvnpvs = _this.gvnpvs(image).select('gvnpvs');
        var soilcloud = image.expression('soil + cloud', {
            'soil': image.select('soil'),
            'cloud': image.select('cloud'),
        }).byte();

        var ndfi3 = ee.Image.cat(gvnpvs, soilcloud).normalizedDifference()
            .multiply(100).add(100).byte();

        return image.addBands(ndfi3.select([0], ["ndfi3"]));
    };

    /**
     * [ndfi4 description]
     * @param  {[type]} image [description]
     * @return {[type]}       [description]
     */
    this.ndfi4 = function (image) {

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

        return image.addBands(ndfi4.select([0], ["ndfi4"]));

    };

    this.wvi = function (image) {

        var ndvi = image.expression(
            '((nir - red)**2/ (nir + red)**2)**(1/2)', {
                'nir': image.select('nir'),
                'red': image.select('red'),
            });

        var ndwi = image.expression(
            '(( swir1 - green)**2 / (swir1 + green)**2)**(1/2)', {
                'swir1': image.select('swir1'),
                'green': image.select('green'),
            });

        var wvi = image.expression(
            '((NDWI) - (NDVI))/((NDVI)+(NDWI))', {
                'NDVI': ndvi,
                'NDWI': ndwi
            }).multiply(100).add(100).byte();

        return image.addBands(wvi.select([0], ['wvi']));
    };

    /**
     * [getCollection description]
     * @return {[type]} [description]
     */
    this.getCollection = function () {

        return this.collection;
    };

    /**
     * [calculate description]
     * @return {[type]} [description]
     */
    this.calculate = function () {

        this.collection = this.collection
            .map(this.ndvi)
            .map(this.ndwi)
            .map(this.savi)
            .map(this.evi2)
            .map(this.fci)
            .map(this.ndfi3)
            .map(this.ndfi4)
            .map(this.npvsoil)
            .map(this.gvnpvs)
            .map(this.wvi);

    };

    this.init(collection, params);

};

/**
 * [Amplitude description]
 * @param {[type]} collection [description]
 * @param {[type]} params     [description]
 */
var Amplitude = function (collection, params) {

    /**
     * [init description]
     * @param  {[type]} col [description]
     * @return {[type]}     [description]
     */
    this.init = function (collection, params) {

        this.collection = collection;
        this.params = params;
        this.amplitude = null;
        this.calculate();

    };

    /**
     * [ndfiAmplitude description]
     * @param  {[type]} image [description]
     * @return {[type]}       [description]
     */
    this.ndfiAmplitude = function (collection) {

        var coef = 500;
        if (this.params.sensor === 'L8') {
            coef = 1500;
        }

        var image = ee.Image(0).clip(this.params.geometry);

        collection = collection.map(function (image) {
            var msk = image.select('blue').lte(coef);
            return image.updateMask(msk);
        });

        var ndfiMin = collection.select(['ndfi']).min();
        ndfiMin = ndfiMin.updateMask(ndfiMin.gte(1));

        var ndfiMax = collection.select(['ndfi']).max();

        var amplitude = ndfiMax.subtract(ndfiMin).abs();
        amplitude = image.where(amplitude.gte(0), amplitude).byte();

        return amplitude.select([0], ["ndfi_amplitude"]);

    };

    /**
     * [calculate description]
     * @return {[type]} [description]
     */
    this.calculate = function () {

        this.amplitude = this.ndfiAmplitude(this.collection);

    };

    this.getData = function () {

        return this.amplitude;
    };

    this.init(collection, params);
};

/**
 * [getGrid description]
 * @param  {[type]} gridName [description]
 * @return {[type]}          [description]
 */
var GetGrid = function (json) {

    /**
     * [init description]
     * @param  {[type]} gridName [description]
     * @return {[type]}          [description]
     */
    this.init = function (json) {

        this.json = json;

    };

    /**
     * [getByName description]
     * @param  {[type]} gridName [description]
     * @return {[type]}          [description]
     */
    this.getByName = function (gridName) {

        var feature;

        for (var i in this.json.features) {
            if (this.json.features[i].properties.name === gridName) {

                feature = this.json.features[i];

            }
        }

        return ee.Geometry.LinearRing(
            feature.geometry.coordinates[0]).bounds();


    };

    this.init(json);

};

/**
 * [DecisionTree description]
 * @param {[type]} image [description]
 * @param {[type]} dtree [description]
 */

var DecisionTree = function (image, dtree) {

    this.init = function (image, dtree) {

        this.image = image;
        this.dtree = dtree;

        this._setVariables();
        this._classify();
    };

    /**
     * [_setVariables description]
     */

    this._setVariables = function () {

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

    this._applyRule = function (rule) {

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

    this._recursion = function (node, mask, classification) {

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

    this._classify = function () {

        this.classification = this._recursion("1-1", ee.Image(1), ee.Image(0))
            .select([0], ["classification"]);

    };

    /**
     * [getData description]
     * @return {[type]} [description]
     */
    this.getData = function () {

        return this.classification;
    };

    this.init(image, dtree);
};


var dtree = {
    "1-1": {
        "kind": "decision",
        "rule": {
            "variable": "cloud",
            "operator": ">=",
            "thresh": 30
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
            "variable": "shade",
            "operator": ">=",
            "thresh": 80
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
            "variable": null,
            "operator": null,
            "thresh": null
        },
        "class": {
            "value": 27,
            "name": "Not Observed",
            "color": "#d5d5e5"
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
            "variable": "ndfi",
            "operator": ">=",
            "thresh": 180
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
        "kind": "decision",
        "rule": {
            "variable": "gvs",
            "operator": ">",
            "thresh": 100
        },
        "class": null,
        "node": {
            "level": 3,
            "position": 2
        },
        "children": [{
            "level": 4,
            "position": 3
        }, {
            "level": 4,
            "position": 4
        }],
        "jstreeId": "dtree_5"
    },
    "4-3": {
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
            "level": 4,
            "position": 3
        },
        "children": [],
        "jstreeId": "dtree_6"
    },
    "4-4": {
        "kind": "class",
        "rule": {
            "variable": null,
            "operator": null,
            "thresh": null
        },
        "class": {
            "value": 6,
            "name": "Flooded Forest",
            "color": "#76a5af"
        },
        "node": {
            "level": 4,
            "position": 4
        },
        "children": [],
        "jstreeId": "dtree_7"
    },
    "4-1": {
        "kind": "decision",
        "rule": {
            "variable": "ndfi",
            "operator": ">=",
            "thresh": 70
        },
        "class": null,
        "node": {
            "level": 4,
            "position": 1
        },
        "children": [{
            "level": 5,
            "position": 1
        }, {
            "level": 5,
            "position": 2
        }],
        "jstreeId": "dtree_8"
    },
    "4-2": {
        "kind": "decision",
        "rule": {
            "variable": "ndfi",
            "operator": ">=",
            "thresh": 180
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
        "jstreeId": "dtree_9"
    },
    "5-3": {
        "kind": "class",
        "rule": {
            "variable": null,
            "operator": null,
            "thresh": null
        },
        "class": {
            "value": 7,
            "name": "Degraded Forest",
            "color": "#29eee4"
        },
        "node": {
            "level": 5,
            "position": 3
        },
        "children": [],
        "jstreeId": "dtree_10"
    },
    "5-4": {
        "kind": "decision",
        "rule": {
            "variable": "fci",
            "operator": ">=",
            "thresh": 100
        },
        "class": null,
        "node": {
            "level": 5,
            "position": 4
        },
        "children": [{
            "level": 6,
            "position": 7
        }, {
            "level": 6,
            "position": 8
        }],
        "jstreeId": "dtree_11"
    },
    "6-7": {
        "kind": "class",
        "rule": {
            "variable": null,
            "operator": null,
            "thresh": null
        },
        "class": {
            "value": 3,
            "name": "Dense Forest",
            "color": "#006400"
        },
        "node": {
            "level": 6,
            "position": 7
        },
        "children": [],
        "jstreeId": "dtree_12"
    },
    "6-8": {
        "kind": "class",
        "rule": {
            "variable": null,
            "operator": null,
            "thresh": null
        },
        "class": {
            "value": 8,
            "name": "Secondary Forest",
            "color": "#77a605"
        },
        "node": {
            "level": 6,
            "position": 8
        },
        "children": [],
        "jstreeId": "dtree_13"
    },
    "5-1": {
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
            "level": 5,
            "position": 1
        },
        "children": [],
        "jstreeId": "dtree_14"
    },
    "5-2": {
        "kind": "decision",
        "rule": {
            "variable": "shade",
            "operator": ">=",
            "thresh": 60
        },
        "class": null,
        "node": {
            "level": 5,
            "position": 2
        },
        "children": [{
            "level": 6,
            "position": 3
        }, {
            "level": 6,
            "position": 4
        }],
        "jstreeId": "dtree_15"
    },
    "6-3": {
        "kind": "class",
        "rule": {
            "variable": null,
            "operator": null,
            "thresh": null
        },
        "class": {
            "value": 21,
            "name": "Agriculture or Pasture",
            "color": "#A64D79"
        },
        "node": {
            "level": 6,
            "position": 3
        },
        "children": [],
        "jstreeId": "dtree_16"
    },
    "6-4": {
        "kind": "class",
        "rule": {
            "variable": null,
            "operator": null,
            "thresh": null
        },
        "class": {
            "value": 10,
            "name": "Non-Forest Natural Formations",
            "color": "#ff9966"
        },
        "node": {
            "level": 6,
            "position": 4
        },
        "children": [],
        "jstreeId": "dtree_17"
    }
};

/*
 * Main script
 */
params.geometry = ee.FeatureCollection("users/joaovsiqueira1/vector/cartas-raisg")
    .filterMetadata('name', 'equals', params.gridName);

// params to calculate ndfi amplitude
var paramsAmplitude = {
    "year": params.year,
    "carta": params.carta,
    "t0": params.year + "-01-01",
    "t1": params.year + "-12-31",
    "cloudcover": params.cloudcover,
    "sensor": params.sensor,
    "bioma": params.bioma,
    "region": params.region,
    "geometry": params.geometry
};

var col = new Collection(paramsAmplitude);
var sma = new SMA(col.getCollection(), paramsAmplitude);
var mask = new Mask(sma.getCollection(), paramsAmplitude);
var ndfi = new NDFI(mask.getCollection(), paramsAmplitude);
var ind = new Indexes(ndfi.getCollection(), paramsAmplitude);

var collection = ind.getCollection();

var ndfiAmplitude = new Amplitude(collection, paramsAmplitude).getData();

collection = collection.filterDate(params.t0, params.t1);

var comp = new Composite(collection);

var composite = comp.Median()
    .addBands({
        "srcImg": ndfiAmplitude,
        "names": ["ndfi_amplitude"],
        "overwrite": true
    })
    .addBands({
        "srcImg": mask.terrain,
        "names": ["slope"],
        "overwrite": true
    })
    .clip(params.geometry);

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

Map.centerObject(params.geometry, 10);

print(imageName);


classification = classification.set('year', params.t0.split('-')[0])
    .set('grid_name', params.gridName)
    .set('pais', params.pais.toUpperCase())
    .set('t0', params.t0)
    .set('t1', params.t1)
    .set('cloud_cover', params.cloudcover)
    .set('sensor', params.sensor);

print(classification);

Export.image.toAsset({
    "image": classification,
    "description": imageName,
    "assetId": assetOutput + "/" + imageName,//
    "region": params.geometry,
    "scale": 30,
    "maxPixels": 1e13,
    "pyramidingPolicy": {
        ".default": "mode"
    },
});

var amostraTotal = lista_amostra[0]
for (var i_amostra = 1; i_amostra < lista_amostra.length; i_amostra++) {
    amostraTotal = amostraTotal.merge(lista_amostra[i_amostra]);
}

var training = composite.sampleRegions({
    'collection': amostraTotal,
    'properties': ['class', 'class_id'],
    'scale': 30
});

// print(training);
Map.addLayer(poly, {palette: '#d63000'}, 'polygons');


Export.table.toDrive({
    'collection': training,
    'description': imageName,
    'fileNamePrefix': imageName,
    'fileFormat': 'CSV'
});