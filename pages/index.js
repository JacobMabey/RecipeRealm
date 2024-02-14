export default Home = () => {
    return (
        <div>
            <h1 styles={styles.title}>Home</h1>
        </div>
    );
};

const styles = StyleSheet.create({
    title: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 8,
    }
  });