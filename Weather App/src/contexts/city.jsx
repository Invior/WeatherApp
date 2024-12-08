export const UserContext = createContext();
export const UserProvider = () => {
    return (
		<UserContext.Provider value={{ city }}>
			{children}
		</UserContext.Provider>
	);
}