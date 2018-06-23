// import devRouter from './dev'
import prodRouter from './prod'

// webpack在编译打包过程中只会进行词法分析，而不会去执行app中的文件
// 所以在这里不可能实现基于node_env来判断进行如何进行路由加载从而打包
// const router = process.env.NODE_ENV === 'production' ? prodRouter : devRouter

export default prodRouter
