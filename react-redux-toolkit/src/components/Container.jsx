const Container = ({ children }) => {
  return (
    <div class="card" style={{ width: "70%" }}>
      <div class="card-body">{children}</div>
    </div>
  );
};
export default Container;
