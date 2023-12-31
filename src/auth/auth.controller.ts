//Controllers are responsible for handling incoming requests and returning responses to the client.
import { Body, Controller, Post} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController{
    constructor (private authService: AuthService) {} //A ideia por trás disso é que você pode usar o AuthService dentro do AuthController para implementar a lógica relacionada à autenticação.

    //Aqui eu estou criando as rotas da aplicação, é simples desse jeito, diferente de outros frameworks, eu nem preciso colocar qual o tipo do que está sendo retornado. Acontece que, a ideia aqui é deixar o controller fazendo apenas o gerenciamento das rotas, toda lógica com as regras de negócio ficará a critério do provider (auth.services.ts).
    @Post('login')
    login() {
        return this.authService.login();
    }

    @Post('signup')
    signUp(@Body() dto: AuthDto) { //Aqui estou pegando o body da requisição para fazer a validação.
        return this.authService.signup(dto);
    }
}