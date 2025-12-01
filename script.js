// yaha hum function chala rahe hain
function arrfun() {
  const output = document.getElementById("output");

  // STEP 1: 3 second baad array return karega
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]); 
    }, 3000);
  })

    // STEP 2: Odd numbers hata kar sirf even rakhega
    .then((arr) => {
      const evens = arr.filter(num => num % 2 === 0);

      // 1 second baad evens screen par show karega
      return new Promise((resolve) => {
        setTimeout(() => {
          output.innerText = evens.join(",");
          resolve(evens);
        }, 1000);
      });
    })

    // STEP 3: Even numbers ko 2 se multiply karega
    .then((evens) => {
      const doubled = evens.map(num => num * 2);

      // 2 second baad doubled values show karega
      return new Promise((resolve) => {
        setTimeout(() => {
          output.innerText = doubled.join(",");
          resolve(doubled);
        }, 2000);
      });
    });
}

// function ko call kar diya
arrfun();
