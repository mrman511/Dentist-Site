import attemptLogin from "../../utils/admin/attemptLogin";

export default function LoginForm({ styles, login }) {

  return (
    <div className={ [styles.formContainer, styles.loginForm].join(' ') }>
      <form onSubmit={ (e) => { login(e) } }>
        <div className={ styles.inputContainer }>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" />
        </div>

        <div className={ styles.inputContainer }>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
        </div>

        <div className={ [styles.formFooter, styles.inputContainer].join(' ') }>
          <a href="">Forgot Password</a>
          <button className={ [styles.btn, styles.btnMd].join(' ') } type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}