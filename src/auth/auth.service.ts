//Os providers são uma parte fundamental do NestJS e são usados para gerenciar a criação e compartilhamento de instâncias de classes.
import { Injectable } from "@nestjs/common";

//Aqui, na classe AuthService, eu já estou criando os métodos de login e criação de conta, que serão necessários mais pra frente.
@Injectable({})
export class AuthService{
    
    login() {

    }

    signup() {

    }
}