import { useEffect, useState } from "react";
import "./App.scss";
// import ColorBox from "./components/ColorBox";
// import TodoList from "./components/TodoList";
// import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import queryString from "query-string";
import PostFilterForm from "./components/PostFilterForm";
import Clock from "./components/Clock";

const dataTodoList = [
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
];

function App() {
    const [todoList, setTodoList] = useState(dataTodoList);
    const [postList, setPostList] = useState();
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1,
    });
    const [filter, setFilter] = useState({
        _limit: 10,
        _page: 1,
        title_like: "",
    });

    function handlePageChange(newPage) {
        setFilter({
            ...filter,
            _page: newPage,
        });
    }

    function handleDeleteTodo(todo) {
        // c1
        // const index = todoList.findIndex((x) => x.id === todo.id);
        // if (index < 0) return;
        // const newTodolist = [...todoList];
        // newTodolist.splice(index, 1);
        // setTodoList(newTodolist);

        // c2
        setTodoList(todoList.filter((item) => item.id !== todo.id));
    }

    function handleSubmit(formValues) {
        const newTodo = {
            id: todoList.length + 1,
            ...formValues,
        };
        const newTodoList = [...todoList];
        newTodoList.push(newTodo);
        setTodoList(newTodoList);
    }

    function handleFilterChange(newFilterChange) {
        setFilter({
            ...filter,
            _page: 1,
            title_like: newFilterChange.value,
        });
    }

    useEffect(() => {
        async function fetchPostList() {
            try {
                const paramStr = queryString.stringify(filter);
                const reqUrl = `http://js-post-api.herokuapp.com/api/posts?${paramStr}`;
                const res = await fetch(reqUrl);
                const resJSON = await res.json();
                const { data, pagination } = resJSON;
                setPostList(data);
                setPagination(pagination);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPostList();
    }, [filter]);

    return (
        <div className="app">
            <h1>Post List</h1>
            {/* <ColorBox /> */}
            {/* <TodoForm handleSubmit={handleSubmit} />
            <TodoList todos={todoList} onTodoClick={handleDeleteTodo} /> */}
            {/* <PostFilterForm onSubmit={handleFilterChange} />
            {postList.length <= 0 ? "Empty !" : <PostList posts={postList} />}
            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            /> */}
            <Clock />
        </div>
    );
}

export default App;
