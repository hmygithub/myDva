import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
 app.use({}); // 注释了这行代码：Cannot find module 'babel-plugin-import' from 'D:\mygit\react\my-dva'

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
