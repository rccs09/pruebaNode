### Manejo de archivos
Este es un paquete propio de nodejs
const fs = require('fs');

### pasar parametros por comandos
Este es un paquete externo, para instalar se de usar:
const argv = require('yargs').argv;



## tips git
### view branch on terminal
- execute de comand
  ```unix
  vi ~/.zshrc
  ```
- Agregar el texto
  ```txt
    parse_git_branch() {
        git branch 2> /dev/null | sed -n -e 's/^\* \(.*\)/[\1]/p'
    }
    COLOR_DEF=$'\e[0m'
    COLOR_USR=$'\e[38;5;243m'
    COLOR_DIR=$'\e[34;5;197m'
    COLOR_GIT=$'\e[38;5;2m'
    NEWLINE=$'\n'
    setopt PROMPT_SUBST
    export PROMPT='${COLOR_DIR}%d ${COLOR_GIT}$(parse_git_branch)${COLOR_DEF}%% '
  ```

 ### comandos basicos 
- Iniciar un proyecto git
git init
- Anadir todos los archivos
git add .
- 