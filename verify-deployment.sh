#!/bin/bash

# 部署配置验证脚本
echo "🔍 验证前端项目部署配置..."

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 项目列表
PROJECTS=("css-learning" "angular-learning" "modern-javascript-learning" "modern-typescript-learning" "react-ts-learning")

# 检查函数
check_file() {
    local file_path="$1"
    local description="$2"
    
    if [ -f "$file_path" ]; then
        echo -e "${GREEN}✅ $description 存在${NC}"
        return 0
    else
        echo -e "${RED}❌ $description 不存在: $file_path${NC}"
        return 1
    fi
}

check_json_syntax() {
    local file_path="$1"
    local description="$2"
    
    if command -v jq >/dev/null 2>&1; then
        if jq empty "$file_path" 2>/dev/null; then
            echo -e "${GREEN}✅ $description JSON 语法正确${NC}"
            return 0
        else
            echo -e "${RED}❌ $description JSON 语法错误${NC}"
            return 1
        fi
    else
        echo -e "${YELLOW}⚠️  跳过 $description JSON 语法检查 (jq 未安装)${NC}"
        return 0
    fi
}

# 验证 GitHub Actions 配置
echo -e "\n📋 验证 GitHub Actions 工作流配置..."
for project in "${PROJECTS[@]}"; do
    workflow_file=".github/workflows/deploy-${project}.yml"
    check_file "$workflow_file" "$project 工作流"
done

# 验证 Vercel 配置
echo -e "\n📋 验证 Vercel 配置文件..."
for project in "${PROJECTS[@]}"; do
    vercel_file="$project/vercel.json"
    if check_file "$vercel_file" "$project Vercel 配置"; then
        check_json_syntax "$vercel_file" "$project Vercel 配置"
    fi
done

# 验证 package.json 配置
echo -e "\n📋 验证 package.json 配置..."
for project in "${PROJECTS[@]}"; do
    package_file="$project/package.json"
    if check_file "$package_file" "$project package.json"; then
        check_json_syntax "$package_file" "$project package.json"
    fi
done

# 验证部署脚本
echo -e "\n📋 验证部署脚本..."
for project in "${PROJECTS[@]}"; do
    package_file="$project/package.json"
    if [ -f "$package_file" ]; then
        if grep -q '"deploy"' "$package_file"; then
            echo -e "${GREEN}✅ $project 包含部署脚本${NC}"
        else
            echo -e "${RED}❌ $project 缺少部署脚本${NC}"
        fi
    fi
done

# 验证构建脚本
echo -e "\n📋 验证构建脚本..."
for project in "${PROJECTS[@]}"; do
    package_file="$project/package.json"
    if [ -f "$package_file" ]; then
        if grep -q '"build"' "$package_file"; then
            echo -e "${GREEN}✅ $project 包含构建脚本${NC}"
        else
            echo -e "${RED}❌ $project 缺少构建脚本${NC}"
        fi
    fi
done

# 验证测试脚本
echo -e "\n📋 验证测试脚本..."
for project in "${PROJECTS[@]}"; do
    package_file="$project/package.json"
    if [ -f "$package_file" ]; then
        if grep -q '"test"' "$package_file"; then
            echo -e "${GREEN}✅ $project 包含测试脚本${NC}"
        else
            echo -e "${YELLOW}⚠️  $project 缺少测试脚本${NC}"
        fi
    fi
done

echo -e "\n🎉 部署配置验证完成！"
echo -e "\n📝 下一步："
echo -e "1. 在 GitHub 仓库设置中配置 Secrets："
echo -e "   - VERCEL_TOKEN"
echo -e "   - VERCEL_ORG_ID"
echo -e "   - VERCEL_CSS_PROJECT_ID"
echo -e "   - VERCEL_ANGULAR_PROJECT_ID"
echo -e "   - VERCEL_JS_PROJECT_ID"
echo -e "   - VERCEL_TS_PROJECT_ID"
echo -e "   - VERCEL_REACT_TS_PROJECT_ID"
echo -e "\n2. 在 Vercel 中创建对应的项目"
echo -e "\n3. 推送代码到 main/master 分支触发自动部署"
