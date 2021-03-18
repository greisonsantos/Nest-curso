import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('api/jogadores')
export class JogadoresController {

    @Get()
    async index(){
        return JSON.stringify({
            "nome": "Greison"
        })
    }

    @Post()
    async store(){

    }

    @Put()
    async update(){

    }

    @Delete()
    async delete(){
        
    }


}
