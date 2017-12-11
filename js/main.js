(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
  //const httpRequest = new XMLHttpRequest();

  var carImg = document.querySelectorAll('.data-ref');


    function changeText () {
      const url = './includes/functions.php?carModel=' + this.id;

      //the fetch API uses new Javascript promise API
      fetch(url) //do an ajax call with fetch
      .then((resp) => resp.json()) //will take response - and convert to JSON
      .then((data) => { processResult(data); }) //call the process function
      .catch(function(error) {
        //catch any error and report it to the console
        console.log(error);
      });


      //make an AJAX called to the DB; handle errors first
      /*if (!httpRequest) {
        alert('giving up...');
        return false;
      }

      httpRequest.onreadystatechange = processRequest;
      httpRequest.open('GET', './includes/functions.php?carModel=' + this.id);
      httpRequest.send(); */
    }

      function processResult(data) {
        const { modelName, pricing, modelDetails } = data;

        //let textIndex = carData[this.id];

          let theModel = document.querySelector('.modelName').textContent = modelName;
          let thePrice = document.querySelector('.priceInfo').innerHTML = pricing;
          let theDesc = document.querySelector('.modelDetails').textContent = modelDetails;

        //theModel.firstChild.nodeValue = textIndex.model;
        //thePrice.firstChild.nodeValue = textIndex.price;
        //theDesc.firstChild.nodeValue = textIndex.description;

        carImg.forEach(function(image, index){
          image.classList.add("nonActive");
        });

        document.querySelector(`#${data.model}`).classList.remove("nonActive");
      }

        carImg.forEach(function(image, index){
          image.addEventListener('click', changeText, false);
        });


//inserted from GIT
      /*  function processRequest() {
    let reqIndicator = document.querySelector('.request-state');
    reqIndicator.textContent = httpRequest.readyState;
    //debugger;

    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) { // 200 means everything is awesome
      //  debugger;
        let data = JSON.parse(httpRequest.responseText);

        processResult(data);
      } else {
        alert('There was a problem with the request.');
      }
    }
} */


})();
