(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework


  var carImg = document.querySelectorAll('.data-ref'),
      theModel = document.querySelector('.modelName'),
      thePrice = document.querySelector('.priceInfo'),
      theDesc = document.querySelector('.modelDetails');

      function changeText () {
        let textIndex = carData[this.id];

        theModel.firstChild.nodeValue = textIndex.model;
        thePrice.firstChild.nodeValue = textIndex.price;
        theDesc.firstChild.nodeValue = textIndex.description;

        carImg.forEach(function(image, index){
          image.classList.add("nonActive");
        });

        this.classList.remove("nonActive");
      }

        carImg.forEach(function(image, index){
          image.addEventListener('click', changeText, false);
        });




})();
