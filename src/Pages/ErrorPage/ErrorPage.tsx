import styles from './errorPage.module.scss';

const ErrorPage = () => {
  return (
    <div className={styles.root}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
};

export default ErrorPage;
