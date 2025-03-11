import AppContent from "./AppContext";

const ContentProvider = ({ children }) => {
  const userinfo = {
    name: "abc",
    age: 22,
  };

  const info2 = {
    name: "info2",
  };
  return (
    <AppContent.Provider value={{ userinfo, info2 }}>
      {children}
    </AppContent.Provider>
  );
};
export default ContentProvider;
