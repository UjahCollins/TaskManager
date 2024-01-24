import { useState } from "react";
import "./App.css";

const App = () => {
  const [show, setShow] = useState(false);
  const [myInputs, setMyInputs] = useState({
    title: "",
    desc: "",
    subtask: "",
    subtaskb: "",
  });
  const [myTask, setMyTask] = useState([]);

  const handleShow = () => {
    //when i click on Add To Task
    setShow(true);
  };

  const handleTask = () => {
    const task = {
      title: myInputs.title,
      desc: myInputs.desc,
      subtask: myInputs.subtask,
      subtaskb: setMyTask.subtaskb,
      id: new Date().getTime().toString(),
    };
    setMyTask((old) => {
      return [...old, task];
    });
    setShow(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMyInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <main className="app-main">
      <section className="left-section">
        <div className="left-logo">Kanban</div>
        <div className="left-title">All boards (8)</div>
      </section>
      <section className="right-section">
        <nav>
          <article className="second-nav">
            <div className="right-logo">Platform Launch</div>
            <button className="add-task" onClick={handleShow}>
              Add To Task
            </button>
          </article>
        </nav>
        <main className="body-main">
          <div className="mytask">
            {myTask.map((item) => {
              return (
                <div key={item.id} className="box">
                  <div>{item.title}</div>
                  <div>{item.desc}</div>
                  <div>{item.subtask}</div>
                  <div>{item.subtaskb}</div>
                </div>
              );
            })}
          </div>
          <article className={!show ? "article-none" : "article-flex"}>
            <div className="pop-title">Add New Task</div>
            <div className="title-div">
              <label>Title</label>
              <input
                type="text"
                placeholder="title"
                onChange={handleChange}
                name="title"
                value={myInputs.title}
              />
            </div>
            <div className="desc-div">
              <label>Description</label>
              <input
                type="text"
                placeholder="description"
                name="desc"
                value={myInputs.desc}
                onChange={handleChange}
              />
            </div>
            <div className="subtask-div">
              <label>Subtasks</label>
              <input
                type="text"
                placeholder="subTask"
                name="subtask"
                value={myInputs.subtask}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="subTaskb"
                name="subtaskb"
                value={myInputs.subtaskb}
                onChange={handleChange}
              />
            </div>
            <button onClick={handleTask} className="create">
              Create
            </button>
          </article>
        </main>
      </section>
    </main>
  );
};

export default App;
