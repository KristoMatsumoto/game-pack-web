exports.getHome = (req, res) => {
    res.render('_layouts/main', { 
        title: 'Home', 
        body: 'home/index' });
};
