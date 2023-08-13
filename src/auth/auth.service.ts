//Os providers são uma parte fundamental do NestJS e são usados para gerenciar a criação e compartilhamento de instâncias de classes.
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";

//Aqui, na classe AuthService, eu já estou criando os métodos de login e criação de conta, que serão necessários mais pra frente.
@Injectable({})
export class AuthService{
    constructor(private prisma: PrismaService) {}

    login() {
        return {msg: 'I have logged in!'}
    }

    signup(dto: AuthDto) {
        return{msg: 'I have signed up!'}
    }
}