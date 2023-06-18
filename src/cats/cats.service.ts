import { Cat } from './interfaces/cat.interface';
import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import {randomStringGenerator} from "@nestjs/common/utils/random-string-generator.util";

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  init() {
    const dto = new CreateCatDto();
    dto.name = 'x';
    dto.age = 6;
    dto.breed = 'xxxx';
    this.cats.push(dto);
  }
  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
