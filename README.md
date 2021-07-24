# single-spa-demo
single-spa框架实现微前端实战demo 

# single-spa 
    single-spa 是一个实现微前端架构的框架

    通过脚手架创建应用
        npm install create-single-spa -g
    1. base 基座项目
        create-single-spa base
        // 选择安装的类型
        Select type to generate (Use arrow keys)
            // application 应用 parcel 组件
            single-spa application / parcel   
            // 工具方法
            in-browser utility module (styleguide, api cache, etc) 
            // 根应用
            single-spa root config  =>  选择
        // 选择什么方式安装
        Which package manager do you want to use? (Use arrow keys)
            yarn 
            npm  =>  选择
            pnpm 
        // 是否使用 Typescript
        Will this project use Typescript?  =>  NO
        // 是否使用 single-spa layout 引擎
        Would you like to use single-spa Layout Engine =>  NO
        // 当前组织名称是什么
        Organization name (can use letters, numbers, dash or underscore) =>  gehuama
    2. react 应用项目
        create-single-spa react-app
        // 选择安装的类型
        Select type to generate (Use arrow keys)
            // application 应用 parcel 组件
            single-spa application / parcel   =>  选择
            // 工具方法
            in-browser utility module (styleguide, api cache, etc) 
            // 根应用
            single-spa root config  
        // 选择使用的框架
        Which framework do you want to use? (Use arrow keys)
            react => 选择
            vue 
            angular 
            svelte 
            other 
        // 选择什么方式安装
        Which package manager do you want to use? (Use arrow keys)
            yarn 
            npm  =>  选择
            pnpm 
        // 是否使用 Typescript
        Will this project use Typescript?(y/N)   =>  N
        // 当前组织名称是什么
        Organization name (can use letters, numbers, dash or underscore) =>  gehuama
        // 当前项目名称
        Project name (can use letters, numbers, dash or underscore) => react
    3. vue-app 应用项目
        create-single-spa vue-app
        // 选择安装的类型
        Select type to generate (Use arrow keys)
            // application 应用 parcel 组件
            single-spa application / parcel   =>  选择
            // 工具方法
            in-browser utility module (styleguide, api cache, etc) 
            // 根应用
            single-spa root config  
        // 选择使用的框架
        Which framework do you want to use? (Use arrow keys)
            react 
            vue => 选择
            angular 
            svelte 
            other 
        // 当前组织名称是什么
        Organization name (can use letters, numbers, dash or underscore) =>  gehuama
        // vue-cli
        Vue CLI v4.5.13
            Please pick a preset: (Use arrow keys)
            ......