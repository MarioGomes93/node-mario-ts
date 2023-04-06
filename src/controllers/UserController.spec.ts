import { UserService } from "../services/UserService";
import { UserController } from "./UserController";
import { Request } from "express";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";

describe('UserController', () => {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn(),
        deleteUser: jest.fn(),
        getAllUsers: jest.fn()
    } 

    const userController = new UserController(mockUserService as UserService);

    it('Deve adionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'Marios',
                email: 'mariodebora@gmail.com'
            }
        } as Request

        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado'})

    })

    it('Deve deletar o último usuário cadastrado', () => {
        const mockRequest = { } as Request

        const mockResponse = makeMockResponse()
        userController.deleteUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(202)
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário deletado'})

    })

    it('Deve verificar a resposta de erro caso o usuário não informe o name ou o email', () => {
        const mockRequest = {
            body: {
                name: 'Máriosss',
                email: ''
            }
        } as Request

        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request: name e email são obrigatórios'})

    })

    it('Deve verificar a resposta de erro caso o usuário não informe o name ou o email', () => {
        const mockRequest = {
            body: {
                name: '',
                email: 'mariodebora@gmail'
            }
        } as Request

        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request: name e email são obrigatórios'})

    })

    it('Deve verificar se a função getAllUsers está sendo chamada', () => {
        const mockRequest = { } as Request

        const mockResponse = makeMockResponse()
        userController.getAllUsers(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
    })

} )


