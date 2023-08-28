import { DataSource, Repository } from 'typeorm';
import { Project } from './entities/project.entity';
export declare class ProjectRepository extends Repository<Project> {
    constructor(dataSource: DataSource);
}
