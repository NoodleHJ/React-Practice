import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = { newArr: [] };

  componentDidMount() {
    console.log("amount");

    const fetchNews = () => {
      const fetchOnce = (n) => {
        return setTimeout(() => {
          if (n < 0) return;
          else {
            const { newArr } = this.state;
            const news = "新闻" + (newArr.length + 1);
            this.setState({ newArr: [news, ...newArr] });
            return fetchOnce();
          }
        }, 1000);
      };
      fetchOnce(100);
    };
    fetchNews();
  }

  getSnapshotBeforeUpdate() {
    return this.refs.list.scrollHeight;
  }

  componentDidUpdate(prevProps, prevState, height) {
    this.refs.list.scrollTop += this.refs.list.scrollHeight - height;
  }

  render() {
    console.log("render");
    return (
      <div className="list" ref="list">
        {this.state.newArr.map((n, index) => {
          return (
            <div key={index} className="news">
              {n}
            </div>
          );
        })}
      </div>
    );
  }
}
