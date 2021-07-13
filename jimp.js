var Jimp = require("jimp");
const fs = require("fs");

const imagens = fs.readdirSync("./imagens/");

imagens.forEach((arquivo) => {
  Jimp.read("imagens/" + arquivo)
    .then(function (imagem) {
      imagem
        .cover(256, 256)
        .quality(60)
        .greyscale()
        .write("otimizada/" + arquivo);
    })
    .catch(function (err) {
      console.log(err);
    });
});
