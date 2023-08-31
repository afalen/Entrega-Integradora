# Entrega de la Práctica Integradora

## Consigna:
- Creación de servidor con express, que escuche en el puerto 8080.
- Separar las rutas en una carpeta Routes.
- Incluir los métodos GET, POST, PUT, DELETE.
- Conexión a la Base de Datos con MongoDB Atlas.
- Utilización de Mongoose para el modelado de los datos.
- Crear una base de datos con el nombre e-commerce.
- Crear dos colecciones: Users, Products (cada uno con su Schema).
-- Users: nombre - email - id(no repetible).
-- Products: nombre - categoria - precio(n°) - stock(n°) - imagen.

## Capturas del funcionamiento a través de Postman
### Users
En la **Figura 1**, se puede observar el uso del método **GET** que permite mostrar todos los usuarios en la base de datos.

[![users-get.png](https://i.postimg.cc/RhTJjPYC/users-get.png)](https://postimg.cc/XBpv5g3t)
> Figura 1

En la **Figura 2**, se puede observar el uso del método **POST** que permite agregar un nuevo usuario, para el ejemplo se agregó un usuario con nombre ‘Usuario de prueba’ 
y email ‘usertest@email.com’. Posteriormente en la **Figura 3** se hace nuevamente el método **GET** para corroborar que se haya agregado correctamente el nuevo usuario.

[![users-post.png](https://i.postimg.cc/QMGDLXZm/users-post.png)](https://postimg.cc/dhBprc1Z)
> Figura 2

[![users-post1.png](https://i.postimg.cc/Fsq5c0G1/users-post1.png)](https://postimg.cc/PPmRnpgk)
> Figura 3

En la **Figura 4**, se puede observar el uso del método **PUT** que permite modificar un usuario determinado; en el ejemplo modificamos el 'Usuario de prueba' a 'Usuario cambiado' y el email de 'usertest@email.com' a 'userchange@email.com'. Más adelante se realiza nuevamente el uso de método **GET** para corroborar la modificación en la **Figura 5**.

[![users-put.png](https://i.postimg.cc/Ss3SS0xN/users-put.png)](https://postimg.cc/njKb2Pm6)
> Figura 4

[![users-put1.png](https://i.postimg.cc/yxHGXnfy/users-put1.png)](https://postimg.cc/8JZwTdg7)
> Figura 5

En la **Figura 6**, se puede obeservar el uso del método **DELETE** que permite eliminar un determinado usuario, a través del ID, en el ejemplo se elimina el usuario de prueba. En la **Figura 7** se aplica el método **GET** para corroborar la eliminación del usuario.

[![users-delete.png](https://i.postimg.cc/x8P9KXPq/users-delete.png)](https://postimg.cc/p5pNvX4t)
> Figura 6

[![users-delete1.png](https://i.postimg.cc/XYP4cS9K/users-delete1.png)](https://postimg.cc/nXqypWRM)
> Figura 7

### Products
En la **Figura 1**, se puede observar el uso del método **GET** que permite mostrar todos los productos en la base de datos.

[![products-get.png](https://i.postimg.cc/prWwMqDX/products-get.png)](https://postimg.cc/JDF6b369)
> Figura 1

En la **Figura 2**, se puede observar el uso del método **POST** que permite agregar un nuevo producto, para el ejemplo se agregó un producto con nombre ‘Producto de prueba' , categoria 'prueba', precio '1000', stock '10' y imagen 'prueba.jpg'. Posteriormente en la **Figura 3** se hace nuevamente el método **GET** para corroborar que se haya agregado correctamente el nuevo producto.

[![products-post.png](https://i.postimg.cc/3xTbsLYM/products-post.png)](https://postimg.cc/Tpt9mJKQ)
> Figura 2

[![products-post1.png](https://i.postimg.cc/jjq35LDZ/products-post1.png)](https://postimg.cc/gx5HtcqZ)
> Figura 3

En la **Figura 4**, se puede observar el uso del método **PUT** que permite modificar un producto determinado; en el ejemplo modificamos el 'Producto de prueba' a 'Producto de prueba cambiado' y la imagen de 'prueba.jpg' a 'pruebacambiada.jpg'. Más adelante se realiza nuevamente el uso de método **GET** para corroborar la modificación en la **Figura 5**.

[![products-put.png](https://i.postimg.cc/TPhjFmLM/products-put.png)](https://postimg.cc/06RJJz0c)
> Figura 4

[![products-put1.png](https://i.postimg.cc/NFv1KzNB/products-put1.png)](https://postimg.cc/cgTKjXyb)
> Figura 5

En la **Figura 6**, se puede obeservar el uso del método **DELETE** que permite eliminar un determinado producto, a través del ID; en el ejemplo se elimina el producto de prueba. En la **Figura 7** se aplica el método **GET** para corroborar la eliminación del usuario.

[![products-delete.png](https://i.postimg.cc/qqGCzMhx/products-delete.png)](https://postimg.cc/YLhSP7xv)
> Figura 6

[![products-delete1.png](https://i.postimg.cc/15JqSXZ9/products-delete1.png)](https://postimg.cc/Tp5wqRwS)
> Figura 7
