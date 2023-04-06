export interface User {
    name: string
    email: string
} 

const db = [
    {
        name: 'Debora',
        email: 'debora918273645@gmail.com'
    }
]

export class UserService {
    db: User[]

    constructor( 
        database = db 
    ){
        this.db = database
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }

        this.db.push(user)
        console.log('DB atualizado', this.db)
    }

    deleteUser = () => {
        this.db.pop()
        console.log('DB atualizado', this.db)
    }

    getAllUsers = () => {
        return this.db
    }
}

export default UserService;