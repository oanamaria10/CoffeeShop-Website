window.onload=function(){
    //retinem in localStorage numarul de produse din Meniu
    // Obțineți elementul principal
    const mainElement = document.querySelector('main');
    const produse = mainElement.querySelectorAll('img');
    const numarProduse = produse.length;
    localStorage.setItem('numProducts', numarProduse);
    console.log("Meniul contine: " + numarProduse + " produse!");
  }