render: function() {
    return (
        <View style = {styles.container}>
        <Text>
            this si my first custom view!
        <Text>/
        <Image
        source={{url: }}
        style={styles.customing}
        >/
        <View>/
    )；
}


//souduokang

render: function() {
    return (
        <View style={styles.container}>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search for a project..."
                style={styles.searchBarInput}
                onEndEditing={this.onSearchChange}
            />
        </View>
    )
} 

var styles = StyleSheet.create({
    vontainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    searchBarInput: {
    marginTop: 30,
    padding: 5,
    fontSize: 15,
    //flex:1,
    height: 30,
    backgroundColor: '#EAEAEA',
    },
});

//jiansuoshuju

var BASE_URL = 'https://apo.github.com/search/repositories?q=';...

var GithubFinder = React.createClass({
    ...
    onSearchChange: function(event: Object) {
        var searchTerm = event.nativeEvent.text.toLowerCase();
        var queryURL = BASE_URL + encodeURiComponent(searchTerm);
        fetch(queryURL)
        .then((response) => response.json())
        .then((responseData) => {
            if (responseData.items) {
                this.setState({
                    dataSource: this.state.dataSource.colneWithRows
                    (responseData.teems),
                });
            }
        })
        .done();
    },
});


//zujianzhuangtai

var GithubFinder = React.createClass({
    ...
    getInitialState: function() {
        return {
            dataSource: new LIstView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        };
    },

});


//meige shuju dianyuan

renderRow: function(repo: Object) {
    return (
        <View>
            <View style={styles.row}>
                <Text>
                    {repo.name}
                </Text>
            </View>
        </View>
    );
},

row: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDitection: 'row',
    padding: 5,
},
cellBorder: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    height: 1,
    marginLeft: 4,
},

 

 *****************************************************


 shiyongdaohang


 