/* eslint-disable react/jsx-key */
import { useState } from "react";

import "./assets/css/todo.css";
function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState();
  const todoList = () => {
    list.push(item);
    setList([...list]);
  };

  const removeItem = (index) => {
    // alert(index);
    list.splice(index, 1);
    setList([...list]);
  };
  return (
    <>
      <div className="container">
        <input
          type="text"
          onChange={(e) => {
            setItem(e.target.value);
          }}
          placeholder="Add your task"
        />
        <button className="add" onClick={todoList}>
          {" "}
          ADD
        </button>
        <table>
          <tbody>
            {list.length !== 0 ? (
              list.map((element, index) => {
                return (
                  <tr className="listIn">
                    <ol>
                      <li>
                        {" "}
                        <td className="item">{element}</td>
                      </li>
                    </ol>

                    <td>
                      <button
                        className="remove"
                        onClick={() => {
                          removeItem(index);
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
