import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(createUserInput: CreateUserInput) {
    try {
      return await this.prisma.user.create({
        data: {
          name: createUserInput.name,
          email: createUserInput.email,
          password: createUserInput.password
        }
      });
    } catch (e) {
      throw e;
    }
  }

  async findAll() {
    try {
      return await this.prisma.user.findMany({ where: {} });
    } catch (e) {
      throw e;
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.user.findUnique({ where: { id } });
    } catch (e) {
      throw e;
    }
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    return await this.prisma.user.update({
      where: { id },
      data: updateUserInput
    });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
