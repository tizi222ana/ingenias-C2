# Introduccion a Git y GitHub

## Comando basicos de Consola

- `cd` : Cambia al directorio principal
- `cd de ruta`: Navega al directorio inidcado
- `cd ..`: Vueleve un directorio atras
- `ls`:Lista todas las carpetas o archivos en el directorio
- `ls -a`: Incluye una lista de archivos ocultos
- `pwp`: Muestran la ruta completa del directorio
- `mkdir nombreCarpeta` :Crear una nueva carpeta 
- `touch nombreArchivo`: Crea un nuevo archivo
>[!WARNING]
> tiene que incluir SIEMPRE el tipo de archivo por ejemplo .html ,.css, .md
````BASH

## inicializando un nuevo proyecto/repositorio con comandos que nos da GitHub por defult
$ echo "# ingenias-C2" >> README.md
git init
git add README.md
git commit -m "primer commit"
git branch -M main
git remote add origin https://github.com/tizi222ana/ingenias-C2.git
 git push -u origin main
````
> [!NOTE]
> SERIE DE COMANDOS QUE DA GITHUB A LA HORA DE CREAR UN NUEVO REPOSITORIO

1. `Echo "echo "# ingenias-C2" >> README.md"`
    -Crea un archivo README.md en el directorio inidicando con el contenido del titiulo del repositorio

2. `git init`(se usa **una sola vez, _OBLIGATORIO_**)
   -Inicializacion un nuevo respositorio de git en el directorio inidicado

3. `git add readme.md` o `git add.` (se va actualizar en mas de una ocasion )
   -Agrega el archivo "README.md" (Puede ser cualquier otro archivo o carpeta) en el area de preparacion o agega *todos los archivos y carpetas* con `git add.`

4. `git commet -m "first commit"` (se va a actualizar en mas de una ocasion)
   -Registrar todos los cambios que se agregaron en el area de preparacion (con el comando anterior), con el comentario "first commit". Lo que esta entre comillas va a variar dependiendo del cambio realizado

5. `git branch -M main` (se usa **usa sola vez,_OBLIGATORIO_**)
    -crea y cambia una rama "main", que sera la ultima rama principal

6. `it remote add origin https://github.com/tizi222ana/ingenias-C2.git` (se usa **una sola vez,_OBLIGATORIO_**)
   -Enlaza tu repositorio local con el repositorio remoto de git hub

7. `git push u- oringin main`(se va a usarv mas de una ocasion sin el u-)
   -Sube todos los cambios realizados que esten en el area de preparacion

## inicializando un nuevo proyecto/repositorio con comandos propios
>[!CAUTION]
>**SE USA UNA SOLA VER DE FORMA OBLIGATORIA**

1. -Inicializacion un nuevo respositorio de git en el directorio inidicado
```bash
git init
```
2. -Inicializacion un nuevo respositorio de git en el directorio inidicado
```bash
git branch -M main
```
3.Enlaza tu repositorio local con el repositorio remoto de git hub
```bash
git remote add origin https://github.com/tizi222ana/ingenias-C2.git
```
## Guardar cambios y subirlos al repositorio
>[!IMPORTANT]
>Se utiliza en mas de una ocasion

Cada ves que realizen cambios importantes en tu codigo, se realiza los siguintes comandos;

1. Agrega todos los archivos y carpetas modificados al area de preparacion
```bash
git add.
```
2. --Registrar todos los cambios que se agregaron en el area de preparacion (con el comando anterior). Lo que esta entre comillas va a variar dependiendo del cambio realizado
```bash
git commint -m "comentario relaconado con el cambio relacionado"
```
3.Sube todos los ca,bios en el area de preparacion
```bash
git push origin main
```


