// 容器组件

// 引入react-redux
import { connect } from 'react-redux'
// 引入actions函数
import { decrement, increment } from '../_redux/actions'
// UI组件
import Counter from '../components/Counter'

// 导出包装好的UI组件，也就是容器组件
export default connect(
    state => ({ count: state }),
    { increment, decrement }
)(Counter)