;+
; NOME:
;     ResizeSameDims
;
; PROPOSITO:
;     Redimensionar imagens para as mesmas dimensões de uma imagem base, mantendo
;     as coordenadas originais e o tamanho do pixel intactos.  
;     
; AUTOR:
;     INSTITUTO DO HOMEM E MEIO AMBIENTE DA AMAZONIA - IMAZON.
;     Joao V. N. Siqueira.
;     Tecnico em Geodesia e Cartografia.
;     Avenida Domingos Marreiros, 2020.
;     Belem, PA - Brasil.
;     Fone: 3182-4000.
;     E-mail: joaovictor@imazon.org.br
;     http://www.imazon.org.br
;     
; CATEGORIA:
;     Saida de dados.
;     
; ENTRADA:
;     imageData: Uma imagem (N x M) com uma banda
;     
; PALAVRAS CHAVES:
;     iDims: Um vetor contendo cinco elementos correspondentes a imagem a ser redimensionada
;            [-1, X0, X, Y0, Y] - Padrao ENVI (Ver Documentacao do ENVI)
;
;     bDims: Um vetor contendo cinco elementos correspondentes a imagem base
;            [-1, X0, X, Y0, Y] - Padrao ENVI (Ver Documentacao do ENVI)  
;     
;     xULOffset: A diferença entre as coordenadas UTM de X0(Base) e X0(Imagem)
;                xULOffset = X0(Base) - X0(Imagem)
;     
;     xDROffset: A diferença entre as coordenadas UTM de X(Base) e X(Imagem)
;                xDROffset = X(Base) - X(Imagem)
;     
;     yULOffset: A diferença entre as coordenadas UTM de Y0(Base) e Y0(Imagem)
;                yULOffset = Y0(Base) - Y0(Imagem)
;     
;     yDROffset: A diferença entre as coordenadas UTM de Y(Base) e Y(Imagem)
;                yDROffset = Y(Base) - Y(Imagem)           
;     
; RESTRICOES:
;      Trabalha apenas com o Sistema de Coordenadas UTM
;     
; EXEMPLO:
;
;  HISTORICO DE MODIFICACOES:
;     # 4 Setembro 2010.
;       - Escrito por: Joao V. N. Siqueira.
;-
function ResizeSameDims, imageData, $
                         iDims = iDims, $
                         bDims = bDims, $
                         xULOffset = xULOffset, $
                         xDROffset = xDROffset, $
                         yULOffset = yULOffset, $
                         yDROffset = yDROffset
                            
   if xULOffset ge 0 then begin
      imageData = imageData[(xULOffset) : iDims[2], 0 : iDims[4]]
      help, imageData
   endif else begin
      imageData = [make_array(xULOffset * (-1), iDims[4] + 1., value = 0, /byte), imageData]
      help, imageData
   endelse
   
   if xDROffset gt 0 then begin
      imageData = [imageData, make_array(xDROffset, iDims[4] + 1., value = 0, /byte)]
      help, imageData
   endif else begin
      s = size(imageData)
      imageData = imageData[0 : ((s[1] - xDROffset * (-1)) - 1), 0 : iDims[4]]
      help, imageData
   endelse
   
   if yULOffset gt 0 then begin
      s = size(imageData) 
      imageData = [[make_array(s[1], yULOffset, value = 0, /byte)], [imageData]]
      help, imageData
   endif else begin
      s = size(imageData)
      imageData = imageData[0 : (s[1] - 1), (yULOffset * (-1)) : (s[2] - 1)]
      help, imageData
   endelse
   
   if yDROffset ge 0 then begin
      s = size(imageData)
      imageData = imageData[0 : (s[1] - 1), 0 : ((s[2] - yDROffset) - 1)]
      help, imageData
   endif else begin
      s = size(imageData)
      imageData = [[imageData], [make_array(s[1], yDROffset *(-1), value = 0, /byte)]]
      help, imageData
   endelse
   
   help, imageData
   return, imageData
   
end