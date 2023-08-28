import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectRepository } from './project.repository';

@Injectable()
export class ProjectService {
constructor(private readonly projectRepo: ProjectRepository){}

  create(createProjectDto: CreateProjectDto) : Promise<any>{
  const createproject= this.projectRepo.create(createProjectDto)
  return this.projectRepo.save(createproject)
  }

  findAll() {
    return `This action returns all project`;
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}