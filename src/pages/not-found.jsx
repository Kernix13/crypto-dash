import { Link } from "react-router";

const NotFoundPage = () => {
  return (  
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
      <Link to='/' style={styles.link}>← Go Back Home</Link>
    </div>
  );
}

// Experiment with inline styles
const styles = {
  container: {
    textAlign: 'center',
    padding: '5rem 1.25rem',
    color: '#fff'
  },
  title: {
    fontSize: '4.5rem',
    marginBottom: '1.25rem'
  },
  message: {
    fontSize: '1.125rem',
    marginBottom: '2rem'
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold'
  }
}
 
export default NotFoundPage;