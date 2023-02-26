# TCIT-Post-App-BackEnd

## Para correr el proyecto
usar comando: `npm run dev`

## Endpoint utilizados
baseURL = http://localhost:4000

1- Peticion get Url: http://localhost:4000/posts:

Nos trae una lista de post 
Ejemplo 
```
[
    {
        "id": 8,
        "name": "Alvaro Rafael Martinez",
        "description": "test",
        "createdAt": "2023-01-26T05:50:14.354Z",
        "updatedAt": "2023-01-26T05:50:14.354Z"
    },
    {
        "id": 10,
        "name": "prueba ",
        "description": "2",
        "createdAt": "2023-01-26T06:00:06.184Z",
        "updatedAt": "2023-01-26T06:00:06.184Z"
    },
  
]
```

2- Peticion Post Url: http://localhost:4000/posts
Nos creara un registro con la estructura siguiente.
Debemos enviar por body
Json con la siguiente esctructura.

```
{
	"name": "string",
	"description": "string"
}

```
Nos devolvera por body el objeto creado 

Ejemplo de respuesta

```
{
        "id": 10,
        "name": "prueba ",
        "description": "2",
        "createdAt": "2023-01-26T06:00:06.184Z",
        "updatedAt": "2023-01-26T06:00:06.184Z"
    }
```
3 - Peticion Delete Url: http://localhost:4000/posts/id
Eliminara el registro con el id deseado y nos retornara el registro eliminado

Ejemplo de respuesta

```
{
        "id": 10,
        "name": "prueba ",
        "description": "2",
        "createdAt": "2023-01-26T06:00:06.184Z",
        "updatedAt": "2023-01-26T06:00:06.184Z"
    }
```



