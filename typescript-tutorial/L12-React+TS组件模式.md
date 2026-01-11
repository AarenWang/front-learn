# L12 - React + TS 组件模式

## 本课时目标
- 掌握 React 组件的类型定义模式
- 学会 Props 泛型的设计和使用
- 理解 React 事件处理的类型系统
- 掌握 Hook 的类型定义和最佳实践
- 实现一个类型安全的响应式面板组件

## 1. React 组件基础类型

### 1.1 函数组件类型定义

```typescript
import React, { FC, ReactNode, CSSProperties } from 'react';

// 基础函数组件
interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false 
}) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  );
};

// 使用 React.FunctionComponent 也可以
type ButtonComponent = React.FunctionComponent<ButtonProps>;
```

### 1.2 组件泛型设计

```typescript
// 泛型组件 - 列表组件
interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyExtractor: (item: T) => string | number;
  className?: string;
}

function List<T>({ 
  items, 
  renderItem, 
  keyExtractor, 
  className 
}: ListProps<T>) {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={keyExtractor(item)}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
}

// 使用示例
interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: FC<{ users: User[] }> = ({ users }) => {
  return (
    <List
      items={users}
      keyExtractor={(user) => user.id}
      renderItem={(user) => (
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      )}
    />
  );
};
```

## 2. Props 高级类型模式

### 2.1 条件 Props 类型

```typescript
// 条件属性 - 根据 variant 决定必需的属性
type BaseButtonProps = {
  children: ReactNode;
  className?: string;
};

type LinkButtonProps = BaseButtonProps & {
  variant: 'link';
  href: string;
  target?: string;
};

type ActionButtonProps = BaseButtonProps & {
  variant: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
  loading?: boolean;
};

type ButtonProps = LinkButtonProps | ActionButtonProps;

const AdvancedButton = (props: ButtonProps) => {
  if (props.variant === 'link') {
    return (
      <a 
        href={props.href} 
        target={props.target}
        className={props.className}
      >
        {props.children}
      </a>
    );
  }

  const { onClick, loading = false, variant, ...rest } = props;
  
  return (
    <button 
      onClick={onClick} 
      disabled={loading}
      className={`btn btn-${variant} ${props.className || ''}`}
      {...rest}
    >
      {loading ? 'Loading...' : props.children}
    </button>
  );
};
```

### 2.2 Props 继承和扩展

```typescript
// 继承 HTML 元素属性
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input: FC<InputProps> = ({ 
  label, 
  error, 
  helperText, 
  className = '', 
  ...inputProps 
}) => {
  const id = inputProps.id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <input
        {...inputProps}
        id={id}
        className={`form-input ${error ? 'error' : ''}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
      />
      {error && (
        <div id={`${id}-error`} className="form-error">
          {error}
        </div>
      )}
      {helperText && !error && (
        <div id={`${id}-helper`} className="form-helper">
          {helperText}
        </div>
      )}
    </div>
  );
};
```

## 3. React 事件类型处理

### 3.1 通用事件类型

```typescript
import { ChangeEvent, FormEvent, KeyboardEvent, MouseEvent } from 'react';

// 表单输入事件处理
const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  const { name, value, type, checked } = e.target;
  
  if (type === 'checkbox') {
    console.log(`Checkbox ${name} is ${checked}`);
  } else {
    console.log(`Input ${name} changed to ${value}`);
  }
};

// 表单提交事件
const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());
  console.log('Form submitted:', data);
};

// 键盘事件
const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    // 处理回车提交
    console.log('Enter pressed');
  } else if (e.key === 'Escape') {
    // 处理取消操作
    console.log('Escape pressed');
  }
};

// 鼠标事件
const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
  // 获取按钮数据属性
  const action = e.currentTarget.dataset.action;
  console.log('Button action:', action);
  
  // 阻止默认行为和冒泡
  if (action === 'cancel') {
    e.preventDefault();
    e.stopPropagation();
  }
};
```

### 3.2 自定义事件类型

```typescript
// 自定义事件处理器类型
type EventHandler<T = any> = (value: T) => void;
type AsyncEventHandler<T = any> = (value: T) => Promise<void>;

interface SelectProps<T> {
  options: T[];
  value?: T;
  onChange?: EventHandler<T>;
  onAsyncChange?: AsyncEventHandler<T>;
  getOptionLabel: (option: T) => string;
  getOptionValue: (option: T) => string | number;
}

function Select<T>({ 
  options, 
  value, 
  onChange, 
  onAsyncChange, 
  getOptionLabel, 
  getOptionValue 
}: SelectProps<T>) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find(
      option => String(getOptionValue(option)) === selectedValue
    );
    
    if (selectedOption) {
      onChange?.(selectedOption);
      onAsyncChange?.(selectedOption).catch(console.error);
    }
  };

  return (
    <select 
      value={value ? getOptionValue(value) : ''}
      onChange={handleChange}
    >
      {options.map(option => (
        <option key={getOptionValue(option)} value={getOptionValue(option)}>
          {getOptionLabel(option)}
        </option>
      ))}
    </select>
  );
}
```

## 4. Hook 类型定义

### 4.1 自定义 Hook 类型

```typescript
// 通用的状态管理 Hook
interface StateConfig<T> {
  initial: T;
  validator?: (value: T) => string | null;
  transform?: (value: T) => T;
}

function useStateWithValidation<T>({ 
  initial, 
  validator, 
  transform 
}: StateConfig<T>) {
  const [value, setValue] = useState<T>(initial);
  const [error, setError] = useState<string | null>(null);
  
  const updateValue = useCallback((newValue: T) => {
    const transformedValue = transform ? transform(newValue) : newValue;
    setValue(transformedValue);
    
    if (validator) {
      const validationError = validator(transformedValue);
      setError(validationError);
    }
  }, [transform, validator]);
  
  return [value, updateValue, error] as const;
}

// 使用示例
const EmailInput: FC = () => {
  const [email, setEmail, emailError] = useStateWithValidation<string>({
    initial: '',
    validator: (value) => {
      if (!value) return 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return 'Invalid email format';
      }
      return null;
    },
    transform: (value) => value.toLowerCase().trim()
  });

  return (
    <Input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      error={emailError || undefined}
      label="Email Address"
    />
  );
};
```

### 4.2 API Hook 模式

```typescript
// API 请求 Hook 类型定义
interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

interface ApiError {
  message: string;
  code?: string;
  details?: any;
}

interface UseApiOptions<T> {
  immediate?: boolean;
  onSuccess?: (data: T) => void;
  onError?: (error: ApiError) => void;
  transform?: (data: any) => T;
}

function useApi<T>(
  apiCall: () => Promise<ApiResponse<T>>,
  options: UseApiOptions<T> = {}
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const execute = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await apiCall();
      const transformedData = options.transform ? 
        options.transform(response.data) : response.data;
      
      setData(transformedData);
      options.onSuccess?.(transformedData);
      
      return transformedData;
    } catch (err) {
      const apiError: ApiError = {
        message: err instanceof Error ? err.message : 'Unknown error',
        code: 'API_ERROR'
      };
      setError(apiError);
      options.onError?.(apiError);
      throw apiError;
    } finally {
      setLoading(false);
    }
  }, [apiCall, options]);

  useEffect(() => {
    if (options.immediate) {
      execute();
    }
  }, [execute, options.immediate]);

  return { data, loading, error, execute };
}

// 使用示例
interface User {
  id: number;
  name: string;
  email: string;
}

const UserProfile: FC<{ userId: number }> = ({ userId }) => {
  const { data: user, loading, error, execute } = useApi<User>(
    async () => {
      const response = await fetch(`/api/users/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }
      return response.json();
    },
    {
      immediate: true,
      onError: (error) => {
        console.error('Failed to load user:', error);
      }
    }
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={() => execute()}>Refresh</button>
    </div>
  );
};
```

## 5. Context Provider 类型

### 5.1 类型安全的 Context

```typescript
// 主题 Context
interface ThemeContextValue {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  const value = useMemo(() => ({
    theme,
    toggleTheme,
    setTheme
  }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// 自定义 Hook 使用 Context
const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// 认证 Context
interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: RegisterData) => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await authApi.login(email, password);
      setUser(response.user);
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    authApi.logout();
    setUser(null);
  }, []);

  const register = useCallback(async (userData: RegisterData) => {
    setLoading(true);
    try {
      const response = await authApi.register(userData);
      setUser(response.user);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    authApi.getCurrentUser()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const value = useMemo(() => ({
    user,
    login,
    logout,
    register,
    loading
  }), [user, login, logout, register, loading]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
```

## 6. 实战：响应式面板组件

### 6.1 组件设计

```typescript
// 响应式面板组件
interface PanelConfig {
  id: string;
  title: string;
  component: FC<any>;
  props?: any;
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
  collapsible?: boolean;
  resizable?: boolean;
}

interface ResponsivePanelProps {
  panels: PanelConfig[];
  layout?: 'horizontal' | 'vertical';
  onLayoutChange?: (layout: string[]) => void;
  className?: string;
}

interface PanelState {
  id: string;
  size: number;
  isCollapsed: boolean;
}

const ResponsivePanel: FC<ResponsivePanelProps> = ({
  panels,
  layout = 'horizontal',
  onLayoutChange,
  className = ''
}) => {
  const [panelStates, setPanelStates] = useState<PanelState[]>(() =>
    panels.map(panel => ({
      id: panel.id,
      size: panel.defaultSize || 100 / panels.length,
      isCollapsed: false
    }))
  );

  const [draggedPanel, setDraggedPanel] = useState<string | null>(null);

  const resizePanel = useCallback((panelId: string, newSize: number) => {
    setPanelStates(prev => {
      const newStates = [...prev];
      const panelIndex = newStates.findIndex(p => p.id === panelId);
      
      if (panelIndex === -1) return prev;

      const panel = newStates[panelIndex];
      const config = panels.find(p => p.id === panelId);
      
      // 应用大小限制
      const minSize = config?.minSize || 10;
      const maxSize = config?.maxSize || 80;
      
      newStates[panelIndex] = {
        ...panel,
        size: Math.max(minSize, Math.min(maxSize, newSize))
      };

      return newStates;
    });
  }, [panels]);

  const toggleCollapse = useCallback((panelId: string) => {
    setPanelStates(prev => 
      prev.map(panel =>
        panel.id === panelId
          ? { ...panel, isCollapsed: !panel.isCollapsed }
          : panel
      )
    );
  }, []);

  const handleDragStart = useCallback((panelId: string) => {
    setDraggedPanel(panelId);
  }, []);

  const handleDragEnd = useCallback(() => {
    setDraggedPanel(null);
    onLayoutChange?.(panelStates.map(p => p.id));
  }, [panelStates, onLayoutChange]);

  return (
    <div 
      className={`responsive-panel responsive-panel--${layout} ${className}`}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
    >
      {panels.map((panel, index) => {
        const state = panelStates.find(s => s.id === panel.id);
        if (!state) return null;

        const PanelComponent = panel.component;
        const isHorizontal = layout === 'horizontal';
        const sizeStyle = isHorizontal 
          ? { width: `${state.size}%` }
          : { height: `${state.size}%` };

        return (
          <div
            key={panel.id}
            className="panel-container"
            style={sizeStyle}
          >
            <div className="panel-header">
              <h3 className="panel-title">{panel.title}</h3>
              <div className="panel-controls">
                {panel.resizable && (
                  <div
                    className="panel-resize-handle"
                    onMouseDown={() => handleDragStart(panel.id)}
                  />
                )}
                {panel.collapsible && (
                  <button
                    className="panel-collapse-btn"
                    onClick={() => toggleCollapse(panel.id)}
                  >
                    {state.isCollapsed ? '▼' : '▲'}
                  </button>
                )}
              </div>
            </div>
            {!state.isCollapsed && (
              <div className="panel-content">
                <PanelComponent {...panel.props} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
```

### 6.2 使用示例

```typescript
// 面板组件示例
const DashboardPanel: FC<{ data: any[] }> = ({ data }) => {
  return (
    <div className="dashboard-panel">
      <h4>Dashboard</h4>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const SettingsPanel: FC<{ settings: any }> = ({ settings }) => {
  return (
    <div className="settings-panel">
      <h4>Settings</h4>
      <Input
        label="Theme"
        value={settings.theme}
        onChange={(e) => console.log('Theme changed:', e.target.value)}
      />
    </div>
  );
};

const App: FC = () => {
  const [panels] = useState<PanelConfig[]>([
    {
      id: 'dashboard',
      title: 'Dashboard',
      component: DashboardPanel,
      props: { data: [] },
      defaultSize: 60,
      minSize: 30,
      resizable: true,
      collapsible: true
    },
    {
      id: 'settings',
      title: 'Settings',
      component: SettingsPanel,
      props: { settings: { theme: 'light' } },
      defaultSize: 40,
      minSize: 20,
      resizable: true,
      collapsible: true
    }
  ]);

  const handleLayoutChange = useCallback((layout: string[]) => {
    console.log('Layout changed:', layout);
  }, []);

  return (
    <div className="app">
      <ResponsivePanel
        panels={panels}
        layout="horizontal"
        onLayoutChange={handleLayoutChange}
      />
    </div>
  );
};
```

## 📋 实战作业：响应式面板组件

### 作业要求

1. **基础功能实现**
   - 创建一个响应式面板组件
   - 支持水平和垂直布局
   - 实现面板的折叠和展开功能
   - 支持面板大小调整

2. **类型安全**
   - 定义完整的 Props 类型接口
   - 实现泛型面板组件支持
   - 添加事件处理器的类型定义
   - 确保 Context 使用的类型安全

3. **高级功能**
   - 实现面板拖拽排序
   - 添加布局状态持久化
   - 支持面板的动态添加和删除
   - 实现响应式布局适配

### 实现步骤

1. **定义类型接口**
   ```typescript
   interface PanelConfig<T = any> {
     id: string;
     title: string;
     component: FC<T>;
     props?: T;
     // ... 其他属性
   }
   ```

2. **实现核心组件**
   - 创建 ResponsivePanel 主组件
   - 实现面板容器逻辑
   - 添加拖拽处理功能

3. **添加状态管理**
   - 使用 Context 管理全局状态
   - 实现布局持久化
   - 添加撤销/重做功能

4. **优化用户体验**
   - 添加平滑动画过渡
   - 实现键盘快捷键支持
   - 添加加载和错误状态

### 验收标准

- [ ] 组件接受泛型配置参数
- [ ] 支持多种布局模式
- [ ] 实现完整的类型检查
- [ ] 提供丰富的交互功能
- [ ] 包含单元测试覆盖
- [ ] 遵循 React 最佳实践

### 扩展挑战

1. 实现面板的全屏模式
2. 添加面板的预设布局模板
3. 实现面板的导入/导出功能
4. 添加面板的权限控制
5. 实现响应式断点适配

## 🎯 总结

本课时我们深入学习了 React + TypeScript 的组件模式：

- **组件类型定义**：掌握函数组件和类组件的类型声明
- **Props 泛型设计**：实现灵活的组件泛型模式
- **事件处理类型**：理解 React 事件系统的类型安全
- **Hook 类型定义**：创建类型安全的自定义 Hook
- **Context 模式**：实现类型安全的状态管理
- **实战组件**：构建完整的响应式面板组件

通过本课时的学习，你应该能够：
1. 设计类型安全的 React 组件架构
2. 实现灵活的组件泛型模式
3. 处理复杂的 React 事件类型
4. 创建可复用的自定义 Hook
5. 构建类型安全的应用状态管理

下一课时我们将学习 Node.js 与后端类型开发，探索 TypeScript 在服务端的应用。