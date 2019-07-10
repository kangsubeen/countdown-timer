import React, { Component } from 'react';
import List from "./List";
import Countdown from './Countdown';

import './styles.css';

class App extends Component {
    state = { show: false };

    componentDidMount() {
        this.setState({
            list: [
                {
                    name: "김우석",
                    poster: "http://onairimg.mnet.com/data/od/images/globalmnet/program/producex101/config/c00208f6-ca13-4264-ad2f-b1cd2afaaee0-김우석.jpg"
                },
                {
                    name: "이진혁",
                    poster: "http://onairimg.mnet.com/data/od/images/globalmnet/program/producex101/config/e12e3c49-55eb-471a-a63f-b2a7b48fa421-이진혁.jpg"
                }
            ]
        })
    }

    _rendertLists = () => {
        const lists = this.state.lists.map(list => {
            return <List
                name={list.name}
                poster={list.poster}
                key={list.id}
                profile={list.profile}
            />
        })
        return lists
    }

    // _getLists = async () => {
    //     const lists = await this._callApi()

    //     this.setState({
    //         lists
    //     })
    // }

    // _callApi = () => {
    //     return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download_count')
    //         .then(apple => apple.json())
    //         .then(json => json.data.lists) // 여기의 data가 바로, 그 안에 movies가, 그 안에는 [] 배열 형식의 데이터
    //         .catch(err => console.log(err))
    // }

    onTimeOut = () => {
        this.setState({ show: true });
    };

    render() {
        return (
            <>
                <div className="App">
                    <Countdown onTimeOut={this.onTimeOut} />
                </div>
                <div className="produce">
                    <List {...this.state} />
                </div>
            </>
        );
    }
}

export default App;