const Movie = require('../models/movie')

Movie.create([
    {
        title: 'Wonder Woman',
        yearReleased: 2017,
        description: 'When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.'
    },
    {
        title: 'Star Wars: Episode VIII',
        yearReleased: 2017
    }
])
.then(() => { process.exit })
