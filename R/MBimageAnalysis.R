# path <- "E:/chelsa_climate/shiny/ColorAnalysiss/"

########################################################################
# FUNCTION FOR PROCESS IMAGES
########################################################################

processImages <- function(path, cards, year){
  library(raster)
  library(magick)
  
  year <- as.character(year)
  patt <- paste("^.*", year, "_*.*png", sep = "")
  ncar <- length(cards)

  print(paste("processing card", cards, "year", year))
  
  dirn <- paste(path, "/", cards, sep = "")
  indt <- dir(dirn, pattern = patt, full.names = T)

  r <- list(rgb = image_read(indt[1]), class = image_read(indt[2]))
  rqc <- image_compare(r[[1]], r[[2]], "phash")
  image_write(rqc, paste(dirn, "/rqc", year, ".jpg", sep = ""), format = "jpg")
  
  ### raster get nodata pixels
  
  imgr <- stack(paste(dirn, "/rqc", year, ".jpg", sep = ""))

  rrc <- calc(imgr, function(x) {
    yrs <- as.character(2008:2015)
    if(cards == "NA-20-Y-A" & year == "2007"){
      ifelse(x[[1]] > 210 & x[[2]] < 230, 0, 1)
    } else {
      cnd <- any(
        cards == "NA-19-X-B" & year %in% yrs,
        cards == "NA-20-Y-A" & year == "2016",
        cards == "NB-20-V-B" & year == "2012",
        cards == "NB-20-Z-A" & year == "2009",
        cards == "NB-20-V-C" & year == "2013"
      )
      ifelse(cnd, 
             ifelse(x[[2]] < 15 & x[[3]] < 40, 0, 1),
             ifelse(x[[2]] > 150 & x[[3]] > 150, 0, 1)
      )
    }

  })
  
  ncels <- ncell(rrc)

  if(cards == "NC-20-Z-D") {
    ncels <- ncell(rrc) - 160260
  } else if(cards == "NC-20-Z-A") {
    ncels <- ncell(rrc) - 43453
  } else {
    ncels <- ncels
  }

  nodataPixels <- freq(rrc, value = 0)
  nodataPercen <- nodataPixels * 100/ncels

  l <- list(
    inputImage = imgr, outputImage = rrc,
    nodataPixels = nodataPixels, nodataPercen = nodataPercen
  )
  
  writeRaster(rrc, paste(dirn, "/rrc", year, ".TIF", sep = ""), 
              format = "GTiff", overwrite = T)
  
  file.remove(paste(dirn, "/rqc", year, ".jpg", sep = ""))

  plot(rrc, box = F, axes = F, legend = F, col = gray.colors(12),
       main = paste("NA values for card ", cards, "year", year))

  return(l)
}

########################################################################
# IMPLEMENTATION
########################################################################


card <- "NC-20-Z-A"
year <- 2017
proc <- processImages("data", card, year)
