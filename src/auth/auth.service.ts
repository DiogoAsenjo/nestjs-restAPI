//Os providers são uma parte fundamental do NestJS e são usados para gerenciar a criação e compartilhamento de instâncias de classes.
import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { error } from "console";

//Aqui, na classe AuthService, eu já estou criando os métodos de login e criação de conta, que serão necessários mais pra frente.
@Injectable({})
export class AuthService{
    constructor(private prisma: PrismaService) {}

    login() {
        return {msg: 'I have logged in!'}
    }

    async signup(dto: AuthDto) {
        //Gerando o hash do password
        const hash = await argon.hash(dto.password);
        //Salvando o novo usuário no BD
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash,
                }
            });
    
            delete user.hash;
            //Retornando o usuário salvo
            return user;
        } catch (error) {
            if(error instanceof PrismaClientKnownRequestError) {
                if(error.code === 'P2002') {
                    throw new ForbiddenException('Email already registered')
                }
            }
        } throw error 
    }
}