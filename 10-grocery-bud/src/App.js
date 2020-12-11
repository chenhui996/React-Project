import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

function App() {
  const [todoText, setTodoTest] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [editText, setEditText] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText) {
      showAlert(true, "danger", "请输入内容...");
    } else if (todoText && editText) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: todoText };
          }
          return item;
        })
      );
      setTodoTest("");
      setEditID(null);
      setEditText(false);
      showAlert(true, "success", "值已更新");
    } else {
      showAlert(true, "success", "Todo已添加到列表中");
      const newTodo = {
        id: new Date().getTime().toString(),
        title: todoText,
      };
      setList([...list, newTodo]);
      setTodoTest("");
    }
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "列表已清空");
    setList([]);
  };

  const deleteTodo = (id) => {
    showAlert(true, "danger", "删除Todo项成功");
    setList(list.filter((item) => item.id !== id));
  };

  const editTodo = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setEditText(true);
    setEditID(id);
    setTodoTest(specificItem.title);
    // console.log("editTodo", id);
  };

  useEffect(() => {
    // console.log(todoText);
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>TodoList</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="输入内容进行Todo创建..."
            value={todoText}
            onChange={(e) => {
              setTodoTest(e.target.value);
            }}
          />
          <button type="submit" className="submit-btn">
            {editText ? "编辑提交" : "创建提交"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List list={list} editTodo={editTodo} deleteTodo={deleteTodo} />
        <button className="clear-btn" onClick={clearList}>
          清除列表
        </button>
      </div>
    </section>
  );
}
export default App;
