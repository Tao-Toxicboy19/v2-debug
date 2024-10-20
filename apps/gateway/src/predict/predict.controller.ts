import { Controller, Delete, Get, Post } from '@nestjs/common'
import { PredictService } from './predict.service'

@Controller('predict')
export class PredictController {
    constructor(private readonly predictService: PredictService) {}

    @Post()
    async predict() {
        return this.predictService.update()
    }

    @Get('hello')
    async test(){
        return 'ok'
    }

    @Get()
    async findPredict(){
       return this.predictService.findPredict() 
    }

    @Delete()
    async delete(){
        return this.predictService.deleteData()
    }
}
