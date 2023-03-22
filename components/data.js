export const todoList = [
    {
        id: 1,
        title: 'Implementar inicio de sesión',
        user: {
            name: 'Tyler Sweet',
            avatar: '/tyler.png'
        },
        comments: [
            {
                id: 11,
                createdAt: '2023-03-19',
                text: 'Este feature es prioritario',
                user: {
                    name: 'Maria Teresa',
                    avatar: '/teresa.png'
                },
            },
            {
                id: 12,
                createdAt: '2023-03-20',
                text: 'Es facil el reto',
                user: {
                    name: 'Ana María',
                    avatar: '/anamaria.png'
                },
            }
        ]
    },
    {
        id: 2,
        title: 'Crear estados de botones en el home',
        user: {
            name: 'Steve Creed',
            avatar: '/steve.png'
        },
        comments: [
            {
                id: 21,
                text: 'Este lo puedo realizar mañana',
                user: {
                    name: 'Maria Teresa',
                    avatar: '/teresa.png'
                }
            },
            {
                id: 22,
                text: 'Esto es de ley',
                user: {
                    name: 'Tyler Sweet',
                    avatar: '/tyler.png'
                },
            }
        ]
    },
    {
        id: 3,
        title: 'Actualizar imágenes de usuarios en el home',
    },
    {
        id: 4,
        title: 'Implementar Ilustraciones de pantallas de error',
        user: {
            name: 'Ana María',
            avatar: '/anamaria.png'
        }
    },
    {
        id: 5,
        title: 'Mejorar tiempo de carga del home',
        user: {
            name: 'Maria Teresa',
            avatar: '/teresa.png'
        }
    },
    {
        id: 6,
        title: 'Desvincular Github',
    }

]

export const inProgressList = [
    {
        id: 7,
        title: 'Creación de layout',
        user: {
            name: 'Steve Creed',
            avatar: '/steve.png'
        }
    }
]

export const doneList = [
    {
        id: 8,
        title: 'Creación de tarjetas',
        user: {
            name: 'Tyler Sweet',
            avatar: '/tyler.png'
        }
    },
    {
        id: 9,
        title: 'Sin Foto ni comentarios',
    }
]