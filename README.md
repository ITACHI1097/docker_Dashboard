# Pasos para dockerizar este Dashboard y no morir en el intento

### Pre-requisitos 📋

1. Tener instalado docker y funcionando, comprobarlo con: (comandos ejecutados en cmd)
```
>docker --version
```
```
>docker-compose --version
```
_si no se reconocen estos comandos, por favor vaya a instalar_

2. Tener la aplicacion Django funcionando

### Instalación 🔧

_1. Ejecutar cmd dentro de la carpeta de uso_

_2. Ejecutar docker-compose up --build (probablemente salga un error de log que desconoce BD,  a continuacion resolveremos esto)_

_3. Desde una nueva ventana de cmd (tambien dentro de la carpeta de uso), ejecutamos:_
```
>docker exec -it app-docker_db_postgres_1 psql -U postgres , esto abre el psql para poder gestionar la BD dentro del contenedor
```
```
#CREATE DATABASE db_icfes WITH OWNER postgres; , creamos la BD para poder migrar los sql (comando dentro de psql abierto anteriormente)
```
```
>docker cp shemaicfes.sql app-docker_db_postgres_1:/ esto copia los schemas .sql hacia el contenedor de la BD
```
```
>docker cp datosicfes.sql app-docker_db_postgres_1:/ esto copia los datos .sql hacie el contenedor de la BD
```
```
>docker exec -it app-docker_db_postgres_1 psql -U postgres -f schemaicfes.sql db_icfes , esto migra los schemas a la BD
```
```
>docker exec -it app-docker_db_postgres_1 psql -U postgres -f datosicfes.sql db_icfes , esto migra los datos a la BD
```
_4. Paramos la ejecucion de docker con ctrl+c_

_5. Eecutamos:_

```
>docker-compose run django_app python Proyecto_Tesis/manage.py migrate , asi tendremos los usuarios ya creados
```

## Ejecutar docker-compose up --build, finalmente tendremos el Dashboard dockerizado. ⚙️



---
⌨️ con ❤️ por ITACHI.
