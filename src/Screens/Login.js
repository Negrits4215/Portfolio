import LoginForm from "../Components/LoginForm";

export default function Login() {
    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "70vh",
        },
    };

    return (
        <div style={styles.container}>
            <LoginForm />
        </div>
    );
}
