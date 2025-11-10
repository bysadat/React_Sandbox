import { Link } from 'react-router';
const NotFoundPge = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>ooops! Page not found!</p>
      <Link to="/" style={styles.link}>
        🔙Back to home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '80px 20px',
    color: '#fff',
  },
  title: {
    fontSize: '72px',
    marginBottom: '20px',
  },
  message: {
    fontSize: '18px',
    marginBottom: '30px',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  },
};

export default NotFoundPge;
