# L13 - Node.js 与后端类型

## 本课时目标
- 掌握 Node.js 环境下的 TypeScript 配置
- 学会 REST API 的类型定义和契约设计
- 理解 Zod 与 TypeScript 的结合使用
- 掌握依赖注入的类型安全实现
- 实现一个类型安全的 REST API 服务

## 1. Node.js TypeScript 配置

### 1.1 项目初始化和配置

```json
// package.json
{
  "name": "node-ts-api",
  "version": "1.0.0",
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "test": "jest",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "express": "^4.18.2",
    "zod": "^3.22.4",
    "reflect-metadata": "^0.1.13"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^20.10.0",
    "@types/jest": "^29.5.8",
    "typescript": "^5.3.2",
    "ts-node-dev": "^2.0.0",
    "jest": "^29.7.0",
    "ts-jest": "^29.1.1"
  }
}
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"],
      "@/types/*": ["types/*"],
      "@/controllers/*": ["controllers/*"],
      "@/services/*": ["services/*"],
      "@/middleware/*": ["middleware/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
```

### 1.2 服务器基础设置

```typescript
// src/server.ts
import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

// 类型定义
interface AppError extends Error {
  statusCode: number;
  isOperational: boolean;
}

class Server {
  private app: Express;
  private port: number;

  constructor(port: number = 3000) {
    this.app = express();
    this.port = port;
    this.setupMiddleware();
    this.setupRoutes();
    this.setupErrorHandling();
  }

  private setupMiddleware(): void {
    // 安全中间件
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(compression());

    // 解析中间件
    this.app.use(express.json({ limit: '10mb' }));
    this.app.use(express.urlencoded({ extended: true, limit: '10mb' }));

    // 请求日志
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
      next();
    });
  }

  private setupRoutes(): void {
    this.app.get('/health', (req: Request, res: Response) => {
      res.json({ status: 'OK', timestamp: new Date().toISOString() });
    });

    // API 路由将在这里添加
    this.app.use('/api/v1', this.createApiRoutes());
  }

  private createApiRoutes(): express.Router {
    const router = express.Router();
    
    // 用户路由示例
    router.get('/users', async (req: Request, res: Response, next: NextFunction) => {
      try {
        // 实现将在后面添加
        res.json({ users: [] });
      } catch (error) {
        next(error);
      }
    });

    return router;
  }

  private setupErrorHandling(): void {
    // 404 处理
    this.app.use('*', (req: Request, res: Response) => {
      res.status(404).json({
        error: 'Not Found',
        message: `Route ${req.originalUrl} not found`
      });
    });

    // 全局错误处理
    this.app.use((error: AppError, req: Request, res: Response, next: NextFunction) => {
      const statusCode = error.statusCode || 500;
      const message = error.isOperational ? error.message : 'Internal Server Error';

      console.error('Error:', error);

      res.status(statusCode).json({
        error: error.name || 'Error',
        message,
        ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
      });
    });
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

// 启动服务器
const server = new Server(3000);
server.start();

export default Server;
```

## 2. REST API 类型契约

### 2.1 通用 API 类型定义

```typescript
// src/types/api.ts
import { Request } from 'express';

// 通用 API 响应类型
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  meta?: {
    timestamp: string;
    requestId: string;
    pagination?: PaginationMeta;
  };
}

// 分页元数据
export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// 分页查询参数
export interface PaginationQuery {
  page?: number;
  limit?: number;
  sort?: string;
  order?: 'asc' | 'desc';
}

// 扩展的 Request 接口
export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
  requestId?: string;
}

// API 错误代码
export enum ApiErrorCode {
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR',
  AUTHORIZATION_ERROR = 'AUTHORIZATION_ERROR',
  NOT_FOUND = 'NOT_FOUND',
  CONFLICT = 'CONFLICT',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  RATE_LIMIT_EXCEEDED = 'RATE_LIMIT_EXCEEDED'
}

// 标准 HTTP 响应状态
export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500
}

// CRUD 操作类型
export interface CreateResponse<T> {
  success: true;
  data: T;
  meta: {
    timestamp: string;
    requestId: string;
  };
}

export interface ReadResponse<T> extends CreateResponse<T> {}

export interface UpdateResponse<T> extends CreateResponse<T> {}

export interface DeleteResponse {
  success: true;
  meta: {
    timestamp: string;
    requestId: string;
    deleted: boolean;
  };
}

export interface ListResponse<T> {
  success: true;
  data: T[];
  meta: {
    timestamp: string;
    requestId: string;
    pagination: PaginationMeta;
  };
}
```

### 2.2 实体类型定义

```typescript
// src/types/entities.ts
import { z } from 'zod';

// 用户实体
export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(2).max(50),
  avatar: z.string().url().optional(),
  role: z.enum(['user', 'admin', 'moderator']),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  lastLoginAt: z.date().optional()
});

export type User = z.infer<typeof UserSchema>;

// 用户创建 DTO
export const CreateUserSchema = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  lastLoginAt: true
}).partial({
  isActive: true,
  role: true
}).extend({
  password: z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 
    'Password must contain uppercase, lowercase and number')
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;

// 用户更新 DTO
export const UpdateUserSchema = CreateUserSchema.partial().omit({
  password: true
});

export type UpdateUserDto = z.infer<typeof UpdateUserSchema>;

// 文章实体
export const ArticleSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(200),
  content: z.string().min(10),
  excerpt: z.string().max(500).optional(),
  slug: z.string(),
  status: z.enum(['draft', 'published', 'archived']),
  authorId: z.string().uuid(),
  categoryId: z.string().uuid(),
  tags: z.array(z.string()),
  publishedAt: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  viewCount: z.number().nonnegative(),
  likeCount: z.number().nonnegative()
});

export type Article = z.infer<typeof ArticleSchema>;

// 文章创建 DTO
export const CreateArticleSchema = ArticleSchema.omit({
  id: true,
  slug: true,
  createdAt: true,
  updatedAt: true,
  viewCount: true,
  likeCount: true,
  publishedAt: true
}).partial({
  status: true,
  excerpt: true,
  tags: true
});

export type CreateArticleDto = z.infer<typeof CreateArticleSchema>;

// 文章更新 DTO
export const UpdateArticleSchema = CreateArticleSchema.partial();

export type UpdateArticleDto = z.infer<typeof UpdateArticleSchema>;
```

## 3. Zod + TypeScript 运行时验证

### 3.1 验证中间件

```typescript
// src/middleware/validation.ts
import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';
import { ApiResponse, ApiErrorCode, HttpStatus } from '@/types/api';

// 验证中间件工厂函数
export const validate = {
  // 验证请求体
  body: <T>(schema: ZodSchema<T>) => {
    return (req: Request, res: Response, next: NextFunction): void => {
      try {
        const validatedData = schema.parse(req.body);
        req.body = validatedData;
        next();
      } catch (error) {
        if (error instanceof ZodError) {
          const response: ApiResponse = {
            success: false,
            error: {
              code: ApiErrorCode.VALIDATION_ERROR,
              message: 'Validation failed',
              details: error.errors.map(err => ({
                field: err.path.join('.'),
                message: err.message,
                code: err.code
              }))
            },
            meta: {
              timestamp: new Date().toISOString(),
              requestId: req.headers['x-request-id'] as string || 'unknown'
            }
          };

          res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(response);
        } else {
          next(error);
        }
      }
    };
  },

  // 验证查询参数
  query: <T>(schema: ZodSchema<T>) => {
    return (req: Request, res: Response, next: NextFunction): void => {
      try {
        const validatedData = schema.parse(req.query);
        req.query = validatedData as any;
        next();
      } catch (error) {
        if (error instanceof ZodError) {
          const response: ApiResponse = {
            success: false,
            error: {
              code: ApiErrorCode.VALIDATION_ERROR,
              message: 'Query validation failed',
              details: error.errors.map(err => ({
                field: err.path.join('.'),
                message: err.message,
                code: err.code
              }))
            }
          };

          res.status(HttpStatus.BAD_REQUEST).json(response);
        } else {
          next(error);
        }
      }
    };
  },

  // 验证路径参数
  params: <T>(schema: ZodSchema<T>) => {
    return (req: Request, res: Response, next: NextFunction): void => {
      try {
        const validatedData = schema.parse(req.params);
        req.params = validatedData as any;
        next();
      } catch (error) {
        if (error instanceof ZodError) {
          const response: ApiResponse = {
            success: false,
            error: {
              code: ApiErrorCode.VALIDATION_ERROR,
              message: 'Parameter validation failed',
              details: error.errors.map(err => ({
                field: err.path.join('.'),
                message: err.message,
                code: err.code
              }))
            }
          };

          res.status(HttpStatus.BAD_REQUEST).json(response);
        } else {
          next(error);
        }
      }
    };
  }
};

// 查询参数验证模式
export const PaginationQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
  sort: z.string().optional(),
  order: z.enum(['asc', 'desc']).default('desc')
});

export const IdParamSchema = z.object({
  id: z.string().uuid()
});

export const EmailQuerySchema = z.object({
  email: z.string().email()
});
```

### 3.2 验证工具类

```typescript
// src/utils/validation.ts
import { ZodSchema, z } from 'zod';

export class ValidationUtils {
  // 创建验证器
  static createValidator<T>(schema: ZodSchema<T>) {
    return {
      validate: (data: unknown): T => {
        return schema.parse(data);
      },
      
      safeValidate: (data: unknown): { success: true; data: T } | { success: false; error: z.ZodError } => {
        const result = schema.safeParse(data);
        return result.success ? 
          { success: true, data: result.data } : 
          { success: false, error: result.error };
      },
      
      validateAsync: async (data: unknown): Promise<T> => {
        return await schema.parseAsync(data);
      }
    };
  }

  // 条件验证
  static conditional<T, U>(
    condition: (data: unknown) => boolean,
    trueSchema: ZodSchema<T>,
    falseSchema: ZodSchema<U>
  ) {
    return z.union([
      z.any().refine(condition).transform(() => trueSchema),
      z.any().refine(data => !condition(data)).transform(() => falseSchema)
    ]);
  }

  // 数组项验证
  static validateArray<T>(itemSchema: ZodSchema<T>) {
    return z.array(itemSchema).min(1, 'Array cannot be empty');
  }

  // 分页数据验证
  static validatePaginatedData<T>(itemSchema: ZodSchema<T>) {
    return z.object({
      items: z.array(itemSchema),
      total: z.number().nonnegative(),
      page: z.number().positive(),
      limit: z.number().positive(),
      totalPages: z.number().nonnegative()
    });
  }

  // 搜索查询验证
  static createSearchSchema(fields: string[]) {
    return z.object({
      q: z.string().min(1, 'Search query is required'),
      fields: z.array(z.enum(fields as [string, ...string[]])).optional(),
      limit: z.coerce.number().int().positive().max(100).default(10),
      offset: z.coerce.number().int().nonnegative().default(0)
    });
  }
}

// 自定义验证器
export const customValidators = {
  // 强密码验证
  strongPassword: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/, 
      'Password must contain uppercase, lowercase, number and special character'),
  
  // 用户名验证
  username: z.string()
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username cannot exceed 30 characters')
    .regex(/^[a-zA-Z0-9_-]+$/, 'Username can only contain letters, numbers, underscores and hyphens'),
  
  // URL 验证
  url: z.string().url('Invalid URL format'),
  
  // 日期范围验证
  dateRange: z.object({
    startDate: z.string().datetime(),
    endDate: z.string().datetime()
  }).refine(
    (data) => new Date(data.startDate) <= new Date(data.endDate),
    {
      message: 'End date must be after start date',
      path: ['endDate']
    }
  ),
  
  // 文件上传验证
  fileUpload: z.object({
    fieldname: z.string(),
    originalname: z.string(),
    encoding: z.string(),
    mimetype: z.string(),
    size: z.number().max(5 * 1024 * 1024, 'File size cannot exceed 5MB'),
    buffer: z.instanceof(Buffer)
  })
};
```

## 4. 依赖注入容器

### 4.1 IoC 容器实现

```typescript
// src/container/container.ts
import 'reflect-metadata';

// 服务标识符
export const ServiceIdentifier = Symbol('ServiceIdentifier');

// 服务装饰器
export const Injectable = () => {
  return (target: any) => {
    Reflect.defineMetadata(ServiceIdentifier, target, target);
  };
};

// 注入装饰器
export const Inject = (token: any) => {
  return (target: any, propertyKey: string | symbol | undefined, parameterIndex: number) => {
    const existingTokens = Reflect.getMetadata('design:paramtypes', target) || [];
    existingTokens[parameterIndex] = token;
    Reflect.defineMetadata('design:paramtypes', existingTokens, target);
  };
};

// 依赖注入容器
export class Container {
  private services = new Map<any, any>();
  private factories = new Map<any, () => any>();

  // 注册服务
  register<T>(token: any, implementation: new (...args: any[]) => T): void {
    this.services.set(token, implementation);
  }

  // 注册工厂函数
  registerFactory<T>(token: any, factory: () => T): void {
    this.factories.set(token, factory);
  }

  // 注册单例实例
  registerInstance<T>(token: any, instance: T): void {
    this.services.set(token, () => instance);
  }

  // 解析服务
  resolve<T>(token: any): T {
    // 检查是否有工厂函数
    if (this.factories.has(token)) {
      return this.factories.get(token)();
    }

    // 检查是否有注册的服务
    if (this.services.has(token)) {
      const implementation = this.services.get(token);
      
      if (typeof implementation === 'function') {
        // 获取构造函数参数类型
        const paramTypes = Reflect.getMetadata('design:paramtypes', implementation) || [];
        
        // 递归解析依赖
        const dependencies = paramTypes.map((dep: any) => this.resolve(dep));
        
        // 创建实例
        return new implementation(...dependencies);
      }
      
      return implementation;
    }

    throw new Error(`Service not registered: ${token.toString()}`);
  }

  // 检查服务是否已注册
  isRegistered(token: any): boolean {
    return this.services.has(token) || this.factories.has(token);
  }

  // 清空容器
  clear(): void {
    this.services.clear();
    this.factories.clear();
  }
}

// 全局容器实例
export const container = new Container();
```

### 4.2 服务层实现

```typescript
// src/services/user.service.ts
import { Injectable } from '@/container/container';
import { User, CreateUserDto, UpdateUserDto } from '@/types/entities';
import { PaginationQuery } from '@/types/api';

@Injectable()
export class UserService {
  // 模拟数据存储
  private users: User[] = [];

  constructor() {
    // 初始化一些测试数据
    this.seedData();
  }

  private seedData(): void {
    const testUser: User = {
      id: '123e4567-e89b-12d3-a456-426614174000',
      email: 'test@example.com',
      name: 'Test User',
      role: 'user',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.users.push(testUser);
  }

  // 创建用户
  async create(userData: CreateUserDto): Promise<User> {
    const user: User = {
      ...userData,
      id: crypto.randomUUID(),
      isActive: userData.isActive ?? true,
      role: userData.role ?? 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // 检查邮箱是否已存在
    const existingUser = this.users.find(u => u.email === user.email);
    if (existingUser) {
      throw new Error('Email already exists');
    }

    this.users.push(user);
    return user;
  }

  // 根据ID查找用户
  async findById(id: string): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }

  // 根据邮箱查找用户
  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) || null;
  }

  // 获取用户列表
  async findMany(query: PaginationQuery): Promise<{ users: User[]; total: number }> {
    let filteredUsers = [...this.users];

    // 排序
    if (query.sort) {
      filteredUsers.sort((a, b) => {
        const aValue = a[query.sort as keyof User];
        const bValue = b[query.sort as keyof User];
        
        if (aValue === undefined || bValue === undefined) return 0;
        
        const comparison = aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        return query.order === 'asc' ? comparison : -comparison;
      });
    }

    const total = filteredUsers.length;
    const offset = (query.page - 1) * query.limit;
    const paginatedUsers = filteredUsers.slice(offset, offset + query.limit);

    return {
      users: paginatedUsers,
      total
    };
  }

  // 更新用户
  async update(id: string, updateData: UpdateUserDto): Promise<User | null> {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      return null;
    }

    const updatedUser = {
      ...this.users[userIndex],
      ...updateData,
      updatedAt: new Date()
    };

    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  // 删除用户
  async delete(id: string): Promise<boolean> {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      return false;
    }

    this.users.splice(userIndex, 1);
    return true;
  }

  // 检查用户是否存在
  async exists(id: string): Promise<boolean> {
    return this.users.some(user => user.id === id);
  }
}

// 服务接口定义
export interface IUserService {
  create(userData: CreateUserDto): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findMany(query: PaginationQuery): Promise<{ users: User[]; total: number }>;
  update(id: string, updateData: UpdateUserDto): Promise<User | null>;
  delete(id: string): Promise<boolean>;
  exists(id: string): Promise<boolean>;
}
```

## 5. 控制器层实现

### 5.1 基础控制器

```typescript
// src/controllers/base.controller.ts
import { Response, NextFunction } from 'express';
import { AuthenticatedRequest, ApiResponse, HttpStatus } from '@/types/api';

export abstract class BaseController {
  // 成功响应
  protected success<T>(
    res: Response,
    data: T,
    statusCode: number = HttpStatus.OK,
    meta?: any
  ): Response {
    const response: ApiResponse<T> = {
      success: true,
      data,
      meta: {
        timestamp: new Date().toISOString(),
        requestId: this.getRequestId(),
        ...meta
      }
    };

    return res.status(statusCode).json(response);
  }

  // 错误响应
  protected error(
    res: Response,
    message: string,
    statusCode: number = HttpStatus.INTERNAL_SERVER_ERROR,
    code?: string,
    details?: any
  ): Response {
    const response: ApiResponse = {
      success: false,
      error: {
        code: code || 'INTERNAL_ERROR',
        message,
        details
      },
      meta: {
        timestamp: new Date().toISOString(),
        requestId: this.getRequestId()
      }
    };

    return res.status(statusCode).json(response);
  }

  // 分页响应
  protected paginated<T>(
    res: Response,
    data: T[],
    pagination: any,
    statusCode: number = HttpStatus.OK
  ): Response {
    const response: ApiResponse<T[]> = {
      success: true,
      data,
      meta: {
        timestamp: new Date().toISOString(),
        requestId: this.getRequestId(),
        pagination
      }
    };

    return res.status(statusCode).json(response);
  }

  // 获取请求ID
  private getRequestId(): string {
    // 这里应该从请求上下文中获取
    return 'unknown';
  }

  // 处理异步错误
  protected asyncHandler(fn: Function) {
    return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  }
}
```

### 5.2 用户控制器

```typescript
// src/controllers/user.controller.ts
import { Request, Response, NextFunction } from 'express';
import { BaseController } from './base.controller';
import { UserService, IUserService } from '@/services/user.service';
import { validate, PaginationQuerySchema, IdParamSchema } from '@/middleware/validation';
import { CreateUserSchema, UpdateUserSchema } from '@/types/entities';
import { container } from '@/container/container';
import { Inject } from '@/container/container';

export class UserController extends BaseController {
  constructor(
    @Inject(UserService) private userService: IUserService
  ) {
    super();
  }

  // 创建用户
  createUser = this.asyncHandler(async (req: Request, res: Response) => {
    const userData = CreateUserSchema.parse(req.body);
    const user = await this.userService.create(userData);
    return this.success(res, user, 201);
  });

  // 获取用户列表
  getUsers = this.asyncHandler(async (req: Request, res: Response) => {
    const query = PaginationQuerySchema.parse(req.query);
    const { users, total } = await this.userService.findMany(query);

    const pagination = {
      page: query.page,
      limit: query.limit,
      total,
      totalPages: Math.ceil(total / query.limit),
      hasNext: query.page * query.limit < total,
      hasPrev: query.page > 1
    };

    return this.paginated(res, users, pagination);
  });

  // 获取单个用户
  getUserById = this.asyncHandler(async (req: Request, res: Response) => {
    const { id } = IdParamSchema.parse(req.params);
    const user = await this.userService.findById(id);

    if (!user) {
      return this.error(res, 'User not found', 404, 'NOT_FOUND');
    }

    return this.success(res, user);
  });

  // 更新用户
  updateUser = this.asyncHandler(async (req: Request, res: Response) => {
    const { id } = IdParamSchema.parse(req.params);
    const updateData = UpdateUserSchema.parse(req.body);

    const user = await this.userService.update(id, updateData);

    if (!user) {
      return this.error(res, 'User not found', 404, 'NOT_FOUND');
    }

    return this.success(res, user);
  });

  // 删除用户
  deleteUser = this.asyncHandler(async (req: Request, res: Response) => {
    const { id } = IdParamSchema.parse(req.params);
    const deleted = await this.userService.delete(id);

    if (!deleted) {
      return this.error(res, 'User not found', 404, 'NOT_FOUND');
    }

    return this.success(res, null, 204);
  });
}

// 路由定义
import { Router } from 'express';

export function createUserRoutes(): Router {
  const router = Router();
  const userController = container.resolve(UserController);

  router.post(
    '/',
    validate.body(CreateUserSchema),
    userController.createUser
  );

  router.get(
    '/',
    validate.query(PaginationQuerySchema),
    userController.getUsers
  );

  router.get(
    '/:id',
    validate.params(IdParamSchema),
    userController.getUserById
  );

  router.put(
    '/:id',
    validate.params(IdParamSchema),
    validate.body(UpdateUserSchema),
    userController.updateUser
  );

  router.delete(
    '/:id',
    validate.params(IdParamSchema),
    userController.deleteUser
  );

  return router;
}
```

## 6. 实战：REST API 服务实现

### 6.1 完整的服务配置

```typescript
// src/config/services.ts
import { container } from '@/container/container';
import { UserService, IUserService } from '@/services/user.service';
import { UserController } from '@/controllers/user.controller';

// 注册服务
export function configureServices(): void {
  // 注册用户服务
  container.register<IUserService>(UserService, UserService);
  
  // 注册用户控制器（会自动注入依赖）
  container.register(UserController, UserController);
}

// 服务初始化
export function initializeServices(): void {
  configureServices();
  
  // 可以在这里进行服务初始化逻辑
  console.log('Services initialized successfully');
}
```

### 6.2 API 应用主文件

```typescript
// src/app.ts
import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { initializeServices, container } from '@/config/services';
import { createUserRoutes } from '@/controllers/user.controller';
import { errorHandler } from '@/middleware/error-handler';
import { requestLogger } from '@/middleware/request-logger';

export class Application {
  private app: Express;

  constructor() {
    this.app = express();
    this.initializeServices();
    this.setupMiddleware();
    this.setupRoutes();
    this.setupErrorHandling();
  }

  private initializeServices(): void {
    initializeServices();
  }

  private setupMiddleware(): void {
    // 安全中间件
    this.app.use(helmet());
    this.app.use(cors({
      origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
      credentials: true
    }));
    this.app.use(compression());

    // 请求解析
    this.app.use(express.json({ limit: '10mb' }));
    this.app.use(express.urlencoded({ extended: true, limit: '10mb' }));

    // 请求日志
    this.app.use(requestLogger);

    // 请求ID生成
    this.app.use((req, res, next) => {
      req.headers['x-request-id'] = req.headers['x-request-id'] || 
        crypto.randomUUID();
      next();
    });
  }

  private setupRoutes(): void {
    // 健康检查
    this.app.get('/health', (req, res) => {
      res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        version: process.env.npm_package_version || '1.0.0'
      });
    });

    // API 路由
    const apiRouter = express.Router();
    
    // v1 API
    apiRouter.use('/users', createUserRoutes());
    
    this.app.use('/api/v1', apiRouter);

    // 404 处理
    this.app.use('*', (req, res) => {
      res.status(404).json({
        success: false,
        error: {
          code: 'NOT_FOUND',
          message: `Route ${req.originalUrl} not found`
        },
        meta: {
          timestamp: new Date().toISOString(),
          requestId: req.headers['x-request-id']
        }
      });
    });
  }

  private setupErrorHandling(): void {
    this.app.use(errorHandler);
  }

  public getApp(): Express {
    return this.app;
  }
}
```

### 6.3 错误处理中间件

```typescript
// src/middleware/error-handler.ts
import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { ApiResponse, ApiErrorCode, HttpStatus } from '@/types/api';

export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;
  public code: string;

  constructor(message: string, statusCode: number, code: string = 'APP_ERROR') {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    this.code = code;

    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
  let errorCode = ApiErrorCode.INTERNAL_ERROR;
  let message = 'Internal Server Error';
  let details: any = undefined;

  // 处理 Zod 验证错误
  if (error instanceof ZodError) {
    statusCode = HttpStatus.UNPROCESSABLE_ENTITY;
    errorCode = ApiErrorCode.VALIDATION_ERROR;
    message = 'Validation failed';
    details = error.errors.map(err => ({
      field: err.path.join('.'),
      message: err.message,
      code: err.code,
      received: err.received
    }));
  }
  // 处理应用自定义错误
  else if (error instanceof AppError) {
    statusCode = error.statusCode;
    errorCode = error.code;
    message = error.message;
  }
  // 处理 JWT 错误
  else if (error.name === 'JsonWebTokenError') {
    statusCode = HttpStatus.UNAUTHORIZED;
    errorCode = ApiErrorCode.AUTHENTICATION_ERROR;
    message = 'Invalid authentication token';
  }
  else if (error.name === 'TokenExpiredError') {
    statusCode = HttpStatus.UNAUTHORIZED;
    errorCode = ApiErrorCode.AUTHENTICATION_ERROR;
    message = 'Authentication token expired';
  }

  // 记录错误日志
  console.error('Error occurred:', {
    message: error.message,
    stack: error.stack,
    requestId: req.headers['x-request-id'],
    path: req.path,
    method: req.method,
    statusCode
  });

  // 构建错误响应
  const response: ApiResponse = {
    success: false,
    error: {
      code: errorCode,
      message,
      ...(details && { details })
    },
    meta: {
      timestamp: new Date().toISOString(),
      requestId: req.headers['x-request-id'] as string || 'unknown'
    },
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
  };

  res.status(statusCode).json(response);
};
```

## 📋 实战作业：REST API 类型契约与服务

### 作业要求

1. **API 类型设计**
   - 设计完整的 REST API 类型定义
   - 实现请求/响应的类型契约
   - 添加分页和排序的类型支持
   - 创建错误处理类型系统

2. **Zod 验证集成**
   - 使用 Zod 定义数据验证模式
   - 实现运行时类型验证中间件
   - 创建自定义验证器
   - 处理复杂的验证场景

3. **依赖注入实现**
   - 构建 IoC 容器
   - 实现服务自动注册和解析
   - 创建类型安全的依赖注入
   - 添加生命周期管理

### 实现步骤

1. **设计 API 类型系统**
   ```typescript
   // 定义通用的 API 响应类型
   interface ApiResponse<T> {
     success: boolean;
     data?: T;
     error?: ApiError;
     meta?: ResponseMeta;
   }
   ```

2. **实现验证层**
   - 创建 Zod 验证模式
   - 实现验证中间件
   - 添加错误处理逻辑

3. **构建服务层**
   - 设计服务接口
   - 实现依赖注入容器
   - 创建业务逻辑服务

4. **完善控制器层**
   - 实现基础控制器类
   - 创建具体的 API 控制器
   - 添加错误处理机制

### 验收标准

- [ ] 完整的 TypeScript 类型定义
- [ ] 运行时数据验证
- [ ] 依赖注入容器
- [ ] RESTful API 实现
- [ ] 错误处理机制
- [ ] 单元测试覆盖

### 扩展挑战

1. 实现数据库集成（如 Prisma + TypeScript）
2. 添加认证和授权中间件
3. 实现 API 文档自动生成
4. 添加请求限流和缓存
5. 实现微服务间的类型安全通信

## 🎯 总结

本课时我们深入学习了 Node.js 与 TypeScript 的后端开发：

- **项目配置**：掌握 Node.js TypeScript 环境搭建
- **API 类型契约**：设计类型安全的 REST API 接口
- **Zod 验证**：实现运行时数据验证和类型安全
- **依赖注入**：构建类型安全的 IoC 容器
- **架构实现**：创建完整的后端服务架构

通过本课时的学习，你应该能够：
1. 设计类型安全的 REST API
2. 实现运行时数据验证
3. 构建依赖注入容器
4. 创建可维护的后端服务架构
5. 处理复杂的业务逻辑类型

下一课时我们将学习构建工具与工程集成，探索 TypeScript 在现代工程化中的应用。