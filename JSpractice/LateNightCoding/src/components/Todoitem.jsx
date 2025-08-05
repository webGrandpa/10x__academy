
const Todoitem = ({ title }) => {
  return (
    <li className="todo-item flex justify-between items-center gap-4 bg-white 
    p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="todo-item-content flex items-center gap-2 flex-1">
                <input type="checkbox" />
                <span className="todo-text text-base text-lg">{title}</span>
            </div>
            <div className="todo-item-meta flex items-center gap-2 flex-shrink-0">
                <span className="todo-date"></span>
                <button className="delete-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                </button>
            </div>
        </li>
  )
}

export default Todoitem