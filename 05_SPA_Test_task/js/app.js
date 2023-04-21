(function () {
    function init() {
        let router = new Router([
            new Route('home', 'home.html', true),
            new Route('test', 'test.html')
        ]);
    }
    init();
}());
