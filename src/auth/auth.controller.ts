//Controllers are responsible for handling incoming requests and returning responses to the client.
import { Controller } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController{
    constructor (private authService: AuthService) {} //A ideia por trás disso é que você pode usar o AuthService dentro do AuthController para implementar a lógica relacionada à autenticação.
}