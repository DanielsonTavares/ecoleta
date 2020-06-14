import multer from "multer";
import path from "path";
import crypto from "crypto";

export default {
  storage: multer.diskStorage({
    /**destination-> local onde os arquivos enviados pelo usuário serão armazenados */
    destination: path.resolve(__dirname, "..", "..", "uploads"),

    /**A função filename é responsável por gerar um nome para ser utilizado no arquivo enviado pelo usuário
     * request-> mesmo request que é passado nas rotas. Serve para ter acesso a requisição que está vindo do front-end
     * file-> informações do arquivo (nome, tamanho, extensão, etc)
     * callback-> função que será chamada quando terminar de processar a função filename
     */
    filename: (request, file, callback) => {
      //Gerando um nome único para o arquivo enviado
      const hash = crypto.randomBytes(6).toString("hex");
      const fileName = `${hash}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
};
