Map.setCenter(-63.5000000, 4, 6);

// Setup parameters

//************ PARAMETERS FOR IMAGE VERIFICATION ******************
// For Landsat 7 change year intervals in the lines 30-36 of this script
var params = {
  'year'    : [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
  'path'    : [1, 2, 3, 4, 232, 233],
  'row'     : [53, 54, 55, 56, 57, 58, 59, 60],
  'clInit'  : [0, 25, 50, 75],
  'clStop'  : [25, 50, 75, 100],
  'skip'    : 25
}
//*****************************************************************

// function for attempt to remove clouds.
var maskClouds = function(raster) {
  var scored  = ee.Algorithms.Landsat.simpleCloudScore(raster);
  var rasters = scored.select(['cloud']); 
  return raster.updateMask(rasters.lt(params.clStop));
};

//************ FUNCTION FOR IMAGE VERIFICATION ******************

var vizbyPathRow = function(year, clInit, clStop, path, row, skip) {
  for(var y = 0; y < year.length; y++){
    
    // import GEE Landsat collection depending of year
    var coll_id;
    if(year[y] <= 2010) {
      coll_id = 'LT5_L1T_TOA'
    } else if(year[y] < 2013){
      coll_id = 'LE7_L1T_TOA'
    } else {
      coll_id = 'LC8_L1T_TOA'
    }
    var coll = ee.ImageCollection('LANDSAT/' + coll_id);
    
    //filter by date and cloud cover
    var fmyr = ee.Number(year[y]).format()
    
    for(var ci = 0; ci < clInit.length; ci++){
      for(var cs = 0; cs < clStop.length; cs++) {
        if(clStop[cs]-clInit[ci] == skip){
          var coll_fil = coll.filterDate(fmyr.cat("-01-01"), fmyr.cat("-12-31"))
            .filter(ee.Filter.gt('CLOUD_COVER', clInit[ci]))
            .filter(ee.Filter.lt('CLOUD_COVER', clStop[cs]))
            .map(maskClouds)
            
          /* Display information about collection loaded
          print(
            "LANDSAT/" + coll_id + " collection selected", 
            year[y], 'cloud ' + clInit[ci] + '-' + clStop[cs]
          )
          */
  
          for(var k = 0; k < path.length; k++) {
            for(var l = 0; l < row.length; l++) {
              if(
                // this condition is for display only the scenes
                // of venezuelan amazonia
                path[k] == 1 && row[l] < 60 || 
                path[k] == 2 && row[l] > 53 || 
                path[k] == 3 && row[l] > 54 && row[l] < 60 || 
                path[k] == 4 && row[l] > 54 && row[l] < 58 ||
                path[k] == 232 && row[l] > 53 && row[l] < 58 ||
                path[k] == 233 && row[l] > 52 && row[l] < 59
              ){
                //print(params.path[k] + '-' + params.row[l])
                coll_filt = coll_fil
                  .filter(ee.Filter.eq('WRS_PATH', path[k]))
                  .filter(ee.Filter.eq('WRS_ROW', row[l]))
          
                var dates = ee.List(coll_filt.get('date_range'));
                var dateRange = ee.DateRange(dates.get(0), dates.get(1));
          
                var size = coll_filt.size().getInfo();
                var output = {
                  'path-row' : path[k] + '-' + row[l],
                  'avl_date' : dateRange,
                  'avl_data' : size
                };
                print(year[y] + ',' + clInit[ci] + '-' +  clStop[cs] + ',' + path[k] + row[l] + ',' + output.avl_data);
              }
            }
          }
        }
      }
    }
  }
};

// Run verification
var coll_filt = vizbyPathRow(params.year, params.clInit, params.clStop, params.path, params.row, params.skip) 


//**************************************************************