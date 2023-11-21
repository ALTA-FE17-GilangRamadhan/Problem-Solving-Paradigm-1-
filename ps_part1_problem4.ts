function lottery(num: number) {
  // your code here
  return new Promise((resolve, reject) => {
    let undian: number = Math.floor(Math.random() * 1000);
    console.log("undian lotre dimulai...");
    console.log("sedang mengundi nomor anda...");
    setTimeout(() => {
      if (undian == num) {
        resolve("selamat anda mendapatkan hadiah utama berupa mobil");
      } else {
        reject("maaf anda kurang beruntung");
      }
    }, 10000);
  });
}

lottery(5)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("undian lotre telah berakhir..."));
