$.ajax({
    url: 'https://api.github.com/repos/Lanko03/MyFirstRepo',
    success: function(response) {
        console.log(response);
    }
})