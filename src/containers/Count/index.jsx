import { connect } from "react-redux";
import CountUI from "../../components/CountUI";
import {
  decrement,
  increment,
  incrementAsync
} from "../../redux/actions/count_action";

// 读取Store中的store
// 返回的是一个对象
const mapStateToProps = (state) => ({ count: state });

const mapDispatchToProps = (dispatch) => ({
  increment: (data) => dispatch(increment(data)),
  decrement: (data) => dispatch(decrement(data)),
  incrementAsync: (data, time) => dispatch(incrementAsync(data, time))
});

const CountContainer = connect((state) => ({ count: state.count }), {
  increment: increment,
  decrement: decrement,
  incrementAsync: incrementAsync
})(CountUI);

export default CountContainer;
