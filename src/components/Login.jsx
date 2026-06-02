
function Login() {
  return (
    <main className="login-container">
      <div className="login-box">
        <h2>Inicio de sesión</h2>

        <form>
          <div className="form-group">
            <label>Correo</label>
            <input type="email" />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" />
          </div>

          <button type="submit">
            Iniciar sesión
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;