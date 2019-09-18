const movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        image: 'potter.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        image: 'krolew.jpg'
    },
    {
        id: 3,
        title: 'Polityka',
        desc: 'Film o polityce',
        image: 'polityka.jpg'
    },
    {
        id: 4,
        title: 'Botoks',
        desc: 'Film o leczeniu',
        image: 'botoks.jpg'
    },

];

const moviesElements = movies.map(function (movie) {
    return React.createElement('li', { key: movie.id },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.image})
    );
});

const element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );



ReactDOM.render(element, document.getElementById('app'));
