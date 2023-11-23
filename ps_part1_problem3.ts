function jajanBoba(uang: number, callback: (uang: number) => void): void {
  // Your code here
  let hargaBoba: number = 5000;
  if (uang < hargaBoba) {
    console.log("Maaf uang kamu belum cukup untuk membeli boba");
    console.log("sisa uang kamu sebesar ", uang);
    callback(uang);
  } else {
    let sisaUang: number = uang - hargaBoba;
    setTimeout(() => {
      console.log("Kamu jajan boba dengan harga Rp", hargaBoba);
      console.log("sisa uang kamu ", sisaUang);
      callback(sisaUang);
    }, 5000);
  }
}

function jajanSeblak(uang: number): void {
  // Your code here
  let hargaSeblak: number = 8000;
  if (uang < hargaSeblak) {
    console.log("Maaf uang kamu belum cukup untuk membeli seblak");
    console.log("sisa uang kamu sebesar ", uang);
  } else {
    let sisaUang: number = uang - hargaSeblak;
    setTimeout(() => {
      console.log("Kamu jajan seblak denga harga Rp", hargaSeblak);
      console.log("sisa uang kamu ", sisaUang);
    }, 9000);
  }
}

// jajanBoba(20000, jajanSeblak);
jajanBoba(10000, jajanSeblak);
