//@ts-check

/**
 * 할 일
 * @typedef {Object} Todo
 * @property {string} id -  아이디
 * @property {string} content -  내용
 * @property {boolean} isDone -  완료여부
 * @property {Array<string>} category - 카테고리
 * @property {Array<string>} [tags] - 태그들
 */

/**
 * 할 일 목록
 * @typedef {Todo[]} Todos
 */

// CREATE
/**
 * 새로운 할 일을 추가함
 * 할 일의 내용이 없으면 추가할 수 없음
 * @function createTodo
 * @param {Todo} created - 추가하고 싶은 할 일
 */

const createTodo = (created) => {
  if (created.content !== null) {
    throw new Error('빈 내용은 추가할 수 없습니다');
  }
};

// READ
/**
 * 모든 할 일을 조회
 * @function getTodos
 */

const getTodos = () => {};

/**
 * 특정 할 일을 조회
 * @function getTodoById
 * @param {string} id - 조회할 할 일의 아이디
 */

const getTodoById = (id) => {};

// UPDATE
/**
 * id를 제외한 속성을 수정할 수 있음
 * @function updateTodo
 * @param { Todo } updated - 수정된 할 일
 */

const updateTodo = (updated) => {};

/**
 * @function updateTodoTags
 * @param { string } id - 수정할 할 일의 아이디
 * @param { Array<string> } updatedTags - 수정된 태그들
 */
const updateTodoTags = (id, updatedTags) => {};

// DELETE
/**
 * 모든 할 일을 삭제함
 * @function deleteTodos
 */

const deleteTodos = () => {};

/**
 * 특정 할 일을 삭제함
 * @function deleteTodoById
 * @param {string} id - 삭제할 할 일의 아이디
 */

const deleteTodoById = (id) => {};

/**
 * @function deleteTodoTags
 * @param {string} id - 태그를 삭제할 할 일의 아이디
 * @param {Array<string>} tags - 삭제할 태그들
 */

const deleteTodoTags = (id, tags) => {};
