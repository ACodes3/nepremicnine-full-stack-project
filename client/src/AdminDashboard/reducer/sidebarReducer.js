const sidebarReducer = (state, action) => {
    if(action.type === "TOGGLE_SIDEBAR"){
        return { ...state, isSidebarOpen: !state.isSidebarOpen}
    }
    // Add default case to handle unknown action types
    return state;
}

export default sidebarReducer;
