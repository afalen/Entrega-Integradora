# Entrega-de-la-Práctica-Integradora

# Consigna:
-Creación de servidor con express, que escuche en el puerto 8080.
-Separar las rutas en una carpeta Routes.
-Incluir los métodos GET, POST, PUT, DELETE.
-Conexión a la Base de Datos con MongoDB Atlas.
-Utilización de Mongoose para el modelado de los datos.
-Crear una base de datos con el nombre e-commerce.
-Crear dos colecciones: Users, Products (cada uno con su Schema).
-Users: nombre - email - id(no repetible).
-Products: nombre - categoria - precio(n°) - stock(n°) - imagen.

# Capturas del funcionamiento a través de Postman
En la Figura 1, se puede observar el uso del método GET para los usuarios que permite mostrar todos los usuarios en la base de datos.
[![users-get.png](https://i.postimg.cc/RhTJjPYC/users-get.png)](https://postimg.cc/XBpv5g3t)
# Figura 1. 

En la Figura 2, se puede observar el uso del método POST para los usuarios que permite agregar un nuevo usuario, para el ejemplo se agregó un usuario con nombre ‘Usuario de prueba’ 
y email ‘usertest@email.com’. Posteriormente en la Figura 3 se hace nuevamente el método GET para corroborar que se haya agregado correctamente el nuevo usuario.
[![users-post.png](https://i.postimg.cc/QMGDLXZm/users-post.png)](https://postimg.cc/dhBprc1Z)
# Figura 2. 

[![users-post1.png](https://i.postimg.cc/Fsq5c0G1/users-post1.png)](https://postimg.cc/PPmRnpgk)
# Figura 3.
