import MyForm from "./components/MyForm";

function App() {
  return (
    <div style={{ width: '100vw', margin: 'auto', padding: '2rem', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
      <h1>React + Formik + Zod</h1>
      <MyForm />
    </div>
  );
}

export default App;
