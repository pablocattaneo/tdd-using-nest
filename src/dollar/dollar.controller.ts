import { Controller } from '@nestjs/common';

export class Dollar {
  constructor(public amount:number){}
  times(multiplier: number): number{
    return this.amount *= multiplier
  }
}

@Controller('dollar')
export class DollarController {

}
