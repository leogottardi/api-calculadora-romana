

# Api Calculadora Romana
<h1>
<img src="https://raw.githubusercontent.com/leogottardi/api-calculadora-romana/main/.github/api-calculadora.png">
</h1>

# Indice
- [Sobre](#-sobre)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como utilizar](#-como-utilizar)
- [Como baixar o projeto](#-como-baixar-o-projeto)


## 📑 Sobre

O projeto é uma api que recebe uma entrada de números romanos e devolve uma saida de soma/subtração dos números em decimal e romano.

---

## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias :

- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.js](https://nodejs.dev/)
- [Express](https://expressjs.com/pt-br/)
---
## 📓 Como utilizar
  Para utilizar a api você deve simular com [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).
  
 - Para somar deve utilizar a url: http://localhost:3333/sum
 - Para subtrair deve utilizar a url: http://localhost:3333/subtraction
 - O parâmetro deve ser passado no formato json com os valores dentro de um array como mostro a baixo. 
  ```
  {
  "values":["C","D","V"]
  }
  
  valores disponíveis:
  M: 1000
  CM:900
  D: 500
  CD:400
  C: 100
  XC:90
  L: 50
  XL:40
  X: 10
  IX:9
  V: 5
  IV:4
  I: 1
  
  ```
  Obs: Os valores são somados/subtraidos da esquerda para direita.
## 📦 Como baixar o projeto
```bash
    #Clonar o repositório
    $ git clone https://github.com/leogottardi/api-calculadora-romana.git

    #Entrar no diretório
    $ cd api-calculadora-romana

    #Instalar as dependencias
    $ npm install express

    #Iniciar o projeto
    $ node app.js
```
