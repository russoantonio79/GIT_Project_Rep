window.onload = function () {
    var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', function (e) {
        var file = fileInput.files[0];
        var textType = /text.*/;
       
        
        var lines = new Array();
        var stopCounting = 0;
        var commandInput0 = new Array();
        var count;
        var conteggio;
        var contatore = 0;

        var xHoover=0;
        var yHoover = 0;
        var counterLine = 0;

        var loadCounter = 0;

        if (file.type.match(textType)) {
            var reader = new FileReader();

            reader.onload = function (e) {
                fileDisplayArea.innerText = reader.result;

                // Read Entire  Mapped file
                console.log(this.result);
                document.getElementById('fileDisplayArea').textContent =
                           [this.result.split('\n')].join(' ');

                // By lines
                lines = this.result.split('\n');
                for (var line = 0; line < lines.length; line++) {
                    console.log("Read row by row " + lines[line]);
                    
                }
            }

            reader.readAsText(file);

/**NEW FILE***/
  function readBlob(opt_startByte, opt_stopByte) {

      var files = document.getElementById('fileInput').files;
      if (!files.length) {
          alert('Please select a file!');
          return;
      }

      var file = files[0];
      var start = parseInt(opt_startByte) || 0;
      var stop = parseInt(opt_stopByte) || file.size - 1;

      var reader = new FileReader();

       reader.onloadend = function(evt) {
          if (evt.target.readyState == FileReader.DONE) { // DONE == 2
              document.getElementById('DimensionGrid').textContent = ["FILE LOADED"].join('');             
                 if (loadCounter == 0) {
                  document.getElementById('commandInput').textContent =
                           [commandInput0[stopCounting].toString()].join(' ');
                  document.getElementById('CoordinatHooverResult').textContent =
                           ['X = ' + xHoover.toString(), '  Y =  ' + yHoover.toString()].join(' ');
                  document.getElementById('conteggio').textContent =
                      [conteggio.toString()].join('');
                  loadCounter = loadCounter + 1;
              } else {//If the result is visible i need to alert to load another file
                 

                  window.alert("LOAD ANOTHER FILE: THANK YOU!!!!");
                  
              }
          }


      };

      var blob = file.slice(start, stop + 1);
      
      reader.readAsArrayBuffer(blob);
   
      console.log("prova");
      return file;

     
      
  
  }
      

  function readCommand(file ,starting, stopping,comandstart,comandend,counter) {
      var start = parseInt(starting) || 0;
      var stop = parseInt(stopping) || file.size - 1;
      var reader = new window.FileReader();
      reader.readAsDataURL(file.slice(start, stop));
      reader.onloadend = function () {
          
          //Leggo la prima riga///
          for (var line = 0; line < lines.length; line++) {
              if (lines[line].charAt(0) == 'N' || lines[line].charAt(0) == 'N' || lines[line].charAt(0) == 'S' || lines[line].charAt(0) == 'W' ||
                  lines[line].charAt(0) == 'E') 
              {
                  counterLine = line + 1;
                  console.log("commandInput0[line] = to Comand input to move  Hoover: lines[counterLine]" + lines[line]);
              }
              commandInput0[line] = lines[line];//commandInput0 contiene per ogni riga 3 elementi compresi di spazio//
              console.log("First For commandInput0[line] " + lines[line]);
              console.log("counterLine " + counterLine);
          }

               console.log(" commandCounter(); ");
              commandCounter();
              console.log("Conteggio:"+ conteggio.toString());
         
   
      }

  }

 

  function commandCounter() {//Program Core to Compute Hoover Cleaning Dirty

     
      var stringaComando;
      var commandLenght = 0 ;
      var HooverPosition;
      var dimension ;// Dimensions Map
      var dirty = new Array();//to load only the dirty
      var countDirty= 0;//To count Dirty in the map
     

      dimension = lines[0];
      HooverPosition = lines[1];
      console.log("dimension x" + dimension.charAt(0));
      console.log("HooverPosition " + HooverPosition);
      console.log("HooverPosition x " + HooverPosition.charAt(0));
      console.log("dimension y" + dimension.charAt(2));
      console.log("HooverPosition y " + HooverPosition.charAt(2));
      console.log("counterLine from  commandCounter()" + counterLine);
      
      for (var countLine = 2; countLine < counterLine ; countLine++) {//Start to count after second position because the first two are for Map and Hoover
          console.log("After if : vcommandInput0[countLine] " + commandInput0[countLine]);
          dirty[countDirty] = commandInput0[countLine];
          console.log("dirty " + dirty[countDirty]);
          countDirty++;//Count how many Dirty ther are
          console.log("After commandInput0[line] " + lines[countLine]);
          console.log("countLine " + countLine);
          stopCounting = countLine;
          console.log("stopCounting " + countLine);
      }
      
     
          console.log("stringaComando = Input comand to move  Hoover: " + lines[stopCounting].toString());
          console.log("length stringaComando =  Input comand to move  Hoover" + lines[stopCounting].toString().length);
          commandLenght = lines[stopCounting].toString().length;

          console.log("Length : commandLenght: " + commandLenght.toString());
          console.log("Length : countDirty: " + countDirty.toString());

        

      console.log("Inizializing xHoover: " + HooverPosition.charAt(0));
      console.log("Inizializing yHoover" + HooverPosition.charAt(2));

      xHoover = Number(HooverPosition.charAt(0));
      yHoover = Number(HooverPosition.charAt(2));

      console.log("Inizializing xHoover: " + xHoover);
      console.log("Inizializing yHoover" + yHoover);
      conteggio = 0;
      
      var counterFlag = 0;
     
      for (var i = 0; i < commandLenght ; i++)
      {
          

          console.log("Conteggio in commandCounter N :" + conteggio);
          console.log("Conteggio in commandCounter contatore =: " + conteggio.toString());
          console.log("Conteggio in commandCounter inputCommand =: " + commandInput0[0].toString());
          console.log("Into last for stringaComando.toString().charAt(i).trim() : " + lines[stopCounting].toString().charAt(i));
            
              if (lines[stopCounting].toString().charAt(i) == 'N') {//Check Command to move Hoover
                  console.log("Conteggio in commandCounter N:" + conteggio);
                  console.log("xHoover" + HooverPosition.charAt(0));
                  console.log("yHoover" + HooverPosition.charAt(2));
                  console.log("xHoover" + xHoover);
                  console.log("yHoover" + yHoover);

                  
                  yHoover = Number(yHoover) + 1;


                  console.log("Post in commandCounter N :" + conteggio);
                 
                  console.log("Post xHoover" + xHoover);
                 
                  console.log("Post yHoover" + yHoover);
                  
                  for (var dirtyCounting = 0; dirtyCounting < countDirty; dirtyCounting++) {//Check all Dirty on the command
                      if (dirty[dirtyCounting].charAt(0) == xHoover && yHoover == dirty[dirtyCounting].charAt(2)) {
                          console.log(" PreChange dirty[dirtyCounting]X N " + dirty[dirtyCounting].charAt(0));
                          console.log(" PreChange dirty[dirtyCounting]Y N " + dirty[dirtyCounting].charAt(2));
                          console.log(" dirty[dirtyCounting]X N " + dirty[dirtyCounting].charAt(0));
                          console.log(" dirty[dirtyCounting]Y N " + dirty[dirtyCounting].charAt(2));
                          console.log("Conteggio in commandCounter N:" + conteggio);
                          conteggio = conteggio + 1;
                          console.log("Post Conteggio in commandCounter N:" + conteggio);
                          dirty[dirtyCounting] = "777";
                          console.log("dirty[dirtyCounting]  N:" + dirty[dirtyCounting].charAt(0));
                          console.log("dirty[dirtyCounting]  N:" + dirty[dirtyCounting].charAt(2));
                        
                      }
                      console.log(" dirty[dirtyCounting]X N " + dirty[dirtyCounting].charAt(0));
                      console.log(" dirty[dirtyCounting]Y N " + dirty[dirtyCounting].charAt(2));
                      console.log("conteggio" + conteggio);
                  }


                 

              }
              else if (lines[stopCounting].toString().charAt(i) == 'S') {//Check Command to move Hoover
                 
                  console.log("Conteggio in commandCounter S:" + conteggio);
                  console.log("xHoover" + HooverPosition.charAt(0));
                  console.log("yHoover" + HooverPosition.charAt(2));
                  console.log("xHoover" + xHoover);
                  console.log("yHoover" + yHoover);
                 
                
                  yHoover = Number(yHoover) - 1;



                  console.log("Post in commandCounter S :" + conteggio);
                  
                  console.log("Post xHoover" + xHoover);
                 
                  console.log("Post yHoover" + yHoover);
                  
                  for (var dirtyCounting = 0; dirtyCounting < countDirty; dirtyCounting++) {//Check all Dirty on the command
                      if (dirty[dirtyCounting].charAt(0) == xHoover && yHoover == dirty[dirtyCounting].charAt(2)) {
                          console.log(" PreChange dirty[dirtyCounting]X N " + dirty[dirtyCounting].charAt(0));
                          console.log(" PreChange dirty[dirtyCounting]Y N " + dirty[dirtyCounting].charAt(2));
                          console.log(" dirty[dirtyCounting]X N " + dirty[dirtyCounting].charAt(0));
                          console.log(" dirty[dirtyCounting]Y N " + dirty[dirtyCounting].charAt(2));
                          console.log("Conteggio in commandCounter N:" + conteggio);
                          conteggio = conteggio + 1;
                          console.log("Post Conteggio in commandCounter N:" + conteggio);
                          ddirty[dirtyCounting] = "777";
                          console.log("dirty[dirtyCounting]  S:" + dirty[dirtyCounting].charAt(0));
                          console.log("dirty[dirtyCounting]  S:" + dirty[dirtyCounting].charAt(2));
                      }
                      console.log(" dirty[dirtyCounting]X S " + dirty[dirtyCounting].charAt(0));
                      console.log(" dirty[dirtyCounting]Y S " + dirty[dirtyCounting].charAt(2));
                      console.log("conteggio" + conteggio);
                  }


                 
                 

              }
              else if (lines[stopCounting].toString().charAt(i) == 'E') {//Check Command to move Hoover
                  
                  console.log("Conteggio in commandCounter E:" + contatore);
                  console.log("xHoover" + HooverPosition.charAt(0));
                  console.log("yHoover" + HooverPosition.charAt(2));
                  console.log("xHoover" + xHoover);
                  console.log("yHoover" + yHoover);
                         xHoover = Number(xHoover) + 1;


                  console.log("Post in commandCounter E :" + conteggio);
                  
                  console.log("Post xHoover" + xHoover);
                  console.log("Post yHoover" + yHoover);
                  

                  for (var dirtyCounting = 0; dirtyCounting < countDirty; dirtyCounting++) {//Check all Dirty on the command
                      if (dirty[dirtyCounting].charAt(0) == xHoover && yHoover == dirty[dirtyCounting].charAt(2)) {
                          console.log(" PreChange dirty[dirtyCounting]X E " + dirty[dirtyCounting].charAt(0));
                          console.log(" PreChange dirty[dirtyCounting]Y E " + dirty[dirtyCounting].charAt(2));
                          console.log(" dirty[dirtyCounting]X E " + dirty[dirtyCounting].charAt(0));
                          console.log(" dirty[dirtyCounting]Y E " + dirty[dirtyCounting].charAt(2));
                          console.log("Conteggio in commandCounter E:" + conteggio);
                          conteggio = conteggio + 1;
                          console.log("Post Conteggio in commandCounter E:" + conteggio);
                          dirty[dirtyCounting] = "777";
                          console.log("dirty[dirtyCounting]  E:" + dirty[dirtyCounting].toString().charAt(0));
                          console.log("dirty[dirtyCounting]  E:" + dirty[dirtyCounting].toString().charAt(2));
                      }
                      console.log(" dirty[dirtyCounting]X E " + dirty[dirtyCounting].charAt(0));
                      console.log(" dirty[dirtyCounting]Y E " + dirty[dirtyCounting].charAt(2));
                      console.log("conteggio" + conteggio.toString());
                  }

                  
              }
              else if (lines[stopCounting].toString().charAt(i) == 'W') {//Check Command to move Hoover
                 // console.log("valueToCompare W" + valueToCompare.toString());
                  console.log("Conteggio in commandCounter W :" + conteggio);
                  console.log("xHoover" + HooverPosition.charAt(0));
                  console.log("yHoover" + HooverPosition.charAt(2));
                  console.log("xHoover" + xHoover);
                  console.log("yHoover" + yHoover);                 
                  xHoover = Number(xHoover) - 1;


                  console.log("Post in commandCounter W :" + conteggio);
                  
                  console.log("Post xHoover" + xHoover);
                  
                  console.log("Post yHoover" + yHoover);
                  
                  for (var dirtyCounting = 0; dirtyCounting < countDirty; dirtyCounting++) {//Check all Dirty on the command
                      if (dirty[dirtyCounting].charAt(0) == xHoover && yHoover == dirty[dirtyCounting].charAt(2)) {
                          console.log(" PreChange dirty[dirtyCounting]X W " + dirty[dirtyCounting].charAt(0));
                          console.log(" PreChange dirty[dirtyCounting]Y W " + dirty[dirtyCounting].charAt(2));

                          console.log(" dirty[dirtyCounting]X W " + dirty[dirtyCounting].charAt(0));
                          console.log(" dirty[dirtyCounting]Y W " + dirty[dirtyCounting].charAt(2));
                          console.log("Conteggio in commandCounter W:" + conteggio);
                          conteggio = conteggio + 1;
                          console.log("Post Conteggio in commandCounter W:" + conteggio);
                          dirty[dirtyCounting] = "777";
                          console.log("dirty[dirtyCounting]  W:" + dirty[dirtyCounting].toString());
                          console.log("dirty[dirtyCounting]  W:" + dirty[dirtyCounting].toString());
                      }
                      console.log(" dirty[dirtyCounting]X W " + dirty[dirtyCounting].charAt(0));
                      console.log(" dirty[dirtyCounting]Y W " + dirty[dirtyCounting].charAt(2));
                      console.log("conteggio" + conteggio);
                  }

                 
              }

         
      }
          
     
      console.log("Final xHoover" + HooverPosition.charAt(0));
      console.log("Final xHoover" + xHoover);
      console.log("Final yHoover" + HooverPosition.charAt(2));
      console.log("Final yHoover" + yHoover);
     
      console.log("Final conteggio" + conteggio);
      
  }
            document.querySelector('.readBytesButtons').addEventListener('click', function(evt) {//To View Loaded Mapped File
                if (evt.target.tagName.toLowerCase() == 'button') {
                    var startByte = evt.target.getAttribute('data-startbyte');
                    var endByte = evt.target.getAttribute('data-endbyte');
                    readBlob(startByte, endByte);
                    readCommand(file,24,36,13,16,0);////CommandINput                                 

                }
            }, false);       




            ///*****NEW FILE READER END*****/

         

        } else {
            fileDisplayArea.innerText = "File not supported!";
        }

       



    })
    

   
}




