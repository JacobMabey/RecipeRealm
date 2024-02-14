export default Filter = () => {
    return (
        <div>
            <h1 styles={styles.title}>Filter</h1>
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