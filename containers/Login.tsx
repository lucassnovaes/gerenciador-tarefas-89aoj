
export const Login = () => {
    return (
        <div className="container-login">
            <img src="logo.svg" alt="Logo FIAP" className="logo" />
            <div className="form">
                <div className="input">
                    <img src="mail.svg" alt="Login"/>
                    <input placeholder="Login"/> 
                </div>
                <div className="input">
                    <img src="lock.svg" alt="Password"/>
                    <input placeholder="Password"/> 
                </div>
                <button>Entrar</button>
            </div>
        </div>
    );
}